"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Presentation, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HeroBooth() {
  // Animasi dengan tipe Variants agar aman dari error type checking TypeScript
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    },
  };

  const imageReveal: Variants = {
    hidden: { scale: 1.08, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#f5f5f3] flex items-center py-20 px-6 md:px-16">
      
      {/* Background Ambient Glow & Grid Layer */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-radial-gradient from-[#c9a0630a] to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)] opacity-25" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* KONTEN TEKS (KIRI) */}
        <motion.div 
          className="lg:col-span-7"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge / Tagline */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <span className="text-[#c9a063] text-[11px] font-bold uppercase tracking-[0.5em] px-4 py-2 bg-[#c9a063]/10 border border-[#c9a063]/20 rounded-lg">
              Booth Pameran Denpasar
            </span>
            <div className="h-[1px] w-12 bg-[#c9a063]/30" />
          </motion.div>

          {/* Heading Utama */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl xl:text-6xl font-light leading-[1.15] mb-8"
          >
            Booth Pameran Bali <span className="font-serif italic text-[#c9a063]">Custom</span> <br />
            untuk Ekspo, Event & Branding Bisnis
          </motion.h1>

          {/* Deskripsi */}
          <motion.p 
            variants={fadeInUp} 
            className="text-neutral-400 text-lg font-light leading-relaxed max-w-xl mb-12"
          >
            PrimaSpace merancang booth pameran Bali yang menarik, kuat secara struktur, dan mudah dirakit. Ideal untuk pameran eksklusif di Denpasar maupun event bisnis berskala internasional. Kami menggabungkan desain kreatif dengan fungsi display produk yang optimal.
          </motion.p>

{/* Tombol Aksi (CTA) */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link 
              href="https://wa.me/628135979589?text=Halo%20Prima%20Space,%20Saya%20Mau%20Konsultasi%20tentang%20..." 
              target="_blank"
              className="group relative flex items-center justify-center gap-3 bg-[#c9a063] hover:bg-[#b08951] text-neutral-900 font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#c9a063]/10"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>Konsultasi WhatsApp</span>
              <ArrowUpRight size={16} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link 
              href="/" 
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-neutral-800 hover:border-neutral-700 font-medium px-6 py-4 rounded-xl transition-all duration-300"
            >
              <ArrowLeft size={16} className="text-neutral-400" />
              <span>Kembali ke Beranda</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* VISUAL SHOWCASE (KANAN) */}
        <motion.div 
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
          variants={imageReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-[420px] p-4 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl">
            <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden group">
              {/* Gambar Background Placeholder Pameran Modern */}
              <img 
                src="https://images.unsplash.com/photo-1561019562-1b2f1e0f895f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Booth Pameran Bali Profesional" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              
              {/* Efek Gradasi Mewah */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-95" />
              
              {/* Konten Teks di Dalam Card */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a063] font-bold">
                    SHOWCASE BOOTH
                  </span>
                </div>
                <h3 className="text-3xl font-serif mb-4 leading-tight text-white">Booth Pameran Bali <br />Profesional</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Booth pameran kami dirancang secara kustom sesuai tema brand Anda agar stand menarik perhatian pengunjung, kuat secara struktural, namun tetap praktis saat perakitan.
                </p>
                <div className="h-[1px] w-full bg-white/10" />
              </div>
            </div>
          </div>

          {/* Dekorasi Bingkai Tipis Bermotif Konstruksi Struktural */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#c9a063]/20 rounded-tl-3xl -z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#c9a063]/20 rounded-br-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}