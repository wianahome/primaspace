import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { supabase } from '../../utils/supabase'; // Sesuaikan lokasi utils/supabase Anda
import Link from 'next/link';

export const revalidate = 0; // Memastikan artikel baru langsung terbaca

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const { data: article } = await supabase
    .from('psp_articles')
    .select('meta_title, meta_description')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!article) return { title: 'Not Found' };

  return {
    title: article.meta_title,
    description: article.meta_description,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const { data: article, error } = await supabase
    .from('psp_articles')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error || !article) {
    notFound();
  }

  // Membersihkan tanda # ganda jika AI memberikan H1 di dalam konten
  const cleanedContent = article.content.replace(/^#\s+[^\n]+\n?/, '');

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* HEADER ARTIKEL (SEO H1) */}
      <header className="mb-8 space-y-4">
        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded">
          {article.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          {article.title}
        </h1>
        <p className="text-gray-500 text-sm">
          Estimasi waktu baca: {article.reading_time_minutes} menit
        </p>
      </header>

      {/* FEATURED IMAGE DENGAN ALT TEXT UNTUK SEO GAMBAR */}
      {article.featured_image_url && (
        <div className="mb-10 overflow-hidden rounded-2xl shadow-lg border">
          <img
            src={article.featured_image_url}
            alt={article.featured_image_alt || article.title}
            className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* PARSER MARKDOWN KE HTML BERKUALITAS */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
        <ReactMarkdown
  components={{
    h2: ({ node, ...props }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4" {...props} />
    ),
    ul: ({ node, ...props }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 pl-4" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 pl-4" {...props} />
    ),
    li: ({ node, ...props }) => (
      <li className="leading-relaxed" {...props} />
    ),
    strong: ({ node, ...props }) => (
      <strong className="font-semibold text-gray-900" {...props} />
    ),
    // CUSTOM LINK RENDERER UNTUK INTERNAL LINK SEO
    a: ({ href, children }) => {
      const isInternal = href && (href.startsWith('/') || href.includes('primaspace.id'));
      if (isInternal) {
        return (
          <Link href={href || '#'} className="text-blue-600 font-semibold underline hover:text-blue-800">
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
          {children}
        </a>
      );
    },
  }}
>
  {cleanedContent}
</ReactMarkdown>
      </div>
    </article>
  );
}