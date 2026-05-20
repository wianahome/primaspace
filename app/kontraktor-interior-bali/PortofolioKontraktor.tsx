// app/components/PortfolioContractor.tsx
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
  HardHat,
  CheckCircle2
} from 'lucide-react';

// Data Portfolio Khusus Kontraktor Interior & Renovasi Bali
const contractorData = [
  {
    id: 1,
    title: "Luxury Villa Fit-Out & Interior Renovation",
    location: "Uluwatu, Bali",
    category: "Villa",
    scope: "Full Fit-Out & Finishing",
    year: "2025",
    size: "450 m²",
    duration: "6 Bulan",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    description: "Proyek pengerjaan struktur interior, partisi kedap suara, instalasi MEP (Mechanical, Electrical, Plumbing) tersembunyi, hingga pemasangan wall panel kayu jati solid untuk villa mewah di tebing Uluwatu.",
    materials: ["Kayu Jati Solid", "Batu Alam Paras Jogja", "Seamless Microcement", "Ducting AC System"],
    client: "Mr. Jean-Pierre (Mansion Owner)",
    testimonial: "Tim kontraktor PrimaSpace memiliki manajemen proyek yang sangat rapi. Hasil finishing microcement sangat mulus dan pengerjaan strukturalnya luar biasa kokoh."
  },
  {
    id: 2,
    title: "Boutique Resort & Spa Interior Construction",
    location: "Ubud, Bali",
    category: "Resort",
    scope: "Bangun Baru & Interior",
    year: "2025",
    size: "1,200 m²",
    duration: "10 Bulan",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",
    description: "Konstruksi interior area lobi, ruang spa, dan 12 paviliun resort. Menyelaraskan struktur baja modern dengan ekspos material alami khas arsitektur tropis Bali.",
    materials: ["Struktur Baja WF", "Atap Bambu Tiruan (Premium)", "Marmer Travertine", "Custom Joinery"],
    client: "PT. Bali Natural Hospitality",
    testimonial: "Koordinasi antara tim arsitek dan tim lapangan sangat solid. Struktur ekspos selesai tepat waktu sebelum *soft opening* resort kami."
  },
  {
    id: 3,
    title: "High-End Restaurant & Lounge Fit-Out",
    location: "Canggu, Bali",
    category: "Komersial",
    scope: "Commercial Fit-Out",
    year: "2024",
    size: "320 m²",
    duration: "4 Bulan",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    description: "Pengerjaan interior restoran dua lantai dengan tantangan instalasi *exhaust kitchen* komersial yang kompleks, pembuatan lantai teraso kustom, serta struktur plafon melengkung (*curved ceiling*).",
    materials: ["Lantai Teraso Kustom", "Stainless Steel Grade 316", "Acoustic Panel Plafon", "Aksen Brass/Kuningan"],
    client: "The Amber Lounge Bali",
    testimonial: "PrimaSpace sangat memahami detail teknis retail. Pemasangan sistem pencahayaan pintar (*smart lighting*) dan peredam suara ruangan dieksekusi dengan sangat presisi."
  },
  {
    id: 4,
    title: "Modern Minimalist Residence Structural & Interior",
    location: "Denpasar, Bali",
    category: "Residensial",
    scope: "Renovasi Total",
    year: "2025",
    size: "280 m²",
    duration: "5 Bulan",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
    description: "Renovasi total rumah tinggal tua menjadi hunian industrial minimalis modern. Meliputi pembongkaran dinding struktural lama, perkuatan balok beton, dan pengerjaan interior kustom.",
    materials: ["Beton Ekspos Semen", "Besi Hollow Hitam", "Kaca Tempered 10mm", "Vinyl Flooring Premium"],
    client: "Bapak Gede Yoga",
    testimonial: "Rumah lama kami disulap menjadi sangat luas tanpa mengorbankan kekuatan bangunan. Struktur balok gantung yang mereka buat sangat rapi."
  }
];

const categories = ["Semua", "Villa", "Resort", "Komersial", "Residensial"];

