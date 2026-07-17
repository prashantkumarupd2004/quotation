import Link from 'next/link';
import { FileText, Instagram, Mail } from 'lucide-react';
import { footerNav, siteConfig } from '@/lib/site';

const columns: { title: string; links: readonly { title: string; href: string }[] }[] = [
  { title: 'Product', links: footerNav.product },
  { title: 'Free Tools', links: footerNav.tools },
  { title: 'Industries', links: footerNav.industries },
  { title: 'Resources', links: footerNav.resources },
  { title: 'Company', links: footerNav.company },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-7">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                <FileText className="h-5 w-5" />
              </span>
              Quotation<span className="gradient-text">Maker</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. Create GST-ready quotations in 30 seconds and download a polished
              PDF — completely free, no signup.
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Mail className="h-4 w-4" /> {siteConfig.contactEmail}
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Made in India 🇮🇳 for businesses everywhere.</p>
          <p className="flex items-center gap-1.5">
            Developed by{' '}
            <a
              href="https://www.instagram.com/prashantkrupd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              <Instagram className="h-3.5 w-3.5" />
              Prashant Upadhyay
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
