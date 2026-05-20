// app/components/PortfolioKitchenSet.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  ArrowRight
} from 'lucide-react';

// Data Portfolio (TIDAK ADA PERUBAHAN DATA)
const portfolioData = [
  {
    id: 1,
    title: "Kitchen Set Minimalis Modern",
    location: "Seminyak, Bali",
    category: "Minimalis",
    projectType: "Villa",
    year: "2025",
    size: "3.5 x 2.8 meter",
    budget: "Rp 28.5 Juta",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
    description: "Kitchen set minimalis dengan finishing HPL putih doff dan handle aluminium. Dilengkapi backsplash marmer putih dan under mount sink.",
    features: ["HPL Anti Air", "Soft Close Hinges", "Drawer System", "LED Under Cabinet"],
    client: "Ny. Putu Wijaya",
    testimonial: "PrimaSpace sangat profesional! Kitchen set villa kami jadi lebih modern dan fungsional. Timnya juga cepat dan rapi."
  },
  {
    id: 2,
    title: "Kitchen Set Industrial dengan Kitchen Island",
    location: "Canggu, Bali",
    category: "Industrial",
    projectType: "Restoran",
    year: "2025",
    size: "6 x 4 meter",
    budget: "Rp 67.8 Juta",
    image: "https://res.cloudinary.com/dlerwn8af/image/upload/q_auto/f_auto/v1779275775/kitchen-set-industrial_bfwral.webp",
    description: "Kitchen set industrial dengan kombinasi stainless steel, exposed brick, dan kayu solid. Kitchen island multifungsi untuk persiapan masakan dan serving.",
    features: ["Stainless Steel Top", "Industrial Pendant Lamp", "Open Shelving", "Wine Rack"],
    client: "Made Arjaya (Pemilik Warung Makan Canggu)",
    testimonial: "Desain industrialnya keren banget! Pelanggan jadi sering foto-foto di dapur kami."
  },
  {
    id: 3,
    title: "Kitchen Set Tropis dengan Material Kayu",
    location: "Ubud, Bali",
    category: "Tropis",
    projectType: "Villa Resort",
    year: "2024",
    size: "4.2 x 3.5 meter",
    budget: "Rp 45.2 Juta",
    image: "https://res.cloudinary.com/dlerwn8af/image/upload/q_auto/f_auto/v1779272551/Kitchen_Set_Tropis_dengan_Material_Kayu_s1kz7d.webp",
    description: "Kitchen set dengan konsep tropis menggunakan kayu jati solid, finishing natural, dan aksen rotan. Menyatu dengan alam sekitar villa.",
    features: ["Kayu Jati Solid", "Rotan Detail", "Natural Stone Top", "Open Concept"],
    client: "Bali Tropical Retreat",
    testimonial: "Tamunya suka banget dengan dapur tropis ini. Sangat instagramable dan nyaman digunakan."
  },
  {
    id: 4,
    title: "Kitchen Set L-Shape Modern",
    location: "Denpasar, Bali",
    category: "Modern",
    projectType: "Rumah Tinggal",
    year: "2025",
    size: "3 x 2.5 meter",
    budget: "Rp 22.5 Juta",
    image: "https://res.cloudinary.com/dlerwn8af/image/upload/q_auto/f_auto/v1779275197/kitchen-set-LShape_ilmzj6.webp",
    description: "Kitchen set L-Shape untuk rumah tipe 45. Desain compact dengan storage maksimal. Warna monokrom dengan aksen kayu.",
    features: ["L-Shape Layout", "Max Storage", "Built-in Oven", "Pull-out Pantry"],
    client: "Bapak I Wayan Suardana",
    testimonial: "Dapur kecil jadi terasa luas dan rapi. Terima kasih PrimaSpace!"
  },
  {
    id: 5,
    title: "Kitchen Set Mewah dengan Marmer",
    location: "Nusa Dua, Bali",
    category: "Mewah",
    projectType: "Mansion",
    year: "2025",
    size: "5 x 4 meter",
    budget: "Rp 98.5 Juta",
    image: "https://res.cloudinary.com/dlerwn8af/image/upload/q_auto/f_auto/v1779273113/Kitchen_Set_Mewah_dengan_Marmer_nvpc1f.webp",
    description: "Kitchen set premium dengan top table marmer import, kabinet high gloss, dan smart home integration.",
    features: ["Marmer Import", "Smart Lighting", "High Gloss Finish", "Wine Cooler"],
    client: "Dr. Made Adi Putra",
    testimonial: "Sangat puas dengan hasilnya! Semua detail diperhatikan dengan baik."
  },
  {
    id: 6,
    title: "Kitchen Set Scandinavian",
    location: "Sanur, Bali",
    category: "Scandinavian",
    projectType: "Townhouse",
    year: "2024",
    size: "3.8 x 3 meter",
    budget: "Rp 32.8 Juta",
    image: "https://res.cloudinary.com/dlerwn8af/image/upload/q_auto/f_auto/v1779274597/Kitchen-set-scandinavian_acagln.webp",
    description: "Kitchen set gaya Skandinavia dengan warna terang, material kayu, dan natural lighting. Desain simple namun elegan.",
    features: ["Light Wood", "White Finish", "Natural Light", "Simple Design"],
    client: "Ny. Luh Ayu Manik",
    testimonial: "Suasana dapur jadi lebih cerah dan nyaman. Desainnya timeless!"
  }
];

