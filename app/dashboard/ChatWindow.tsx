import React from 'react';
import { Contact, Message } from './types';
import ChatBubble from './ChatBubble';

interface ChatWindowProps {
  activeContact: Contact | null;
  messages: Message[];
  onSendMessage: (text: string) => void;
}

export default function ChatWindow({ activeContact, messages, onSendMessage }: ChatWindowProps) {
  const [inputText, setInputText] = React.useState('');

  if (!activeContact) {
    return (
      <div className="flex-1 bg-slate-900 flex flex-col items-center justify-center text-slate-500">
        <p className="text-lg">Pilih obrolan untuk memulai percakapan</p>
      </div>
    );
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText('');
  };

  return (
    <div className="flex-1 bg-slate-950 flex flex-col h-full overflow-hidden">
      {/* Header Chat */}
      <div className="h-16 border-b border-slate-800 bg-slate-900/50 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-semibold">
            {activeContact.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{activeContact.name}</h3>
            <p className="text-[11px] text-emerald-400">
              {activeContact.isGroup ? 'Grup WA' : activeContact.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Area List Pesan */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-950/40">
        {messages.map((msg) => (
          <ChatBubble 
            key={msg.id} 
            message={msg} 
            isGroup={activeContact.isGroup} // Mengirim status grup ke bubble chat
          />
        ))}
      </div>

      {/* Form Kirim Pesan */}
      <form onSubmit={handleSend} className="p-3 bg-slate-900/50 border-t border-slate-800 flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ketik pesan di sini..."
          className="flex-1 bg-slate-850 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 border border-slate-800"
        />
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}