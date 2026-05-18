'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/Breadcrumb';

const kitchenGallery = [
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    alt: 'Kitchen set minimalis Bali dengan lemari putih',
    title: 'Kitchen Set Minimalis Bali',
  },
  {
    src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80',
    alt: 'Dapur modern Denpasar dengan kitchen set custom',
    title: 'Kitchen Set Denpasar',
  },
  {
    src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80',
    alt: 'Kitchen set Bali dengan material kayu alami dan rak terbuka',
    title: 'Kitchen Set Kayu Bali',
  },
];

export function KitchenSetBaliClient() {
  return (
    <main className="pt-28 pb-16 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Kitchen Set Bali', href: '/kitchen-set-bali', current: true },
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
                  Kitchen Set Denpasar
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Kitchen Set Bali Custom untuk Dapur Denpasar dan Seluruh Pulau Bali
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  PrimaSpace menghadirkan kitchen set Bali dengan desain custom, fungsi maksimal,
                  dan material berkualitas. Cocok untuk dapur rumah, villa, dan properti komersial
                  di Denpasar dan sekitarnya.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Setiap proyek kitchen set Denpasar dirancang untuk mengoptimalkan ruang, alur
                  kerja dapur, dan estetika modern. Kami mendukung gaya minimalis, industrial,
                  maupun nuansa Bali natural.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="https://wa.me/6281234567890?text=Halo%20PrimaSpace,%20saya%20mau%20konsultasi%20kitchen%20set%20Denpasar"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
                  >
                    Konsultasi Kitchen Set
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
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Kitchen Set Gallery</p>
                  <h2 className="mt-4 text-3xl font-semibold">Inspirasi Dapur Denpasar</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Lihat contoh kitchen set custom kami yang menggabungkan fungsi dapur dan keindahan Bali.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Solusi Kitchen Set</p>
            <h2 className="text-3xl font-semibold text-slate-900">Kitchen set Bali yang cocok untuk setiap dapur</h2>
            <p className="text-slate-600">
              Layanan kitchen set Denpasar kami meliputi konsultasi desain, produksi, dan pemasangan.
              Setiap desain menyesuaikan gaya hidup keluarga, area memasak, serta layout dapur Bali.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Kitchen set custom Denpasar</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Desain kitchen set custom dibuat untuk ruang sempit maupun dapur luas dengan fokus
              ergonomi dan storage yang optimal.
            </p>
          </article>
          <article className="rounded-3xl bg-slate-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-slate-900">Dapur minimalis Bali</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Konsep kitchen set minimalis Bali memaksimalkan ruang dan tetap memberikan suasana
              natural lewat material kayu dan finishing netral.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {kitchenGallery.map((item, index) => (
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
                  Kitchen set Denpasar dengan desain modern dan material berkualitas untuk dapur Bali.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Kata Kunci Pendukung</p>
            <h2 className="text-3xl font-semibold text-slate-900">Keyword relevan untuk kitchen set Bali</h2>
            <p className="text-slate-600">
              Halaman ini menargetkan keyword seperti kitchen set Denpasar, kitchen set custom Bali,
              kitchen set minimalis, desain kitchen set Denpasar, dan kitchen set modern Bali.
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
              <p className="text-lg font-semibold text-slate-900">Material berkualitas</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Kitchen set Bali kami menggunakan bahan kayu, HPL, dan aksen komposit yang tahan lama
                dan mudah dibersihkan.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Pemasangan cepat</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Tim kitchen set Denpasar siap memasang kitchen set dengan presisi sehingga proses
                renovasi dapur berjalan lancar.
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
              <p className="text-lg font-semibold text-slate-900">Desain fungsional</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Tata letak kitchen set dirancang untuk alur memasak yang efisien, storage teratur,
                dan estetika Bali modern.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Layanan konsultasi</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Konsultasi desain dilakukan untuk memastikan kitchen set Denpasar sesuai kebutuhan
                dan budget Anda.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">FAQ</p>
            <h2 className="text-3xl font-semibold text-slate-900">Pertanyaan Umum Kitchen Set Denpasar</h2>
            <div className="grid gap-6">
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Berapa lama proses kitchen set custom Bali?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Proses desain dan produksi kitchen set custom Bali biasanya memakan waktu 3-5 minggu,
                  tergantung kompleksitas dan bahan yang dipilih.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah kitchen set Denpasar bisa dibuat untuk dapur kecil?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ya. Kami mengoptimalkan layout kitchen set Bali untuk ruang dapur kecil agar fungsional
                  dan tetap terlihat luas.
                </p>
              </article>
              <article className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Apakah bisa memasang kitchen set Bali di luar Denpasar?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tentu. Layanan kami mencakup seluruh Bali, dengan pemasangan kitchen set custom baik
                  di Denpasar maupun kawasan lain di pulau Bali.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
