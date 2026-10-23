import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import Script from 'next/script';
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
import { ConsentMode } from '@/components/consent-mode';

const gaId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-R49PCT53VW';

/**
 * Google AdSense publisher ID.
 * Defaults to the site's verified publisher ID (the same ID published in
 * ads.txt) so the AdSense code is present on every page for site review and
 * verification. Can still be overridden with NEXT_PUBLIC_ADSENSE_PUB_ID in
 * .env.production if the account ever changes.
 */
const adsensePubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID ?? 'ca-pub-3608853244915716';

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
  other: { 'google-adsense-account': 'ca-pub-3608853244915716' },
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
        {/*
          Google Consent Mode v2 defaults — MUST run before any Google tag.
          beforeInteractive inlines this into <head> so it executes before
          the GA/AdSense scripts. Everything starts denied; the cookie
          banner upgrades to granted only when the user accepts.
        */}
        <Script
          id="consent-mode-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        <ConsentMode />
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
      {/* AdSense code — loads in production with the verified publisher ID (see adsensePubId above) */}
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
