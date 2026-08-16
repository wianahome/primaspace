'use client';

import { usePathname } from 'next/navigation';

export function WhatsAppFloat() {
  const pathname = usePathname() || '/';

  // Determine service context from pathname
  let serviceLabel = 'layanan Anda';
  if (pathname.startsWith('/kontraktor-bali')) serviceLabel = 'Kontraktor Bali (bangunan/renovasi)';
  else if (pathname.startsWith('/kontraktor-interior-bali')) serviceLabel = 'Kontraktor Interior Bali (interior & finishing)';
  else if (pathname.startsWith('/kontraktor-kolam-renang-bali')) serviceLabel = 'Kontraktor Kolam Renang Bali';
  else if (pathname.startsWith('/kitchen-set-bali') || pathname.startsWith('/kitchen-set')) serviceLabel = 'Kitchen Set Custom Bali';
  else if (pathname.startsWith('/booth-pameran-bali')) serviceLabel = 'Booth Pameran Bali';
  else if (pathname.startsWith('/kanopi-bali')) serviceLabel = 'Kanopi Bali';
  else if (pathname.startsWith('/acp-bali')) serviceLabel = 'ACP Bali';
  else if (pathname.startsWith('/alumunium-bali')) serviceLabel = 'Alumunium Bali';
  else if (pathname.startsWith('/neonbox-bali')) serviceLabel = 'Neon Box Bali';

  const defaultMessage = `Halo PrimaSpace, saya tertarik dengan ${serviceLabel}. Bisa dapat info estimasi dan RAB?`;
  const waHref = `https://wa.me/628135979589?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Konsultasi via WhatsApp - ${serviceLabel}`}
        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-3 shadow-lg hover:scale-105 transition-transform duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.03.75C6.17.75 1.53 5.39 1.53 11.25c0 1.98.52 3.92 1.52 5.63L.24 23.25l6.66-1.74a11.4 11.4 0 0 0 5.13 1.12h.01c5.86 0 10.5-4.64 10.5-10.5 0-2.8-1.08-5.43-3.06-7.38z" fill="currentColor" opacity="0.08" />
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.769.967-.942 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.885-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.173.2-.297.3-.495.099-.198.05-.372-.025-.52-.075-.148-.672-1.619-.921-2.216-.242-.579-.487-.5-.672-.51l-.572-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 0.71.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white" />
        </svg>

        <span className="hidden sm:inline-block bg-white/5 text-white px-3 py-2 rounded-full text-sm font-semibold tracking-wide">
          Konsultasi via WhatsApp
        </span>
      </a>

      {/* subtle floating pulse for attention on larger screens */}
      <span className="hidden md:inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
    </div>
  );
}

