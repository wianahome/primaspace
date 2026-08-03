'use client';

import React, { useState, ChangeEvent } from 'react';
import { Plus, Trash2, Printer, Upload, Send } from 'lucide-react';

interface QuotationItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export default function QuotationMaker() {
  // 1. STATE LOGO & HEADER
  const [logo, setLogo] = useState<string | null>(null);
  const [quotationNumber, setQuotationNumber] = useState<string>('QUO-2026-001');
  const [quotationDate, setQuotationDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  // Default masa berlaku 14 hari
  const defaultValidUntil = new Date();
  defaultValidUntil.setDate(defaultValidUntil.getDate() + 14);
  const [validUntil, setValidUntil] = useState<string>(
    defaultValidUntil.toISOString().split('T')[0]
  );

  // 2. STATE PENGIRIM & CLIENT
  const [senderInfo, setSenderInfo] = useState({
    name: 'PT Digital Solusindo',
    address: 'Jl. HR Rasuna Said No. 88, Jakarta Selatan',
    email: 'sales@digitalsolusindo.id',
    phone: '021-5550199',
  });

  const [clientInfo, setClientInfo] = useState({
    name: 'PT Cahaya Terang',
    address: 'Jl. Pemuda No. 12, Surabaya',
    email: 'procurement@cahayaterang.com',
    contactPerson: 'Bpk. Budi Santoso',
  });

  // 3. STATE ITEM BARANG & DISKON/PAJAK
  const [items, setItems] = useState<QuotationItem[]>([
    { id: '1', description: 'Pengembangan Aplikasi Mobile (iOS & Android)', quantity: 1, price: 35000000 },
    { id: '2', description: 'Desain UI/UX (Figma Design System)', quantity: 1, price: 8000000 },
  ]);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(11); // PPN %
  const [terms, setTerms] = useState<string>(
    '1. Pembayaran DP 50% setelah penawaran disetujui.\n2. Pelunasan 50% setelah pekerjaan selesai.\n3. Harga belum termasuk biaya pendaftaran domain/server tahunan.'
  );

  // LOGO UPLOAD HANDLER
  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // MANAJEMEN ITEM (TAMBAH, HAPUS, EDIT)
  const handleAddItem = () => {
    const newItem: QuotationItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      price: 0,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleItemChange = (
    id: string,
    field: keyof QuotationItem,
    value: string | number
  ) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // KALKULASI OTOMATIS
  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const subtotalAfterDiscount = Math.max(0, subtotal - discountAmount);
  const taxAmount = (subtotalAfterDiscount * taxRate) / 100;
  const grandTotal = subtotalAfterDiscount + taxAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 print:p-0 print:bg-white">
      {/* Action Bar */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Quotation Generator</h1>
          <p className="text-xs text-slate-500">Buat Surat Penawaran Harga Resmi</p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-medium transition shadow cursor-pointer"
        >
          <Printer size={18} />
          Cetak / Download PDF
        </button>
      </div>

      {/* Lembar Penawaran Harga */}
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg print:shadow-none print:p-0 border border-slate-200 print:border-none">
        
        {/* Header: Logo & Title */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-slate-200 pb-8 gap-6">
          <div className="w-full md:w-1/2">
            <div className="relative group w-48 h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50 overflow-hidden print:border-none print:bg-transparent">
              {logo ? (
                <img
                  src={logo}
                  alt="Company Logo"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="text-center p-2 text-slate-400 group-hover:text-slate-600 print:hidden">
                  <Upload size={24} className="mx-auto mb-1" />
                  <span className="text-xs font-medium">Upload Logo Perusahaan</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="absolute inset-0 opacity-0 cursor-pointer print:hidden"
              />
            </div>
          </div>

          <div className="text-right w-full md:w-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-800 tracking-wider">
              PENAWARAN HARGA
            </h2>
            <p className="text-xs text-slate-400 font-semibold tracking-widest uppercase mb-2">Quotation</p>
            
            <div className="mt-2 space-y-1 text-sm text-slate-600">
              <div className="flex justify-between md:justify-end gap-4">
                <span className="font-semibold">No. Penawaran:</span>
                <input
                  type="text"
                  value={quotationNumber}
                  onChange={(e) => setQuotationNumber(e.target.value)}
                  className="text-right border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none font-mono"
                />
              </div>
              <div className="flex justify-between md:justify-end gap-4">
                <span className="font-semibold">Tanggal:</span>
                <input
                  type="date"
                  value={quotationDate}
                  onChange={(e) => setQuotationDate(e.target.value)}
                  className="text-right border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none"
                />
              </div>
              <div className="flex justify-between md:justify-end gap-4 text-teal-700">
                <span className="font-semibold">Berlaku S.d:</span>
                <input
                  type="date"
                  value={validUntil}
                  onChange={(e) => setValidUntil(e.target.value)}
                  className="text-right border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Info Pengirim & Penerima Penawaran */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-sm">
          {/* Dari / Vendor */}
          <div>
            <h3 className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">Dari (Penyedia Jasa)</h3>
            <input
              type="text"
              value={senderInfo.name}
              placeholder="Nama Perusahaan Anda"
              onChange={(e) => setSenderInfo({ ...senderInfo, name: e.target.value })}
              className="w-full font-bold text-slate-800 text-base border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none mb-1"
            />
            <textarea
              value={senderInfo.address}
              placeholder="Alamat Lengkap"
              onChange={(e) => setSenderInfo({ ...senderInfo, address: e.target.value })}
              rows={2}
              className="w-full text-slate-600 border border-transparent hover:border-slate-300 focus:border-teal-500 outline-none resize-none"
            />
            <div className="flex gap-2 text-slate-600">
              <input
                type="text"
                value={senderInfo.email}
                placeholder="Email"
                onChange={(e) => setSenderInfo({ ...senderInfo, email: e.target.value })}
                className="w-1/2 border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none"
              />
              <input
                type="text"
                value={senderInfo.phone}
                placeholder="Telepon"
                onChange={(e) => setSenderInfo({ ...senderInfo, phone: e.target.value })}
                className="w-1/2 border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none"
              />
            </div>
          </div>

          {/* Kepada / Klien */}
          <div>
            <h3 className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">Kepada (Calon Klien)</h3>
            <input
              type="text"
              value={clientInfo.name}
              placeholder="Nama Perusahaan Klien"
              onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
              className="w-full font-bold text-slate-800 text-base border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none mb-1"
            />
            <input
              type="text"
              value={clientInfo.contactPerson}
              placeholder="Up / Nama Kontak"
              onChange={(e) => setClientInfo({ ...clientInfo, contactPerson: e.target.value })}
              className="w-full text-slate-700 italic border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none mb-1"
            />
            <textarea
              value={clientInfo.address}
              placeholder="Alamat Klien"
              onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
              rows={2}
              className="w-full text-slate-600 border border-transparent hover:border-slate-300 focus:border-teal-500 outline-none resize-none"
            />
          </div>
        </div>

        {/* Tabel Penawaran Harga */}
        <div className="my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-wider bg-slate-50">
                <th className="py-3 px-3">Rincian Layanan / Produk</th>
                <th className="py-3 px-2 w-20 text-center">Qty</th>
                <th className="py-3 px-2 w-36 text-right">Harga Satuan</th>
                <th className="py-3 px-2 w-36 text-right">Total</th>
                <th className="py-3 px-2 w-10 print:hidden"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="py-3 px-3">
                    <input
                      type="text"
                      value={item.description}
                      placeholder="Deskripsi penawaran..."
                      onChange={(e) =>
                        handleItemChange(item.id, 'description', e.target.value)
                      }
                      className="w-full border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none"
                    />
                  </td>
                  <td className="py-3 px-2 text-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleItemChange(
                          item.id,
                          'quantity',
                          Math.max(0, Number(e.target.value))
                        )
                      }
                      className="w-16 text-center border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none"
                    />
                  </td>
                  <td className="py-3 px-2 text-right">
                    <input
                      type="number"
                      min="0"
                      value={item.price}
                      onChange={(e) =>
                        handleItemChange(
                          item.id,
                          'price',
                          Math.max(0, Number(e.target.value))
                        )
                      }
                      className="w-32 text-right border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none"
                    />
                  </td>
                  <td className="py-3 px-2 text-right font-medium text-slate-700">
                    {formatCurrency(item.quantity * item.price)}
                  </td>
                  <td className="py-3 px-2 text-center print:hidden">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-slate-300 hover:text-red-500 transition cursor-pointer"
                      title="Hapus Baris"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={handleAddItem}
            className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 print:hidden cursor-pointer"
          >
            <Plus size={16} /> Tambah Item Penawaran
          </button>
        </div>

        {/* Syarat & Kalkulasi Total */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-t border-slate-200 pt-6">
          {/* Syarat & Ketentuan */}
          <div className="w-full md:w-1/2">
            <h4 className="font-semibold text-slate-700 text-xs uppercase tracking-wider mb-2">
              Syarat & Ketentuan:
            </h4>
            <textarea
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              rows={4}
              className="w-full text-xs text-slate-600 border border-slate-200 hover:border-slate-300 focus:border-teal-500 outline-none p-2 rounded resize-none print:border-none print:p-0"
            />
          </div>

          {/* Rincian Kalkulasi Total */}
          <div className="w-full md:w-80 space-y-2 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>

            {/* Input Diskon */}
            <div className="flex justify-between items-center text-slate-600">
              <span>Diskon (Rp):</span>
              <input
                type="number"
                min="0"
                value={discountAmount}
                onChange={(e) => setDiscountAmount(Number(e.target.value))}
                className="w-28 text-right border-b border-slate-300 outline-none focus:border-teal-500 print:border-none"
              />
            </div>

            {/* Input Pajak (PPN) */}
            <div className="flex justify-between items-center text-slate-600">
              <span className="flex items-center gap-1">
                Pajak (PPN
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="w-10 text-center border-b border-slate-300 outline-none focus:border-teal-500 print:border-none"
                />
                %):
              </span>
              <span className="font-medium">{formatCurrency(taxAmount)}</span>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between text-slate-800 text-lg font-bold border-t border-slate-300 pt-2">
              <span>Total Penawaran</span>
              <span className="text-teal-700">{formatCurrency(grandTotal)}</span>
            </div>
          </div>
        </div>

        {/* Tanda Tangan (Terlihat saat dicetak/export) */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-end text-center text-xs text-slate-600">
          <div>
            <p className="mb-16">Disetujui Oleh (Klien),</p>
            <p className="font-bold underline text-slate-800">{clientInfo.contactPerson || '____________________'}</p>
            <p>{clientInfo.name}</p>
          </div>
          <div>
            <p className="mb-16">Hormat Kami,</p>
            <p className="font-bold underline text-slate-800">{senderInfo.name}</p>
            <p>Sales / Business Development</p>
          </div>
        </div>

      </div>
    </div>
  );
}