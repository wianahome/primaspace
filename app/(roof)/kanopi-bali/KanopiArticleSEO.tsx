export default function KanopiArticleSEO() {
  // Schema Markup FAQPage untuk Google Rich Snippet
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Berapa biaya pembuatan kanopi per meter di Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Biaya pembuatan kanopi di Bali berkisar antara Rp 350.000 hingga Rp 1.800.000 per meter persegi (m²), tergantung jenis atap (Alderon, Kaca Tempered, Solartuff, Spandek) dan material rangka yang digunakan (Baja Ringan, Besi Hollow, atau Kayu).',
        },
      },
      {
        '@type': 'Question',
        name: 'Atap kanopi apa yang paling tahan panas untuk cuaca Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atap Alderon (uPVC berongga) dan Atap Bitumen Aspal adalah pilihan terbaik untuk meredam panas matahari tropis di Bali secara optimal serta kedap suara saat hujan deras.',
        },
      },
      {
        '@type': 'Question',
        name: 'Berapa lama proses pembuatan dan pemasangan kanopi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Proses pabrikasi dan perakitan rangka membutuhkan waktu 2–4 hari kerja, sedangkan pengerjaan instalasi langsung di lokasi pelanggan biasanya selesai dalam 1–2 hari.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah melayani survey lokasi gratis di wilayah Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, kami melayani jasa survey, pengukuran lokasi, dan pembuatan Rancangan Anggaran Biaya (RAB) secara gratis untuk area Denpasar, Badung, Canggu, Sanur, Ubud, dan sekitarnya.',
        },
      },
    ],
  };

  return (
    <article className="py-16 px-6 bg-white border-t border-slate-200 text-slate-800">
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* ARTIKEL UTAMA */}
        <header className="space-y-4">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Panduan & Edukasi Kanopi Bali
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Panduan Memilih Kanopi Rumah, Villa & Cafe Terbaik di Bali
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Pemasangan **kanopi di Bali** bukan sekadar pelindung dari paparan sinar matahari tropis dan hujan deras, melainkan juga bagian penting dari estetika eksterior hunian. Baik untuk *carport* rumah tinggal di Denpasar, area *outdoor* villa di Canggu, hingga teras cafe di Ubud, pemilihan jenis atap dan rangka yang tepat sangat menentukan keawetan bangunan Anda.
          </p>
        </header>

        <hr className="border-slate-100" />

        {/* SUBSECTION 1 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Faktor Penting Memilih Kanopi untuk Iklim Tropis Pesisir Bali
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Karena wilayah Bali memiliki kelembapan tinggi serta paparan uap garam di area dekat pantai, pastikan Anda mempertimbangkan hal-hal berikut sebelum memasang kanopi:
          </p>
          <ul className="grid md:grid-cols-2 gap-3 pt-2 text-slate-700">
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Ketahanan Korosi:</strong> Gunakan rangka baja ringan bermutu tinggi atau cat pelapis anti-karat pada besi hollow.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Peredam Panas & Suara:</strong> Atap berbahan uPVC atau bitumen sangat disarankan untuk area hunian yang tenang.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Kekuatan Struktur:</strong> Rangka harus diperhitungkan dengan presisi agar tahan terhadap terpaan angin pesisir.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 py-3 px-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Estetika Desain:</strong> Sesuaikan model kanopi dengan gaya bangunan (Minimalis, Modern Glass, atau Tropis Etnik).</span>
            </li>
          </ul>
        </section>

        {/* SUBSECTION 2: TABEL PERBANDINGAN */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Perbandingan Jenis Atap Kanopi Populer
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Berikut adalah perbandingan material atap kanopi yang paling banyak digunakan di Bali:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 border border-slate-300">Jenis Atap</th>
                  <th className="p-3 border border-slate-300">Keunggulan Utama</th>
                  <th className="p-3 border border-slate-300">Tingkat Peredam Panas</th>
                  <th className="p-3 border border-slate-300">Cocok Untuk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Alderon (uPVC)</td>
                  <td className="p-3 border">Sangat adem, kedap suara hujan, kuat & awet</td>
                  <td className="p-3 border text-green-700 font-semibold">Sangat Tinggi</td>
                  <td className="p-3 border">Carport & Garasi Rumah</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Kaca Tempered</td>
                  <td className="p-3 border">Mewah, transparan, pencahayaan maksimal</td>
                  <td className="p-3 border text-amber-700">Sedang (Perlu Lapisan Film)</td>
                  <td className="p-3 border">Villa, Cafe, & Canopy Entrance</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Solartuff / Solarflat</td>
                  <td className="p-3 border">Bening seperti kaca, tidak mudah pecah, anti-UV</td>
                  <td className="p-3 border text-amber-700">Sedang</td>
                  <td className="p-3 border">Teras, Void, & Area Jemur</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Kanopi Kain (Awning)</td>
                  <td className="p-3 border">Desain estetis khas Eropa, opsi warna beragam</td>
                  <td className="p-3 border text-green-700 font-semibold">Tinggi</td>
                  <td className="p-3 border">Storefront, Jendela, & Balon Villa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION FAQ */}
        <section className="space-y-6 pt-6">
          <div className="border-t border-slate-200 pt-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Pertanyaan Sering Diajukan (FAQ) Seputar Kanopi Bali
            </h3>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer">
                    <span>{faq.name}</span>
                    <span className="transition group-open:-rotate-180 text-amber-600">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-3">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}