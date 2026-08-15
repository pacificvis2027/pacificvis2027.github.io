'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Contribute',
    children: [
      { label: 'Common Call for Papers',     href: '/contribute/common-call-for-papers/' },
      { label: 'TVCG Journal Papers',        href: '/contribute/tvcg-journal-papers/' },
      { label: 'Conference Papers',          href: '/contribute/conference-papers/' },
      { label: 'VisNotes (Short Paper) Track', href: '/contribute/short-papers/' },
      { label: 'Posters',                    href: '/contribute/posters/' },
      { label: 'Visual Data Storytelling',   href: '/contribute/storytelling/' },
      { label: 'Workshops',                  href: '/contribute/workshops/' },
      { label: 'Paper Topics',               href: '/contribute/paper-topics/' },
      { label: 'Paper Submission Guidelines',href: '/contribute/paper-submission-guidelines/' },
    ],
  },
  {
    label: 'Program',
    children: [
      { label: 'Conference Program',         href: '/program/conference-program/' },
      { label: 'Keynotes',                   href: '/program/keynotes/' },
      { label: 'Posters & Storytelling',     href: '/program/posters-and-visual-storytelling/' },
      { label: 'Workshops',                  href: '/program/workshops/' },
      { label: 'Awards',                     href: '/program/awards/' },
    ],
  },
  { label: 'Registration', href: '/registration/' },
  { label: 'Committee',    href: '/committee/' },
  {
    label: 'Venue',
    children: [
      { label: 'Venue Information', href: '/venue/venue-information/' },
      { label: 'Reception',         href: '/venue/reception/' },
      { label: 'Banquet',           href: '/venue/banquet/' },
    ],
  },
  {
    label: 'Travel',
    children: [
      { label: 'Airport to Busan',     href: '/travel/airport-to-busan/' },
      { label: 'Visa Information',     href: '/travel/visa-information/' },
      { label: 'Accommodations',       href: '/travel/accommodations/' },
      { label: 'Tourist Attractions',  href: '/travel/tourist-attractions/' },
      { label: 'Food & Shopping',      href: '/travel/food-and-shopping/' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const navigationTimerRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const startNavigation = (href) => {
    const targetPath = href.replace(/\/$/, '') || '/';
    const currentPath = pathname.replace(/\/$/, '') || '/';
    if (targetPath !== currentPath) {
      window.clearTimeout(navigationTimerRef.current);
      setIsNavigating(true);
      navigationTimerRef.current = window.setTimeout(() => {
        setIsNavigating(false);
      }, 700);
    }
  };

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => window.clearTimeout(navigationTimerRef.current);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-40 w-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="PacificVis 2027 home"
          onClick={() => startNavigation('/')}
        >
          <img
            src="/images/pvis27-logo.png"
            alt="PacificVis 2027 logo"
            className="h-20 w-auto max-w-[260px] object-contain sm:h-24"
          />
        </Link>

        <nav
          ref={navRef}
          className="ml-auto hidden items-center gap-6 pl-16 lg:flex xl:gap-8 xl:pl-24"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isOpen={openDropdown === item.label}
              onNavigate={startNavigation}
              onToggle={() =>
                setOpenDropdown((p) => (p === item.label ? null : item.label))
              }
              onClose={() => setOpenDropdown(null)}
            />
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto grid h-9 w-9 place-items-center rounded border border-slate-300 text-slate-700 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-page flex flex-col py-3">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onNavigate={startNavigation}
              />
            ))}
          </div>
        </div>
      )}

      {isNavigating && (
        <div
          className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-slate-100"
          aria-hidden="true"
        >
          <div className="route-progress-bar h-full bg-ocean-700" />
        </div>
      )}
    </header>
  );
}

function NavItem({ item, isOpen, onNavigate, onToggle, onClose }) {
  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={() => onNavigate(item.href)}
        className="px-3 py-2 text-base font-medium text-slate-700 hover:text-ocean-700"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="relative">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className="flex items-center gap-1 px-3 py-2 text-base font-medium text-slate-700 hover:text-ocean-700"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {item.label}
        <svg
          viewBox="0 0 20 20"
          className={`h-3 w-3 transition ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M5 7l5 6 5-6H5z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[16rem] border border-slate-200 bg-white py-1 shadow-md">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={() => {
                onNavigate(child.href);
                onClose();
              }}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-ocean-700"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={() => onNavigate(item.href)}
        className="border-b border-slate-100 px-2 py-3 text-sm font-medium text-slate-700"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-2 py-3 text-sm font-medium text-slate-700"
        aria-expanded={open}
      >
        {item.label}
        <svg
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 transition ${open ? 'rotate-180' : ''}`}
          fill="currentColor"
        >
          <path d="M5 7l5 6 5-6H5z" />
        </svg>
      </button>
      {open && (
        <div className="ml-3 flex flex-col border-l border-slate-200 pl-2 pb-2">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={() => onNavigate(child.href)}
              className="px-2 py-2 text-sm text-slate-600"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
