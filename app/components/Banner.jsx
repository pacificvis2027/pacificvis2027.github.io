'use client';

import { usePathname } from 'next/navigation';

export default function Banner() {
  const pathname = usePathname();
  if (pathname === '/travel' || pathname.startsWith('/travel/')) return null;

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <figure>
        <div className="relative w-full overflow-hidden bg-sky-100">
          <img
            src="/images/main-banner-busan.png"
            alt="Illustrated Busan waterfront skyline with lighthouse, Gwangan Bridge, and traditional architecture"
            className="block h-auto w-full"
          />
          <div className="absolute left-4 top-4 sm:left-8 sm:top-8">
            <p className="max-w-[30rem] text-xl font-semibold tracking-[0.08em] text-white [text-shadow:0_2px_10px_rgba(15,23,42,0.45)] sm:max-w-[46rem] sm:text-3xl">
              IEEE Pacific Visualization Conference 2027
            </p>
          </div>
        </div>
      </figure>
    </div>
  );
}
