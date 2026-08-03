export interface WhatsAppAccount {
  id: string;
  name: string;
  phone_number: string | null;
  wa_url: string | null;
  status: string;
  qr_code: string | null;
}

export interface Contact {
  id: string;        // Ini akan diisi oleh chat_id (bisa nomor WA pribadi / JID Grup)
  name: string;      // Nama Kontak / Nama Grup
  phone: string;     // Nomor tujuan / ID ruang chat
  isGroup: boolean;  // Membedakan tipe chat
  avatar?: string;
}

export interface Message {
  id: string;
  account_id: string;
  chat_id: string;       // Kolom Baru
  sender_number: string;
  sender_name: string;
  text: string;          // Mapping dari message_text
  from_me: boolean;
  timestamp: string;     // Format jam
  is_group: boolean;     // Kolom Baru
}

export interface ChatSession {
  contact: Contact;
  lastMessage?: Message;
  unreadCount?: number;
}