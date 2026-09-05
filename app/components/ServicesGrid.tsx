// components/ServicesGrid.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Waves, 
  Compass, 
  Layout, 
  Home, 
  ChefHat, 
  Store, 
  Umbrella, 
  Layers, 
  Maximize, 
  Sparkles 
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
}

const services: ServiceItem[] = [
  { id: 'kontraktor', title: 'Kontraktor Bali', description: 'Konstruksi bangunan komersial & hunian berkualitas tinggi.', icon: Building2, badge: 'Populer' },
  { id: 'kolam-renang', title: 'Kontraktor Kolam Renang Bali', description: 'Pembuatan & perawatan kolam renang mewah privat atau villa.', icon: Waves },
  { id: 'arsitek', title: 'Jasa Arsitek Bali', description: 'Desain arsitektur modern berbasis tropis dan kontemporer.', icon: Compass },
  { id: 'desain-interior', title: 'Desain Interior', description: 'Perancangan tata ruang interior fungsional dan estetis.', icon: Layout },
  { id: 'kontraktor-interior', title: 'Kontraktor Interior', description: 'Eksekusi pengerjaan interior presisi tinggi sesuai blueprint.', icon: Home },
  { id: 'kitchen-set', title: 'Custom Kitchen Set', description: 'Pembuatan kitchen set kustom bahan premium anti-rayap.', icon: ChefHat },
  { id: 'booth-pameran', title: 'Booth Pameran', description: 'Desain & pengerjaan booth pameran menarik untuk branding.', icon: Store },
  { id: 'kanopi', title: 'Kanopi Bali', description: 'Pemasangan kanopi modern, kaca tempered, dan spandek.', icon: Umbrella },
  { id: 'acp', title: 'ACP Bali', description: 'Pemasangan Aluminium Composite Panel untuk fasad bangunan.', icon: Layers },
  { id: 'alumunium', title: 'Alumunium Bali', description: 'Kusen, pintu, dan jendela alumunium presisi tahan cuaca.', icon: Maximize },
  { id: 'neon-box', title: 'Neon Box Bali', description: 'Akrilik & neon box LED kustom untuk identitas bisnis.', icon: Sparkles },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-neutral-950 text-white min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 text-sm tracking-widest uppercase font-semibold"
          >
            Layanan Utama PrimaSpace
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight text-neutral-100"
          >
            Solusi Konstruksi & Desain Profesional di Bali
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-400 text-lg"
          >
            Dari perancangan arsitektur hingga pengerjaan detail interior & eksterior untuk properti impian Anda.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative group bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 backdrop-blur-sm hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
              >
                {item.badge && (
                  <span className="absolute top-4 right-4 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs px-2.5 py-1 rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
                
                <div className="w-12 h-12 bg-neutral-800/80 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300 mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center text-xs font-semibold text-amber-500 gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Konsultasi Layanan</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}