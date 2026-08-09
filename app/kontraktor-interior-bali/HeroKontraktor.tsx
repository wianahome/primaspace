"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HeroContractor() {
  // Deklarasi varian dengan tipe Variants eksplisit untuk menghindari error ease array
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0d0d0d] text-[#f5f5f3] flex items-center justify-center py-16 px-6 md:px-12">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(circle_at_70%_30%,#c9a06315_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)] opacity-20" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* KONTEN TEKS */}
        <motion.div 
          className="lg:col-span-7"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-[#c9a063]/15 text-[#c9a063] text-[10px] uppercase tracking-[0.4em] font-bold py-2 px-4 rounded-md border border-[#c9a063]/30">
              Kontraktor Interior Bali
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light leading-[1.15] mb-8">
            Kontraktor Interior Bali <br />
            <span className="font-serif italic text-[#c9a063]">Denpasar, Villa, Rumah, Kantor, Retail & Booth Pameran</span>
          </h1>

          <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-2xl mb-12">
            Sebagai kontraktor interior Bali dan kontraktor interior Denpasar, PrimaSpace menyediakan pengerjaan interior lengkap mulai dari renovasi rumah, pembangunan interior kantor, hingga booth pameran yang menarik. Kami adalah kontraktor interior rumah Bali yang mengutamakan desain estetis, kekuatan konstruksi, dan ketepatan pemasangan.
          </p>

          {/* Tombol Aksi (CTA) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link 
              href="https://wa.me/628135979589?text=Halo%20Prima%20Space,%20Saya%20Mau%20Konsultasi%20Kontraktor%20Interior%20Bali" 
              target="_blank"
              className="group relative flex items-center justify-center gap-3 bg-[#c9a063] hover:bg-[#b08951] text-neutral-900 font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#c9a063]/10"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>Konsultasi Kontraktor Interior Bali</span>
              <ArrowUpRight size={16} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link 
              href="https://wa.me/628135979589?text=Halo%20Prima%20Space,%20Saya%20Ingin%20Minta%20Estimasi%20RAB%20Interior%20Bali" 
              target="_blank"
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-neutral-800 hover:border-neutral-700 font-medium px-6 py-4 rounded-xl transition-all duration-300"
            >
              <ArrowLeft size={16} className="text-neutral-400" />
              <span>Minta Estimasi RAB Interior Bali</span>
            </Link>
          </div>
        </motion.div>

        {/* VISUAL SHOWCASE */}
        <motion.div 
          className="lg:col-span-5 relative"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#161616] p-4 shadow-2xl">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1604328702728-d26d2062c20b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Construction Work"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a063] font-bold mb-3 block">
                  Project Showcase
                </span>
                <h3 className="text-3xl font-serif mb-4">Karya Kontraktor Interior Bali</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Proyek kami menampilkan hasil pengerjaan interior profesional dengan detail konstruksi yang solid dan manajemen proyek yang terukur.
                </p>
              </div>
            </div>
          </div>

          {/* Aksesoris Geometris */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#c9a063]/30 rounded-tr-3xl -z-10" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#c9a063]/30 rounded-bl-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}

