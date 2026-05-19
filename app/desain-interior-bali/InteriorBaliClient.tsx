'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/Breadcrumb';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
    alt: 'Interior villa Bali modern dengan ruang tamu terbuka',
    title: 'Interior Villa Modern',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    alt: 'Dapur kitchen set minimalis dengan pencahayaan natural',
    title: 'Kitchen Set Minimalis',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
    alt: 'Ruang kantor stylish dari desain interior Bali',
    title: 'Kantor & Retail',
  },
];

export function InteriorBaliClient() {
  return (
    <main className="pt-28 pb-16 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Desain Interior Bali', href: '/desain-interior-bali', current: true },
          ]}
        />
      </div>
      <section className="bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_45%)]">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-white/95 border border-slate-200 p-10 shadow-xl"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
                  Desain Interior Bali
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Solusi Desain Interior Bali untuk Villa, Rumah, Kantor, dan Retail
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  PrimaSpace merancang ruang interior Bali yang elegan, fungsional, dan terjangkau.
                  Dari desain villa modern hingga kitchen set custom, kami fokus pada estetika,
                  kenyamanan, serta eksekusi yang tepat waktu.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Layanan desain interior Bali kami mencakup rumah tinggal, villa, kantor, retail,
                  serta booth pameran. Setiap proyek dirancang untuk menciptakan atmosfir tropis
                  yang tetap modern dan profesional.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Dengan pengalaman di Bali, kami memahami gaya lokal, material ramah lingkungan,
                  dan tata letak yang mendukung gaya hidup. Konsultasi desain interior kami selalu
                  dimulai dari analisis ruang hingga pilihan finishing terbaik.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20ingin%20konsultasi%20desain%20interior%20Bali"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
                  >
                    Konsultasi WhatsApp
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-900 transition hover:border-amber-500 hover:text-amber-600"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative overflow-hidden rounded-[2rem] bg-slate-900/95 p-6 shadow-2xl sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.2),_transparent_35%)]" />
                <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Project Gallery</p>
                  <h2 className="mt-4 text-3xl font-semibold">Inspirasi Interior Bali</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Tiga contoh desain kami yang menggabungkan gaya Bali, natural lighting, dan
                    layout modern.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-3">
          <article className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Layanan Kami</p>
            <h2 className="text-3xl font-semibold text-slate-900">Layanan desain interior Bali</h2>
            <p className="text-slate-600">
              Kami menyediakan layanan desain interior Bali untuk villa, rumah tinggal, kantor,
              retail, booth pameran, dan kitchen set custom. Setiap proyek didesain agar nyaman,
              fungsional, serta mencerminkan gaya lokal Bali.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Desain interior villa</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Solusi tata ruang villa dengan pencahayaan natural, material ramah lingkungan, dan
              nuansa tropis modern.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Kitchen set custom</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Kitchen set Bali yang dirancang untuk fungsi maksimal dengan tampilan elegan dan
              material berkualitas.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.article
              key={item.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200"
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
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Desain interior profesional untuk Bali dengan sentuhan personal dan layout yang
                  menyesuaikan gaya hidup klien.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">FAQ</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Pertanyaan Umum Desain Interior Bali</h2>
            </div>

            <div className="space-y-6">
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Berapa lama proses desain interior Bali biasanya?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Proses desain interior Bali biasanya dimulai dari 2 sampai 4 minggu untuk konsep dan
                  visualisasi. Durasi final tergantung pada tingkat detail desain, ukuran proyek, dan
                  kebutuhan revisi.
                </p>
              </article>

              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah PrimaSpace menangani proyek kitchen set Bali?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ya, kami menyediakan desain dan pembuatan kitchen set Bali custom yang efisien,
                  tahan lama, dan cocok untuk gaya rumah serta villa di Bali.
                </p>
              </article>

              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Bisakah saya mendapatkan desain interior villa modern di Bali?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tentu. Tim kami spesialis dalam desain interior villa Bali modern yang menghadirkan
                  nuansa tropis, pencahayaan natural, dan layout fungsional tanpa mengesampingkan
                  kenyamanan.
                </p>
              </article>

              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah desain interior ini cocok untuk kantor dan retail?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ya. Desain kami juga mencakup kantor dan retail Bali dengan konsep modern,
                  branding yang kuat, dan pengalaman pelanggan yang baik.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
              Keunggulan PrimaSpace
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">Desain interior Bali yang tepat</h2>
            <p className="text-slate-600">
              Proses kami dimulai dari pemahaman kebutuhan klien, pilihan material lokal, dan detail
              Bali aesthetic yang tetap modern serta efisien.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Desain villa dan rumah</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Desain interior Bali untuk hunian yang nyaman dan instagrammable, dengan fokus
                pada sirkulasi udara dan pencahayaan alami.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Area komersial</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Konsep retail dan kantor yang menciptakan pengalaman profesional dan ramah
                pelanggan, sesuai budaya kerja Bali.
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
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Kitchen set custom</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Kitchen set Bali yang efisien dan mewah, dirancang untuk penggunaan sehari-hari
                dengan bahan berkualitas.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Proyek tepat waktu</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Komunikasi jelas dan timeline terstruktur memastikan desain interior selesai sesuai
                target tanpa mengurangi detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
