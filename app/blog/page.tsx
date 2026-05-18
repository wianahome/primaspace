import Link from 'next/link';
import { blogArticles } from './blog-articles-data';
import { Breadcrumb } from '../components/Breadcrumb';

export const metadata = {
  title: 'Blog Desain Interior Bali | PrimaSpace',
  description: 'Artikel seputar desain interior, kitchen set, dan kontraktor interior di Bali',
};

const breadcrumbSchema = {
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
  ],
};

export default function BlogPage() {
  const publishedArticles = blogArticles.filter(a => a.isPublished);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog', current: true },
          ]}
        />
        <h1 className="text-4xl font-bold mb-4">Blog PrimaSpace</h1>
        <p className="text-gray-600 mb-12">Tips, tren, dan informasi seputar interior di Bali</p>
        <div className="grid md:grid-cols-2 gap-6">
          {publishedArticles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="border rounded-xl p-5 hover:shadow-lg transition">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-500 text-sm">{article.metaDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
