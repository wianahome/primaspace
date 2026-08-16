export default function AlumuniumArticleSEO() {
  // Schema Markup FAQPage untuk Google Rich Snippet
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Berapa harga kusen alumunium per meter di Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Harga kusen alumunium di Bali berkisar antara Rp 95.000 hingga Rp 280.000 per meter lari (m1), tergantung merek (Alexindo, YKK AP, Forta, Dacon), ukuran profil (3 inch atau 4 inch), serta pilihan warna/finishing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mengapa kusen alumunium lebih disukai daripada kayu untuk bangunan di Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Alumunium 100% anti rayap, tidak lapuk akibat kelembapan udara tropis Bali, tidak memuai/menyusut, serta memiliki daya tahan tinggi terhadap paparan uap garam pesisir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah melayani pembuatan pintu sliding dan jendela casement kustom?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, kami melayani pabrikasi kustom untuk pintu sliding, pintu lipat (folding door), jendela casement/jungkit, hingga partisi kaca tempered untuk rumah, villa, cafe, dan kantor di seluruh wilayah Bali.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah melayani survey dan pengukuran lokasi gratis di Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, kami menyediakan layanan survey lokasi, pengukuran presisi, dan konsultasi anggaran (RAB) gratis untuk area Denpasar, Badung, Canggu, Seminyak, Ubud, Sanur, dan sekitarnya.',
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
            Panduan & Informasi Alumunium Bali
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Panduan Pemilihan Kusen, Pintu & Jendela Alumunium di Bali
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Penggunaan **kusen alumunium dan kaca** di Bali telah menjadi pilihan favorit utama untuk bangunan hunian minimalis, villa, resort, maupun area komersial. Selain memberikan tampilan yang bersih dan modern, alumunium sangat cocok untuk iklim tropis Bali karena keunggulannya yang tahan kelembapan tinggi serta bebas dari ancaman rayap.
          </p>
        </header>

        <hr className="border-slate-100" />

        {/* SUBSECTION 1 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Keunggulan Utama Material Alumunium untuk Pembangunan di Bali
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Memilih material arsitektural di daerah pesisir dan tropis seperti Bali membutuhkan pertimbangan jangka panjang. Berikut alasan utama mengapa material alumunium lebih unggul:
          </p>
          <ul className="grid md:grid-cols-2 gap-3 pt-2 text-slate-700">
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>100% Anti Rayap:</strong> Terbebas sepenuhnya dari risiko kerusakan akibat hama rayap kayu.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Tahan Cuaca & Kelembapan:</strong> Tidak lapuk, berjamur, atau memuai saat musim hujan basah.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Perawatan Sangat Mudah:</strong> Cukup dibersihkan secara berkala tanpa perlu pengecatan ulang rutin.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Variasi Finis Modern:</strong> Tersedia pilihan Powder Coating, Anodized, hingga motif serat kayu (*woodgrain*).</span>
            </li>
          </ul>
        </section>

        {/* SUBSECTION 2: TABEL PERBANDINGAN */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Perbandingan Merek Kusen Alumunium Populer
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Berikut adalah perbandingan beberapa merek kusen alumunium ternama yang umum digunakan pada proyek bangunan di Bali:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 border border-slate-300">Merek Alumunium</th>
                  <th className="p-3 border border-slate-300">Kelas Kualitas</th>
                  <th className="p-3 border border-slate-300">Ketebalan Profil</th>
                  <th className="p-3 border border-slate-300">Rekomendasi Penggunaan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">YKK AP</td>
                  <td className="p-3 border text-green-700 font-semibold">Premium / High-End</td>
                  <td className="p-3 border">1.35 mm – 1.60 mm</td>
                  <td className="p-3 border">Villa Mewah, Hotel, & Resort Pesisir</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Alexindo</td>
                  <td className="p-3 border text-amber-700 font-semibold">Standard / Popular Choice</td>
                  <td className="p-3 border">1.00 mm – 1.15 mm</td>
                  <td className="p-3 border">Rumah Tinggal, Ruko, & Kantor</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Forta / Dacon</td>
                  <td className="p-3 border text-blue-700 font-semibold">Economical Grade</td>
                  <td className="p-3 border">0.90 mm – 1.00 mm</td>
                  <td className="p-3 border">Renovasi Hemat & Proyek Perumahan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION FAQ */}
        <section className="space-y-6 pt-6">
          <div className="border-t border-slate-200 pt-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Pertanyaan Sering Diajukan (FAQ) Seputar Alumunium Bali
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