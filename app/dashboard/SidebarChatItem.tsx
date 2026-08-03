import React from 'react';
import { ChatSession } from './types';

interface SidebarChatItemProps {
  session: ChatSession;
  isActive: boolean;
  onClick: () => void;
}

export default function SidebarChatItem({ session, isActive, onClick }: SidebarChatItemProps) {
  const { contact, lastMessage, unreadCount } = session;

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 cursor-pointer transition-colors border-b border-slate-800/50 ${
        isActive ? 'bg-slate-800/80 border-l-4 border-emerald-500' : 'hover:bg-slate-800/40'
      }`}
    >
      {/* Avatar */}
      <div className="w-11 h-11 rounded-full bg-slate-700 flex items-center justify-center text-white font-semibold flex-shrink-0">
        {contact.avatar ? (
          <img src={contact.avatar} alt={contact.name} className="w-full h-full rounded-full object-cover" />
        ) : (
          contact.name.substring(0, 2).toUpperCase()
        )}
      </div>

      {/* Info Chat */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-1">
          <h4 className="text-sm font-semibold text-white truncate">{contact.name}</h4>
          {lastMessage && (
            <span className="text-[10px] text-slate-400 flex-shrink-0">{lastMessage.timestamp}</span>
          )}
        </div>

        {/* Baris Kedua: Preview Pesan Terakhir */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-slate-400 truncate flex-1 pr-2">
            {lastMessage ? (
              contact.isGroup && !lastMessage.from_me ? (
                <span>
                  <strong className="font-normal text-slate-300">{lastMessage.sender_name}: </strong>
                  {lastMessage.text}
                </span>
              ) : (
                lastMessage.text
              )
            ) : (
              <span className="italic text-slate-500">Belum ada pesan</span>
            )}
          </p>

          {/* Badge Unread */}
          {unreadCount && unreadCount > 0 ? (
            <span className="bg-emerald-500 text-slate-950 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
              {unreadCount}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}