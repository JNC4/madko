import { Money } from '@/lib/shopify/types';

export function formatPrice(money: Money): string {
  const amount = parseFloat(money.amount);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: money.currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
