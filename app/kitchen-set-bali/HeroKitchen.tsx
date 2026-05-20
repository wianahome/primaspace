"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Utensils, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HeroKitchen() {
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
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#f5f5f3] flex items-center py-20 px-6 md:px-16">
      
      {/* Background Ornaments */}
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-radial-gradient from-[#c9a06310] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)] opacity-20" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* TEXT CONTENT (KIRI) */}
        <motion.div 
          className="lg:col-span-7"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <span className="text-[#c9a063] text-[11px] font-bold uppercase tracking-[0.5em] px-4 py-2 bg-[#c9a063]/10 border border-[#c9a063]/20 rounded-lg">
              Kitchen Set Denpasar
            </span>
            <div className="h-[1px] w-12 bg-[#c9a063]/30" />
          </motion.div>

          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl xl:text-6xl font-light leading-[1.1] mb-8"
          >
            Kitchen Set Bali <span className="font-serif italic text-[#c9a063]">Custom</span> <br />
            untuk Dapur Mewah Seluruh Bali
          </motion.h1>

          <motion.p 
            variants={fadeInUp} 
            className="text-neutral-400 text-lg font-light leading-relaxed max-w-xl mb-12"
          >
            PrimaSpace menghadirkan kitchen set dengan desain kustom, fungsi maksimal, dan material berkualitas. Setiap proyek dirancang untuk mengoptimalkan ruang, alur kerja, dan estetika modern Bali.
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

        {/* IMAGE CARD (KANAN) */}
        <motion.div 
          className="lg:col-span-5 relative"
          variants={imageReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="relative group p-4 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl">
            <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden">
              {/* Gambar Dapur - Ganti URL sesuai kebutuhan */}
              <img 
                src="https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Luxury Kitchen Bali" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              
              {/* Card Overlay Artistry */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a063]" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a063] font-black">
                    KITCHEN SET GALLERY
                  </span>
                </div>
                <h3 className="text-3xl font-serif mb-4 leading-tight">Inspirasi Dapur <br />Denpasar</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Lihat contoh kitchen set custom kami yang menggabungkan fungsi dapur modern dan keindahan material alam Bali.
                </p>
                <div className="h-[1px] w-full bg-white/10" />
              </div>
            </div>
          </div>

          {/* Aksentuasi Sudut */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#c9a063]/20 rounded-tl-[50px] -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#c9a063]/20 rounded-br-[50px] -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
