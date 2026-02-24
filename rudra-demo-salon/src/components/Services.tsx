import { Scissors, Palette, Sparkles, Droplets, Crown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  name: string;
  description: string;
  price: string;
}

const services: ServiceItem[] = [
  {
    icon: Scissors,
    name: 'Cut & Blow Dry',
    description: 'A fresh cut tailored to your style and face shape.',
    price: 'from £35',
  },
  {
    icon: Palette,
    name: 'Colour',
    description: 'From subtle highlights to bold transformations.',
    price: 'from £55',
  },
  {
    icon: Sparkles,
    name: 'Highlights',
    description: 'Hand-painted balayage and foil highlights.',
    price: 'from £70',
  },
  {
    icon: Droplets,
    name: 'Treatments',
    description: 'Deep conditioning and repair for all hair types.',
    price: 'from £25',
  },
  {
    icon: Crown,
    name: 'Bridal & Occasion',
    description: 'Look stunning on your special day.',
    price: 'from £80',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-salon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-salon-text">
            Our Services
          </h2>
          <p className="mt-3 text-salon-text-muted text-lg">
            Tailored to bring out your best
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border-t-4 border-salon-accent/30"
            >
              <div className="w-12 h-12 bg-salon-accent/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon size={24} className="text-salon-accent" />
              </div>
              <h3 className="text-lg font-bold text-salon-text mb-2">
                {service.name}
              </h3>
              <p className="text-salon-text-muted text-sm leading-relaxed mb-3">
                {service.description}
              </p>
              <p className="text-salon-accent font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