export function PortfolioContractor() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<typeof contractorData[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "Semua" 
    ? contractorData 
    : contractorData.filter(p => p.category === selectedCategory);

  const openModal = (project: typeof contractorData[0]) => {
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
    <section id="portfolio-kontraktor" className="py-24 bg-[#0a0a0a] text-[#f5f5f3] relative overflow-hidden">
      {/* Background Ambient Glow Layer */}
      <div className="absolute top-[15%] left-[-10%] w-[45vw] h-[45vw] bg-radial-gradient from-[#c9a06305] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-radial-gradient from-[#c9a06306] to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c9a063]/10 border border-[#c9a063]/20 text-[#c9a063] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-[0.3em] mb-5">
            <HardHat className="w-3.5 h-3.5" />
            <span>Kontraktor & Konstruksi</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-5 tracking-tight">
            Portofolio Kontraktor <span className="font-serif italic text-[#c9a063]">Interior & Eksterior</span>
          </h2>
          <div className="h-[1px] w-16 bg-[#c9a063]/30 mx-auto mb-5" />
          <p className="text-neutral-400 max-w-xl mx-auto font-light text-base leading-relaxed">
            Menampilkan standardisasi konstruksi premium, manajemen proyek transparan, dan ketepatan kalkulasi struktur di seluruh area Bali.
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
              onClick={() => openModal(project)}
            >
              {/* Image Container */}
              <div className="relative h-64 lg:h-full min-h-[240px] lg:col-span-5 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121212] via-[#121212]/10 to-transparent opacity-90" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 bg-[#c9a063] text-[#0a0a0a] text-[9px] font-bold tracking-widest px-2.5 py-1 rounded uppercase">
                  {project.category}
                </div>
              </div>

              {/* Content Card Info */}
              <div className="p-6 lg:p-8 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#c9a063] block mb-2">{project.scope}</span>
                  <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#c9a063] transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-neutral-400 text-xs font-light mb-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c9a063]/60" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-[#c9a063]/60" />
                      {project.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#c9a063]/60" />
                      {project.duration}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm font-light line-clamp-2 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer Project Card */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-white tracking-wider uppercase">
                    <span>Lihat Spesifikasi Teknis</span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    PROYEK {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox / Detail Spesifikasi Struktural Kontraktor */}
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

            {/* Modal Inside Architecture Container */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column: Image Section */}
              <div className="relative h-72 md:h-full min-h-[350px] bg-neutral-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                {/* Simple Slide Nav */}
                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c9a063] hover:text-black text-white p-2 rounded-lg border border-white/5 transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c9a063] hover:text-black text-white p-2 rounded-lg border border-white/5 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Column: Complete Technical Specifications */}
              <div className="p-8 flex flex-col justify-between bg-[#121212] border-t md:border-t-0 md:border-l border-white/5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#c9a063]/10 border border-[#c9a063]/20 text-[#c9a063] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded uppercase">
                      {selectedProject.category}
                    </span>
                    <span className="bg-white/5 border border-white/5 text-neutral-400 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded uppercase">
                      {selectedProject.scope}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
                    {selectedProject.title}
                  </h3>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl mb-6 text-center">
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Luas Area</p>
                      <p className="text-sm font-bold text-white">{selectedProject.size}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Durasi Kerja</p>
                      <p className="text-sm font-bold text-white">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Lokasi Proyek</p>
                      <p className="text-sm font-bold text-white">{selectedProject.location.split(',')[0]}</p>
                    </div>
                  </div>

                  <p className="text-neutral-400 text-sm font-light mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Materials & Components Check */}
                  <div className="mb-6">
                    <h4 className="text-xs tracking-wider text-neutral-400 font-bold uppercase mb-3">Material & Komponen Utama:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.materials.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a063] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Supervisor/Client Testimonial */}
                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5 mb-8 relative">
                    <Quote className="w-8 h-8 text-[#c9a063]/5 absolute top-4 right-4 pointer-events-none" />
                    <p className="text-neutral-400 italic text-xs font-light leading-relaxed mb-4">
                      "{selectedProject.testimonial}"
                    </p>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#c9a063]/10 flex items-center justify-center text-[#c9a063] text-xs font-bold">
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

                {/* Footer Modal Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <div>
                    <p className="text-[10px] tracking-wider text-neutral-500 uppercase mb-0.5">ESTIMASI SURVEY</p>
                    <p className="text-sm font-bold text-white">Free Area Bali</p>
                  </div>
                  <a
                    href={`https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20tertarik%20dengan%20proyek%20kontraktor%20seperti%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#c9a063] hover:bg-[#b08e58] text-[#0a0a0a] px-6 py-3 rounded-xl text-xs font-bold tracking-wide transition-all shadow-lg"
                  >
                    Konsultasi Rencana Kerja (RAB)
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