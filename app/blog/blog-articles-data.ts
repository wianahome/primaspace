export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h2Outlines: string[];
  serviceLinks: string[];
  isPublished: boolean;
  publishDate: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    slug: 'biaya-desain-interior-per-meter-bali-2026',
    title: 'Biaya Desain Interior Per Meter di Bali 2026: Lengkap + RAB',
    keyword: 'harga desain interior bali 2026',
    metaTitle: 'Biaya Desain Interior Bali 2026 | Update Harga Per Meter',
    metaDescription: 'Info lengkap biaya desain interior per meter di Bali 2026. Mulai dari Rp350rb. Plus contoh RAB dan tips hemat.',
    h2Outlines: [
      'Rata-rata Biaya Desain Interior Per Meter di Bali 2026',
      'Perbandingan Harga Berdasarkan Tipe Proyek',
      'Komponen yang Mempengaruhi Biaya',
      'Contoh RAB Desain Interior Rumah 100m²',
      'Tips Menghemat Biaya',
    ],
    serviceLinks: ['desain-interior-bali'],
    isPublished: true,
    publishDate: '2026-05-18',
  },
  // Tambahkan artikel lainnya nanti...
];