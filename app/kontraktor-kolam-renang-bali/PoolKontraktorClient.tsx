'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/Breadcrumb';

const poolGallery = [
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop',
    alt: 'Pembuatan kolam renang overflow villa Bali dengan batu sukabumi',
    title: 'Luxury Overflow Pool Villa',
  },
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop',
    alt: 'Desain kolam renang minimalis skimmer untuk rumah tinggal di Denpasar',
    title: 'Skimmer Pool Residensial',
  },
  {
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1049&auto=format&fit=crop',
    alt: 'Konstruksi infinity pool tebing dengan pemandangan alam di Bali',
    title: 'Infinity Pool Custom Bali',
  },
];

export function PoolKontraktorClient() {
  return (
    <main className="pt-28 pb-16 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Kontraktor Kolam Renang Bali', href: '/kontraktor-kolam-renang-bali', current: true },
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
                  Pool Builder & Mechanical Specialist
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Jasa Pembuatan Kolam Renang Bali Bergaransi Anti-Bocor & Konstruksi Kokoh
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  PrimaSpace menyediakan solusi kontraktor kolam renang Bali yang terintegrasi. Layanan kami mencakup desain 3D arsitektural, penggalian tanah, pengecoran beton berkualitas tinggi (K-300+), sistem *waterproofing* berlapis, hingga instalasi pemipaan (*plumbing*) ruang pompa.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Setiap konstruksi kolam renang di Denpasar, Badung, dan wilayah Bali lainnya dikerjakan dengan standar keamanan ketat untuk menahan pergeseran struktur tanah tropis, menjamin kolam bebas retak dan bocor dalam jangka panjang.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20mau%20konsultasi%20desain%20dan%20biaya%20pembuatan%20kolam%20renang%20Bali"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
                  >
                    Konsultasi & Survey Gratis
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-900 transition hover:border-amber-500 hover:text-amber-600"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>

              {/* Side Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative overflow-hidden rounded-[2rem] bg-slate-900/95 p-6 shadow-2xl sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,160,99,0.2),_transparent_35%)]" />
                <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Waterproofing Guarantee</p>
                  <h2 className="mt-4 text-3xl font-semibold">Garansi Kebocoran 5 Tahun</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Jaminan perlindungan struktural dan kekuatan lapisan kedap air (*waterproofing*) cor beton kolam renang Anda.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Sistem Sirkulasi</p>
            <h2 className="text-3xl font-semibold text-slate-900">Jenis kolam renang kustom kami</h2>
            <p className="text-slate-600">
              Sebagai kontraktor kolam renang Denpasar terpercaya, kami menyesuaikan jenis instalasi mekanis sirkulasi air berdasarkan luas lahan dan preferensi visual Anda.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Sistem Overflow & Infinity</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Desain air meluap di pinggiran kolam yang disalurkan ke *gutter* dan *balancing tank*. Menghasilkan estetika visual mewah, rata dengan lantai, dan pembersihan permukaan air yang konstan.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Sistem Skimmer Konvensional</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pilihan ideal untuk lahan terbatas atau kolam renang minimalis Bali. Air tidak meluap melainkan dihisap lewat kotak skimmer, hemat ruang tanpa memerlukan tangki penyeimbang ekstra.
            </p>
          </article>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {poolGallery.map((item, index) => (
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
                  Finishing interior menggunakan material eksklusif seperti Mosaic Glass Tiles atau Batu Alam Hijau Sukabumi untuk refleksi warna air yang biru jernih natural.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pillars Section */}
      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Spesialisasi Teknis</p>
            <h2 className="text-3xl font-semibold text-slate-900">Mengapa Memilih Jasa Kolam Kami?</h2>
            <p className="text-slate-600">
              Pembuatan kolam renang di Bali membutuhkan pemahaman sirkulasi cairan (*plumbing*) yang presisi tinggi agar air tidak cepat keruh, hijau, ataupun berlumut.
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
              <p className="text-lg font-semibold text-slate-900">Pembesian & Cor Kuat</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Menggunakan anyaman besi dua lapis (*double layer*) dengan ketebalan standar teknik sipil untuk meminimalisir risiko retak akibat getaran/gempa ringan.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Pompa & Filtrasi Premium</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Instalasi *sand filter* dan pompa sirkulasi menggunakan merek global berstandar industri (seperti Hayward/Emaux) yang hemat energi dan tahan lama.
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
              <p className="text-lg font-semibold text-slate-900">Water Treatment Presisi</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Penyetelan kadar pH dan klorin air pertama pasca-pembangunan dilakukan oleh tim ahli kami agar air langsung aman digunakan bagi kulit sensitif.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Jasa Renovasi & Kebocoran</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Melayani pembongkaran keramik tua, perbaikan pipa sirkulasi bawah tanah yang pecah, serta pengerjaan *waterproofing* ulang kolam bocor.
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
            <h2 className="text-3xl font-semibold text-slate-900">Pertanyaan Umum Kontraktor Kolam Renang Bali</h2>
            <div className="grid gap-6">
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Berapa kisaran biaya pembuatan kolam renang per meter di Bali?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Biaya bervariasi bergantung pada jenis sirkulasi (Skimmer cenderung lebih ekonomis dibandingkan Overflow), tingkat kesulitan lahan, serta material finishing lantai kolam (keramik standar vs mosaic premium/batu alam Sukabumi). Hubungi kami untuk penawaran RAB detail gratis.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah PrimaSpace melayani sistem kolam air garam (Salt Chlorinator)?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ya. Selain sistem klorin konvensional, kami berpengalaman menginstalasi teknologi *salt chlorinator* (kolam garam) yang lebih ramah di mata, tidak bau menyengat, serta sangat diminati untuk properti komersial seperti villa sewa di daerah Canggu, Uluwatu, dan Seminyak.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Berapa lama waktu pengerjaan sebuah kolam renang custom?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Untuk kolam renang ukuran standar rumah tinggal atau villa privat (misal ukuran 3m x 7m), estimasi waktu konstruksi dari penggalian, pengecoran, pengeringan beton matang, uji rendam, hingga *finishing* memakan waktu kurang lebih 1,5 hingga 2,5 bulan.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}