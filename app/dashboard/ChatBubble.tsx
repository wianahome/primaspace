import React from 'react';
import { Message } from './types';

interface ChatBubbleProps {
  message: Message;
  isGroup: boolean;
}

export default function ChatBubble({ message, isGroup }: ChatBubbleProps) {
  // Destructuring menggunakan properti baru sesuai types.ts Anda
  const { text, timestamp, from_me, sender_name, sender_number } = message;

  return (
    <div className={`flex w-full mb-2 ${from_me ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`relative max-w-[70%] p-3 rounded-xl shadow-md ${
          from_me
            ? 'bg-emerald-900/90 text-white rounded-tr-none'
            : 'bg-slate-800 text-slate-100 rounded-tl-none'
        }`}
      >
        {/* Tampilkan Nama Pengirim jika di grup dan bukan dari saya */}
        {isGroup && !from_me && (
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-xs font-bold text-emerald-400 hover:underline cursor-pointer">
              ~ {sender_name || 'Tanpa Nama'}
            </span>
            <span className="text-[9px] text-slate-500">
              {sender_number}
            </span>
          </div>
        )}

        {/* Isi Pesan */}
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words pr-8">
          {text}
        </p>

        {/* Waktu Kirim */}
        <span className="absolute bottom-1 right-2 text-[9px] text-slate-400">
          {timestamp}
        </span>
      </div>
    </div>
  );
}