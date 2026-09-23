import Link from 'next/link';
import { FileText, Instagram, Mail } from 'lucide-react';
import { footerNav, siteConfig } from '@/lib/site';

const columns: { title: string; links: readonly { title: string; href: string }[] }[] = [
  { title: 'Product', links: footerNav.product },
  { title: 'Free Tools', links: footerNav.tools },
  { title: 'Industries', links: footerNav.industries },
  { title: 'Guides', links: footerNav.resources },
  { title: 'Company & Legal', links: footerNav.company },
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
              Free, GST-ready quotations, invoices and business documents that you build in your
              browser and download as a clean PDF. No account, no watermark.
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Mail className="h-4 w-4" /> {siteConfig.contactEmail}
            </a>

            {/* Publisher identity — a reviewer should not have to hunt for who
                runs the site, and it belongs on every page, not just About. */}
            <p className="mt-5 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Built and operated by{' '}
              <Link href="/author/prashant-upadhyay" className="font-medium text-foreground hover:text-primary">
                {siteConfig.operator.name}
              </Link>
              , an independent developer in {siteConfig.operator.country}. Funded by advertising —
              we never charge users.
            </p>
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

        {/* Standing disclaimer — the site publishes tax-adjacent guidance, so the
            "not professional advice" line should be visible sitewide. */}
        <p className="mt-12 border-t border-border/60 pt-8 text-xs leading-relaxed text-muted-foreground">
          QuotationMaker.in provides document formatting tools and general information for Indian
          businesses. It is not tax, legal or accounting advice, and GST rates and rules change over
          time — please verify figures with a qualified professional before relying on them. See our{' '}
          <Link href="/disclaimer" className="text-primary hover:underline">
            disclaimer
          </Link>
          .
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Made in India 🇮🇳 for businesses everywhere.</p>
          <p className="flex items-center gap-1.5">
            Developed by{' '}
            <a
              href={siteConfig.operator.profiles[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              <Instagram className="h-3.5 w-3.5" />
              {siteConfig.operator.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
