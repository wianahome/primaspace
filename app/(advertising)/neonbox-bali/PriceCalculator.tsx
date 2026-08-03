'use client';

import React, { useState, useId } from 'react';

// Tipe Data Jenis Produk
interface ProductOption {
  id: string;
  name: string;
  basePricePerSqMeter: number; // Harga per m2
  description: string;
}

const productOptions: ProductOption[] = [
  {
    id: 'akrilik',
    name: 'Neon Box Akrilik LED',
    basePricePerSqMeter: 1300000, // Rp 1.300.000 / m2
    description: 'Bahan akrilik premium 3mm + Modul LED Samsung waterproof.',
  },
  {
    id: 'flex',
    name: 'Neon Flex Aesthetic',
    basePricePerSqMeter: 1100000, // Rp 1.100.000 / m2
    description: 'Lampu flex elastis 12V + Base akrilik bening laser cut.',
  },
  {
    id: 'letter3d',
    name: 'Letter 3D / Huruf Timbul LED',
    basePricePerSqMeter: 1600000, // Rp 1.600.000 / m2
    description: 'Stainless / Galvanis finishing powder coating + LED Backlit.',
  },
];

// Opsi Sisi (Single vs Double Side)
const sideOptions = [
  { id: '1', name: '1 Sisi (Satu Muka / Dinding)', multiplier: 1 },
  { id: '2', name: '2 Sisi (Bolak-Balik / Tiang)', multiplier: 1.6 },
];

// Opsi Wilayah Bali
const baliLocations = [
  'Denpasar',
  'Badung (Canggu / Seminyak / Kuta / Jimbaran / Nusa Dua)',
  'Gianyar (Ubud)',
  'Tabanan',
  'Sanur',
  'Luar Kota Bali (Singaraja / Jembrana / Karangasem)',
];

export default function PriceCalculator() {
  const selectedProductSelectId = useId();
  const widthInputId = useId();
  const heightInputId = useId();
  const locationSelectId = useId();

  // State Form
  const [selectedProduct, setSelectedProduct] = useState<string>('akrilik');
  const [sides, setSides] = useState<number>(1);
  const [widthCm, setWidthCm] = useState<number>(100);
  const [heightCm, setHeightCm] = useState<number>(60);
  const [location, setLocation] = useState<string>(baliLocations[0]);

  // Cari produk terpilih
  const currentProduct = productOptions.find((p) => p.id === selectedProduct) || productOptions[0];

  // Kalkulasi Luas (m2) dan Estimasi Harga
  const widthMeter = widthCm / 100;
  const heightMeter = heightCm / 100;
  const areaSqMeter = Math.max(widthMeter * heightMeter, 0.25); // Minimal dihitung 0.25 m2

  const estimatedPrice = Math.round(areaSqMeter * currentProduct.basePricePerSqMeter * sides);

  // Format Rupiah
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Buat Link WA dengan default message lengkap
  const handleSendToWhatsApp = () => {
    const message = `Halo Neon Box Bali, saya mencoba kalkulator estimasi di website dengan rincian:
- *Jenis Produk:* ${currentProduct.name}
- *Ukuran:* ${widthCm} cm x ${heightCm} cm (${areaSqMeter.toFixed(2)} m²)
- *Tipe:* ${sides === 1 ? '1 Sisi (Satu Muka)' : '2 Sisi (Bolak-Balik)'}
- *Lokasi Pemasangan:* ${location}
- *Estimasi Biaya:* ~${formatRupiah(estimatedPrice)}

Apakah bisa dijadwalkan survei lokasi / negosiasi desain?`;

    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="kalkulator" className="py-24 bg-slate-950 text-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Simulasi Biaya Cepat
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kalkulator Estimasi <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Neon Box</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hitung perkiraan biaya pembuatan signage sesuai ukuran & kebutuhan tempat usaha Anda di Bali.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          
          {/* Form Inputs (Left Side - 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Pilih Produk */}
            <div className="space-y-2">
              <label htmlFor={selectedProductSelectId} className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                1. Pilih Jenis Signage
              </label>
              <select
                id={selectedProductSelectId}
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                {productOptions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-400 italic">{currentProduct.description}</p>
            </div>

            {/* 2. Input Ukuran (Panjang & Tinggi) */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                2. Masukkan Ukuran (Centimeter)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor={widthInputId} className="text-xs text-slate-400 block mb-1">Panjang (cm)</label>
                  <input
                    id={widthInputId}
                    type="number"
                    min={20}
                    max={1000}
                    value={widthCm || ''}
                    onChange={(e) => setWidthCm(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor={heightInputId} className="text-xs text-slate-400 block mb-1">Tinggi (cm)</label>
                  <input
                    id={heightInputId}
                    type="number"
                    min={20}
                    max={1000}
                    value={heightCm || ''}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* 3. Tipe Sisi */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                3. Tipe Tampilan Sisi
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sideOptions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSides(s.multiplier)}
                    className={`px-4 py-3 rounded-xl border text-xs font-medium text-left transition-all ${
                      sides === s.multiplier
                        ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Lokasi Pemasangan */}
            <div className="space-y-2">
              <label htmlFor={locationSelectId} className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                4. Wilayah Pemasangan di Bali
              </label>
              <select
                id={locationSelectId}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                {baliLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    📍 {loc}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Price Summary Card (Right Side - 5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Rincian Estimasi</p>
              
              <div className="space-y-2.5 text-sm border-b border-slate-800 pb-4">
                <div className="flex justify-between text-slate-300">
                  <span>Produk:</span>
                  <span className="font-semibold text-white">{currentProduct.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Ukuran:</span>
                  <span className="font-semibold text-white">{widthCm} x {heightCm} cm</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Luas Material:</span>
                  <span className="font-semibold text-cyan-400">{areaSqMeter.toFixed(2)} m²</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Tipe:</span>
                  <span className="font-semibold text-white">{sides === 1 ? '1 Sisi' : '2 Sisi'}</span>
                </div>
              </div>

              {/* Display Total Price */}
              <div className="pt-2">
                <p className="text-xs text-slate-400">Perkiraan Total Biaya:</p>
                <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mt-1">
                  {formatRupiah(estimatedPrice)}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  *Harga estimasi belum termasuk biaya tiang khusus/konstruksi tinggi dan diskon khusus proyek besar.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Kirim Rincian via WhatsApp</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}