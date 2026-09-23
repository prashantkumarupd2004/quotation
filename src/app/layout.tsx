import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { JsonLd } from '@/components/json-ld';
import { organizationSchema, webAppSchema, websiteSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { GoogleAnalytics } from '@next/third-parties/google';
import { CookieConsent } from '@/components/cookie-consent';

const gaId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-R49PCT53VW';

/**
 * Google AdSense publisher ID.
 * Set NEXT_PUBLIC_ADSENSE_PUB_ID=ca-pub-XXXXXXXXXXXXXXXX in your .env.production
 * once Google AdSense approves your site and assigns you a publisher ID.
 * Leave empty (the default) before approval — adding an unapproved ID causes
 * AdSense to show a policy warning on your site.
 */
const adsensePubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID ?? '';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  ...buildMetadata(),
  manifest: '/manifest.webmanifest',
  applicationName: siteConfig.name,
  appleWebApp: { capable: true, title: siteConfig.shortName, statusBarStyle: 'default' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1e' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <JsonLd data={[organizationSchema(), websiteSchema(), webAppSchema()]} />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <CookieConsent />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){})})}`,
          }}
        />
      </body>
      {process.env.NODE_ENV === 'production' && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      {/* AdSense: activates automatically once NEXT_PUBLIC_ADSENSE_PUB_ID is set post-approval */}
      {process.env.NODE_ENV === 'production' && adsensePubId ? (
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePubId}`}
          crossOrigin="anonymous"
        />
      ) : null}
    </html>
  );
}
