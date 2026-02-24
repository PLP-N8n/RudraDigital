import React from 'react';
import { CheckCircle, Zap, Shield, Smartphone } from 'lucide-react';
import { Button } from './Button';

const trustItems = [
  { icon: CheckCircle, text: 'Free Revisions' },
  { icon: Zap, text: 'Fast Delivery' },
  { icon: Shield, text: 'No Hidden Fees' },
  { icon: Smartphone, text: 'Mobile-First' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl animate-fadeSlideIn">
          <span className="block text-rudra-text">Professional websites that bring</span>
          <span className="block text-rudra-accent mt-2">customers to your door</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-rudra-text-muted max-w-2xl mx-auto animate-fadeSlideIn" style={{ animationDelay: '100ms' }}>
          Clean, professional websites for local businesses across Central Scotland. No clutter, no fuss — just results.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fadeSlideIn" style={{ animationDelay: '200ms' }}>
          <Button href="#contact" className="px-8 py-3 md:text-lg">
            Get a Free Quote
          </Button>
          <Button href="#portfolio" variant="outline" className="px-8 py-3 md:text-lg">
            See Our Work
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fadeSlideIn" style={{ animationDelay: '300ms' }}>
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2">
              <item.icon className="w-5 h-5 text-rudra-accent flex-shrink-0" />
              <span className="text-sm text-rudra-text-muted">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
