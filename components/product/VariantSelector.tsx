'use client';

import { ProductVariant } from '@/lib/shopify/types';

interface VariantSelectorProps {
  options: {
    id: string;
    name: string;
    values: string[];
  }[];
  variants: ProductVariant[];
  selectedOptions: Record<string, string>;
  onOptionChange: (optionName: string, value: string) => void;
}

export default function VariantSelector({
  options,
  variants,
  selectedOptions,
  onOptionChange,
}: VariantSelectorProps) {
  if (options.length === 0 || (options.length === 1 && options[0].values[0] === 'Default Title')) {
    return null;
  }

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <div key={option.id}>
          <label className="mb-2 block font-inter text-sm font-medium uppercase tracking-wide text-charcoal">
            {option.name}
          </label>
          <div className="flex flex-wrap gap-2">
            {option.values.map((value) => {
              const isSelected = selectedOptions[option.name] === value;

              // Check if this variant is available
              const isAvailable = variants.some((variant) => {
                const matchesAllOptions = variant.selectedOptions.every((selectedOption) => {
                  if (selectedOption.name === option.name) {
                    return selectedOption.value === value;
                  }
                  return selectedOption.value === selectedOptions[selectedOption.name];
                });
                return matchesAllOptions && variant.availableForSale;
              });

              return (
                <button
                  key={value}
                  onClick={() => onOptionChange(option.name, value)}
                  disabled={!isAvailable}
                  className={`rounded-lg border-2 px-6 py-3 font-inter text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-40 ${
                    isSelected
                      ? 'border-perle-purple bg-perle-purple text-white'
                      : 'border-marble-grey bg-white text-charcoal hover:border-mauve-elegant'
                  }`}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
