import React from 'react';

interface AreaGroup {
  region: string;
  badge: string;
  accentColor: 'cyan' | 'fuchsia' | 'pink';
  districts: string[];
  description: string;
}

const areaData: AreaGroup[] = [
  {
    region: 'Kabupaten Badung (Pusat Pariwisata)',
    badge: 'Respons Tercepat',
    accentColor: 'cyan',
    description: 'Layanan utama untuk kafe, beach club, resort, dan toko retail di kawasan pariwisata teramai Bali.',
    districts: ['Canggu', 'Seminyak', 'Kuta', 'Legian', 'Jimbaran', 'Nusa Dua', 'Uluwatu', 'Mengwi'],
  },
  {
    region: 'Kota Denpasar & Sekitarnya',
    badge: 'Free Survei',
    accentColor: 'fuchsia',
    description: 'Pusat pembuatan neon box bisnis, perkantoran, ruko, klinik, dan pusat perbelanjaan di ibu kota.',
    districts: ['Denpasar Barat', 'Denpasar Timur', 'Denpasar Selatan', 'Denpasar Utara', 'Sanur', 'Renon'],
  },
  {
    region: 'Gianyar & Tabanan',
    badge: 'Jangkauan Luas',
    accentColor: 'pink',
    description: 'Pembuatan signage estetik untuk villa, boutique hotel, tempat rekreasi, & kafe bernuansa alam.',
    districts: ['Ubud', 'Sukawati', 'Tebongkang', 'Kedewatan', 'Kediri Tabanan', 'Kota Tabanan'],
  },
];

const outerAreas = [
  'Singaraja / Buleleng',
  'Karangasem / Amed',
  'Jembrana / Negara',
  'Klungkung / Nusa Penida',
  'Bangli',
];

export default function ServiceArea() {
  return (
    <section id="wilayah-layanan" className="py-24 bg-slate-950 text-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Jangkauan Operasional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Melayani Pembuatan & Pemasangan <br />
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Neon Box di Seluruh Wilayah Bali
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tim workshop dan teknisi kami siap melayani survei lokasi, pengiriman, hingga instalasi rapi langsung di tempat usaha Anda.
          </p>
        </div>

        {/* Primary Area Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {areaData.map((area) => {
            const isCyan = area.accentColor === 'cyan';
            const isFuchsia = area.accentColor === 'fuchsia';

            const borderHoverClass = isCyan
              ? 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
              : isFuchsia
              ? 'hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]'
              : 'hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]';

            const badgeBg = isCyan
              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
              : isFuchsia
              ? 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30'
              : 'bg-pink-500/10 text-pink-300 border-pink-500/30';

            const dotColor = isCyan ? 'bg-cyan-400' : isFuchsia ? 'bg-fuchsia-400' : 'bg-pink-400';

            return (
              <div
                key={area.region}
                className={`relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between backdrop-blur-md transition-all duration-500 group ${borderHoverClass}`}
              >
                <div>
                  {/* Badge & Title */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${badgeBg}`}>
                      {area.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">📍 Bali Area</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {area.region}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 border-b border-slate-800 pb-4">
                    {area.description}
                  </p>

                  {/* District Chips / Pills */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Cakupan Kecamatan & Area:</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {area.districts.map((district) => (
                        <span
                          key={district}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-300"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                          {district}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20mau%20tanya%20pemasangan%20di%20area%20${encodeURIComponent(
                    area.region
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-cyan-500 hover:border-cyan-500 hover:text-slate-950 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>Cek Jadwal Survei Area Ini</span>
                  <span>→</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Outer Bali Area Banner */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🚚</span> Melayani Pengiriman & Pemasangan Luar Kota Bali
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Lokasi usaha Anda berada di kabupaten Bali lainnya? Kami tetap melayani pengiriman khusus & teknisi pemasangan.
              </p>
            </div>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20apakah%20bisa%20pemasangan%20di%20luar%20Badung%20Denpasar?"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/20 transition-all text-center"
            >
              Konsultasi Wilayah Lain
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
            <span className="text-xs text-slate-500 font-medium mr-2">Wilayah Tambahan:</span>
            {outerAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-md bg-slate-950 text-slate-400 text-xs border border-slate-800"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}