// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Desain Interior, Kitchen Set & Booth Pameran{' '}
            <span className="text-amber-600">Terbaik di Bali</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl">
            PrimaSpace membantu mewujudkan ruang interior dan booth pameran yang elegan,
            fungsional, dan sesuai anggaran. Kami melayani proyek villa, kantor, retail, serta
            kitchen set modern dengan layanan desain custom dan eksekusi terpercaya.
          </p>

          <div className="mt-8 space-y-3 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <span className="text-lg">Custom Desain Sesuai Kebutuhan & Anggaran</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <span className="text-lg">Tim Berpengalaman Lebih dari 10 Tahun</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <span className="text-lg">Proyek Tepat Waktu & Transparan</span>
            </div>
          </div>

          <Link
            href="https://wa.me/6281234567890?text=Halo%20PrimaSpace,%20saya%20tertarik"
            target="_blank"
            className="inline-block mt-10 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
          >
            Konsultasi Gratis via WhatsApp →
          </Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50" aria-label="Portofolio PrimaSpace">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Portofolio Unggulan Kami
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lihat karya terbaik PrimaSpace untuk berbagai proyek di seluruh Bali
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="font-bold text-lg">Desain Interior Villa</h3>
              <Link href="/desain-interior-bali" className="text-amber-600 text-sm mt-2 inline-block">
                Lihat Detail →
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🍳</div>
              <h3 className="font-bold text-lg">Kitchen Set Modern</h3>
              <Link href="/kitchen-set-bali" className="text-amber-600 text-sm mt-2 inline-block">
                Lihat Detail →
              </Link>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🎪</div>
              <h3 className="font-bold text-lg">Booth Pameran</h3>
              <Link href="/booth-pameran-bali" className="text-amber-600 text-sm mt-2 inline-block">
                Lihat Detail →
              </Link>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="font-bold text-lg">Kantor & Retail</h3>
              <Link href="/kontraktor-interior-bali" className="text-amber-600 text-sm mt-2 inline-block">
                Lihat Detail →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}