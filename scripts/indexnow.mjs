#!/usr/bin/env node
/**
 * Push every indexable URL to IndexNow, which Bing, Yandex, Naver and Seznam
 * all consume. Google does not participate in IndexNow — for Google, submit the
 * sitemap once in Search Console and use "Request indexing" on the URL
 * Inspection tool for individual priority pages.
 *
 * Usage:
 *   npm run indexnow                    # submit every URL in the sitemap
 *   npm run indexnow -- /blog/new-post  # submit specific paths only
 *
 * The key file must be reachable at https://<host>/<key>.txt and contain the
 * key as its only content, otherwise submissions are rejected.
 */

const KEY = '757e9ee40c0ea692bc2427cbc005f3aa';
const HOST = 'quotationmaker.in';
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

async function collectUrls() {
  const explicit = process.argv.slice(2).filter((a) => a.startsWith('/'));
  if (explicit.length) return explicit.map((p) => `https://${HOST}${p}`);

  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not read sitemap (HTTP ${res.status}). Is the site deployed?`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!urls.length) throw new Error('Sitemap contained no <loc> entries.');
  return urls;
}

async function main() {
  const urlList = await collectUrls();
  console.log(`Submitting ${urlList.length} URLs to IndexNow…`);

  // IndexNow accepts up to 10,000 URLs per request; batch anyway to keep
  // payloads small and make partial failures easier to read.
  const BATCH = 500;
  for (let i = 0; i < urlList.length; i += BATCH) {
    const batch = urlList.slice(i, i + BATCH);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: batch }),
    });
    // 200 = accepted, 202 = accepted pending key validation. Both are success.
    const ok = res.status === 200 || res.status === 202;
    console.log(`  batch ${i / BATCH + 1}: HTTP ${res.status} ${ok ? '✓' : '✗ ' + (await res.text())}`);
    if (!ok) process.exitCode = 1;
  }

  console.log('\nGoogle does not support IndexNow. For Google:');
  console.log(`  1. Submit https://${HOST}/sitemap.xml once in Search Console → Sitemaps`);
  console.log('  2. Use URL Inspection → Request indexing for individual priority pages');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
