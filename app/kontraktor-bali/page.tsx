import type { Metadata } from 'next';
import KontraktorBaliClient from './KontraktorBaliClient';
import { HeroKontraktor } from './HeroKontraktor';


export const metadata: Metadata = {
  title: 'Kontraktor Bali | Jasa Bangun & Renovasi Rumah Villa Custom',
  description:
    'PrimaSpace adalah kontraktor Bali terpercaya untuk jasa bangun baru dan renovasi rumah, villa, serta ruko di Denpasar & seluruh Bali dengan tim profesional.',
  keywords: [
    'kontraktor Bali',
    'kontraktor Denpasar',
    'jasa bangun villa Bali',
    'kontraktor rumah Bali',
    'renovasi rumah Denpasar',
    'kontraktor bangunan Bali',
  ],
  alternates: {
    canonical: '/kontraktor-bali',
  },
  openGraph: {
    title: 'Kontraktor Bali | PrimaSpace',
    description:
      'Wujudkan properti impian Anda di Bali. PrimaSpace melayani jasa konstruksi, arsitek, dan renovasi dengan standar material premium dan pengerjaan presisi.',
    url: 'https://primaspace.id/kontraktor-bali',
    siteName: 'PrimaSpace',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
        alt: 'Proyek Kontraktor Bangunan Properti di Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontraktor Bali | PrimaSpace',
    description:
      'Wujudkan properti impian Anda di Bali. PrimaSpace melayani jasa konstruksi, arsitek, dan renovasi dengan standar material premium.',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'PrimaSpace Kontraktor Bali',
  description:
    'Jasa kontraktor bangunan, arsitek, dan renovasi rumah serta villa custom di Denpasar dan seluruh wilayah Bali.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'PrimaSpace',
    telephone: '+628135979589',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denpasar',
      addressRegion: 'Bali',
      addressCountry: 'ID',
    },
  },
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
      name: 'Kontraktor Bali',
      item: 'https://primaspace.id/kontraktor-bali',
    },
  ],
};

export default function KontraktorBaliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroKontraktor />
      <KontraktorBaliClient />
    </>
  );
}