export interface Currency {
  code: string;
  symbol: string;
  name: string;
  locale: string;
}

export const currencies: Currency[] = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },
  { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },
  { code: 'EUR', symbol: '€', name: 'Euro', locale: 'en-IE' },
  { code: 'GBP', symbol: '£', name: 'British Pound', locale: 'en-GB' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', locale: 'ar-AE' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', locale: 'en-AU' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', locale: 'en-CA' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', locale: 'en-SG' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', locale: 'ja-JP' },
  { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', locale: 'ar-SA' },
];

export function getCurrency(code: string): Currency {
  return currencies.find((c) => c.code === code) ?? currencies[0];
}

/** Indian digit grouping: 12,34,567 (last three, then pairs). */
function groupIndian(intStr: string): string {
  if (intStr.length <= 3) return intStr;
  const last3 = intStr.slice(-3);
  const rest = intStr.slice(0, -3);
  return `${rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',')},${last3}`;
}

/** Western digit grouping: 1,234,567. */
function groupWestern(intStr: string): string {
  return intStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format a numeric amount with the currency symbol and correct digit grouping.
 * Implemented manually (no Intl) so the output is byte-for-byte identical on the
 * server and the client — Intl.NumberFormat relies on the platform's ICU build,
 * which differs between Node and browsers and causes React hydration mismatches.
 */
export function formatMoney(amount: number, currencyCode = 'INR'): string {
  const currency = getCurrency(currencyCode);
  const value = Number.isFinite(amount) ? amount : 0;
  const negative = value < 0;
  const fixed = Math.abs(value).toFixed(2);
  const [intPart, decPart] = fixed.split('.');
  const grouped = currency.code === 'INR' ? groupIndian(intPart) : groupWestern(intPart);
  return `${negative ? '-' : ''}${currency.symbol}${grouped}.${decPart}`;
}

/** Convert a number to Indian words (rupees). Used for the "amount in words" line. */
export function numberToWordsIndian(num: number): string {
  const n = Math.floor(Math.abs(num));
  if (n === 0) return 'Zero';

  const ones = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen',
  ];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  const twoDigits = (x: number): string => {
    if (x < 20) return ones[x];
    return `${tens[Math.floor(x / 10)]}${x % 10 ? ' ' + ones[x % 10] : ''}`;
  };

  const threeDigits = (x: number): string => {
    const h = Math.floor(x / 100);
    const rest = x % 100;
    return `${h ? ones[h] + ' Hundred' + (rest ? ' ' : '') : ''}${rest ? twoDigits(rest) : ''}`;
  };

  let result = '';
  const crore = Math.floor(n / 10000000);
  const lakh = Math.floor((n / 100000) % 100);
  const thousand = Math.floor((n / 1000) % 100);
  const hundred = n % 1000;

  if (crore) result += `${twoDigits(crore)} Crore `;
  if (lakh) result += `${twoDigits(lakh)} Lakh `;
  if (thousand) result += `${twoDigits(thousand)} Thousand `;
  if (hundred) result += threeDigits(hundred);

  return result.trim();
}
