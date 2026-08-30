'use client';

import React, { useState } from 'react';
import { Plus, Trash2, Printer, Building2, MapPin, Phone, Mail } from 'lucide-react';

interface QuotationItem {
  id: string;
  description: string;
  quantity: number;
  unit: string;
  price: number;
}

export default function QuotationMaker() {
  // 1. STATE HEADER & QUOTATION INFO
  const [quotationNumber, setQuotationNumber] = useState<string>('QUO-PS-2026-001');
  const [quotationDate, setQuotationDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  
  const defaultValidUntil = new Date();
  defaultValidUntil.setDate(defaultValidUntil.getDate() + 14);
  const [validUntil, setValidUntil] = useState<string>(
    defaultValidUntil.toISOString().split('T')[0]
  );

  // 2. STATE PENGIRIM (PrimaSpace - Kontraktor) & CLIENT
  const [senderInfo, setSenderInfo] = useState({
    name: 'PrimaSpace Contractor',
    address: 'Jl. Dewi Sartika 2A, Kuta, Badung, Bali',
    email: 'hello@primaspace.com',
    phone: '+62 813-5979-589',
  });

  const [clientInfo, setClientInfo] = useState({
    name: 'PT Villa Indah Bali',
    address: 'Jl. Sunset Road No. 45, Seminyak, Badung, Bali',
    email: 'project@villaindahbali.com',
    contactPerson: 'Bpk. Hendra Wijaya',
  });

  // 3. STATE ITEM BARANG (Default Proyek Konstruksi / Renovasi)
  const [items, setItems] = useState<QuotationItem[]>([
    { id: '1', description: 'Pekerjaan Struktur & Pembesian Kolom Utama', quantity: 1, unit: 'Lump Sum', price: 45000000 },
    { id: '2', description: 'Pemasangan Lantai Granite Tile 60x60 Top Grade', quantity: 120, unit: 'm²', price: 280000 },
    { id: '3', description: 'Pekerjaan Pengecatan Interior & Eksterior Weatherproof', quantity: 350, unit: 'm²', price: 65000 },
  ]);

  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(11); // PPN %
  const [terms, setTerms] = useState<string>(
    '1. Pembayaran DP 30% setelah penawaran disetujui (SPK terbit).\n2. Termyn II 40% setelah progress fisik mencapai 60%.\n3. Pelunasan 30% setelah serah terima pekerjaan (Retensi 5% selama 30 hari).\n4. Penawaran berlaku sesuai tanggal berlaku di atas.'
  );

  // MANAJEMEN ITEM (TAMBAH, HAPUS, EDIT)
  const handleAddItem = () => {
    const newItem: QuotationItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      unit: 'ls',
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
    <>
      {/* CSS Khusus untuk Print / PDF agar bersih dari Header/Footer Browser */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm; /* Atur margin kertas cetak */
          }
          body {
            background-color: white !important;
            -webkit-print-color-adjust: exact;
          }
          /* Sembunyikan elemen layout website utama jika ikut ter-render */
          nav, footer, header, .print\:hidden {
            display: none !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-slate-100 p-4 md:p-8 print:p-0 print:bg-white font-sans">
        {/* Action Bar (Tombol Cetak) */}
        <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Quotation Generator</h1>
            <p className="text-xs text-slate-500">Penawaran Harga Resmi - PrimaSpace Contractor</p>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-medium transition shadow cursor-pointer"
          >
            <Printer size={18} />
            Cetak / Download PDF
          </button>
        </div>

        {/* Lembar Penawaran Harga */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg print:shadow-none print:p-2 border border-slate-200 print:border-none">
          
          {/* Modern Header Kontraktor - Permanent Logo & Info */}
          <div className="flex flex-col md:flex-row justify-between items-start border-b-2 border-slate-800 pb-6 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-amber-400 font-extrabold text-3xl shadow-inner border border-slate-700">
                P<span className="text-white text-xl">.</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black tracking-tight text-slate-900">PrimaSpace</span>
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2"></span>
                </div>
                <p className="text-xs font-semibold tracking-wider text-amber-600 uppercase">General Contractor & Interior Design</p>
                <div className="mt-1 text-xs text-slate-500 space-y-0.5">
                  <p className="flex items-center gap-1.5"><MapPin size={12} className="text-amber-500" /> {senderInfo.address}</p>
                  <p className="flex items-center gap-1.5"><Phone size={12} className="text-amber-500" /> {senderInfo.phone} | <Mail size={12} className="text-amber-500" /> {senderInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Quotation Details Header */}
            <div className="text-right w-full md:w-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-wider">
                PENAWARAN HARGA
              </h2>
              <p className="text-xs text-amber-600 font-bold tracking-widest uppercase mb-3">Project Quotation</p>
              
              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex justify-between md:justify-end gap-3">
                  <span className="font-semibold text-slate-500">No. Penawaran:</span>
                  <input
                    type="text"
                    value={quotationNumber}
                    onChange={(e) => setQuotationNumber(e.target.value)}
                    className="text-right border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none font-mono font-bold text-slate-800"
                  />
                </div>
                <div className="flex justify-between md:justify-end gap-3">
                  <span className="font-semibold text-slate-500">Tanggal:</span>
                  <input
                    type="date"
                    value={quotationDate}
                    onChange={(e) => setQuotationDate(e.target.value)}
                    className="text-right border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none"
                  />
                </div>
                <div className="flex justify-between md:justify-end gap-3 text-amber-700">
                  <span className="font-semibold">Berlaku S.d:</span>
                  <input
                    type="date"
                    value={validUntil}
                    onChange={(e) => setValidUntil(e.target.value)}
                    className="text-right border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Info Pengirim & Penerima Penawaran */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 p-4 rounded-lg bg-slate-50 border border-slate-100 print:bg-transparent print:p-0 print:border-none">
            <div>
              <h3 className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Building2 size={14} /> Penyedia Jasa Kontraktor
              </h3>
              <input
                type="text"
                value={senderInfo.name}
                onChange={(e) => setSenderInfo({ ...senderInfo, name: e.target.value })}
                className="w-full font-bold text-slate-800 text-sm border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none mb-1 bg-transparent"
              />
              <p className="text-xs text-slate-600 leading-relaxed">{senderInfo.address}</p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Kepada (Calon Klien)</h3>
              <input
                type="text"
                value={clientInfo.name}
                placeholder="Nama Perusahaan / Klien"
                onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                className="w-full font-bold text-slate-800 text-sm border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none mb-1 bg-transparent"
              />
              <input
                type="text"
                value={clientInfo.contactPerson}
                placeholder="Up / Nama Kontak"
                onChange={(e) => setClientInfo({ ...clientInfo, contactPerson: e.target.value })}
                className="w-full text-xs text-slate-700 italic border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none mb-1 bg-transparent"
              />
              <textarea
                value={clientInfo.address}
                placeholder="Alamat Proyek / Klien"
                onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
                rows={2}
                className="w-full text-xs text-slate-600 border border-transparent hover:border-slate-300 focus:border-amber-500 outline-none resize-none bg-transparent"
              />
            </div>
          </div>

          {/* Tabel Rincian Proyek / Pekerjaan */}
          <div className="my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-800 text-slate-800 text-xs font-bold uppercase tracking-wider bg-slate-100 print:bg-transparent">
                  <th className="py-2.5 px-3">Rincian Pekerjaan / Material</th>
                  <th className="py-2.5 px-2 w-16 text-center">Volume</th>
                  <th className="py-2.5 px-2 w-20 text-center">Satuan</th>
                  <th className="py-2.5 px-2 w-32 text-right">Harga Satuan</th>
                  <th className="py-2.5 px-2 w-32 text-right">Total</th>
                  <th className="py-2.5 px-2 w-8 print:hidden"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 print:hover:bg-transparent">
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={item.description}
                        placeholder="Deskripsi item pekerjaan..."
                        onChange={(e) =>
                          handleItemChange(item.id, 'description', e.target.value)
                        }
                        className="w-full border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none bg-transparent"
                      />
                    </td>
                    <td className="py-2.5 px-2 text-center">
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
                        className="w-12 text-center border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none bg-transparent"
                      />
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <input
                        type="text"
                        value={item.unit}
                        placeholder="m² / m1 / ls"
                        onChange={(e) =>
                          handleItemChange(item.id, 'unit', e.target.value)
                        }
                        className="w-16 text-center border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none bg-transparent text-slate-500"
                      />
                    </td>
                    <td className="py-2.5 px-2 text-right">
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
                        className="w-28 text-right border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none bg-transparent"
                      />
                    </td>
                    <td className="py-2.5 px-2 text-right font-semibold text-slate-800">
                      {formatCurrency(item.quantity * item.price)}
                    </td>
                    <td className="py-2.5 px-2 text-center print:hidden">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-slate-300 hover:text-red-500 transition cursor-pointer"
                        title="Hapus Baris"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={handleAddItem}
              className="mt-4 flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 print:hidden cursor-pointer uppercase tracking-wider"
            >
              <Plus size={14} /> Tambah Pekerjaan
            </button>
          </div>

          {/* Syarat & Kalkulasi Total */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-t border-slate-200 pt-6">
            <div className="w-full md:w-1/2">
              <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider mb-2">
                Syarat & Ketentuan Proyek:
              </h4>
              <textarea
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                rows={4}
                className="w-full text-xs text-slate-600 border border-slate-200 hover:border-slate-300 focus:border-amber-500 outline-none p-2 rounded resize-none print:border-none print:p-0 bg-slate-50 print:bg-transparent"
              />
            </div>

            <div className="w-full md:w-72 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal Pekerjaan</span>
                <span className="font-medium text-slate-800">{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between items-center text-slate-600">
                <span>Potongan Harga (Rp):</span>
                <input
                  type="number"
                  min="0"
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(Number(e.target.value))}
                  className="w-24 text-right border-b border-slate-300 outline-none focus:border-amber-500 print:border-none bg-transparent"
                />
              </div>

              <div className="flex justify-between items-center text-slate-600">
                <span className="flex items-center gap-1">
                  Pajak PPN (
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={taxRate}
                    onChange={(e) => setTaxRate(Number(e.target.value))}
                    className="w-8 text-center border-b border-slate-300 outline-none focus:border-amber-500 print:border-none bg-transparent"
                  />
                  %):
                </span>
                <span className="font-medium text-slate-800">{formatCurrency(taxAmount)}</span>
              </div>

              <div className="flex justify-between text-slate-900 text-sm font-black border-t-2 border-slate-800 pt-2">
                <span>TOTAL ESTIMASI</span>
                <span className="text-amber-600">{formatCurrency(grandTotal)}</span>
              </div>
            </div>
          </div>

          {/* Kolom Tanda Tangan */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex justify-between items-end text-center text-xs text-slate-600">
            <div>
              <p className="mb-16">Disetujui Oleh (Klien),</p>
              <p className="font-bold underline text-slate-900">{clientInfo.contactPerson || '____________________'}</p>
              <p className="text-slate-500">{clientInfo.name}</p>
            </div>
            <div>
              <p className="mb-16">Hormat Kami,</p>
              <p className="font-bold underline text-slate-900">{senderInfo.name}</p>
              <p className="text-slate-500">Project Estimator / Director</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}