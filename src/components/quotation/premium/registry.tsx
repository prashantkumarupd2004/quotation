'use client';

import type { Quotation } from '@/types/quotation';
import { calculateTotals } from '@/lib/calculations';
import { formatMoney } from '@/lib/currency';
import { getTemplate } from '@/lib/templates';
import type { PremiumTemplateProps } from './shared';
import { ModernCorporate } from './modern-corporate';
import { MinimalClean } from './minimal-clean';
import { PremiumBusiness } from './premium-business';
import { ElegantBlue } from './elegant-blue';
import { DarkProfessional } from './dark-professional';
import { CreativeGradient } from './creative-gradient';
import { LuxuryGold } from './luxury-gold';
import { InvoiceStyle } from './invoice-style';
import { StartupTheme } from './startup-theme';
import { ClassicProfessional } from './classic-professional';

type PremiumComponent = (props: PremiumTemplateProps) => React.ReactElement;

const REGISTRY: Record<string, PremiumComponent> = {
  'modern-corporate': ModernCorporate,
  'minimal-clean': MinimalClean,
  'premium-business': PremiumBusiness,
  'elegant-blue': ElegantBlue,
  'dark-professional': DarkProfessional,
  'creative-gradient': CreativeGradient,
  'luxury-gold': LuxuryGold,
  'invoice-style': InvoiceStyle,
  'startup-theme': StartupTheme,
  'classic-professional': ClassicProfessional,
};

export function isPremiumTemplate(id: string): boolean {
  return id in REGISTRY;
}

/** Render a premium template, or null if the id isn't a premium template. */
export function renderPremiumTemplate(quotation: Quotation): React.ReactElement | null {
  const Component = REGISTRY[quotation.meta.templateId];
  if (!Component) return null;

  const template = getTemplate(quotation.meta.templateId);
  const accent = quotation.meta.accentColor || template.accent;
  const props: PremiumTemplateProps = {
    quotation,
    totals: calculateTotals(quotation),
    money: (n: number) => formatMoney(n, quotation.meta.currency),
    accent,
    accent2: template.accent2,
  };
  return <Component {...props} />;
}
