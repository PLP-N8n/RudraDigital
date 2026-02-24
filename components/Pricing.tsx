import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from './Button';

const packages = [
  {
    name: 'Starter',
    price: '£299',
    bestFor: 'Best for new businesses needing a simple online presence',
    features: [
      '1-page website',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
      'Google Maps embed',
      '1 revision round',
      'Delivered in 5–7 days',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '£599',
    bestFor: 'Best for growing businesses wanting a polished, full-featured site',
    features: [
      'Up to 5 pages',
      'Custom design & layout',
      'Full SEO optimisation',
      'Google Business Profile setup',
      'Booking link integration',
      '2 revision rounds',
      'Delivered in 10–14 days',
    ],
    highlighted: true,
  },
  {
    name: 'Growth',
    price: '£999',
    bestFor: 'Best for established businesses ready to scale online',
    features: [
      'Up to 10 pages',
      'Custom copywriting',
      'Blog setup',
      'Newsletter integration',
      'Analytics dashboard',
      'Unlimited revisions',
      'Delivered in 14–21 days',
      '1 month free maintenance',
    ],
    highlighted: false,
  },
];

const addOns = [
  { name: 'Monthly Maintenance', price: '£39/mo' },
  { name: 'SEO & Content Updates', price: '£79/mo' },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-rudra-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-rudra-accent font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-rudra-text sm:text-4xl">
            Our Packages
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-rudra-text-muted">
            Transparent pricing with no hidden fees. Pick the package that fits your business.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl bg-white border shadow-sm p-8 animate-fadeSlideIn ${
                pkg.highlighted
                  ? 'border-rudra-accent border-2'
                  : 'border-rudra-text/10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-rudra-accent px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-rudra-text">{pkg.name}</h3>
                <p className="mt-4 text-4xl font-extrabold text-rudra-text">{pkg.price}</p>
                <p className="mt-2 text-sm text-rudra-text-muted">{pkg.bestFor}</p>
              </div>

              <ul className="mt-8 space-y-4 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-rudra-accent flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-base text-rudra-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="#contact"
                  variant={pkg.highlighted ? 'primary' : 'outline'}
                  fullWidth
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-rudra-text mb-6">Monthly Add-Ons</h3>
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-6">
            {addOns.map((addOn, index) => (
              <div
                key={addOn.name}
                className="bg-white rounded-lg border border-rudra-text/10 shadow-sm px-6 py-4 animate-fadeSlideIn"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <p className="font-medium text-rudra-text">{addOn.name}</p>
                <p className="text-rudra-accent font-bold">{addOn.price}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-rudra-text-muted text-center">
          All prices exclude VAT. Hosting included on fast CDN. Domain registration from £10/year.
        </p>
      </div>
    </section>
  );
};
