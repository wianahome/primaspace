'use client';

import { useState } from 'react';
import { FileText, Send } from 'lucide-react';
import InvoiceMaker from '../invoice/InvoiceMaker';
import QuotationMaker from './QuotationMaker';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'invoice' | 'quotation'>('invoice');

  return (
    <div>
      {/* Tab Switcher (Sembunyi saat diprint) */}
      <div className="bg-slate-800 text-white p-3 print:hidden">
        <div className="max-w-4xl mx-auto flex gap-4">
          <button
            onClick={() => setActiveTab('invoice')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
              activeTab === 'invoice'
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            <FileText size={18} /> Invoice Generator
          </button>
          <button
            onClick={() => setActiveTab('quotation')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
              activeTab === 'quotation'
                ? 'bg-teal-600 text-white'
                : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Send size={18} /> Penawaran Harga (Quotation)
          </button>
        </div>
      </div>

      {/* Render Komponen Aktif */}
      {activeTab === 'invoice' ? <QuotationMaker />  : <InvoiceMaker />  }
    </div>
  );
}