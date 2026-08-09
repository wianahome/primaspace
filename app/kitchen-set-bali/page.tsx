import type { Metadata } from 'next';
import { KitchenSetBaliClient } from './KitchenSetBaliClient';
import { HeroKitchenSet } from '../components/HeroKitchenSet';
import { PortfolioKitchenSet } from '../components/PortfolioKitchenSet';
import HeroKitchen from './HeroKitchen';

export const metadata: Metadata = {
  title: 'Kitchen Set Bali | Kitchen Set Denpasar Custom & Estimasi RAB Cepat',
  description:
    'PrimaSpace membuat kitchen set Bali custom untuk Denpasar dan seluruh Bali dengan desain minimalis, material tahan lembab, dan estimasi RAB cepat.',
  keywords: [
    'kitchen set Bali',
    'kitchen set Denpasar',
    'kitchen set custom Bali',
    'kitchen set minimalis Bali',
    'desain kitchen set Denpasar',
    'estimasi kitchen set Bali',
    'harga kitchen set Bali',
  ],
  alternates: {
    canonical: '/kitchen-set-bali',
  },
  openGraph: {
    title: 'Kitchen Set Bali | PrimaSpace',
    description:
      'Kitchen set Bali custom dari PrimaSpace dengan desain fungsional, material tahan air, dan pemasangan cepat untuk rumah, villa, dan properti Bali.',
    url: 'https://primaspace.id/kitchen-set-bali',
    siteName: 'PrimaSpace',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://res.cloudinary.com/dlerwn8af/image/upload/q_auto/f_auto/v1779174871/kitchen-set-custom_pphvgu.png',
        alt: 'Kitchen set Bali custom modern untuk dapur Denpasar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Set Bali | PrimaSpace',
    description:
      'Kitchen set Bali custom dari PrimaSpace dengan desain fungsional, material tahan air, dan pemasangan cepat untuk rumah, villa, dan properti Bali.',
    images: [
      'https://res.cloudinary.com/dlerwn8af/image/upload/q_auto/f_auto/v1779174871/kitchen-set-custom_pphvgu.png',
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kitchen Set Bali',
  description:
    'PrimaSpace menyediakan kitchen set Bali custom dan kitchen set Denpasar dengan desain minimalis, fungsi lengkap, dan estimasi RAB cepat.',
  url: 'https://primaspace.id/kitchen-set-bali',
  image: 'https://res.cloudinary.com/dlerwn8af/image/upload/q_auto/f_auto/v1779174871/kitchen-set-custom_pphvgu.png',
  serviceType: 'Kitchen Set Custom',
  areaServed: {
    '@type': 'State',
    name: 'Bali',
  },
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Berapa lama proses kitchen set custom Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proses desain dan produksi kitchen set custom Bali biasanya memakan waktu 3–5 minggu, tergantung kompleksitas dan bahan yang dipilih.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah kitchen set Denpasar bisa dibuat untuk dapur kecil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Kami mengoptimalkan layout kitchen set untuk ruang sempit agar fungsional dan tetap terlihat luas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah bisa memasang kitchen set Bali di luar Denpasar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tentu. Layanan kami mencakup seluruh Bali, dengan pemasangan kitchen set custom baik di Denpasar maupun kawasan lain di pulau Bali.',
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroKitchen />
      <HeroKitchenSet />
      <PortfolioKitchenSet />
      <KitchenSetBaliClient />
    </>
  );
}
