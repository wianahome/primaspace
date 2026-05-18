// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from './components/Navbar';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'PrimaSpace | Desain Interior & Kontraktor Interior Bali',
  description: 'PrimaSpace menyediakan jasa desain interior, kitchen set, dan booth pameran terbaik di Bali dengan desain custom dan proyek tepat waktu.',
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
      <body className="bg-white text-gray-900 min-h-screen">
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}