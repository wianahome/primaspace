'use client';

import React, { useState, useEffect } from 'react';
import { WhatsAppAccount, Contact, Message, ChatSession } from './types';
import SidebarChatItem from './SidebarChatItem';
import ChatWindow from './ChatWindow';
import { supabase } from '../utils/supabase';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';


type FilterTab = 'semua' | 'pribadi' | 'grup';

export default function DashboardPage() {
  // State Akun WA
  const [accounts, setAccounts] = useState<WhatsAppAccount[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);

  // State Obrolan & Filter
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeTab, setActiveTab] = useState<FilterTab>('semua'); // Tab filter WA
  const [activeChatId, setActiveChatId] = useState<string | null>(null); // Menggunakan chat_id sebagai tracker chat aktif
  const [messages, setMessages] = useState<Message[]>([]);
  
  const [loadingAccounts, setLoadingAccounts] = useState(true);
  const [loadingChats, setLoadingChats] = useState(false);

  // 1. AMBIL DAFTAR AKUN WHATSAPP
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoadingAccounts(true);
        const { data, error } = await supabase
          .from('whatsapp_accounts')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;

        setAccounts(data || []);
        if (data && data.length > 0) {
          setSelectedAccountId(data[0].id);
        }
      } catch (err) {
        console.error('Error fetching accounts:', err);
      } finally {
        setLoadingAccounts(false);
      }
    };
    fetchAccounts();
  }, []);

  // 2. AMBIL DAFTAR UTAS CHAT (Dikelompokkan berdasarkan chat_id)
  useEffect(() => {
    if (!selectedAccountId) return;

    const fetchChats = async () => {
      try {
        setLoadingChats(true);
        
        // Ambil pesan terbaru dari akun ini
        const { data: rawMessages, error } = await supabase
          .from('whatsapp_messages')
          .select('*')
          .eq('account_id', selectedAccountId)
          .order('created_at', { ascending: false });

        if (error) throw error;

        // Kelompokkan berdasarkan chat_id unik agar tidak dobel
        const uniqueChats = new Map<string, any>();
        
        rawMessages?.forEach((msg: any) => {
          // Jika chat_id kosong, fallback ke sender_number
          const chatId = msg.chat_id || msg.sender_number; 
          if (!uniqueChats.has(chatId)) {
            uniqueChats.set(chatId, msg);
          }
        });

        const formattedSessions: ChatSession[] = Array.from(uniqueChats.values()).map((msg: any) => {
          const chatId = msg.chat_id || msg.sender_number;
          const isGroupChat = msg.is_group ?? (chatId.includes('-') || chatId.length > 13);

          return {
            contact: {
              id: chatId,
              name: isGroupChat ? (msg.chat_name || msg.sender_name || 'Grup Tanpa Nama') : (msg.sender_name || chatId),
              phone: chatId,
              isGroup: isGroupChat,
            },
            lastMessage: {
              id: msg.id,
              account_id: msg.account_id,
              chat_id: chatId,
              sender_number: msg.sender_number,
              sender_name: msg.sender_name,
              text: msg.message_text || '',
              from_me: msg.from_me,
              is_group: isGroupChat,
              timestamp: new Date(msg.created_at).toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
              }),
            },
            unreadCount: 0,
          };
        });

        setSessions(formattedSessions);

        // Auto-select chat pertama jika ada
        if (formattedSessions.length > 0) {
          setActiveChatId(formattedSessions[0].contact.id);
        } else {
          setActiveChatId(null);
          setMessages([]);
        }
      } catch (err) {
        console.error('Error loading chats:', err);
      } finally {
        setLoadingChats(false);
      }
    };

    fetchChats();
  }, [selectedAccountId]);

  // 3. AMBIL ISI PESAN DI DALAM ROOM CHAT YANG DIPILIH
  useEffect(() => {
    if (!selectedAccountId || !activeChatId) return;

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('whatsapp_messages')
        .select('*')
        .eq('account_id', selectedAccountId)
        // Kita query berdasarkan chat_id
        .or(`chat_id.eq.${activeChatId},sender_number.eq.${activeChatId}`)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching messages:', error);
        return;
      }

      const formattedMessages: Message[] = (data || []).map((msg: any) => ({
        id: msg.id,
        account_id: msg.account_id,
        chat_id: msg.chat_id || msg.sender_number,
        sender_number: msg.sender_number,
        sender_name: msg.sender_name,
        text: msg.message_text || '',
        from_me: msg.from_me,
        is_group: msg.is_group,
        timestamp: new Date(msg.created_at).toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      }));

      setMessages(formattedMessages);
    };

    fetchMessages();

    // Realtime subscription untuk room chat yang sedang dibuka
    const channel = supabase
      .channel(`room-${activeChatId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'whatsapp_messages',
          filter: `account_id=eq.${selectedAccountId}`,
        },
        (payload: any) => {
          const newMsg = payload.new;
          const msgChatId = newMsg.chat_id || newMsg.sender_number;

          if (msgChatId !== activeChatId) return;

          const formattedNewMsg: Message = {
            id: newMsg.id,
            account_id: newMsg.account_id,
            chat_id: msgChatId,
            sender_number: newMsg.sender_number,
            sender_name: newMsg.sender_name,
            text: newMsg.message_text || '',
            from_me: newMsg.from_me,
            is_group: newMsg.is_group,
            timestamp: new Date(newMsg.created_at).toLocaleTimeString('id-ID', {
              hour: '2-digit',
              minute: '2-digit',
            }),
          };

          setMessages((prev) => [...prev, formattedNewMsg]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedAccountId, activeChatId]);

  // FILTER SAKLAR TAB (Semua, Pribadi, Grup)
  const filteredSessions = sessions.filter((session) => {
    if (activeTab === 'pribadi') return !session.contact.isGroup;
    if (activeTab === 'grup') return session.contact.isGroup;
    return true; // tab 'semua'
  });

  const activeSession = sessions.find((s) => s.contact.id === activeChatId) || null;
  const activeContact = activeSession ? activeSession.contact : null;

  return (
    <div className="flex h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      
      {/* PANEL 1: DAFTAR AKUN WA (Paling Kiri) */}
      <div className="w-[220px] border-r border-slate-800 bg-slate-900/80 flex flex-col p-3">
        <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">Daftar Akun</h3>
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {loadingAccounts ? (
            <span className="text-xs text-slate-500">Memuat...</span>
          ) : (
            accounts.map((acc) => (
              <div
                key={acc.id}
                onClick={() => setSelectedAccountId(acc.id)}
                className={`p-3 rounded-lg cursor-pointer border transition-all ${
                  selectedAccountId === acc.id
                    ? 'bg-emerald-950/40 border-emerald-500/80 text-white'
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-800/50'
                }`}
              >
                <div className="font-semibold text-sm truncate">{acc.name}</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${acc.status === 'Tersambung' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                  <span className="text-[10px] text-slate-400">{acc.status}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* PANEL 2: DAFTAR CHAT DAN FILTER TAB (Tengah - Desain Persis WA Asli) */}
      <div className="w-[340px] border-r border-slate-800 flex flex-col h-full bg-slate-900/30">
        <div className="p-4 border-b border-slate-800 bg-slate-900/50">
          <h2 className="text-md font-bold text-white mb-3">WhatsApp Chat</h2>
          
          {/* Filter Pill Tab ala WhatsApp */}
          <div className="flex gap-1.5">
            {(['semua', 'pribadi', 'grup'] as FilterTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  // Reset pilihan chat aktif ke item pertama hasil filter baru agar rapi
                  const firstFiltered = sessions.find(s => tab === 'semua' ? true : tab === 'grup' ? s.contact.isGroup : !s.contact.isGroup);
                  setActiveChatId(firstFiltered ? firstFiltered.contact.id : null);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Daftar Sesi Chat */}
        <div className="flex-1 overflow-y-auto">
          {loadingChats ? (
            <div className="p-4 text-center text-xs text-slate-500">Memuat obrolan...</div>
          ) : filteredSessions.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500 italic">Tidak ada percakapan</div>
          ) : (
            filteredSessions.map((session) => (
              <SidebarChatItem
                key={session.contact.id}
                session={session}
                isActive={session.contact.id === activeChatId}
                onClick={() => setActiveChatId(session.contact.id)}
              />
            ))
          )}
        </div>
      </div>

      {/* PANEL 3: JENDELA CHAT (Kanan) */}
      <ChatWindow
        activeContact={activeContact}
        messages={messages}
        onSendMessage={async (text) => {
          if (!selectedAccountId || !activeChatId) return;
          try {
            await supabase.from('whatsapp_messages').insert([
              {
                account_id: selectedAccountId,
                chat_id: activeChatId, // Menyimpan ke room chat aktif
                sender_number: activeChatId, // Target kirim
                sender_name: activeContact?.name || 'Sistem',
                message_text: text,
                from_me: true,
                is_group: activeContact?.isGroup || false
              },
            ]);
          } catch (err) {
            console.error('Gagal mengirim pesan:', err);
          }
        }}
      />
      
    </div>
  );
}