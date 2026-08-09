import type { Metadata } from 'next';
import { KontraktorInteriorBaliClient } from './KontraktorInteriorBaliClient';
import HeroContractor from './HeroKontraktor';
import { PortfolioContractor } from './PortofolioKontraktor';

export const metadata: Metadata = {
  title: 'Kontraktor Interior Bali | Denpasar, Rumah, Kantor, Villa, Retail',
  description:
    'Kontraktor interior Bali profesional untuk rumah, kantor, villa, retail, dan booth pameran di Denpasar.',
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
      'Kontraktor interior Bali profesional untuk rumah, kantor, villa, retail, dan booth pameran di Denpasar.',
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
      'Kontraktor interior Bali profesional untuk rumah, kantor, villa, retail, dan booth pameran di Denpasar.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Kontraktor Interior Bali',
  name: 'Kontraktor Interior Bali',
  description:
    'PrimaSpace menyediakan layanan kontraktor interior Bali untuk rumah, villa, kantor, retail, dan booth pameran.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'PrimaSpace',
    url: 'https://primaspace.id',
    telephone: '+6281234567890',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denpasar',
      addressRegion: 'Bali',
      addressCountry: 'ID',
    },
  },
  areaServed: ['Denpasar', 'Badung', 'Ubud', 'Canggu'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apa saja layanan yang ditawarkan kontraktor interior Bali PrimaSpace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrimaSpace menyediakan layanan kontraktor interior Bali untuk renovasi rumah Bali, interior kantor Bali, interior villa Bali, retail, dan booth pameran Bali dengan pengawasan lapangan lokal dan kualitas finishing tinggi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah PrimaSpace juga menangani proyek kontraktor interior Denpasar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, kami adalah kontraktor interior Denpasar yang melayani proyek interior rumah, kantor, villa, dan booth pameran dengan pendekatan lokal dan manajemen proyek terstruktur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana proses estimasi untuk kontraktor interior rumah Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proses estimasi kontraktor interior rumah Bali dimulai dengan konsultasi desain, survei lokasi, perhitungan material lokal, dan penyusunan RAB transparan yang disesuaikan dengan kondisi iklim Bali.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah PrimaSpace menangani booth pameran Bali dan interior retail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami menangani kontraktor booth pameran Bali serta interior retail dengan desain menarik, konstruksi kuat, dan pengelolaan material yang sesuai standar Bali.',
      },
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
