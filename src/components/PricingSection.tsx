import React from 'react';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  extraNote?: string;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
}

const PricingSection = ({ title = "Prezzi Accessibili", subtitle = "Qualità professionale a prezzi trasparenti", tiers }: PricingSectionProps) => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
          <p className="text-sm text-muted-foreground mt-3 italic">
            *Prezzi indicativi. Offriamo pacchetti personalizzati con range di prezzo adattati alle tue esigenze.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`glass-card p-6 hover-lift relative flex flex-col justify-between h-full ${
                tier.popular ? 'ring-2 ring-primary' : ''
              }`}
            >

              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  Più Scelto
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{tier.name}</h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">€{tier.price}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tier.extraNote && (
                <p className="text-white text-sm font-semibold text-left mt-6">
                  {tier.extraNote}
                </p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
