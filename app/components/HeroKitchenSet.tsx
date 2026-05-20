// app/components/HeroKitchenSet.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Sparkles, ShieldCheck, Clock, ArrowRight, Wrench } from 'lucide-react';

interface HeroKitchenSetProps {
  title?: string;
  subtitle?: string;
}

export function HeroKitchenSet({ 
  title = "Kitchen Set Bali Custom: Transformasi Dapur Impian Anda di Denpasar & Seluruh Bali",
  subtitle = "Desain ergonomis, material tahan lembab tropis & bergaransi"
}: HeroKitchenSetProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden mt-10 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      
      {/* Background Pattern Decorative */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>#1 Kitchen Set Contractor di Bali 2026</span>
            </div>

            {/* Main Title with SEO optimization */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight">
                {title.split(':')[0]}
                <span className="text-gradient block mt-2">
                  | {title.split(':')[1] || 'Transformasi Dapur Impian Anda'}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* USP Bullets with Icons */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Custom 100%</h3>
                  <p className="text-sm text-gray-500">Desain sesuai ukuran & gaya dapur Anda</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Bergaransi</h3>
                  <p className="text-sm text-gray-500">Material & pengerjaan berkualitas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Tepat Waktu</h3>
                  <p className="text-sm text-gray-500">Proyek selesai sesuai deadline</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Free Konsultasi</h3>
                  <p className="text-sm text-gray-500">Tim ahli siap membantu Anda</p>
                </div>
              </div>
            </div>

            {/* Additional Info Cards - Moved from Right */}
            <div className="space-y-4">
              <div className="glass-card p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                    <span className="text-xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Material Premium</h3>
                    <p className="text-sm text-gray-500">Tahan lembab & rayap</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Waterproof Plywood', 'HPL Tahan Air', 'Solid Wood', 'Stainless Steel', 'Quartz'].map((mat) => (
                    <span key={mat} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{mat}</span>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6 ml-8 md:ml-16">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg">🎨</span>
                  <span className="text-xs text-amber-600 font-semibold">Mulai dari</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">Rp 2.500.000</p>
                <p className="text-sm text-gray-500">per meter lari</p>
                <hr className="my-3" />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>✅ Free Desain 3D</span>
                  <span>✅ Free Ongkir Denpasar</span>
                </div>
              </div>
            </div>

            {/* Social Proof Mini */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-gray-800">150+ Klien Puas</p>
                <p className="text-sm text-gray-500">di Denpasar, Canggu, Seminyak, Nusa Dua</p>
              </div>
              <div className="flex text-amber-500">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-lg">{star}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Kitchen Set Image */}
          <div className="relative h-full min-h-[600px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dlerwn8af/image/upload/q_auto/f_auto/v1779174871/kitchen-set-custom_pphvgu.png"
                alt="Kitchen Set Modern Bali"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-full p-3 shadow-xl">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full px-4 py-2 text-white text-sm font-bold">
                  #1 di Bali
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decorative Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#fef3c7" fillOpacity="0.3" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,186.7C672,192,768,224,864,234.7C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #d97706 0%, #ea580c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          box-shadow: 0 20px 35px -15px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
}
