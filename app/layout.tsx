// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'PrimaSpace | Desain Interior & Kontraktor Interior Bali',
  description: 'PrimaSpace menyediakan jasa desain interior, kitchen set, dan booth pameran terbaik di Bali dengan desain custom dan proyek tepat waktu.',
  verification: {
    google: 'Qxmr4nnBZU7ftcrk2al6INyqgabXHNPusSdNAOtjebM', 
    // Contoh: google: 'Qxmr4nnBZU7ftcrk2al6lNyqgabXHNpusSdNA...'
  },
  metadataBase: new URL('https://primaspace.id'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'desain interior bali',
    'kontraktor interior bali',
    'kitchen set bali',
    'booth pameran bali',
    'desain custom interior',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'PrimaSpace | Desain Interior & Kontraktor Interior Bali',
    description: 'PrimaSpace menyediakan jasa desain interior, kitchen set, dan booth pameran terbaik di Bali dengan desain custom dan proyek tepat waktu.',
    url: 'https://primaspace.id',
    siteName: 'PrimaSpace',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimaSpace | Desain Interior & Kontraktor Interior Bali',
    description: 'PrimaSpace menyediakan jasa desain interior, kitchen set, dan booth pameran terbaik di Bali dengan desain custom dan proyek tepat waktu.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-950 min-h-screen">
        {/* 1. Muat library gtag.js secara async */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18134268066"
          strategy="afterInteractive"
        />

        {/* 2. Inisialisasi Google Tag dataLayer */}
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18134268066');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}