'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-600">
          PrimaSpace
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-amber-600">Beranda</Link>
          <Link href="/desain-interior-bali" className="text-gray-700 hover:text-amber-600">Desain Interior</Link>
          <Link href="/kontraktor-interior-bali" className="text-gray-700 hover:text-amber-600">Kontraktor</Link>
          <Link href="/kitchen-set-bali" className="text-gray-700 hover:text-amber-600">Kitchen Set</Link>
          <Link href="/booth-pameran-bali" className="text-gray-700 hover:text-amber-600">Booth</Link>
          <Link href="/blog" className="text-gray-700 hover:text-amber-600">Blog</Link>
        </div>
      </div>
    </nav>
  );
}