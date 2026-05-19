// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-28">
      <section className="min-h-screen flex items-center bg-[radial-gradient(circle_at_top,_rgba(241,245,249,0.95),_transparent_36%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)]">
        <div className="max-w-6xl mx-auto px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-10 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.2)]">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500 mb-6">Interior & Kontraktor Bali</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 leading-tight">
                Ruang yang terasa lapang, bersih, dan dirancang rapi untuk setiap momen.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                PrimaSpace menghadirkan pengalaman desain interior, kitchen set, serta booth pameran dengan nuansa modern dan detail yang presisi. Solusi elegan untuk properti, kantor, retail, dan hunian Bali.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="https://wa.me/6281234567890?text=Halo%20PrimaSpace,%20saya%20tertarik"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_40px_-20px_rgba(15,23,42,0.35)] transition-colors hover:bg-slate-800"
                >
                  Konsultasi Gratis →
                </Link>
                <Link
                  href="/desain-interior-bali"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-medium text-slate-900 transition hover:border-slate-300"
                >
                  Lihat Layanan
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Keunggulan</p>
                  <p className="mt-4 text-lg font-semibold text-slate-900">Detail arsitektural, material premium, dan penyelesaian rapi.</p>
                </div>
                <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Pendekatan</p>
                  <p className="mt-4 text-lg font-semibold text-slate-900">Konsultasi cepat, proses transparan, dan desain yang terasa intuitif.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" aria-label="Portofolio PrimaSpace">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mx-auto max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Portofolio</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-950">Karya dengan kualitas ala Apple</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Proyek interior, kitchen set, booth pameran, dan kantor yang tampil bersih, modern, dan menenangkan.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.18)] transition hover:-translate-y-1">
              <div className="text-5xl mb-5">🏠</div>
              <h3 className="font-semibold text-xl text-slate-900">Desain Interior Villa</h3>
              <Link href="/desain-interior-bali" className="mt-4 inline-block text-sm font-medium text-slate-700 hover:text-slate-900">
                Lihat Detail →
              </Link>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.18)] transition hover:-translate-y-1">
              <div className="text-5xl mb-5">🍳</div>
              <h3 className="font-semibold text-xl text-slate-900">Kitchen Set Modern</h3>
              <Link href="/kitchen-set-bali" className="mt-4 inline-block text-sm font-medium text-slate-700 hover:text-slate-900">
                Lihat Detail →
              </Link>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.18)] transition hover:-translate-y-1">
              <div className="text-5xl mb-5">🎪</div>
              <h3 className="font-semibold text-xl text-slate-900">Booth Pameran</h3>
              <Link href="/booth-pameran-bali" className="mt-4 inline-block text-sm font-medium text-slate-700 hover:text-slate-900">
                Lihat Detail →
              </Link>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.18)] transition hover:-translate-y-1">
              <div className="text-5xl mb-5">🏢</div>
              <h3 className="font-semibold text-xl text-slate-900">Kantor & Retail</h3>
              <Link href="/kontraktor-interior-bali" className="mt-4 inline-block text-sm font-medium text-slate-700 hover:text-slate-900">
                Lihat Detail →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}