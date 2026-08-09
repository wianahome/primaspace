'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/Breadcrumb';

const projectImages = [
  {
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
    alt: 'Interior Bali modern dengan broken plan living room',
    title: 'Interior Rumah Bali',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    alt: 'Ruang dapur dan kitchen set modern',
    title: 'Kontraktor Dapur Bali',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
    alt: 'Area kantor modern dengan interior minimalis',
    title: 'Interior Kantor Bali',
  },
];

export function KontraktorInteriorBaliClient() {
  return (
    <main className="pt-28 pb-16 bg-[#0d1118] text-[#f5f5f3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Kontraktor Interior Bali', href: '/kontraktor-interior-bali', current: true },
          ]}
        />
      </div>
      <section className="bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_45%)]">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#0f1218]/80 border border-white/5 p-10 shadow-xl"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="inline-flex items-center rounded-full bg-amber-100/10 px-4 py-1 text-sm font-semibold text-amber-300">
                  Kontraktor Interior Bali
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#f5f5f3] sm:text-5xl">
                  Kontraktor Interior Bali — Denpasar untuk Rumah, Kantor, Retail, dan Booth Pameran
                </h1>
                <p className="mt-6 text-lg leading-8 text-neutral-300">
                  Sebagai kontraktor interior Bali, PrimaSpace menyediakan pengerjaan interior
                  lengkap mulai dari renovasi rumah, pembangunan interior kantor, hingga booth
                  pameran yang menarik.
                </p>
                <p className="mt-4 text-lg leading-8 text-neutral-300">
                  Tim kontraktor interior Denpasar kami mengelola setiap fase proyek dengan
                  profesional: desain, material, produksi, hingga finishing. Hasilnya adalah ruang
                  Bali yang estetis, tahan lama, dan cocok untuk gaya hidup modern.
                </p>
                <p className="mt-4 text-lg leading-8 text-neutral-300">
                  Kami juga menangani interior villa Bali, kitchen set custom, dan area komersial
                  dengan detail rapi serta manajemen proyek yang transparan.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20mau%20konsultasi%20kontraktor%20interior%20Bali"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
                  >
                    Konsultasi Kontraktor
                  </Link>
                  <Link
                    href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20Saya%20mau%20minta%20estimasi%20RAB%20kontraktor%20interior%20Bali"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-7 py-3 text-base font-semibold text-neutral-300 transition hover:border-amber-500 hover:text-amber-300"
                  >
                    Minta Estimasi RAB
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative overflow-hidden rounded-[2rem] bg-[#0f1218]/80 p-6 shadow-2xl sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.2),_transparent_35%)]" />
                <div className="relative rounded-[1.75rem] border border-white/10 bg-[#0b0c10] p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Project Showcase</p>
                  <h2 className="mt-4 text-3xl font-semibold">Karya Kontraktor Interior Bali</h2>
                  <p className="mt-4 text-sm leading-6 text-neutral-300">
                    Proyek kami menampilkan hasil pengerjaan interior Bali profesional dengan detail
                    konstruksi yang solid.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/5 bg-[#0f1218]/60 p-8 shadow-sm lg:grid-cols-3">
          <article className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-500">Layanan Kontraktor</p>
            <h2 className="text-3xl font-semibold text-[#f5f5f3]">Layanan kontraktor interior Bali untuk Denpasar dan sekitarnya</h2>
            <p className="text-neutral-300">
              Kami adalah kontraktor interior Bali dan kontraktor interior Denpasar yang menangani proyek rumah, villa, kantor, retail, dan booth pameran. Setiap proyek dikembangkan dengan pemahaman iklim Bali, material lokal, dan kontrol lapangan Bali yang ketat.
            </p>
          </article>
          <article className="rounded-3xl bg-[#0b0c10] p-6 shadow-inner border border-white/5">
            <h3 className="text-xl font-semibold text-[#f5f5f3]">Renovasi interior rumah Bali</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              Renovasi interior rumah Bali dengan desain tropis modern, material anti lembap, dan finishing rapi untuk kenyamanan anggota keluarga.
            </p>
          </article>
          <article className="rounded-3xl bg-[#0b0c10] p-6 shadow-inner border border-white/5">
            <h3 className="text-xl font-semibold text-[#f5f5f3]">Interior kantor Denpasar</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              Solusi interior kantor Denpasar yang mengutamakan produktivitas, branding, dan pengelolaan bahan bangunan lokal sesuai kondisi tropis Bali.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {projectImages.map((item, index) => (
            <motion.article
              key={item.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="overflow-hidden rounded-3xl bg-[#0b0c10] shadow-lg ring-1 ring-white/5"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1000}
                height={720}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f5f5f3]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  Proyek kontraktor interior rumah Bali, kantor Bali, dan booth pameran Bali dengan finishing rapi dan manajemen bahan yang terkontrol.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-white/5 bg-[#0f1218]/60 p-10 shadow-xl lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-500">Layanan Unggulan</p>
            <h2 className="text-3xl font-semibold text-[#f5f5f3]">Layanan kontraktor interior Bali lengkap</h2>
            <p className="text-neutral-300">
              PrimaSpace menyediakan layanan kontraktor interior Bali: konsultasi desain, pengadaan material tahan lembap, produksi furniture custom, instalasi MEP, hingga finishing profesional untuk rumah, villa, kantor, retail, dan booth pameran di Denpasar dan sekitarnya.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-3xl bg-[#0b0c10] p-6 border border-white/5">
              <p className="text-lg font-semibold text-[#f5f5f3]">Manajemen bahan lokal</p>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Pengelolaan bahan material lokal Bali yang tepat membantu proyek kontraktor interior Bali berjalan efisien dan sesuai kondisi iklim tropis.
              </p>
            </div>
            <div className="rounded-3xl bg-[#0b0c10] p-6 border border-white/5">
              <p className="text-lg font-semibold text-[#f5f5f3]">Konstruksi interior</p>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Kontraktor interior Bali kami menangani pemasangan dinding, plafon, furniture built-in, dan finishing interior secara profesional.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="rounded-3xl bg-[#0b0c10] p-6 border border-white/5">
              <p className="text-lg font-semibold text-[#f5f5f3]">Pengawasan kualitas</p>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Kualitas pengerjaan interior dipastikan dengan supervisi ahli Denpasar dan kontrol mutu lapangan Bali di setiap tahap proyek.
              </p>
            </div>
            <div className="rounded-3xl bg-[#0b0c10] p-6 border border-white/5">
              <p className="text-lg font-semibold text-[#f5f5f3]">Budget & estimasi</p>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Kontraktor interior Bali kami menyiapkan estimasi RAB transparan sehingga Anda tahu biaya renovasi rumah Bali, kantor Bali, atau booth pameran Bali sejak awal.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Mengapa pilih</p>
            <h2 className="text-3xl font-semibold text-slate-900">Mengapa pilih kontraktor interior Bali PrimaSpace</h2>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              PrimaSpace adalah kontraktor interior Bali yang memiliki pengalaman luas di Denpasar, Badung, Ubud, dan Canggu. Kami memahami karakter iklim tropis Bali, menggunakan material lokal yang tahan lembap, dan menjaga kontrol lapangan Bali untuk hasil finishing interior yang rapi.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6 shadow-sm border border-slate-200">
                <p className="text-lg font-semibold text-slate-900">Pengalaman wilayah Bali</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Proyek kami mencakup Denpasar, Badung, Ubud, dan Canggu, sehingga kami tahu bagaimana menyesuaikan desain interior dengan kondisi lokal.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 shadow-sm border border-slate-200">
                <p className="text-lg font-semibold text-slate-900">Jaminan kualitas lokal</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Setiap proyek kontraktor interior Bali kami diawasi oleh tim profesional dan memenuhi standar kualitas finishing serta ketahanan material Bali.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl bg-slate-100 p-5 text-slate-900 border border-slate-200">
                <p className="font-semibold">Interior Rumah Bali</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 text-slate-900 border border-slate-200">
                <p className="font-semibold">Interior Kantor Bali</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 text-slate-900 border border-slate-200">
                <p className="font-semibold">Interior Villa Bali</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 text-slate-900 border border-slate-200">
                <p className="font-semibold">Booth Pameran Bali</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">FAQ</p>
            <h2 className="text-3xl font-semibold text-slate-900">Pertanyaan umum kontraktor interior Bali</h2>
            <div className="grid gap-6">
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apa yang termasuk dalam layanan kontraktor interior Bali?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Layanan kami mencakup desain interior, pengadaan material, pengerjaan bangunan,
                  finishing, dan instalasi furniture built-in untuk rumah, kantor, dan retail.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Berapa lama proyek kontraktor interior biasanya selesai?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Waktu pengerjaan bervariasi, tetapi proyek kontraktor interior Bali umumnya selesai
                  dalam 4-10 minggu tergantung skala dan tingkat kompleksitas desain.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah PrimaSpace juga menangani booth pameran Bali?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ya. Kami juga menyediakan layanan kontraktor booth pameran Bali dengan desain
                  menarik dan konstruksi yang kokoh untuk event dan pameran.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
