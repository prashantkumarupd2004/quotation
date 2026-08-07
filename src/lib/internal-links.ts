import { blogPosts } from '@/data/blog';
import { industries } from '@/data/industries';
import { DOCUMENT_TYPE_LIST } from '@/lib/document-types';

/**
 * The site's internal link graph.
 *
 * Editorially chosen `relatedSlugs` produce a badly skewed graph: hand-picked
 * lists converge on the same few "obvious" posts, and the fallback in
 * getRelatedPosts fills gaps with the *newest* posts, concentrating links
 * further. Measured before this module existed: the top post had 17 inbound
 * links, twelve posts had none at all, so those twelve were reachable only from
 * the /blog index and accumulated almost no internal PageRank.
 *
 * This module keeps the editorial picks as the primary signal, then guarantees a
 * floor: no post ends up below MIN_INBOUND inbound links, and no post is allowed
 * to hoard links while others starve.
 */

/** No post should have fewer inbound internal links than this. */
const MIN_INBOUND = 4;

/** Cap on how many inbound links one post may absorb, to keep the graph flat. */
const MAX_INBOUND = 8;

export interface LinkTarget {
  slug: string;
  title: string;
  /** Why this link exists — 'editorial' picks first, then balancing links. */
  reason: 'editorial' | 'balance' | 'cluster';
}

type Graph = Map<string, string[]>;

/**
 * Computes the balanced link graph once at module load. It is deterministic —
 * same posts in, same graph out — so every build and every page render agree,
 * which matters because a graph that shuffled per-request would make internal
 * linking invisible to a crawler.
 */
const graph: Graph = buildGraph();

function buildGraph(): Graph {
  const bySlug = new Map(blogPosts.map((p) => [p.slug, p]));
  const out = new Map<string, string[]>();
  const inboundCount = new Map<string, number>();

  for (const p of blogPosts) {
    out.set(p.slug, []);
    inboundCount.set(p.slug, 0);
  }

  // Pass 1 — honour the editorial picks, but refuse any link into a post that
  // has already hit MAX_INBOUND.
  for (const post of blogPosts) {
    for (const target of post.relatedSlugs) {
      if (target === post.slug || !bySlug.has(target)) continue;
      if ((inboundCount.get(target) ?? 0) >= MAX_INBOUND) continue;
      out.get(post.slug)!.push(target);
      inboundCount.set(target, (inboundCount.get(target) ?? 0) + 1);
    }
  }

  // Pass 2 — lift every starved post up to MIN_INBOUND. Donors are chosen from
  // the same category first (a category match is a genuine topical relationship,
  // which an arbitrary link is not), then from the least-linked-out posts so the
  // outbound load stays even.
  const starved = blogPosts
    .filter((p) => (inboundCount.get(p.slug) ?? 0) < MIN_INBOUND)
    .sort((a, b) => (inboundCount.get(a.slug) ?? 0) - (inboundCount.get(b.slug) ?? 0));

  for (const needy of starved) {
    const sameCategory = blogPosts.filter(
      (p) => p.slug !== needy.slug && p.category === needy.category,
    );
    const others = blogPosts.filter((p) => p.slug !== needy.slug && p.category !== needy.category);
    const donors = [...sameCategory, ...others].sort(
      (a, b) => (out.get(a.slug)?.length ?? 0) - (out.get(b.slug)?.length ?? 0),
    );

    for (const donor of donors) {
      if ((inboundCount.get(needy.slug) ?? 0) >= MIN_INBOUND) break;
      const donorLinks = out.get(donor.slug)!;
      if (donorLinks.includes(needy.slug)) continue;
      donorLinks.push(needy.slug);
      inboundCount.set(needy.slug, (inboundCount.get(needy.slug) ?? 0) + 1);
    }
  }

  return out;
}

/**
 * Related posts for a given slug — editorial picks first, then the balancing
 * links added by pass 2. Replaces the old getRelatedPosts fallback, which filled
 * from the newest posts and so kept re-linking the same handful.
 */
