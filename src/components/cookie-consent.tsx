'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'qm-cookie-consent';

type ConsentState = 'accepted' | 'declined' | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState | 'loading'>('loading');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentState | null;
      setConsent(stored);
    } catch {
      setConsent(null);
    }
  }, []);

  const handleConsent = (decision: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, decision);
    } catch {
      /* storage blocked — banner still hides */
    }
    setConsent(decision);
  };

  // Don't render until hydrated, or if already decided
  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 px-4 py-4 shadow-2xl backdrop-blur-sm sm:px-6"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Icon + message */}
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
          <p className="text-sm leading-relaxed text-muted-foreground">
            We use cookies for analytics (Google Analytics) and advertising (Google AdSense). Your
            document data never leaves your device.{' '}
            <Link href="/privacy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>{' '}
            &middot;{' '}
            <Link href="/cookies" className="font-medium text-primary hover:underline">
              Cookie Policy
            </Link>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-shrink-0 items-center gap-2">
          <button
            id="cookie-decline-btn"
            onClick={() => handleConsent('declined')}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            aria-label="Decline optional cookies"
          >
            <X className="h-3.5 w-3.5" />
            Decline
          </button>
          <button
            id="cookie-accept-btn"
            onClick={() => handleConsent('accepted')}
            className="inline-flex items-center rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            aria-label="Accept all cookies"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
