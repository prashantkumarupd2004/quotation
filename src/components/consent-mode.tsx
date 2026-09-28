'use client';

import { useEffect } from 'react';

/** Shared with the cookie banner — single source of truth for the stored choice. */
export const CONSENT_STORAGE_KEY = 'qm-cookie-consent';

type Gtag = (...args: unknown[]) => void;

function ensureGtag(): Gtag | null {
  if (typeof window === 'undefined') return null;
  // `as any` avoids clashing with the dataLayer typings shipped by @next/third-parties.
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer.push(args);
    };
  }
  return w.gtag as Gtag;
}

/**
 * Apply the user's consent choice to Google Consent Mode and persist it.
 * Safe to call before gtag.js finishes loading — commands queue on dataLayer.
 */
export function updateConsent(granted: boolean) {
  const gtag = ensureGtag();
  const state = granted ? 'granted' : 'denied';
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, granted ? 'accepted' : 'declined');
  } catch {
    /* storage blocked — consent update still applies for this session */
  }
  gtag?.('consent', 'update', {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

/**
 * On every page load, re-apply a previously stored consent choice so
 * Google tags respect it from the first pageview of the session.
 * Render once in the root layout.
 */
export function ConsentMode() {
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      /* storage blocked — keep defaults (denied) */
    }
    if (stored === 'accepted' || stored === 'declined') {
      updateConsent(stored === 'accepted');
    }
  }, []);
  return null;
}
