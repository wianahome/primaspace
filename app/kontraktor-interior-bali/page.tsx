import type { Metadata } from 'next';
import { KontraktorInteriorBaliClient } from './KontraktorInteriorBaliClient';
import HeroContractor from './HeroKontraktor';
import { PortfolioContractor } from './PortofolioKontraktor';

export const metadata: Metadata = {
  title: 'Kontraktor Interior Bali | Kontraktor Interior Denpasar & Kantor',
  description:
    'PrimaSpace menyediakan kontraktor interior Bali profesional untuk rumah, villa, kantor, dan retail dengan desain rapi dan pengerjaan tepat waktu.',
  keywords: [
    'kontraktor interior Bali',
    'kontraktor interior Denpasar',
    'kontraktor interior rumah Bali',
    'kontraktor interior kantor Bali',
    'kontraktor booth pameran Bali',
    'kontraktor interior Bali profesional',
  ],
  alternates: {
    canonical: '/kontraktor-interior-bali',
  },
  openGraph: {
    title: 'Kontraktor Interior Bali | PrimaSpace',
    description:
      'Kontraktor interior Bali PrimaSpace menawarkan pembangunan interior rumah, villa, kantor, retail, dan booth pameran dengan kualitas tinggi dan pengawasan profesional.',
    url: 'https://primaspace.id/kontraktor-interior-bali',
    siteName: 'PrimaSpace',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        alt: 'Kontraktor interior Bali mengerjakan proyek dapur dan ruang tamu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontraktor Interior Bali | PrimaSpace',
    description:
      'Kontraktor interior Bali PrimaSpace menawarkan pembangunan interior rumah, villa, kantor, retail, dan booth pameran dengan kualitas tinggi dan pengawasan profesional.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kontraktor Interior Bali',
  description:
    'PrimaSpace menyediakan layanan kontraktor interior Bali untuk rumah, villa, kantor, retail, dan booth pameran.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'PrimaSpace',
    telephone: '+6281234567890',
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
      name: 'Kontraktor Interior Bali',
      item: 'https://primaspace.id/kontraktor-interior-bali',
    },
  ],
};

export default function KontraktorInteriorBaliPage() {
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
      <HeroContractor />
      <PortfolioContractor />
      <KontraktorInteriorBaliClient />
    </>
  );
}
