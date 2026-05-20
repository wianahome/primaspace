"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HeroHome() {
  // Animasi dengan tipe Variants yang aman untuk TypeScript
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
    hidden: { scale: 1.05, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#f5f5f3] flex items-center py-20 px-6 md:px-16">
      
      {/* Background Ambient Glow & Grid Layer */}
      <div className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] bg-radial-gradient from-[#c9a06308] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-radial-gradient from-[#c9a06305] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)] opacity-25" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* TEXT CONTENT (KIRI) */}
        <motion.div 
          className="lg:col-span-7"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge / Tagline */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <span className="text-[#c9a063] text-[11px] font-bold uppercase tracking-[0.5em] px-4 py-2 bg-[#c9a063]/10 border border-[#c9a063]/20 rounded-lg">
              One-Stop Solution Bali
            </span>
            <div className="h-[1px] w-12 bg-[#c9a063]/30" />
          </motion.div>

          {/* Heading Utama Beranda */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl xl:text-6xl font-light leading-[1.15] mb-8 tracking-tight text-white"
          >
            Desain Interior Bali <br />
            <span className="font-serif italic text-[#c9a063]">Kontraktor Interior & Eksterior</span>
          </motion.h1>

          {/* Deskripsi Menyeluruh */}
          <motion.p 
            variants={fadeInUp} 
            className="text-neutral-400 text-lg font-light leading-relaxed max-w-2xl mb-12"
          >
            Mewujudkan ruang impian Anda dengan keselarasan estetika dan kekuatan struktur. Dari perencanaan konsep arsitektur, pengerjaan interior kustom, hingga bangun baru eksterior villa dan retail di seluruh Bali. Kami memastikan eksekusi tepat waktu dengan standar material premium.
          </motion.p>

          {/* Group Tombol Aksi (CTA) */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link 
              href="https://wa.me/628135979589?text=Halo%20Prima%20Space,%20Saya%20Mau%20Konsultasi%20tentang%20..." 
              className="group flex items-center gap-3 bg-[#c9a063] hover:bg-[#b08e58] text-[#0a0a0a] font-bold px-8 py-5 rounded-2xl transition-all duration-500 shadow-xl shadow-[#c9a063]/10"
            >
              <ShieldCheck size={18} />
              <span>Konsultasi Project</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <Link 
              href="/portfolio" 
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-5 rounded-2xl transition-all text-white font-medium"
            >
              <span>Eksplor Portofolio</span>
              <ArrowUpRight size={16} className="text-neutral-400" />
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
              {/* Gambar Representatif Gabungan Interior & Eksterior Luxury Bali */}
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
                alt="Desain Interior Kontraktor Eksterior Bali" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              
              {/* Efek Gradasi Bayangan Mewah */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-95" />
              
              {/* Konten Teks di Dalam Card */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a063] font-bold">
                    MASTERPIECE COLLECTION
                  </span>
                </div>
                <h3 className="text-3xl font-serif mb-4 leading-tight text-white">Resort & Villa <br />Architecture</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Integrasi tanpa batas antara kemewahan interior dalam ruangan dengan lanskap eksterior tropis khas arsitektur Bali modern.
                </p>
                <div className="h-[1px] w-full bg-white/10" />
              </div>
            </div>
          </div>

          {/* Bingkai Ornamen Tipis Artistik */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#c9a063]/20 rounded-tl-3xl -z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#c9a063]/20 rounded-br-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}