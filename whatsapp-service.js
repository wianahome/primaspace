require('dotenv').config({ path: '.env.local' });

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, downloadMediaMessage } = require('@whiskeysockets/baileys');
const pino = require('pino');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// 1. Inisialisasi Supabase
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; 
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Fungsi Tunggal untuk Menangani Semua Jenis Pesan (Teks & Media)
async function handleIncomingMessage(sock, m, accountId) {
  if (m.type !== 'notify') return;

  const msg = m.messages[0];
  if (!msg || !msg.message) return; 

  // --- 1. AMBIL TIPE ASLI PESAN (Mengatasi Pembungkus Ephemeral / ViewOnce) ---
  let messageType = Object.keys(msg.message)[0];
  let messageContent = msg.message[messageType];

  // Jika pesan terbungkus di dalam fitur ephemeral (pesan sementara) atau viewOnce
  if (messageType === 'ephemeralMessage' || messageType === 'viewOnceMessage' || messageType === 'viewOnceMessageV2') {
    if (messageContent?.message) {
      messageType = Object.keys(messageContent.message)[0];
      messageContent = messageContent.message[messageType];
    }
  }

  // --- 2. LOGIKA EKSTRAKSI NOMOR TELEPON ---
  const fromMe = msg.key.fromMe;
  let rawJid;
  let senderName = msg.pushName || null;

  if (fromMe) {
    rawJid = sock.user?.id || msg.key.remoteJid;
    senderName = "Saya (Owner)";
  } else if (msg.key.participant) {
    rawJid = msg.key.participant.endsWith('@lid') && msg.key.participantAlt
      ? msg.key.participantAlt
      : msg.key.participant;
  } else {
    rawJid = msg.key.remoteJid.endsWith('@lid') && msg.key.remoteJidAlt
      ? msg.key.remoteJidAlt
      : msg.key.remoteJid;
  }

  let senderNumber = rawJid.split('@')[0].split(':')[0];
  if (fromMe && (senderNumber.length > 13 || isNaN(Number(senderNumber)))) {
    if (sock.user?.id) {
      senderNumber = sock.user.id.split('@')[0].split(':')[0];
    }
  }

  // --- 3. PINDAHKAN LOG KE ATAS (Agar Terdeteksi di Terminal) ---
  console.log(`[Account ${accountId}] Menerima data dari: ${senderName || senderNumber} | Tipe Deteksi: ${messageType}`);

  // --- 4. EKSTRAKSI TEKS DAN MEDIA ---
  let messageText = msg.message.conversation || msg.message.extendedTextMessage?.text || messageContent?.caption || null;
  let mediaUrl = null;
  let mediaType = null;

  const validMediaTypes = ['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage'];
  
  if (validMediaTypes.includes(messageType) || messageContent?.mimetype) {
    try {
      console.log(`-> Memulai proses unduh media (${messageType})...`);
      
      // Unduh media buffer via Baileys
      const buffer = await downloadMediaMessage(msg, 'buffer', {});
      
      if (buffer) {
        const mimetype = messageContent.mimetype || '';
        
        // Tentukan ekstensi file yang aman
        let fileExtension = 'bin';
        if (mimetype.includes('image')) fileExtension = 'jpg';
        else if (mimetype.includes('video')) fileExtension = 'mp4';
        else if (mimetype.includes('audio')) fileExtension = 'mp3';
        else fileExtension = mimetype.split('/')[1]?.split(';')[0] || 'bin';

        const fileName = `${accountId}/${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExtension}`;

        // Unggah berkas ke Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from('whatsapp-media')
          .upload(fileName, buffer, {
            contentType: mimetype,
            upsert: true
          });

        if (!uploadError) {
          const { data: publicUrlData } = supabase.storage
            .from('whatsapp-media')
            .getPublicUrl(fileName);

          mediaUrl = publicUrlData.publicUrl;
          
          if (messageType === 'imageMessage' || mimetype.includes('image')) mediaType = 'image';
          else if (messageType === 'videoMessage' || mimetype.includes('video')) mediaType = 'video';
          else if (messageType === 'audioMessage' || mimetype.includes('audio')) mediaType = 'audio';
          else mediaType = 'document';

          console.log(`-> BERHASIL UPLOAD MEDIA: ${mediaUrl}`);
        } else {
          console.error("-> GAGAL UPLOAD STORAGE:", uploadError.message);
        }
      }
    } catch (err) {
      console.error("-> GAGAL DOWNLOAD MEDIA DARI BAILEYS:", err.message);
    }
  }

  // Jika benar-benar kosong total tanpa teks dan tanpa media, hentikan
  if (!messageText && !mediaUrl) {
    console.log(`-> Mengabaikan pesan karena tidak mengandung teks maupun media.`);
    return;
  }

  // --- 5. SIMPAN KE DATABASE ---
  const { error: insertError } = await supabase
    .from('whatsapp_messages')
    .insert([{
      account_id: accountId,
      sender_number: senderNumber,
      sender_name: senderName,
      message_text: messageText,
      media_url: mediaUrl,
      media_type: mediaType,
      from_me: fromMe
    }]);

  if (insertError) {
    console.error("-> Gagal menyimpan pesan ke database:", insertError.message);
  } else {
    console.log(`-> Berhasil menyimpan pesan ke Database!`);
  }
}


