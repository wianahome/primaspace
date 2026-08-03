'use client';

import React, { useState, ChangeEvent } from 'react';
import { Plus, Trash2, Printer, Upload } from 'lucide-react';

// Interface untuk Tipe Data Item Invoice
interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export default function InvoiceMaker() {
  // 1. STATE LOGO & HEADER
  const [logo, setLogo] = useState<string | null>(null);
  const [invoiceNumber, setInvoiceNumber] = useState<string>('INV-2026-001');
  const [invoiceDate, setInvoiceDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [dueDate, setDueDate] = useState<string>('');

  // 2. STATE PENGIRIM & PENERIMA
  const [senderInfo, setSenderInfo] = useState({
    name: 'PT Maju Bersama',
    address: 'Jl. Sudirman No. 123, Jakarta',
    email: 'finance@majubersama.com',
  });

  const [clientInfo, setClientInfo] = useState({
    name: 'CV Sukses Mandiri',
    address: 'Jl. Gatot Subroto No. 45, Bandung',
    email: 'contact@suksesmandiri.com',
  });

  // 3. STATE ITEM BARANG & PAJAK
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: 'Jasa Desain Website', quantity: 1, price: 5000000 },
    { id: '2', description: 'Maintenance Server (1 Bulan)', quantity: 1, price: 1500000 },
  ]);
  const [taxRate, setTaxRate] = useState<number>(11); // PPN %

  // -------------------------------------------------------------
  // FUNGSI LOGO UPLOAD
  // -------------------------------------------------------------
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

  // -------------------------------------------------------------
  // FUNGSI MANAJEMEN ITEM (TAMBAH, HAPUS, EDIT)
  // -------------------------------------------------------------
  // A. Tambah Baris Baru
  const handleAddItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      price: 0,
    };
    setItems([...items, newItem]);
  };

  // B. Hapus Baris Item Berdasarkan ID
  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // C. Update Nilai Field Item (Deskripsi, Qty, atau Harga)
  const handleItemChange = (
    id: string,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  // -------------------------------------------------------------
  // PERHITUNGAN OTOMATIS (SUBTOTAL, PAJAK, TOTAL)
  // -------------------------------------------------------------
  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const taxAmount = (subtotal * taxRate) / 100;
  const grandTotal = subtotal + taxAmount;

  // Format Mata Uang Rupiah
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Cetak Dokumen / PDF
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 print:p-0 print:bg-white">
      {/* Action Bar / Tombol Cetak (Sembunyi saat diprint) */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <h1 className="text-2xl font-bold text-slate-800">Invoice Generator</h1>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition shadow cursor-pointer"
        >
          <Printer size={18} />
          Cetak / Download PDF
        </button>
      </div>

      {/* Lembar Invoice */}
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg print:shadow-none print:p-0 border border-slate-200 print:border-none">
        
        {/* Header: Logo & Info Faktur */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-slate-200 pb-8 gap-6">
          <div className="w-full md:w-1/2">
            {/* Box Upload Logo Header */}
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
                  <span className="text-xs font-medium">Upload Logo Header</span>
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

          {/* Nomor & Tanggal Invoice */}
          <div className="text-right w-full md:w-auto">
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-wider">INVOICE</h2>
            <div className="mt-2 space-y-1 text-sm text-slate-600">
              <div className="flex justify-between md:justify-end gap-4">
                <span className="font-semibold">No:</span>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="text-right border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none font-mono"
                />
              </div>
              <div className="flex justify-between md:justify-end gap-4">
                <span className="font-semibold">Tanggal:</span>
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="text-right border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none"
                />
              </div>
              <div className="flex justify-between md:justify-end gap-4">
                <span className="font-semibold">Jatuh Tempo:</span>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="text-right border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Informasi Pengirim & Penerima */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-sm">
          {/* Form Pengirim */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Dari (Pengirim)</h3>
            <input
              type="text"
              value={senderInfo.name}
              placeholder="Nama Perusahaan Anda"
              onChange={(e) => setSenderInfo({ ...senderInfo, name: e.target.value })}
              className="w-full font-bold text-slate-800 text-base border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none mb-1"
            />
            <textarea
              value={senderInfo.address}
              placeholder="Alamat Lengkap"
              onChange={(e) => setSenderInfo({ ...senderInfo, address: e.target.value })}
              rows={2}
              className="w-full text-slate-600 border border-transparent hover:border-slate-300 focus:border-blue-500 outline-none resize-none"
            />
            <input
              type="text"
              value={senderInfo.email}
              placeholder="Email / Kontak"
              onChange={(e) => setSenderInfo({ ...senderInfo, email: e.target.value })}
              className="w-full text-slate-600 border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Form Penerima / Klien */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Penerima (Klien)</h3>
            <input
              type="text"
              value={clientInfo.name}
              placeholder="Nama Perusahaan Klien"
              onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
              className="w-full font-bold text-slate-800 text-base border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none mb-1"
            />
            <textarea
              value={clientInfo.address}
              placeholder="Alamat Klien"
              onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
              rows={2}
              className="w-full text-slate-600 border border-transparent hover:border-slate-300 focus:border-blue-500 outline-none resize-none"
            />
            <input
              type="text"
              value={clientInfo.email}
              placeholder="Email Klien"
              onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
              className="w-full text-slate-600 border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Tabel Item Barang / Jasa */}
        <div className="my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-300 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="py-3 px-2">Deskripsi Barang / Jasa</th>
                <th className="py-3 px-2 w-20 text-center">Qty</th>
                <th className="py-3 px-2 w-36 text-right">Harga Satuan</th>
                <th className="py-3 px-2 w-36 text-right">Total</th>
                <th className="py-3 px-2 w-10 print:hidden"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {items.map((item) => (
                <tr key={item.id} className="group">
                  {/* Edit Deskripsi */}
                  <td className="py-3 px-2">
                    <input
                      type="text"
                      value={item.description}
                      placeholder="Nama barang atau layanan..."
                      onChange={(e) =>
                        handleItemChange(item.id, 'description', e.target.value)
                      }
                      className="w-full border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none"
                    />
                  </td>

                  {/* Edit Qty */}
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
                      className="w-16 text-center border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none"
                    />
                  </td>

                  {/* Edit Harga Satuan */}
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
                      className="w-32 text-right border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none"
                    />
                  </td>

                  {/* Perhitungan Total Per Baris */}
                  <td className="py-3 px-2 text-right font-medium text-slate-700">
                    {formatCurrency(item.quantity * item.price)}
                  </td>

                  {/* Tombol Hapus Baris */}
                  <td className="py-3 px-2 text-center print:hidden">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-slate-300 hover:text-red-500 transition cursor-pointer"
                      title="Hapus Item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tombol Tambah Baris */}
          <button
            onClick={handleAddItem}
            className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 print:hidden cursor-pointer"
          >
            <Plus size={16} /> Tambah Item
          </button>
        </div>

        {/* Ringkasan & Total Pembayaran */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-t border-slate-200 pt-6">
          <div className="w-full md:w-1/2 text-xs text-slate-500">
            <p className="font-semibold text-slate-700 mb-1">Catatan / Pembayaran:</p>
            <p>Transfer Bank BCA: 123-456-7890 a/n PT Maju Bersama</p>
            <p>Terima kasih atas kerja sama Anda!</p>
          </div>

          {/* Rincian Kalkulasi Akhir */}
          <div className="w-full md:w-80 space-y-2 text-sm">
            {/* Subtotal */}
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>

            {/* Edit Persentase Pajak & Kalkulasi Pajak */}
            <div className="flex justify-between items-center text-slate-600">
              <span className="flex items-center gap-1">
                Pajak (PPN
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="w-10 text-center border-b border-slate-300 outline-none print:border-none"
                />
                %):
              </span>
              <span className="font-medium">{formatCurrency(taxAmount)}</span>
            </div>

            {/* Total Bayar (Grand Total) */}
            <div className="flex justify-between text-slate-800 text-lg font-bold border-t border-slate-300 pt-2">
              <span>Total Bayar</span>
              <span className="text-blue-600">{formatCurrency(grandTotal)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}