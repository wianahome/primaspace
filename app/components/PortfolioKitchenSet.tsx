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

// Data Portfolio
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
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1588854337236-6889d631f2b8?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1556912998-57f6f1d0f0d0?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1588854337115-1c67d6b9b9f9?w=800&h=600&fit=crop",
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
      setCurrentImageIndex((prev) => (prev + 1) % 1); // Will expand with more images
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + 1) % 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Portofolio Kitchen Set Kami</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Karya Terbaik Kitchen Set di Bali
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lebih dari 150 proyek kitchen set telah kami selesaikan dengan kepuasan klien 98%
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-amber-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
                  {project.year}
                </div>

                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-amber-600 px-6 py-2 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300">
                    Lihat Detail
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                  <Ruler className="w-4 h-4 ml-2" />
                  <span>{project.size}</span>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      +{project.features.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-amber-700 font-bold">
                    {project.budget}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20tertarik%20melihat%20portofolio%20kitchen%20set%20dan%20ingin%20konsultasi"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Konsultasikan Proyek Kitchen Set Anda
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            *Free konsultasi & survey lokasi untuk area Denpasar, Seminyak, Canggu, Ubud, Nusa Dua
          </p>
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-80 md:h-full min-h-[300px]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                    {selectedProject.projectType}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {selectedProject.title}
                </h3>

                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" /> {selectedProject.size}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Fitur Unggulan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <span key={idx} className="text-sm bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <Quote className="w-8 h-8 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 italic mb-3">
                        "{selectedProject.testimonial}"
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
                          <Users className="w-5 h-5 text-amber-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{selectedProject.client}</p>
                          <div className="flex text-amber-500 text-sm">
                            {'★★★★★'.split('').map((star, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Estimasi Budget</p>
                    <p className="text-2xl font-bold text-amber-700">{selectedProject.budget}</p>
                  </div>
                  <Link
                    href="https://wa.me/6281234567890?text=Halo%20PrimaSpace,%20saya%20tertarik%20dengan%20proyek%20kitchen%20set%20seperti%20portfolio%20Anda"
                    target="_blank"
                    className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    Konsultasi Proyek →
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