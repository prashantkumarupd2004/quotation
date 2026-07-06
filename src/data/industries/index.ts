import type { Industry } from '@/data/industry-types';
import { industriesA } from './group-a';
import { industriesB } from './group-b';
import { industriesC } from './group-c';
import { industriesD } from './group-d';

export const industries: Industry[] = [
  ...industriesA,
  ...industriesB,
  ...industriesC,
  ...industriesD,
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getRelatedIndustries(slug: string, limit = 4): Industry[] {
  const industry = getIndustry(slug);
  if (!industry) return industries.slice(0, limit);
  const related = industry.relatedSlugs
    .map((s) => getIndustry(s))
    .filter((i): i is Industry => Boolean(i) && i!.slug !== slug);
  if (related.length >= limit) return related.slice(0, limit);
  const fill = industries.filter((i) => i.slug !== slug && !related.includes(i));
  return [...related, ...fill].slice(0, limit);
}
