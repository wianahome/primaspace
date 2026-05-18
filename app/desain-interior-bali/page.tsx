import type { Metadata } from 'next';
import { InteriorBaliClient } from './InteriorBaliClient';

export const metadata: Metadata = {
  title: 'Desain Interior Bali | Interior Villa, Rumah, Retail & Kantor',
  description:
    'PrimaSpace menghadirkan jasa desain interior Bali profesional untuk villa, rumah, kantor, retail, dan kitchen set. Solusi elegan dan fungsional untuk setiap ruang.',
  keywords: [
    'desain interior Bali',
    'desain interior villa Bali',
    'desain interior rumah Bali',
    'kontraktor interior Bali',
    'kitchen set Bali',
    'booth pameran Bali',
  ],
  alternates: {
    canonical: '/desain-interior-bali',
  },
  openGraph: {
    title: 'Desain Interior Bali | PrimaSpace',
    description:
      'PrimaSpace menghadirkan jasa desain interior Bali profesional untuk villa, rumah, kantor, retail, dan kitchen set.',
    url: 'https://primaspace.id/desain-interior-bali',
    siteName: 'PrimaSpace',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        alt: 'Desain interior villa Bali modern',
      },
      {
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        alt: 'Kitchen set minimalis untuk rumah Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desain Interior Bali | PrimaSpace',
    description:
      'PrimaSpace menghadirkan jasa desain interior Bali profesional untuk villa, rumah, kantor, retail, dan kitchen set.',
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PrimaSpace',
  description:
    'PrimaSpace menyediakan jasa desain interior Bali profesional untuk villa, rumah, kantor, retail, kitchen set, dan booth pameran.',
  url: 'https://primaspace.id/desain-interior-bali',
  telephone: '+6281234567890',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bali',
    addressRegion: 'Bali',
    addressCountry: 'ID',
  },
  openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00',
  areaServed: 'Bali',
  image: [
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  ],
  service: [
    {
      '@type': 'Service',
      name: 'Desain Interior Villa Bali',
      description: 'Desain interior villa Bali yang modern, nyaman dan sesuai anggaran.',
    },
    {
      '@type': 'Service',
      name: 'Desain Interior Rumah Bali',
      description: 'Desain interior rumah dan rumah tinggal di Bali dengan gaya tropis dan elegan.',
    },
    {
      '@type': 'Service',
      name: 'Kitchen Set Bali',
      description: 'Kitchen set custom dengan material berkualitas dan desain yang fungsional.',
    },
  ],
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
      name: 'Desain Interior Bali',
      item: 'https://primaspace.id/desain-interior-bali',
    },
  ],
};

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
    alt: 'Interior villa Bali modern dengan ruang tamu terbuka',
    title: 'Interior Villa Modern',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    alt: 'Dapur kitchen set minimalis dengan pencahayaan natural',
    title: 'Kitchen Set Minimalis',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
    alt: 'Ruang kantor stylish dari desain interior Bali',
    title: 'Kantor & Retail',
  },
];

export default function InteriorBaliPage() {
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
      <InteriorBaliClient />
    </>
  );
}
