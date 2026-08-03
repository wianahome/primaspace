'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Type data item portofolio
interface PortfolioItem {
  id: string;
  title: string;
  category: 'kafe' | 'villa' | 'retail' | 'club';
  categoryLabel: string;
  location: string;
  image: string;
  specs: string;
}

// Data Dummy Portofolio Bali
const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Neon Box Akrilik Ganda - Tropical Cafe',
    category: 'kafe',
    categoryLabel: 'Kafe & Resto',
    location: 'Canggu, Bali',
    image: '/portfolio/cafe-1.jpg',
    specs: 'Akrilik 3mm + Lampu LED Samsung Waterproof',
  },
  {
    id: '2',
    title: 'Letter 3D Stainless Gold - Royal Villa',
    category: 'villa',
    categoryLabel: 'Villa & Resort',
    location: 'Ubud, Bali',
    image: '/portfolio/villa-1.jpg',
    specs: 'Stainless Titanium Gold + Backlit LED Warm White',
  },
  {
    id: '3',
    title: 'Neon Flex Aesthetic - Surf Shop & Boutique',
    category: 'retail',
    categoryLabel: 'Toko & Retail',
    location: 'Seminyak, Bali',
    image: '/portfolio/retail-1.jpg',
    specs: 'Neon Flex Silicone 12V + Base Akrilik Bening 5mm',
  },
  {
    id: '4',
    title: 'Custom Neon Sign Outdoor - Sunset Beach Bar',
    category: 'club',
    categoryLabel: 'Club & Bar',
    location: 'Kuta, Bali',
    image: '/portfolio/club-1.jpg',
    specs: 'Frame Aluminium Anti Karat + LED High Brightness',
  },
  {
    id: '5',
    title: 'Akrilik LED Signboard - Artisan Bakery',
    category: 'kafe',
    categoryLabel: 'Kafe & Resto',
    location: 'Sanur, Bali',
    image: '/portfolio/cafe-2.jpg',
    specs: 'Cut Out Akrilik Presisi Laser + Module LED RGB',
  },
  {
    id: '6',
    title: 'Huruf Timbul LED - Luxury Wellness Spa',
    category: 'villa',
    categoryLabel: 'Villa & Resort',
    location: 'Nusa Dua, Bali',
    image: '/portfolio/villa-2.jpg',
    specs: 'Galvanis Finishing Powder Coating Anti Korosi',
  },
];

// Daftar Filter Sektor
const categories = [
  { key: 'all', label: 'Semua Sektor' },
  { key: 'kafe', label: 'Kafe & Resto' },
  { key: 'villa', label: 'Villa & Resort' },
  { key: 'retail', label: 'Toko & Retail' },
  { key: 'club', label: 'Bar & Club' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  // Filter logika
  const filteredData = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="portofolio" className="py-24 bg-slate-950 text-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Portofolio Proyek
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Hasil Karya Kami di <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Seluruh Bali</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Lihat bagaimana kami membantu ratusan tempat bisnis di Bali tampil menyala, estetik, dan mudah dikenali pelanggan.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Card Footer Info */}
              <div className="p-5 space-y-2 relative">
                <p className="text-xs text-fuchsia-400 font-medium">📍 {item.location}</p>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1">{item.specs}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner di bawah Galeri */}
        <div className="pt-8 text-center">
          <p className="text-slate-400 text-sm mb-4">Punya konsep desain sendiri untuk tempat usahamu?</p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20mau%20konsultasi%20desain%20custom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Konsultasikan Desain Custom Gratis →
          </a>
        </div>

      </div>

      {/* Lightbox / Modal Pop-up */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-all"
            >
              ✕
            </button>

            {/* Modal Image */}
            <div className="relative aspect-video w-full bg-slate-950">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {selectedImage.categoryLabel}
                </span>
                <span className="text-xs text-slate-400">📍 {selectedImage.location}</span>
              </div>

              <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-sm text-slate-300 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                <strong className="text-cyan-400">Spesifikasi:</strong> {selectedImage.specs}
              </p>

              <div className="pt-2 flex justify-end">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20tertarik%20dengan%20model%20${encodeURIComponent(selectedImage.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] transition-all"
                >
                  Tanyakan Biaya Pembuatan Like This →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}