import Link from 'next/link';
import { supabase } from '../utils/supabase'; // Sesuaikan lokasi utils/supabase Anda

export const revalidate = 0; // Memastikan daftar artikel selalu update realtime

interface BlogPageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export async function generateMetadata() {
  return {
    title: 'Blog & Insight Inspirasi Arsitektur & Kontraktor Bali - PrimaSpace',
    description: 'Temukan panduan lengkap, estimasi biaya, tips desain interior, dan tren arsitektur terbaru di Bali.',
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category, q } = await searchParams;

  // 1. Fetch Kategori Unik dari Database
  const CATEGORIES = [
    { label: 'Semua', value: '' },
    { label: 'Arsitek', value: 'arsitek' },
    { label: 'Kontraktor', value: 'kontraktor' },
    { label: 'Desain Interior', value: 'desain-interior' },
    { label: 'Kanopi', value: 'kanopi' },
    { label: 'Kitchen Set', value: 'kitchen-set' },
    { label: 'ACP', value: 'acp' },
    { label: 'Alumunium', value: 'alumunium' },
  ];

  // Query dasar tanpa filter is_published strict jika data belum diset
let query = supabase
  .from('psp_articles')
  .select('*')
  .or('is_published.eq.true,is_published.is.null') // Menampilkan yang true atau null
  .order('id', { ascending: false }); // Menggunakan id karena created_at mungkin belum ada

  if (category) {
    query = query.eq('category', category);
  }

  if (q) {
    query = query.ilike('title', `%${q}%`);
  }

  const { data: articles, error } = await query;

  if (error) {
    console.error('Error fetching articles:', error.message);
  }

  const articleList = articles || [];
  const featuredArticle = articleList[0]; // Artikel paling baru sebagai Headline
  const regularArticles = articleList.slice(1); // Artikel sisa untuk Grid

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            PrimaSpace Insight
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Artikel & Panduan Konstruksi Bali
          </h1>
          <p className="text-lg text-gray-600">
            Dapatkan wawasan seputar estimasi biaya, inspirasi desain, dan tips material bangunan terbaik dari ahlinya.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border">
          {/* Filter Kategori */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => {
              const isActive = (category || '') === cat.value;
              return (
                <Link
                  key={cat.value}
                  href={`/blog${cat.value ? `?category=${cat.value}` : ''}`}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          {/* Input Pencarian */}
          <form method="GET" action="/blog" className="w-full md:w-72">
            <input
              type="text"
              name="q"
              defaultValue={q || ''}
              placeholder="Cari artikel..."
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>

        {/* FEATURED ARTICLE (ARTIKEL UTAMA) */}
        {!category && !q && featuredArticle && (
          <section className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 h-80 lg:h-auto relative overflow-hidden">
                <img
                  src={featuredArticle.featured_image_url || '/placeholder-blog.jpg'}
                  alt={featuredArticle.featured_image_alt || featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md w-fit">
                  {featuredArticle.category}
                </span>
                <Link href={`/blog/${featuredArticle.slug}`}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-snug">
                    {featuredArticle.title}
                  </h2>
                </Link>
                <p className="text-gray-600 line-clamp-3 text-sm lg:text-base">
                  {featuredArticle.excerpt}
                </p>
                <div className="pt-4 flex items-center justify-between text-xs text-gray-500 border-t">
                  <span>Waktu baca: {featuredArticle.reading_time_minutes} menit</span>
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="font-bold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* GRID ARTIKEL LAINNYA */}
        {articleList.length > 0 ? (
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {category ? `Kategori: ${category}` : q ? `Hasil Pencarian: "${q}"` : 'Artikel Terbaru'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(!category && !q ? regularArticles : articleList).map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={article.featured_image_url || '/placeholder-blog.jpg'}
                      alt={article.featured_image_alt || article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold px-3 py-1 rounded-lg">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <Link href={`/blog/${article.slug}`}>
                        <h4 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                      </Link>
                      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t flex items-center justify-between text-xs text-gray-500">
                      <span>{article.reading_time_minutes} min read</span>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-blue-600 font-bold hover:underline"
                      >
                        Baca &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : (
          /* EMPTY STATE */
          <div className="text-center py-16 bg-white rounded-2xl border space-y-4">
            <p className="text-gray-500 text-lg">Belum ada artikel pada kategori atau pencarian ini.</p>
            <Link
              href="/blog"
              className="inline-block bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-blue-700"
            >
              Lihat Semua Artikel
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}