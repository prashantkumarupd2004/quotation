'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, FileText, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { mainNav, type NavItem } from '@/lib/site';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

/** True when `href` is the current page or one of its descendants. */
function isActive(pathname: string, item: NavItem): boolean {
  if (pathname === item.href) return true;
  if (item.children?.some((c) => c.href === pathname)) return true;
  return item.href !== '/' && pathname.startsWith(`${item.href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close both menus whenever navigation happens.
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Escape closes whichever menu is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpenMenu(null);
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // A short close delay keeps the dropdown usable while the pointer crosses the
  // gap between the trigger and the panel.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'glass border-b border-border/60 shadow-sm' : 'bg-background/80 backdrop-blur-sm'
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
          {/* Premium logo mark: stylised Q with document corner fold */}
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] shadow-lg shadow-primary/30">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Document body */}
              <path d="M4 2.5A1.5 1.5 0 0 1 5.5 1h8L17 4.5V19a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 19V2.5Z" fill="white" fillOpacity="0.95"/>
              {/* Fold corner */}
              <path d="M13.5 1 17 4.5h-3.5V1Z" fill="#c4b5fd"/>
              {/* Q letter strokes */}
              <circle cx="10.5" cy="11.5" r="3" stroke="#4f46e5" strokeWidth="1.5" fill="none"/>
              <line x1="12.6" y1="13.6" x2="14.5" y2="15.5" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="tracking-tight">
            Quotation<span className="gradient-text">Maker</span>
          </span>
        </Link>

        {/* ---------- Desktop ---------- */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(pathname, item);

            if (!item.children) {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className={cn(
                      'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                      active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            }

            const menuOpen = openMenu === item.title;
            return (
              <li
                key={item.title}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(item.title);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(menuOpen ? null : item.title)}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                    active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.title}
                  <ChevronDown
                    className={cn('h-3.5 w-3.5 transition-transform', menuOpen && 'rotate-180')}
                  />
                </button>

                <AnimatePresence>
                  {menuOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                      className="absolute left-0 top-full w-60 pt-2"
                    >
                      <ul className="overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-xl">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                'block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-muted',
                                pathname === child.href
                                  ? 'font-semibold text-primary'
                                  : 'text-muted-foreground hover:text-foreground'
                              )}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/create" className="btn-primary hidden sm:inline-flex">
            Create Free
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ---------- Mobile ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain border-t border-border/60 bg-card lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-muted',
                      isActive(pathname, item) ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {item.title}
                  </Link>
                  {item.children ? (
                    <ul className="ml-3 border-l border-border pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              'block rounded-xl px-4 py-2.5 text-sm hover:bg-muted',
                              pathname === child.href
                                ? 'font-semibold text-primary'
                                : 'text-muted-foreground'
                            )}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
              <li className="mt-3">
                <Link href="/create" className="btn-primary w-full">
                  Create Free Quotation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
