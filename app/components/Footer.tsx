import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-white">PrimaSpace</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Desain interior, kontraktor interior, kitchen set, dan booth pameran di Bali dengan sentuhan modern minimalis dan kualitas eksklusif.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Layanan</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><Link href="/desain-interior-bali" className="transition hover:text-white">Desain Interior</Link></li>
            <li><Link href="/kontraktor-interior-bali" className="transition hover:text-white">Kontraktor Interior</Link></li>
            <li><Link href="/kitchen-set-bali" className="transition hover:text-white">Kitchen Set</Link></li>
            <li><Link href="/booth-pameran-bali" className="transition hover:text-white">Booth Pameran</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Kontak</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Jl. Bali No.1, Denpasar<br />
            Hp/WA: <Link href="https://wa.me/628123456789" className="text-slate-100 hover:underline">+62 812-3456-789</Link><br />
            Email: <Link href="mailto:info@primaspace.id" className="text-slate-100 hover:underline">info@primaspace.id</Link>
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} PrimaSpace. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}
