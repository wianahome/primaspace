import type { Metadata } from 'next';
import KontraktorBaliClient from './KontraktorBaliClient';
import { HeroKontraktor } from './HeroKontraktor';


export const metadata: Metadata = {
  title: 'Kontraktor Bali & Denpasar | Jasa Bangun Villa, Renovasi Rumah, dan Kontraktor Profesional di Bali',
  description:
    'PrimaSpace adalah kontraktor Bali dan kontraktor Denpasar terpercaya untuk jasa bangun villa Bali, renovasi rumah Bali, dan bangunan komersial di Bali. Dapatkan konsultasi konstruksi Bali, RAB transparan, dan pengurusan izin IMB/PBG untuk seluruh area Bali.',
  keywords: [
    'kontraktor Bali',
    'kontraktor Denpasar',
    'jasa bangun villa Bali',
    'renovasi rumah Bali',
    'izin IMB Bali',
    'kontraktor bangunan Bali',
  ],
  alternates: {
    canonical: 'https://primaspace.id/kontraktor-bali',
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
  url: 'https://primaspace.id/kontraktor-bali',
  telephone: '+628135979589',
  areaServed: ['Denpasar', 'Badung', 'Gianyar', 'Tabanan', 'Bali Utara', 'Ubud', 'Canggu'],
  serviceType: ['Pembangunan Villa Bali', 'Renovasi Rumah Bali', 'Kontraktor Denpasar', 'Jasa Konstruksi Bali'],
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apa saja layanan kontraktor Bali yang ditawarkan PrimaSpace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrimaSpace menawarkan pembangunan villa Bali, renovasi rumah Bali, bangun rumah tinggal, renovasi komersial, dan pengurusan izin IMB/PBG melalui tim kontraktor Denpasar berpengalaman.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah PrimaSpace menangani izin IMB/PBG Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, PrimaSpace membantu mengurus izin IMB/PBG untuk proyek pembangunan dan renovasi di Bali, termasuk verifikasi zonasi dan dokumen teknis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana estimasi RAB kontraktor Bali dibuat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Estimasi RAB kontraktor Bali disusun berdasarkan spesifikasi material, desain arsitektur, volume pekerjaan, dan lokasi proyek, dengan transparansi untuk menghindari biaya tambahan selama konstruksi.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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