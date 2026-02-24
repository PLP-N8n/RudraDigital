import React from 'react';
import { RefreshCw, ShieldCheck, Clock, Heart } from 'lucide-react';

const badges = [
  { icon: RefreshCw, title: 'Unlimited Revisions', description: 'We revise until you love it' },
  { icon: ShieldCheck, title: 'No Hidden Fees', description: 'The price we quote is the price you pay' },
  { icon: Clock, title: '7-Day Delivery', description: 'Simple sites live in under a week' },
  { icon: Heart, title: '100% Yours', description: 'Your content stays yours, always' },
];

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-rudra-bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="animate-fadeSlideIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <badge.icon className="w-10 h-10 text-rudra-accent mx-auto mb-3" />
              <h3 className="font-semibold text-rudra-text text-sm">{badge.title}</h3>
              <p className="text-xs text-rudra-text-muted mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
