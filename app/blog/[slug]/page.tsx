import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumb } from '../../components/Breadcrumb';
import { blogArticles } from '../blog-articles-data';

export async function generateStaticParams() {
  return blogArticles.filter(a => a.isPublished).map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find(a => a.slug === slug && a.isPublished);
  if (!article) return { title: 'Not Found' };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}

const breadcrumbSchema = (slug: string, articleTitle: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://primaspace.id/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://primaspace.id/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: articleTitle,
      item: `https://primaspace.id/blog/${slug}`,
    },
  ],
});

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find(a => a.slug === slug && a.isPublished);
  if (!article) return notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(slug, article.title)) }}
      />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: article.title, href: `/blog/${article.slug}`, current: true },
          ]}
        />
        <Link href="/blog" className="text-amber-600 hover:underline mb-4 inline-block">← Kembali ke Blog</Link>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="text-gray-500 text-sm mb-8">Target keyword: {article.keyword}</div>
        
        {article.h2Outlines.map((h2, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-2xl font-bold text-amber-800 mb-3">{h2}</h2>
            <p className="text-gray-700">
              Konten untuk {h2} akan diisi lengkap. Hubungi PrimaSpace untuk konsultasi lebih lanjut.
            </p>
          </div>
        ))}
        {article.serviceLinks.length > 0 && (
          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Lihat layanan terkait</h2>
            <div className="flex flex-wrap gap-3">
              {article.serviceLinks.map((serviceSlug) => {
                const serviceMap: Record<string, { label: string; href: string }> = {
                  'desain-interior-bali': { label: 'Desain Interior Bali', href: '/desain-interior-bali' },
                  'kitchen-set-bali': { label: 'Kitchen Set Bali', href: '/kitchen-set-bali' },
                  'kontraktor-interior-bali': { label: 'Kontraktor Interior Bali', href: '/kontraktor-interior-bali' },
                  'booth-pameran-bali': { label: 'Booth Pameran Bali', href: '/booth-pameran-bali' },
                };
                const service = serviceMap[serviceSlug];
                if (!service) return null;
                return (
                  <Link
                    key={serviceSlug}
                    href={service.href}
                    className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50"
                  >
                    {service.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}