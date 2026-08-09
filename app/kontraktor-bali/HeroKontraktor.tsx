"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

export function HeroKontraktor() {
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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0d1118] text-[#f5f5f3] flex items-center py-20 px-6 md:px-16">
      {/* Background Ornaments */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,160,99,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(38,104,255,0.16),_transparent_28%),linear-gradient(180deg,#050608_0%,#0f1218_40%,#12161d_100%)]" />
      <div className="absolute left-12 top-10 w-72 h-72 rounded-full bg-[#c9a063]/15 blur-[100px] opacity-90 pointer-events-none" />
      <div className="absolute right-[-5%] top-1/3 w-[45vw] h-[45vw] rounded-full bg-[#2268ff]/10 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_20%),linear-gradient(to_right,rgba(255,255,255,0.02),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1218_1px,transparent_1px),linear-gradient(to_bottom,#0f1218_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* TEXT CONTENT */}
        <motion.div className="lg:col-span-7" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <span className="text-[#c9a063] text-[11px] font-bold uppercase tracking-[0.5em] px-4 py-2 bg-[#c9a063]/10 border border-[#c9a063]/20 rounded-lg">
              Kontraktor Profesional Bali
            </span>
            <div className="h-[1px] w-12 bg-[#c9a063]/30" />
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl xl:text-6xl font-light leading-[1.1] mb-8">
            Jasa Kontraktor Bali & Kontraktor Denpasar <span className="font-serif italic text-[#c9a063]">Terpercaya</span> <br />
            Bangun Villa Bali, Renovasi Rumah Bali, dan Konstruksi Premium
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-neutral-400 text-lg font-light leading-relaxed max-w-xl mb-12">
            PrimaSpace adalah kontraktor Bali terpercaya yang melayani pembangunan villa Bali, renovasi rumah Bali, dan proyek bangunan komersial di Denpasar serta seluruh area Bali. Kami menyediakan RAB detail, layanan izin konstruksi, dan pengawasan lapangan profesional.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link 
              href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20Saya%20Mau%20Konsultasi%20Konstruksi%20Bali%20untuk%20bangun%20villa%20atau%20renovasi%20rumah%20di%20Denpasar..." 
              target="_blank"
              className="group relative flex items-center justify-center gap-3 bg-[#c9a063] hover:bg-[#b08951] text-neutral-900 font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#c9a063]/10"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>Konsultasi Konstruksi Bali</span>
              <ArrowUpRight size={16} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link href="/" className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-neutral-800 hover:border-neutral-700 font-medium px-6 py-4 rounded-xl transition-all duration-300">
              <ArrowLeft size={16} className="text-neutral-400" />
              <span>Kembali ke Beranda</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGE CARD */}
        <motion.div className="lg:col-span-5 relative" variants={imageReveal} initial="hidden" animate="visible">
          <div className="relative group p-4 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl">
            <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop"
                alt="Proyek Konstruksi Kontraktor Bali"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a063]" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a063] font-black">
                    PROJECT PORTFOLIO
                  </span>
                </div>
                <h3 className="text-3xl font-serif mb-4 leading-tight">Premium Villa <br />Canggu & Ubud</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Eksplorasi mahakarya bangunan fisik komersial kami yang memadukan kekuatan struktur modern dengan estetika arsitektur tropis Bali.
                </p>
                <div className="h-[1px] w-full bg-white/10" />
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#c9a063]/20 rounded-tl-[50px] -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#c9a063]/20 rounded-br-[50px] -z-10" />
        </motion.div>

      </div>
    </section>
  );
}