async function startWASession(accountId) {
  const sessionFolder = `./whatsapp_sessions/auth_info_${accountId}`;
  const { state, saveCreds } = await useMultiFileAuthState(sessionFolder);

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    browser: ['Mac OS', 'Chrome', '120.0.0.0'], 
    syncFullHistory: false
  });

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      await supabase
        .from('whatsapp_accounts')
        .update({ qr_code: qr, status: 'Menunggu Scan' })
        .eq('id', accountId);
    }

    if (connection === 'open') {
      console.log(`[Account ${accountId}] WhatsApp Sukses Terhubung!`);
      await supabase
        .from('whatsapp_accounts')
        .update({ qr_code: null, status: 'Tersambung' })
        .eq('id', accountId);
    }

    if (connection === 'close') {
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      if (shouldReconnect) {
        startWASession(accountId);
      } else {
        await supabase
          .from('whatsapp_accounts')
          .update({ qr_code: null, status: 'Belum tersambung' })
          .eq('id', accountId);
        fs.rmSync(sessionFolder, { recursive: true, force: true });
      }
    }
  });

  sock.ev.on('creds.update', saveCreds);

  // --- EVENT LISTENER MESSAGES YANG SUDAH DISATUKAN ---
  sock.ev.on('messages.upsert', async (m) => {
    await handleIncomingMessage(sock, m, accountId);
  });

  // --- LISTEN PERUBAHAN DI SUPABASE UNTUK KIRIM & HAPUS PESAN OUTGOING ---
  supabase
    .channel(`whatsapp_outbound_${accountId}`)
    .on('postgres_changes', { 
      event: 'INSERT', 
      schema: 'public', 
      table: 'whatsapp_messages',
      filter: `account_id=eq.${accountId}` 
    }, async (payload) => {
      const newMsg = payload.new;
      
      // Hanya proses jika pesan ini di-insert dari Dashboard frontend (from_me = true) 
      // dan belum dikirim ke WhatsApp (tidak memiliki status atau flag khusus dari backend)
      if (newMsg.from_me && !newMsg.whatsapp_message_id) {
        const jid = `${newMsg.sender_number}@s.whatsapp.net`;
        
        try {
          let sent;
          
          // 1. Logika Jika Mengirim File / Media
          if (newMsg.media_url) {
            const mediaOptions = {
              caption: newMsg.message_text || ''
            };

            if (newMsg.media_type === 'image') {
              sent = await sock.sendMessage(jid, { image: { url: newMsg.media_url }, ...mediaOptions });
            } else if (newMsg.media_type === 'video') {
              sent = await sock.sendMessage(jid, { video: { url: newMsg.media_url }, ...mediaOptions });
            } else if (newMsg.media_type === 'audio') {
              sent = await sock.sendMessage(jid, { audio: { url: newMsg.media_url }, ...mediaOptions });
            } else {
              sent = await sock.sendMessage(jid, { document: { url: newMsg.media_url }, mimetype: 'application/pdf', fileName: 'Dokumen', ...mediaOptions });
            }
          } 
          // 2. Logika Jika Hanya Pesan Teks Biasa
          else if (newMsg.message_text) {
            sent = await sock.sendMessage(jid, { text: newMsg.message_text });
          }

          // Update baris di database dengan ID pesan resmi dari WhatsApp agar tidak looping
          if (sent) {
            await supabase
              .from('whatsapp_messages')
              .update({ whatsapp_message_id: sent.key.id })
              .eq('id', newMsg.id);
          }
          
        } catch (error) {
          console.error("Gagal mengirim pesan via Baileys:", error);
        }
      }
    })
    .on('postgres_changes', {
      event: 'UPDATE',
      schema: 'public',
      table: 'whatsapp_messages',
      filter: `account_id=eq.${accountId}`
    }, async (payload) => {
      const updatedMsg = payload.new;
      
      // Jika frontend menandai is_deleted = true, lakukan pencabutan pesan (revoke) di WA
      if (updatedMsg.is_deleted && updatedMsg.whatsapp_message_id) {
        const jid = `${updatedMsg.sender_number}@s.whatsapp.net`;
        try {
          await sock.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: updatedMsg.from_me,
              id: updatedMsg.whatsapp_message_id,
              participant: updatedMsg.from_me ? undefined : jid
            }
          });
          console.log(`Pesan ${updatedMsg.whatsapp_message_id} berhasil dihapus dari WhatsApp.`);
        } catch (error) {
          console.error("Gagal menghapus pesan di WhatsApp:", error);
        }
      }
    })
    .subscribe();
}

// 3. Jalankan session otomatis
async function initAllSessions() {
  const { data: accounts, error } = await supabase.from('whatsapp_accounts').select('id');
  if (error) return console.error('Gagal mengambil data akun dari Supabase:', error);

  accounts.forEach(acc => {
    startWASession(acc.id);
  });
}

initAllSessions();