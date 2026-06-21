import type { Metadata } from 'next';
import HeroArsitek from './HeroArsitek'; // Pastikan TIDAK pakai kurung kurawal {}
import { ArsitekBaliClient } from './ArsitekBaliClient'; // Pastikan MENGGUNAKAN kurung kurawal {}

export const metadata: Metadata = {
  title: 'Jasa Arsitek Bali | Desain Rumah, Villa & Resort Mewah Custom',
  description:
    'PrimaSpace menyediakan jasa arsitek Bali profesional untuk desain villa mewah, rumah modern tropis, dan bangunan komersial di Denpasar, Badung, Canggu, & Ubud.',
  keywords: [
    'jasa arsitek Bali',
    'arsitek Denpasar',
    'desain villa Bali',
    'arsitek mewah Bali',
    'arsitek rumah minimalis Bali',
    'jasa desain interior Bali',
  ],
  alternates: {
    canonical: '/jasa-arsitek-bali',
  },
  openGraph: {
    title: 'Jasa Arsitek Bali | PrimaSpace',
    description:
      'Wujudkan konsep properti impian Anda bersama arsitek berpengalaman di Bali. Kami memadukan estetika arsitektur tropis, efisiensi tata ruang, dan gambar kerja presisi.',
    url: 'https://primaspace.id/jasa-arsitek-bali',
    siteName: 'PrimaSpace',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Studio Jasa Arsitek Desain Villa Mewah Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Arsitek Bali | PrimaSpace',
    description:
      'Wujudkan konsep properti impian Anda bersama arsitek berpengalaman di Bali. Desain visual 3D mewah dan gambar teknis lengkap.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ArchitecturalService',
  name: 'PrimaSpace Jasa Arsitek Bali',
  description:
    'Layanan arsitektur profesional, cetak biru bangunan, desain interior, dan visualisasi 3D photorealistic untuk rumah, ruko, dan villa di Bali.',
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
      name: 'Jasa Arsitek Bali',
      item: 'https://primaspace.id/jasa-arsitek-bali',
    },
  ],
};

export default function JasaArsitekPage() {
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
      <HeroArsitek />
      <ArsitekBaliClient />
    </>
  );
}