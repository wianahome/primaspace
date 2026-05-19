'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/Breadcrumb';

const boothGallery = [
  {
    src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1000&q=80',
    alt: 'Booth pameran modern dengan branding dan pencahayaan',
    title: 'Booth Pameran Modern',
  },
  {
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80',
    alt: 'Desain booth pameran Bali dengan detail kayu dan aksen tropis',
    title: 'Booth Bali Tropis',
  },
  {
    src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=80',
    alt: 'Booth pameran Denpasar dengan tampilan profesional',
    title: 'Booth Event Denpasar',
  },
];

export function BoothPameranBaliClient() {
  return (
    <main className="pt-28 pb-16 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Booth Pameran Bali', href: '/booth-pameran-bali', current: true },
          ]}
        />
      </div>
      <section className="bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_45%)]">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-white/95 border border-slate-200 p-10 shadow-xl"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
                  Booth Pameran Denpasar
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Booth Pameran Bali Custom untuk Pameran, Event, dan Branding Bisnis
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  PrimaSpace merancang booth pameran Bali yang menarik, kuat secara struktur,
                  dan mudah dirakit. Ideal untuk booth pameran Denpasar, pameran ekspo, dan event
                  bisnis.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Setiap booth pameran custom kami dibuat sesuai tema brand dan tujuan promosi,
                  menggabungkan desain kreatif dengan fungsi display produk yang optimal.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Layanan booth pameran Bali kami mencakup desain konsep, produksi, pengiriman,
                  serta pemasangan di lokasi event di Bali dan Denpasar.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20ingin%20konsultasi%20booth%20pameran%20Bali"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
                  >
                    Konsultasi Booth
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
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative overflow-hidden rounded-[2rem] bg-slate-900/95 p-6 shadow-2xl sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.2),_transparent_35%)]" />
                <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Showcase Booth</p>
                  <h2 className="mt-4 text-3xl font-semibold">Booth Pameran Bali Profesional</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Booth pameran kami dirancang agar stand Anda menarik perhatian dan mudah dirakit.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Layanan Booth Pameran</p>
            <h2 className="text-3xl font-semibold text-slate-900">Layanan booth pameran Bali</h2>
            <p className="text-slate-600">
              Kami membuat booth pameran custom untuk Denpasar, pameran wisata, event korporat,
              dan pameran UMKM. Setiap desain booth menonjolkan brand dan memudahkan komunikasi
              produk dengan pengunjung.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Booth pameran custom Bali</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Konsep booth pameran Indonesia yang bisa disesuaikan dengan identitas brand dan
              ruang pameran yang tersedia.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Stand pameran Denpasar</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Booth pameran Denpasar dirancang untuk event lokal dan nasional dengan tampilan yang
              profesional dan ramah pengunjung.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {boothGallery.map((item, index) => (
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
                  Contoh booth pameran Bali dengan bentuk yang menarik dan fungsi pemasaran
                  yang kuat.
                </p>
              </div>
            </motion.article>
          ))}
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Keyword Pendukung</p>
            <h2 className="text-3xl font-semibold text-slate-900">Target keyword booth pameran Bali</h2>
            <p className="text-slate-600">
              Halaman ini menargetkan keyword seperti booth pameran Bali, booth pameran Denpasar,
              booth event, booth pameran custom, dan stand pameran Bali.
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
              <p className="text-lg font-semibold text-slate-900">Desain grafis booth</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Booth pameran kami dilengkapi branding kuat, layout display produk, dan pesan yang
                mudah terlihat.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Pengerjaan kokoh</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Struktur booth dirancang untuk stabilitas dan keamanan selama event berlangsung.
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
              <p className="text-lg font-semibold text-slate-900">Instalasi cepat</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Kami menyediakan layanan pemasangan booth pameran di lokasi event di Bali dengan
                waktu yang efisien.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Layanan end-to-end</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Layanan termasuk desain, produksi, logistik, dan dukungan teknis selama event.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">FAQ</p>
            <h2 className="text-3xl font-semibold text-slate-900">Pertanyaan Umum Booth Pameran Bali</h2>
            <div className="grid gap-6">
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apa saja jenis booth pameran Bali yang tersedia?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Kami menyediakan booth pameran custom, booth modular, booth event, dan stand display
                  untuk berbagai kebutuhan pameran di Bali.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Berapa lama waktu pembuatan booth pameran?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Waktu pembuatan biasanya 2-4 minggu, tergantung kompleksitas desain dan jadwal event.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah booth pameran Denpasar bisa dipasang di luar Bali?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ya, kami bisa mendukung pengiriman dan pemasangan booth pameran di luar Bali jika
                  diperlukan, dengan perencanaan logistik yang baik.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
