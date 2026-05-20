// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

// Mendefinisikan tipe data Variants secara eksplisit untuk mencegah error TS
const menuVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const services = [
  { name: 'Desain Interior', href: '/desain-interior-bali' },
  { name: 'Kontraktor Interior', href: '/kontraktor-interior-bali' },
  { name: 'Custom Kitchen Set', href: '/kitchen-set-bali' },
  { name: 'Booth Pameran', href: '/booth-pameran-bali' },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <Link href="/" className="text-xl font-serif font-light tracking-wide text-white">
          PrimaSpace<span className="text-[#c9a063]">.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-xs tracking-widest uppercase text-neutral-400 hover:text-white transition-colors">
            Beranda
          </Link>

          {/* DROP-DOWN: OUR SERVICES */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-xs tracking-widest uppercase text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 py-2">
              <span>Our Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-[#c9a063]' : ''}`} />
            </button>

            {isServicesOpen && (
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#121212] border border-white/5 rounded-xl p-2 shadow-2xl mt-1"
              >
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="flex items-center justify-between text-xs text-neutral-400 hover:text-white hover:bg-white/[0.03] px-4 py-3 rounded-lg transition-all group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all duration-300 text-[#c9a063]" />
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link href="/blog" className="text-xs tracking-widest uppercase text-neutral-400 hover:text-white transition-colors">
            Blog
          </Link>
          
          <Link href="/tentang-kami" className="text-xs tracking-widest uppercase text-neutral-400 hover:text-white transition-colors">
            About Us
          </Link>
        </div>

        {/* DESKTOP CONTACT CTA */}
        <div className="hidden md:block">
          <Link 
            href="/kontak"
            className="border border-[#c9a063]/30 hover:border-[#c9a063] text-white hover:bg-[#c9a063] hover:text-[#0a0a0a] text-[11px] tracking-widest uppercase font-bold px-5 py-2.5 rounded-lg transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-1"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE INTERACTIVE PANEL */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#0a0a0a] border-b border-white/5 p-6 space-y-5 flex flex-col md:hidden animate-fade-in">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-neutral-300 border-b border-white/5 pb-2"
          >
            Beranda
          </Link>
          
          {/* Mobile Services List Expand */}
          <div className="space-y-2">
            <p className="text-xs tracking-widest uppercase text-[#c9a063] font-bold">Our Services</p>
            <div className="grid grid-cols-1 gap-2 pl-3 border-l border-[#c9a063]/20">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs text-neutral-400 py-1.5"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/blog" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-neutral-300 border-b border-white/5 pb-2"
          >
            Blog
          </Link>
          
          <Link 
            href="/tentang-kami" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-neutral-300 border-b border-white/5 pb-2"
          >
            About Us
          </Link>

          <Link 
            href="/kontak" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-[#c9a063] text-[#0a0a0a] text-xs tracking-widest uppercase font-bold py-3 rounded-xl block"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}