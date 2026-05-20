import type { Metadata } from 'next';
import { BoothPameranBaliClient } from './BoothPameranBaliClient';
import HeroBooth from './HeroBooth';

export const metadata: Metadata = {
  title: 'Booth Pameran Bali | Booth Pameran Denpasar & Event Stand',
  description:
    'PrimaSpace membuat booth pameran Bali profesional untuk Denpasar, pameran lokal, dan event korporat dengan desain menarik dan konstruksi kokoh.',
  keywords: [
    'booth pameran Bali',
    'booth pameran Denpasar',
    'stand pameran Bali',
    'booth event Bali',
    'booth pameran custom',
    'desain booth pameran Bali',
  ],
  alternates: {
    canonical: '/booth-pameran-bali',
  },
  openGraph: {
    title: 'Booth Pameran Bali | PrimaSpace',
    description:
      'PrimaSpace membuat booth pameran Bali profesional untuk Denpasar, event lokal, dan pameran korporat dengan desain tailor-made dan konstruksi solid.',
    url: 'https://primaspace.id/booth-pameran-bali',
    siteName: 'PrimaSpace',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Booth pameran Bali dengan desain modern dan branding kuat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Booth Pameran Bali | PrimaSpace',
    description:
      'PrimaSpace membuat booth pameran Bali profesional untuk Denpasar, event lokal, dan pameran korporat dengan desain tailor-made dan konstruksi solid.',
    images: [
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Booth Pameran Bali',
  description:
    'PrimaSpace menyediakan booth pameran Bali custom untuk Denpasar, event lokal, dan pameran korporat.',
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
      name: 'Booth Pameran Bali',
      item: 'https://primaspace.id/booth-pameran-bali',
    },
  ],
};

export default function BoothPameranBaliPage() {
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
      <HeroBooth />
      <BoothPameranBaliClient />
    </>
  );
}
