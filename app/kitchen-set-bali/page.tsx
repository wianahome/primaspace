import type { Metadata } from 'next';
import { KitchenSetBaliClient } from './KitchenSetBaliClient';

export const metadata: Metadata = {
  title: 'Kitchen Set Bali | Kitchen Set Denpasar & Kitchen Set Custom',
  description:
    'PrimaSpace menyediakan kitchen set Bali dan kitchen set Denpasar custom dengan desain minimalis, fungsional, dan bahan berkualitas.',
  keywords: [
    'kitchen set Bali',
    'kitchen set Denpasar',
    'kitchen set custom Bali',
    'kitchen set minimalis Bali',
    'desain kitchen set Denpasar',
    'kitchen set modern Bali',
  ],
  alternates: {
    canonical: '/kitchen-set-bali',
  },
  openGraph: {
    title: 'Kitchen Set Bali | PrimaSpace',
    description:
      'Kitchen set Bali custom dari PrimaSpace menawarkan desain stylish, fungsi maksimal, dan kualitas bahan terbaik untuk dapur di Denpasar dan seluruh Bali.',
    url: 'https://primaspace.id/kitchen-set-bali',
    siteName: 'PrimaSpace',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        alt: 'Kitchen set modern Bali dengan desain minimalis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Set Bali | PrimaSpace',
    description:
      'Kitchen set Bali custom dari PrimaSpace menawarkan desain stylish, fungsi maksimal, dan kualitas bahan terbaik untuk dapur di Denpasar dan seluruh Bali.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kitchen Set Bali',
  description:
    'PrimaSpace menyediakan kitchen set Bali custom dan kitchen set Denpasar dengan desain minimalis dan fungsi lengkap.',
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
      name: 'Kitchen Set Bali',
      item: 'https://primaspace.id/kitchen-set-bali',
    },
  ],
};

export default function KitchenSetBaliPage() {
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
      <KitchenSetBaliClient />
    </>
  );
}
