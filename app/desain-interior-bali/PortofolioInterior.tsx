// app/components/PortfolioInterior.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Ruler, 
  Calendar, 
  MapPin, 
  Users,
  Quote,
  Star,
  Palette,
  Layers,
  Compass
} from 'lucide-react';

// Data Portfolio Khusus Desain Interior Premium Bali
const interiorData = [
  {
    id: 1,
    title: "Wabi-Sabi Master Bedroom Suite",
    location: "Canggu, Bali",
    category: "Residensial",
    designStyle: "Modern Wabi-Sabi",
    year: "2026",
    size: "48 m²",
    colorPalette: ["#E6DFD3", "#C5BAA8", "#8C8275", "#2C2A29"],
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200",
    description: "Desain interior kamar tidur utama dengan pendekatan filosofi Wabi-Sabi yang tenang. Mengedepankan tekstur dinding semen berpasir alami (earthy textured walls), ranjang rendah kustom berbahan kayu jati yang sengaja tidak diserut sempurna, serta pencahayaan tersembunyi (warm concealed lighting) untuk menciptakan suasana relaksasi maksimal.",
    ambiance: "Calm, Organic, Minimalist, Serene",
    client: "Mrs. Sarah Jenkins",
    testimonial: "PrimaSpace berhasil menerjemahkan arti kedamaian ke dalam kamar tidur saya. Pemilihan tekstur kain linen dan pencahayaan temaramnya benar-benar magis setiap malam."
  },
  {
    id: 2,
    title: "Tropical Luxury Open-Plan Living Area",
    location: "Seminyak, Bali",
    category: "Villa",
    designStyle: "Tropical High-End",
    year: "2025",
    size: "120 m²",
    colorPalette: ["#F4F1EA", "#D4AF37", "#4A5240", "#1A1A1A"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
    description: "Konsep tata ruang terbuka (open-plan layout) yang mengintegrasikan ruang keluarga, ruang makan, dan lounge mini. Langit-langit tinggi menggunakan ekspos anyaman bambu premium dipadu dengan sofa modular berbalut kain bouclé putih gading serta aksen marmer hitam berurat emas (Nero Marquina).",
    ambiance: "Extravagant, Airy, Sophisticated, Warm",
    client: "PT. Paradiso Villa Bali",
    testimonial: "Setiap sudut ruang keluarga ini sangat fotogenik. Klien-klien villa mewah kami sangat mengagumi perpaduan material lokal Bali dengan furnitur kelas dunia."
  },
  {
    id: 3,
    title: "Mid-Century Modern Co-Working Cafe",
    location: "Ubud, Bali",
    category: "Komersial",
    designStyle: "Mid-Century Modern",
    year: "2025",
    size: "185 m²",
    colorPalette: ["#D97706", "#1E3A8A", "#E5E7EB", "#2E2522"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200",
    description: "Perencanaan interior ruang komersial kafe sekaligus area kerja bersama. Menggunakan furnitur ikonis berkaki jengki, partisi kisi-kisi kayu pembagi ruang tanpa sekat masif, serta pemilihan warna kontras yang menstimulasi produktivitas namun tetap terasa nyaman berlama-lama.",
    ambiance: "Retro, Vibrant, Structural, Ergonomic",
    client: "The Roast & Workspace Ubud",
    testimonial: "Pemanfaatan ruangnya jenius. Alur sirkulasi barista dan pengunjung sangat lancar, dan pencahayaan untuk area laptop diatur dengan tingkat silau yang sangat rendah."
  },
  {
    id: 4,
    title: "Ultra-Modern Minimalist Penthouse Lounge",
    location: "Sanur, Bali",
    category: "Residensial",
    designStyle: "Monochrome Minimalist",
    year: "2026",
    size: "75 m²",
    colorPalette: ["#FFFFFF", "#9CA3AF", "#374151", "#000000"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
    description: "Desain ruang santai eksklusif dengan palet warna monokromatik yang tegas. Furnitur menggunakan siluet geometris bersih, dinding dilapisi panel reflektif untuk memberi kesan luas, serta integrasi penuh dengan smart home system untuk pengaturan skenario pencahayaan lampu pintar.",
    ambiance: "Sleek, Futuristic, Sharp, Clean",
    client: "Dr. Wayan Gunawan",
    testimonial: "Hasil visual render 3D dengan eksekusi aslinya 100% akurat. Garis detail sudut-sudut interiornya sangat rapi dan lurus sempurna."
  }
];

const categories = ["Semua", "Residensial", "Villa", "Komersial"];

export function PortfolioInterior() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<typeof interiorData[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "Semua" 
    ? interiorData 
    : interiorData.filter(p => p.category === selectedCategory);

  const openModal = (project: typeof interiorData[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % 1);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + 1) % 1);
    }
  };

  return (
    <section id="portfolio-interior" className="py-24 bg-[#0a0a0a] text-[#f5f5f3] relative overflow-hidden">
      {/* Soft Ambient Light Ornaments */}
      <div className="absolute top-[20%] right-[-15%] w-[50vw] h-[50vw] bg-radial-gradient from-[#c9a06305] to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-15%] w-[45vw] h-[45vw] bg-radial-gradient from-[#c9a06304] to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c9a063]/10 border border-[#c9a063]/20 text-[#c9a063] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-[0.3em] mb-5">
            <Compass className="w-3.5 h-3.5" />
            <span>Artistry & Interior Space</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-5 tracking-tight">
            Galeri Konsep <span className="font-serif italic text-[#c9a063]">Desain Interior</span> Premium
          </h2>
          <div className="h-[1px] w-16 bg-[#c9a063]/30 mx-auto mb-5" />
          <p className="text-neutral-400 max-w-xl mx-auto font-light text-base leading-relaxed">
            Eksplorasi tata ruang kosmetik, pencahayaan dramatis, dan kurasi material estetik yang mendefinisikan kenyamanan hunian kelas atas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#c9a063] text-[#0a0a0a] shadow-lg shadow-[#c9a063]/10'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid (3 Columns Elegant Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Image Showcase */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent opacity-95" />
                
                {/* Style Overlay Tag */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-neutral-300 text-[10px] font-medium tracking-wider px-3 py-1.5 rounded-lg">
                  {project.designStyle}
                </div>
              </div>

              {/* Card Body Information */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] tracking-widest text-[#c9a063] font-bold uppercase">{project.category}</span>
                  <span className="text-[10px] font-mono text-neutral-500">{project.year}</span>
                </div>

                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#c9a063] transition-colors duration-300 line-clamp-1 leading-tight">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm font-light line-clamp-2 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Micro Details */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-neutral-500 text-xs font-light">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#c9a063]/50" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-[#c9a063]/50" />
                    {project.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox / Detail Estetika Konsep Interior */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in" onClick={closeModal}>
          <div className="relative max-w-5xl w-full bg-[#121212] border border-white/10 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-[#c9a063] hover:text-black text-white p-2.5 rounded-lg border border-white/10 transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Interior Structure Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Visual Concept View */}
              <div className="relative h-72 md:h-full min-h-[380px] bg-neutral-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                {/* Arrow Nav Buttons */}
                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c9a063] hover:text-black text-white p-2 rounded-lg border border-white/5 transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c9a063] hover:text-black text-white p-2 rounded-lg border border-white/5 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Side: Design Spec Details */}
              <div className="p-8 flex flex-col justify-between bg-[#121212] border-t md:border-t-0 md:border-l border-white/5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#c9a063]/10 border border-[#c9a063]/20 text-[#c9a063] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded uppercase">
                      Style: {selectedProject.designStyle}
                    </span>
                    <span className="bg-white/5 border border-white/5 text-neutral-400 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded uppercase">
                      {selectedProject.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 leading-tight">
                    {selectedProject.title}
                  </h3>

                  <div className="flex items-center gap-4 text-neutral-400 text-xs font-light mb-6">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c9a063]" /> {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-[#c9a063]" /> Dimensi Ruang: {selectedProject.size}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm font-light mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Mood & Atmosphere Description */}
                  <div className="mb-6 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                    <h4 className="text-[10px] tracking-wider text-neutral-400 font-bold uppercase mb-1.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#c9a063]" /> Atmosphere / Mood:
                    </h4>
                    <p className="text-sm font-light text-white italic">{selectedProject.ambiance}</p>
                  </div>

                  {/* Design Color Palette Swatch */}
                  <div className="mb-8">
                    <h4 className="text-[10px] tracking-wider text-neutral-400 font-bold uppercase mb-3 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-[#c9a063]" /> Palet Warna Desain (Color Swatch):
                    </h4>
                    <div className="flex items-center gap-3">
                      {selectedProject.colorPalette.map((color, index) => (
                        <div key={index} className="flex flex-col items-center gap-1">
                          <div 
                            className="w-10 h-10 rounded-lg border border-white/10 shadow-inner transition-transform hover:scale-110 duration-300"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[9px] font-mono text-neutral-500 uppercase">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client Review & Feedback */}
                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5 mb-8 relative">
                    <Quote className="w-8 h-8 text-[#c9a063]/5 absolute top-4 right-4 pointer-events-none" />
                    <p className="text-neutral-400 italic text-xs font-light leading-relaxed mb-4">
                      "{selectedProject.testimonial}"
                    </p>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#c9a063]/10 flex items-center justify-center text-[#c9a063]">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{selectedProject.client}</p>
                        <div className="flex text-[#c9a063] mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Modal Layout CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <div>
                    <p className="text-[10px] tracking-wider text-neutral-500 uppercase mb-0.5">KONSULTASI DESAIN</p>
                    <p className="text-sm font-bold text-[#c9a063]">Include 3D Render & Layout</p>
                  </div>
                  <a
                    href={`https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20tertarik%20dengan%20konsep%20desain%20interior%20seperti%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#c9a063] hover:bg-[#b08e58] text-[#0a0a0a] px-6 py-3 rounded-xl text-xs font-bold tracking-wide transition-all shadow-lg"
                  >
                    Mulai Diskusi Konsep
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}