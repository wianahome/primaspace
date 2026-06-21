import type { Metadata } from 'next';
import HeroPool from './HeroPool';
import { PoolKontraktorClient } from './PoolKontraktorClient';


export const metadata: Metadata = {
  title: 'Kontraktor Kolam Renang Bali | Jasa Pembuatan & Perawatan Custom',
  description:
    'PrimaSpace adalah kontraktor kolam renang Bali terpercaya. Melayani jasa pembuatan kolam renang custom, renovasi, kebocoran, dan perawatan di Denpasar, Badung, & seluruh Bali.',
  keywords: [
    'kontraktor kolam renang Bali',
    'pembuatan kolam renang Denpasar',
    'jasa pembuatan kolam renang Bali',
    'kontraktor kolam renang Ubud',
    'renovasi kolam renang Bali',
    'perawatan kolam renang Badung',
  ],
  alternates: {
    canonical: '/kontraktor-kolam-renang-bali',
  },
  openGraph: {
    title: 'Kontraktor Kolam Renang Bali | PrimaSpace',
    description:
      'Wujudkan kolam renang impian Anda di Bali. PrimaSpace melayani pembuatan kolam renang mewah tipe Skimmer, Overflow, dan Semi-Overflow dengan material premium dan garansi anti-bocor.',
    url: 'https://primaspace.id/kontraktor-kolam-renang-bali',
    siteName: 'PrimaSpace',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
        alt: 'Proyek Pembuatan Kolam Renang Mewah di Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontraktor Kolam Renang Bali | PrimaSpace',
    description:
      'Wujudkan kolam renang impian Anda di Bali. PrimaSpace melayani pembuatan kolam renang custom tipe Skimmer & Overflow dengan garansi konstruksi jangka panjang.',
    images: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SwimmingPoolBuilder',
  name: 'PrimaSpace Kontraktor Kolam Renang Bali',
  description:
    'Jasa kontraktor pembuatan, renovasi, instalasi mesin pompa, dan perawatan kolam renang custom untuk rumah, villa, dan resort di Bali.',
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
      name: 'Kontraktor Kolam Renang Bali',
      item: 'https://primaspace.id/kontraktor-kolam-renang-bali',
    },
  ],
};

export default function KontraktorKolamRenangPage() {
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
      <HeroPool />
      <PoolKontraktorClient />
    </>
  );
}