export function relatedPosts(slug: string, limit = 6): LinkTarget[] {
  const bySlug = new Map(blogPosts.map((p) => [p.slug, p]));
  const post = bySlug.get(slug);
  if (!post) return [];

  const editorial = new Set(post.relatedSlugs);
  const links = graph.get(slug) ?? [];

  return links
    .flatMap<LinkTarget>((s) => {
      const target = bySlug.get(s);
      if (!target) return [];
      return [
        {
          slug: s,
          title: target.title,
          reason: editorial.has(s) ? 'editorial' : 'balance',
        },
      ];
    })
    .slice(0, limit);
}

/**
 * Posts that belong to a document type's topic, for linking from tool pages down
 * into the guides. Tool pages are the strongest pages on the site, so passing
 * authority from them into the guides is the most valuable link direction.
 */
export function postsForDocument(docId: string, limit = 4): LinkTarget[] {
  const needle = docId.replace(/-/g, ' ');
  const scored = blogPosts
    .map((p) => {
      const haystack = `${p.title} ${p.keywords.join(' ')} ${p.category}`.toLowerCase();
      let score = 0;
      if (haystack.includes(needle)) score += 3;
      for (const word of needle.split(' ')) {
        if (word.length > 3 && haystack.includes(word)) score += 1;
      }
      return { post: p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((x) => ({
    slug: x.post.slug,
    title: x.post.title,
    reason: 'cluster' as const,
  }));
}

/**
 * Guides relevant to an industry page, matched on the industry's own keywords.
 * Industry pages previously linked only to sibling industries, which kept the
 * whole industry cluster sealed off from the editorial content.
 */
export function postsForIndustry(slug: string, limit = 3): LinkTarget[] {
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return [];

  const terms = [industry.name.toLowerCase(), ...industry.keywords.map((k) => k.toLowerCase())];
  const scored = blogPosts
    .map((p) => {
      const haystack = `${p.title} ${p.keywords.join(' ')}`.toLowerCase();
      const score = terms.reduce((acc, t) => {
        const head = t.split(' ')[0];
        return acc + (haystack.includes(t) ? 2 : head.length > 4 && haystack.includes(head) ? 1 : 0);
      }, 0);
      return { post: p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const picked = scored.slice(0, limit);
  // Never render an empty "further reading" block — fall back to the evergreen
  // how-to, which is relevant to every trade.
  if (!picked.length) {
    const fallback = blogPosts.find((p) => p.slug === 'how-to-write-a-professional-quotation');
    return fallback ? [{ slug: fallback.slug, title: fallback.title, reason: 'cluster' }] : [];
  }
  return picked.map((x) => ({ slug: x.post.slug, title: x.post.title, reason: 'cluster' as const }));
}

/**
 * The document generator a guide should send readers to. Lets every post carry a
 * contextual tool link instead of the single hardcoded /create CTA that every
 * post currently shares.
 */
export function toolForPost(slug: string): { path: string; label: string } {
  const post = blogPosts.find((p) => p.slug === slug);
  const fallback = { path: '/create', label: 'Quotation Maker' };
  if (!post) return fallback;

  const haystack = `${post.slug} ${post.title} ${post.keywords.join(' ')}`.toLowerCase();
  // Longest label first, so 'gst invoice' wins over 'invoice'.
  const ranked = [...DOCUMENT_TYPE_LIST].sort((a, b) => b.shortName.length - a.shortName.length);
  for (const doc of ranked) {
    if (haystack.includes(doc.shortName.toLowerCase())) {
      return { path: doc.path, label: doc.label };
    }
  }
  return fallback;
}

/** Diagnostics for the link graph. Used by `npm run links:audit`. */
export function linkGraphStats() {
  const inbound = new Map<string, number>();
  for (const p of blogPosts) inbound.set(p.slug, 0);
  for (const [, targets] of graph) {
    for (const t of targets) inbound.set(t, (inbound.get(t) ?? 0) + 1);
  }
  const counts = [...inbound.values()];
  return {
    posts: blogPosts.length,
    orphans: [...inbound.entries()].filter(([, c]) => c === 0).map(([s]) => s),
    min: Math.min(...counts),
    max: Math.max(...counts),
    average: Number((counts.reduce((a, b) => a + b, 0) / counts.length).toFixed(2)),
  };
}