const categories = ["Semua", "Minimalis", "Industrial", "Tropis", "Modern", "Mewah", "Scandinavian"];

export function PortfolioKitchenSet() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "Semua" 
    ? portfolioData 
    : portfolioData.filter(p => p.category === selectedCategory);

  const openModal = (project: typeof portfolioData[0]) => {
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
    <section id="portfolio" className="py-24 bg-[#0a0a0a] text-[#f5f5f3] relative overflow-hidden">
      {/* Background Ambient Decor */}
      <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] bg-radial-gradient from-[#c9a06306] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-radial-gradient from-[#c9a06304] to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c9a063]/10 border border-[#c9a063]/20 text-[#c9a063] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-[0.3em] mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portofolio Kitchen Set</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-5 tracking-tight">
            Karya Terbaik <span className="font-serif italic text-[#c9a063]">Kitchen Set</span> di Bali
          </h2>
          <div className="h-[1px] w-16 bg-[#c9a063]/30 mx-auto mb-5" />
          <p className="text-neutral-400 max-w-xl mx-auto font-light text-base leading-relaxed">
            Lebih dari 150 proyek kitchen set telah kami selesaikan dengan komitmen estetika tinggi dan kepuasan klien 98%.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent opacity-90 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#c9a063] text-[#0a0a0a] text-[10px] font-bold tracking-wider px-3 py-1 rounded-md uppercase">
                  {project.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 text-neutral-300 text-[10px] font-mono px-3 py-1 rounded-md">
                  {project.year}
                </div>

                {/* Quick View Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  <span className="bg-white text-neutral-900 px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 hover:scale-105">
                    Lihat Detail
                  </span>
                </div>
              </div>

              {/* Content Card */}
              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-2 line-clamp-1 group-hover:text-[#c9a063] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 text-neutral-400 text-xs font-light mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c9a063]/70" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#c9a063]/70" />
                    {project.size}
                  </span>
                </div>

                <p className="text-neutral-400 text-sm font-light line-clamp-2 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-[11px] font-light bg-white/5 border border-white/5 text-neutral-300 px-2.5 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="text-[11px] font-light bg-white/10 text-neutral-400 px-2.5 py-1 rounded-md">
                      +{project.features.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-[10px] tracking-wider text-neutral-500 uppercase block mb-0.5">ESTIMASI BIAYA</span>
                    <span className="text-[#c9a063] font-sans font-bold text-base">
                      {project.budget}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Link
            href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20tertarik%20melihat%20portofolio%20kitchen%20set%20dan%20ingin%20konsultasi"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#c9a063] hover:bg-[#b08e58] text-[#0a0a0a] font-bold px-8 py-4 rounded-xl text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#c9a063]/5 group"
          >
            <span>Konsultasikan Proyek Kitchen Set Anda</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-neutral-500 text-xs font-light mt-4 tracking-wide">
            *Free konsultasi & survey lokasi untuk area Denpasar, Seminyak, Canggu, Ubud, Nusa Dua
          </p>
        </div>
      </div>

      {/* Modal Lightbox */}
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

            {/* Modal Content Inside */}
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-80 md:h-full min-h-[350px] bg-neutral-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c9a063] hover:text-black text-white p-2 rounded-lg border border-white/5 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c9a063] hover:text-black text-white p-2 rounded-lg border border-white/5 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Details Section */}
              <div className="p-8 flex flex-col justify-between bg-[#121212]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#c9a063]/10 border border-[#c9a063]/20 text-[#c9a063] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded uppercase">
                      {selectedProject.category}
                    </span>
                    <span className="bg-white/5 border border-white/5 text-neutral-400 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded uppercase">
                      {selectedProject.projectType}
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
                      <Ruler className="w-3.5 h-3.5 text-[#c9a063]" /> {selectedProject.size}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm font-light mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs tracking-wider text-neutral-400 font-bold uppercase mb-2.5">Fitur Unggulan:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-white/5 border border-white/5 text-neutral-300 px-3 py-1.5 rounded-md font-light">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Box */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 mb-8 relative">
                    <Quote className="w-8 h-8 text-[#c9a063]/10 absolute top-4 right-4 pointer-events-none" />
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-neutral-300 italic text-sm font-light leading-relaxed mb-4">
                          "{selectedProject.testimonial}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#c9a063]/10 border border-[#c9a063]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#c9a063]" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white tracking-wide">{selectedProject.client}</p>
                            <div className="flex text-[#c9a063] mt-0.5">
                              {'★★★★★'.split('').map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Modal Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[10px] tracking-wider text-neutral-500 uppercase mb-0.5">Estimasi Budget</p>
                    <p className="text-xl font-bold text-[#c9a063] font-sans">{selectedProject.budget}</p>
                  </div>
                  <Link
                    href="https://wa.me/6281234567890?text=Halo%20PrimaSpace,%20saya%20tertarik%20dengan%20proyek%20kitchen%20set%20seperti%20portfolio%20Anda"
                    target="_blank"
                    className="bg-[#c9a063] hover:bg-[#b08e58] text-[#0a0a0a] px-5 py-3 rounded-xl text-xs font-bold tracking-wide transition-all shadow-lg shadow-[#c9a063]/5"
                  >
                    Konsultasi Proyek
                  </Link>
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