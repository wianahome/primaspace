'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-white">
          PrimaSpace
        </Link>
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.22em] text-slate-200">
          <Link href="/">Beranda</Link>
          <Link href="/desain-interior-bali">Desain Interior</Link>
          <Link href="/kontraktor-interior-bali">Kontraktor</Link>
          <Link href="/kitchen-set-bali">Kitchen Set</Link>
          <Link href="/booth-pameran-bali">Booth</Link>
          <Link href="/blog">Blog</Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-1 -rotate-45' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-[400px]' : 'max-h-0'} bg-slate-950/95 border-t border-white/10`}>
        <div className="px-6 pb-4 pt-2 flex flex-col gap-4 text-sm uppercase tracking-[0.22em] text-slate-200">
          <Link href="/" className="block py-2 transition hover:text-white" onClick={() => setOpen(false)}>
            Beranda
          </Link>
          <Link href="/desain-interior-bali" className="block py-2 transition hover:text-white" onClick={() => setOpen(false)}>
            Desain Interior
          </Link>
          <Link href="/kontraktor-interior-bali" className="block py-2 transition hover:text-white" onClick={() => setOpen(false)}>
            Kontraktor
          </Link>
          <Link href="/kitchen-set-bali" className="block py-2 transition hover:text-white" onClick={() => setOpen(false)}>
            Kitchen Set
          </Link>
          <Link href="/booth-pameran-bali" className="block py-2 transition hover:text-white" onClick={() => setOpen(false)}>
            Booth
          </Link>
          <Link href="/blog" className="block py-2 transition hover:text-white" onClick={() => setOpen(false)}>
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}