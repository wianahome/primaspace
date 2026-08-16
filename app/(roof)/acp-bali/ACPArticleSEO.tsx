export default function ACPArticleSEO() {
  // Schema Markup FAQPage untuk Google Rich Snippet
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Berapa harga pasang ACP per meter di Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Harga pemasangan ACP (Aluminium Composite Panel) di Bali berkisar antara Rp 550.000 hingga Rp 950.000 per meter persegi (m²), tergantung jenis material (PVDF untuk outdoor atau PE untuk indoor), merek ACP (Seven, Marks, Goodsense), ketebalan aluminium, serta tingkat kerumitan rangka hollow.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apa perbedaan ACP jenis PVDF dan PE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ACP jenis PVDF (Polyvinylidene Fluoride) dikhususkan untuk eksterior/luar ruangan karena memiliki ketahanan ekstra terhadap sinar UV, hujan, dan korosi angin laut Bali. Sedangkan ACP jenis PE (Polyester) lebih cocok untuk aplikasi interior seperti partisi ruangan, ceiling, atau penutup kolom.',
        },
      },
      {
        '@type': 'Question',
        name: 'Berapa lama daya tahan ACP untuk fasad gedung di Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ACP berkualitas dengan lapisan PVDF mampu bertahan hingga 10–15 tahun tanpa pudar warna yang signifikan, meskipun terpapar iklim tropis dan kelembapan tinggi khas wilayah pesisir Bali.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah melayani pemotongan motif khusus (ACP CNC Cutting)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, kami melayani pemotongan ACP kustom menggunakan mesin CNC router untuk membuat motif ornamen Bali, pola perforated, maupun logo bisnis untuk tampilan fasad yang lebih eksklusif.',
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
        {/* SECTION ARTIKEL UTAMA */}
        <header className="space-y-4">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Panduan & Informasi ACP Bali
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Panduan Lengkap Pemasangan Aluminium Composite Panel (ACP) di Bali
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Penggunaan **Aluminium Composite Panel (ACP)** kini menjadi standar utama dalam arsitektur modern di Bali. Mulai dari fasad ruko di Denpasar, eksterior resort di Canggu dan Seminyak, hingga jaringan ritel komersial, ACP menawarkan tampilan yang rapi, futuristik, dan tahan terhadap iklim tropis pesisir.
          </p>
        </header>

        <hr className="border-slate-100" />

        {/* SUBSECTION 1 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Mengapa ACP Sangat Populer untuk Bangunan Komersial & Villa di Bali?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Kondisi cuaca di Bali yang cenderung panas dengan paparan sinar matahari intensif serta kelembapan udara tinggi menuntut material eksterior yang tahan lama. ACP menjadi pilihan ideal karena memiliki berbagai keunggulan:
          </p>
          <ul className="grid md:grid-cols-2 gap-3 pt-2 text-slate-700">
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Tahan Tahan Weathering:</strong> Lapisan PVDF mencegah warna memudar akibat sinar UV.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Anti Karat & Rayap:</strong> Bebas risiko korosi dibandingkan material kayu atau besi biasa.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Perawatan Mudah:</strong> Permukaan halus mudah dibersihkan dari debu atau polusi kendaraan.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Fleksibilitas Desain:</strong> Mudah di-grooving, dilipat, atau dipotong menggunakan CNC router.</span>
            </li>
          </ul>
        </section>

        {/* SUBSECTION 2 */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Perbedaan Jenis ACP: Tipe PVDF vs Tipe PE
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Sebelum memutuskan untuk membeli material ACP, penting untuk memahami perbedaan dua jenis bahan utama yang beredar di pasaran:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 border border-slate-300">Kriteria</th>
                  <th className="p-3 border border-slate-300">ACP PVDF (Outdoor)</th>
                  <th className="p-3 border border-slate-300">ACP PE (Indoor)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Penggunaan Main</td>
                  <td className="p-3 border">Eksterior (Fasad, Lisplang, SPBU)</td>
                  <td className="p-3 border">Interior (Partisi, Plafon, Column)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Ketahanan UV</td>
                  <td className="p-3 border text-green-700 font-semibold">Sangat Tinggi (10-15 Tahun)</td>
                  <td className="p-3 border text-amber-700">Standar (Sensitif Sinar Matahari)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Ketebalan Aluminium</td>
                  <td className="p-3 border">0.21 mm – 0.50 mm</td>
                  <td className="p-3 border">0.12 mm – 0.21 mm</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold bg-slate-50 border">Merek Populer</td>
                  <td className="p-3 border" colSpan={2}>Seven, Marks, Goodsense, Maco, Alustar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION FAQ (COMPATIBLE WITH SCHEMA) */}
        <section className="space-y-6 pt-6">
          <div className="border-t border-slate-200 pt-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Pertanyaan Sering Diajukan (FAQ) Seputar ACP Bali
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