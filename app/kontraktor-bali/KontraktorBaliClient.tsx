'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/Breadcrumb';

const projectGallery = [
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop',
    alt: 'Pembangunan Villa Mewah di Canggu Bali oleh kontraktor',
    title: 'Konstruksi Villa Mewah Canggu',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
    alt: 'Pembangunan rumah tinggal minimalis modern di Denpasar',
    title: 'Residensial Modern Denpasar',
  },
  {
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop',
    alt: 'Proyek renovasi resort dan boutique villa di Ubud Bali',
    title: 'Renovasi Eksklusif Ubud',
  },
];

export default function KontraktorBaliClient() {
  return (
    <main className="pt-28 pb-16 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Kontraktor Bali', href: '/kontraktor-bali', current: true },
          ]}
        />
      </div>

      {/* Intro Section */}
      <section className="bg-[radial-gradient(circle_at_top,_rgba(201,160,99,0.15),_transparent_45%)]">
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
                  Layanan Konstruksi Terintegrasi
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Mitra Kontraktor Bali Custom Terpercaya untuk Bangun Properti Impian
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  PrimaSpace menyediakan solusi kontraktor Bali menyeluruh, mulai dari perancangan arsitektur, perhitungan RAB, pengurusan izin konstruksi, hingga eksekusi pembangunan fisik yang bergaransi.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Setiap konstruksi dikerjakan oleh tukang lokal berpengalaman tinggi di bawah pengawasan ketat *site engineer* profesional. Kami memastikan ketepatan waktu, efisiensi anggaran, dan kualitas ketahanan struktur jangka panjang.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20mau%20konsultasi%20RAB%20dan%20desain%20bangunan%20properti"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
                  >
                    Mulai Konsultasi Gratis
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-900 transition hover:border-amber-500 hover:text-amber-600"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>

              {/* Side Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative overflow-hidden rounded-[2rem] bg-slate-900/95 p-6 shadow-2xl sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,160,99,0.2),_transparent_35%)]" />
                <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Construction Guarantee</p>
                  <h2 className="mt-4 text-3xl font-semibold">Garansi Struktur Bangunan</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Kami memberikan jaminan pemeliharaan penuh dan proteksi kualitas konstruksi pasca-serah terima kunci proyek.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-3">
          <article className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Layanan Konstruksi</p>
            <h2 className="text-3xl font-semibold text-slate-900">Solusi sipil komprehensif di Bali</h2>
            <p className="text-slate-600">
              Cakupan kerja kami sebagai kontraktor Denpasar terpercaya melayani berbagai model tipologi bangunan baru maupun pengerjaan restorasi/renovasi bangunan lama.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Pembangunan Baru (Villa/Rumah)</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Layanan *end-to-end* bangun dari nol dengan koordinasi penuh arsitek, struktur beton kokoh, pengerjaan MEP rapi, dan *finishing* berkualitas tinggi.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Renovasi & Perluasan Ruang</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Solusi peremajaan bangunan, modifikasi fasad, peningkatan sistem sanitasi, ataupun penambahan lantai/ruangan properti secara aman dan efisien.
            </p>
          </article>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {projectGallery.map((item, index) => (
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
                  Dikerjakan secara presisi tinggi, menggunakan kombinasi material alam lokal Bali dan teknologi modern yang berkelanjutan.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Technical and Keywords Section */}
      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Pilar Utama Layanan</p>
            <h2 className="text-3xl font-semibold text-slate-900">Mengapa Memilih Kontraktor Kami?</h2>
            <p className="text-slate-600">
              Sebagai kontraktor Bali terpercaya, halaman ini menggarisbawahi komitmen kami terhadap transparansi RAB material, kepatuhan IMB/PBG lokal, serta manajemen pengawasan terpusat.
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
              <p className="text-lg font-semibold text-slate-900">Transparansi RAB & Bahan</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Setiap item pengerjaan dan merek spesifikasi material tercatat detail dalam RAB, menghindarkan Anda dari biaya tersembunyi yang mendadak.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Legalitas & Regulasi Aman</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Kami memahami mendalam hukum tata ruang zonasi di Bali, membantu kelancaran pengurusan izin bangunan Anda secara legal.
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
              <p className="text-lg font-semibold text-slate-900">Laporan Proyek Berkala</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Meskipun Anda berada di luar kota atau luar negeri, Anda akan menerima *update* berkala progress fisik berupa foto & video mingguan.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Manajemen Tukang Ahli</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Kombinasi tukang spesialis struktur beton bertulang dan pengrajin ukiran batu alam lokal Bali menghasilkan bangunan artistik yang kokoh.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">FAQ</p>
            <h2 className="text-3xl font-semibold text-slate-900">Pertanyaan Umum Mengenai Jasa Kontraktor Bali</h2>
            <div className="grid gap-6">
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Bagaimana sistem pembayaran proyek di PrimaSpace?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Sistem pembayaran dilakukan secara bertahap (termin) berbasis persentase pencapaian progress fisik di lapangan. Prosedur ini menjamin keadilan keuangan dan akuntabilitas pengerjaan bagi klien.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah bisa menggunakan gambar arsitek dari pihak luar?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Sangat bisa. Tim teknis dan estimator kontraktor Denpasar kami akan meninjau ulang kelayakan teknis cetak biru gambar kerja tersebut untuk disesuaikan ke dalam perhitungan RAB konstruksi fisik.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah PrimaSpace melayani pembangunan di luar Denpasar?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ya, area operasional kami mencakup seluruh pulau Bali. Kami melayani proyek konstruksi baik di area Denpasar, Badung (Canggu, Seminyak, Uluwatu), Gianyar (Ubud), Tabanan, hingga kawasan Bali Utara.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}