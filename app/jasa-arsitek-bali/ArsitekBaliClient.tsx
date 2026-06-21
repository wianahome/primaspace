'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/Breadcrumb';

const designGallery = [
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1170&auto=format&fit=crop',
    alt: 'Rendering desain 3D arsitek villa mewah di Uluwatu Bali',
    title: 'Clifffront Villa Uluwatu',
  },
  {
    src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1170&auto=format&fit=crop',
    alt: 'Desain rumah tinggal modern tropis minimalis di Denpasar',
    title: 'Modern Tropical Denpasar',
  },
  {
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1170&auto=format&fit=crop',
    alt: 'Konsep desain butik hotel dan resort mewah di Ubud Bali',
    title: 'Boutique Resort Ubud Concept',
  },
];

export function ArsitekBaliClient() {
  return (
    <main className="pt-28 pb-16 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Jasa Arsitek Bali', href: '/jasa-arsitek-bali', current: true },
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
                  Professional Architecture & Interior Design
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Arsitek Bali Profesional: Solusi Gambar Kerja Detail & Visualisasi Eksklusif
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  PrimaSpace menyediakan layanan jasa arsitek Bali terlengkap untuk merancang hunian privat, komersial sewa, hingga hospitality resort. Kami percaya desain yang sukses adalah sintesis dari kenyamanan ruang, kekuatan struktur, serta keunikan visual.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Bersama tim arsitek Denpasar kami, seluruh rancangan disiapkan dengan mempertimbangkan regulasi bangunan setempat, struktur zonasi tata ruang hijau, serta efisiensi anggaran pelaksanaan (*budget-oriented design*).
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20mau%20konsultasi%20mengenai%20kebutuhan%20desain%20arsitektur%20di%20Bali"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
                  >
                    Diskusi Konsep Bersama Arsitek
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-900 transition hover:border-amber-500 hover:text-amber-600"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>

              {/* Side Card Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative overflow-hidden rounded-[2rem] bg-slate-900/95 p-6 shadow-2xl sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,160,99,0.2),_transparent_35%)]" />
                <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Complete Deliverables</p>
                  <h2 className="mt-4 text-3xl font-semibold">Cetak Biru Siap PBG / IMB</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Paket dokumen lengkap mencakup Gambar Arsitektur, Rencana Struktur Civil, Utilitas (MEP), hingga visualisasi render 3D resolusi tinggi.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Tahapan Kerja</p>
            <h2 className="text-3xl font-semibold text-slate-900">Alur Perancangan Arsitektur</h2>
            <p className="text-slate-600">
              Proses desain terstruktur rapi untuk memastikan setiap detail kebutuhan ruangan Anda tereksekusi dengan sempurna tanpa ada yang terlewat.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">1. Konsep & Layout Ruang</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Analisis kebutuhan klien, zonasi denah lantai, orientasi arah matahari/angin, serta penentuan garis besar sirkulasi bangunan di atas lahan tapak.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">2. Pemodelan 3D & Rendering</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Transformasi denah mentah menjadi model digital tiga dimensi yang realistis. Anda dapat melihat secara detail kombinasi warna fasad, bentuk atap, dan pencahayaan lampu sebelum fisik dibangun.
            </p>
          </article>
        </div>
      </section>

      {/* Design Gallery Section */}
      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {designGallery.map((item, index) => (
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
                  Menonjolkan nilai arsitektur tropis yang adaptif, ramah lingkungan, minim perawatan jangka panjang, dan bernilai investasi tinggi.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Technical and Value Section */}
      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Keunggulan Studio</p>
            <h2 className="text-3xl font-semibold text-slate-900">Mengapa Mendesain Bersama PrimaSpace?</h2>
            <p className="text-slate-600">
              Sebagai penyedia jasa arsitek Bali yang berpengalaman, kami memastikan bahwa dokumen cetak biru kami akurat, komunikatif, dan mempermudah kerja kontraktor pelaksana di lapangan.
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
              <p className="text-lg font-semibold text-slate-900">Gambar Kerja Super Detail</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Dokumen Bestek/DED (*Detailed Engineering Design*) kami mencakup detail pola lantai, rencana kusen pintu/jendela, titik saklar, lampu, hingga pemipaan air bersih & kotor.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Desain Berbasis Anggaran</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Arsitek kami merancang dengan patokan pagu anggaran (*budget*) Anda, sehingga meminimalisir risiko gambar yang indah namun tidak mampu direalisasikan karena keterbatasan dana.
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
              <p className="text-lg font-semibold text-slate-900">Kombinasi Interior Kustom</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Kami menawarkan integrasi paket desain arsitektur luar bangunan yang senada dengan penataan furnitur interior dan *kitchen set* kustom Anda.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Paham Aturan Lokal Bali</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Mematuhi batas ketinggian bangunan maksimal di Bali (15 meter), aturan sempadan jalan/pantai, dan estetika bentuk ornamen tradisional modern.
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
            <h2 className="text-3xl font-semibold text-slate-900">Pertanyaan Umum Mengenai Jasa Arsitek Bali</h2>
            <div className="grid gap-6">
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apa saja berkas fisik / digital yang didapatkan klien?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Klien akan menerima bundel dokumen cetak (A3) dan file digital PDF/CAD yang berisi: Denah Arsitektur lengkap, Gambar Perspektif Render 3D (Eksterior & Interior pilihan), Rencana Pondasi/Struktur Beton, serta Rencana Elektrikal & Plumbing (MEP) untuk syarat pengajuan PBG.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Bagaimana perhitungan tarif jasa arsitek di PrimaSpace?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tarif dihitung secara transparan berdasarkan luasan total lantai bangunan per meter persegi. Sistem ini memudahkan klien memprediksi biaya desain secara adil sejak awal konsultasi.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah arsitek bersedia melakukan pengawasan berkala saat konstruksi?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ya. Untuk memastikan hasil pembangunan fisik di lapangan berjalan akurat dan presisi sesuai cetak biru rencana desain, arsitek kami menyediakan jadwal peninjauan (*site visit*) berkala secara terjadwal.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}