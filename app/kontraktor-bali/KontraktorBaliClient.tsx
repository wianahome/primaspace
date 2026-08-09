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

const projectProgressGallery = [
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1170&auto=format&fit=crop',
    alt: 'Progress pondasi konstruksi villa Bali',
    title: 'Pondasi & Struktur',
    caption: 'Foto pengerjaan pondasi dan struktur awal proyek villa di Bali.',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1170&auto=format&fit=crop',
    alt: 'Pekerja sedang memasang rangka atap dan dinding bangunan',
    title: 'Pemasangan Rangka',
    caption: 'Tahap pemasangan rangka atap dan kolom beton untuk konstruksi yang kuat.',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop',
    alt: 'Pengecoran beton dan pengecekan lokasi proyek',
    title: 'Proses Pengecoran',
    caption: 'Aktivitas pengecoran beton dan inspeksi lapangan dalam proyek konstruksi.',
  },
  {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1170&auto=format&fit=crop',
    alt: 'Tim kontraktor memeriksa rancangan dan progres bahan bangunan',
    title: 'Koordinasi Lapangan',
    caption: 'Foto tim lapangan sedang mengecek progres dan bahan bangunan.',
  },
  {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop',
    alt: 'Finishing interior proyek konstruksi rumah di Bali',
    title: 'Finishing Interior',
    caption: 'Pengerjaan finishing interior, termasuk pemasangan lantai dan detail interior.',
  },
  {
    src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1170&auto=format&fit=crop',
    alt: 'Staf konstruksi memotret progress kerja bangunan',
    title: 'Dokumentasi Proyek',
    caption: 'Dokumentasi foto progres sebagai bukti kerja dan update proyek.',
  },
];

export default function KontraktorBaliClient() {
  return (
    <main className="pt-28 pb-16 bg-[#0d1118] text-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Kontraktor Bali', href: '/kontraktor-bali', current: true },
          ]}
        />
      </div>

      {/* Intro Section */}
      <section className="relative overflow-hidden bg-[#0f1219] text-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,160,99,0.2),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(34,104,255,0.12),_transparent_30%),linear-gradient(180deg,#12151d_0%,#0d1116_80%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_22%),linear-gradient(to_right,rgba(255,255,255,0.02),transparent)] pointer-events-none" />
        <div className="absolute left-8 top-10 h-72 w-72 rounded-full bg-[#c9a063]/10 blur-[100px]" />
        <div className="absolute right-0 top-1/4 h-[38vw] w-[38vw] rounded-full bg-[#2268ff]/10 blur-[140px]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2rem] bg-slate-950/90 border border-slate-700 p-10 shadow-xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
                  Layanan Konstruksi Terintegrasi
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Mitra Kontraktor Bali Custom Terpercaya untuk Bangun Properti Impian
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  PrimaSpace menyediakan solusi kontraktor Bali menyeluruh, mulai dari perancangan arsitektur, perhitungan RAB, pengurusan izin konstruksi, hingga eksekusi pembangunan fisik yang bergaransi.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Setiap konstruksi dikerjakan oleh tukang lokal berpengalaman tinggi di bawah pengawasan ketat *site engineer* profesional. Kami memastikan ketepatan waktu, efisiensi anggaran, dan kualitas ketahanan struktur jangka panjang.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20mau%20konsultasi%20Konstruksi%20Bali%20untuk%20bangun%20villa%20atau%20renovasi%20rumah"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
                  >
                    Konsultasi Konstruksi Bali
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-800 px-7 py-3 text-base font-semibold text-slate-100 transition hover:border-amber-500 hover:text-amber-200"
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
        <div className="grid gap-8 rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-sm lg:grid-cols-3">
          <article className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Layanan Konstruksi</p>
            <h2 className="text-3xl font-semibold text-white">Solusi sipil komprehensif di Bali</h2>
            <p className="text-slate-300">
              Cakupan kerja kami sebagai kontraktor Denpasar terpercaya melayani berbagai model tipologi bangunan baru maupun pengerjaan restorasi/renovasi bangunan lama.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-900/90 p-6 shadow-inner border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Pembangunan Baru (Villa/Rumah)</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Layanan *end-to-end* bangun dari nol dengan koordinasi penuh arsitek, struktur beton kokoh, pengerjaan MEP rapi, dan *finishing* berkualitas tinggi.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-900/90 p-6 shadow-inner border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Renovasi & Perluasan Ruang</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Solusi peremajaan bangunan, modifikasi fasad, peningkatan sistem sanitasi, ataupun penambahan lantai/ruangan properti secara aman dan efisien.
            </p>
          </article>
        </div>
      </section>

      {/* Specific Services Section */}
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-10 shadow-xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Layanan Khusus</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Layanan Kontraktor Bali dan Denpasar</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Spesialisasi kami meliputi pembangunan villa Bali, renovasi rumah Bali, dan penyelesaian proyek konstruksi di Denpasar dengan pengawasan teknis penuh.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-700 bg-slate-900/90 p-8">
              <h3 className="text-xl font-semibold text-white">Pembangunan Villa Bali</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Layanan pembangunan villa custom di Bali, dari desain arsitektur hingga penyelesaian interior. Ideal untuk proyek syariah, resort, dan villa rental di Canggu, Ubud, dan Seminyak.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-700 bg-slate-900/90 p-8">
              <h3 className="text-xl font-semibold text-white">Renovasi Rumah Bali</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Renovasi rumah tinggal dan perumahan premium di Denpasar, Badung, dan Gianyar. Termasuk perbaikan struktur, fasad, dan upgrade sistem MEP untuk kenyamanan modern.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-700 bg-slate-900/90 p-8">
              <h3 className="text-xl font-semibold text-white">Kontraktor Denpasar Terpercaya</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Tim kontraktor Denpasar kami siap menangani pembangunan rumah, villa, ruko, dan proyek komersial lain dengan pengurusan izin IMB, kontrol kualitas, dan delivery tepat waktu.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Related Services Links */}
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-10 shadow-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Layanan Terkait</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Lihat layanan konstruksi dan desain Bali lainnya</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/jasa-arsitek-bali"
              className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6 text-left transition hover:border-amber-400 hover:bg-slate-800"
            >
              <h3 className="text-lg font-semibold text-white">Jasa Arsitek Bali</h3>
              <p className="mt-2 text-sm text-slate-300">Desain arsitektur villa dan rumah di Bali untuk proyek bangun baru dan renovasi.</p>
            </Link>
            <Link
              href="/kontraktor-interior-bali"
              className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6 text-left transition hover:border-amber-400 hover:bg-slate-800"
            >
              <h3 className="text-lg font-semibold text-white">Kontraktor Interior Bali</h3>
              <p className="mt-2 text-sm text-slate-300">Pengerjaan interior rumah, villa, kantor, dan retail oleh kontraktor interior Bali profesional.</p>
            </Link>
            <Link
              href="/kontraktor-kolam-renang-bali"
              className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6 text-left transition hover:border-amber-400 hover:bg-slate-800"
            >
              <h3 className="text-lg font-semibold text-white">Kontraktor Kolam Renang Bali</h3>
              <p className="mt-2 text-sm text-slate-300">Pembuatan dan renovasi kolam renang custom untuk villa dan properti komersial Bali.</p>
            </Link>
            <Link
              href="/desain-interior-bali"
              className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6 text-left transition hover:border-amber-400 hover:bg-slate-800"
            >
              <h3 className="text-lg font-semibold text-white">Desain Interior Bali</h3>
              <p className="mt-2 text-sm text-slate-300">Solusi desain interior Bali untuk ruang tamu, kamar, dapur, dan kitchen set custom.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-10 shadow-xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl bg-slate-900/90 p-8 border border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Bukti Sosial</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Klien Kontraktor Bali Puas</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Lebih dari 50 proyek villa, rumah, dan ruko di Bali selesai dengan hasil memuaskan. Klien kami merekomendasikan PrimaSpace sebagai kontraktor Bali terpercaya untuk konstruksi berkualitas.
              </p>
            </article>

            <article className="rounded-3xl bg-slate-900/90 p-8 border border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Pengalaman Terbukti</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Tim Kontraktor Denpasar Profesional</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Tim teknis kami terdiri dari arsitek, struktur engineer, dan supervisor lapangan berpengalaman di proyek Denpasar, Badung, dan Ubud. Proses pengawasan dan quality control terintegrasi.
              </p>
            </article>

            <article className="rounded-3xl bg-slate-900/90 p-8 border border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Legalitas & Garansi</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Izin IMB & Garansi Bangunan</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Semua proyek kontraktor Bali kami didukung pengurusan izin bangunan, dokumen IMB/PBG, dan jaminan kualitas pasca-serah terima. Kami menjaga reputasi sebagai kontraktor Bali yang dapat dipercaya.
              </p>
            </article>
          </div>
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
              className="overflow-hidden rounded-3xl bg-slate-950/90 shadow-lg ring-1 ring-slate-700"
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
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Dikerjakan secara presisi tinggi, menggunakan kombinasi material alam lokal Bali dan teknologi modern yang berkelanjutan.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Technical and Keywords Section */}
      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-700 bg-slate-950/90 p-10 shadow-xl lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Pilar Utama Layanan</p>
            <h2 className="text-3xl font-semibold text-white">Mengapa Memilih Kontraktor Kami?</h2>
            <p className="text-slate-300">
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
            <div className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
              <p className="text-lg font-semibold text-white">Transparansi RAB & Bahan</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Setiap item pengerjaan dan merek spesifikasi material tercatat detail dalam RAB, menghindarkan Anda dari biaya tersembunyi yang mendadak.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
              <p className="text-lg font-semibold text-white">Legalitas & Regulasi Aman</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
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
            <div className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
              <p className="text-lg font-semibold text-white">Laporan Proyek Berkala</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Meskipun Anda berada di luar kota atau luar negeri, Anda akan menerima *update* berkala progress fisik berupa foto & video mingguan.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
              <p className="text-lg font-semibold text-white">Manajemen Tukang Ahli</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Kombinasi tukang spesialis struktur beton bertulang dan pengrajin ukiran batu alam lokal Bali menghasilkan bangunan artistik yang kokoh.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio / Testimonial Section */}
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-10 shadow-xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Portofolio & Testimoni</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Proyek Nyata Kontraktor Bali dan Kepercayaan Klien</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              PrimaSpace telah menyelesaikan pembangunan villa, rumah, dan renovasi di Bali dengan tim kontraktor Denpasar yang profesional. Berikut pengalaman nyata klien yang mempercayakan proyek konstruksi Bali kepada kami.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-700 bg-slate-900/90 p-8">
              <h3 className="text-xl font-semibold text-white">Villa Canggu Sukses Tuntas</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Proyek pembangunan villa mewah di Canggu selesai tepat waktu oleh tim kontraktor Bali kami. Klien memuji kelengkapan dokumentasi IMB dan kualitas finishing yang rapi.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-700 bg-slate-900/90 p-8">
              <h3 className="text-xl font-semibold text-white">Renovasi Rumah Denpasar</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Renovasi rumah tinggal di Denpasar dipercepat tanpa mengurangi kualitas struktur. Kontraktor Denpasar kami menjaga komunikasi transparan dan update progres mingguan.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-700 bg-slate-900/90 p-8">
              <h3 className="text-xl font-semibold text-white">Kompleks Ruko Bali Utara</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Pembangunan ruko komersial di Bali Utara dikelola oleh kontraktor Bali PrimaSpace dengan pengawasan lapangan ketat dan jaminan kualitas bahan.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Project Progress Photo Gallery */}
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-10 shadow-xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Galeri Progres</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Foto Potong Pengerjaan Proyek</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Dokumentasi visual dari proses kerja proyek konstruksi Bali, mulai dari pondasi awal hingga finishing interior.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectProgressGallery.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 shadow-sm">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={680}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-10 shadow-xl">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">FAQ</p>
            <h2 className="text-3xl font-semibold text-white">Pertanyaan Umum Mengenai Jasa Kontraktor Bali</h2>
            <div className="grid gap-6">
              <article className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white">Apa saja layanan kontraktor Bali yang ditawarkan PrimaSpace?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Kami menawarkan pembangunan villa Bali, renovasi rumah Bali, bangun rumah tinggal, renovasi komersial, dan pengurusan izin IMB/PBG. Semua proyek dikelola oleh tim kontraktor Denpasar berpengalaman.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white">Berapa lama renovasi rumah Bali biasanya selesai?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Durasi renovasi rumah Bali bergantung pada skala proyek. Sebagai kontraktor Bali terpercaya, kami dapat memberikan estimasi lebih tepat setelah survei lokasi dan penyesuaian RAB.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white">Bagaimana PrimaSpace menangani proyek di Denpasar dan Bali Utara?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Kami melayani seluruh area Bali, termasuk Denpasar, Badung, Canggu, Ubud, Tabanan, Gianyar, dan Bali Utara. Tim kontraktor Denpasar kami memastikan semua jadwal dan persyaratan teknis terpenuhi.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white">Mengapa memilih kontraktor Bali lokal untuk proyek saya?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Kontraktor Bali lokal memahami regulasi, kondisi lapangan, dan jaringan pemasok material di Bali. PrimaSpace menawarkan pengawasan lapangan lokal dan solusi konstruksi sesuai budaya Bali.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white">Apakah PrimaSpace menangani izin IMB/PBG Bali?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Ya. Sebagai kontraktor Bali terpercaya, kami membantu mengurus izin IMB/PBG untuk proyek pembangunan dan renovasi di Bali, termasuk verifikasi zonasi dan dokumen teknis.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-900/90 p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white">Bagaimana estimasi RAB kontraktor Bali dibuat?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Estimasi RAB kontraktor Bali disusun berdasarkan spesifikasi material, desain arsitektur, volume pekerjaan, dan lokasi proyek. Kami memberikan RAB transparan untuk menghindari biaya tambahan selama konstruksi.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}