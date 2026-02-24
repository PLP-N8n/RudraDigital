import React from 'react';
import { CheckCircle } from 'lucide-react';

const painPoints = [
  'You rely on word of mouth but want more enquiries',
  'Your current website is outdated or you don\'t have one',
  'Customers can\'t find you on Google',
  'You want a professional online presence without the hassle',
];

const businessTypes = [
  'Hairdressers & Salons',
  'Plumbers & Electricians',
  'Builders & Roofers',
  'Cafes & Restaurants',
  'Shops & Retailers',
  'Freelancers & Consultants',
];

export const WhoIsThisFor: React.FC = () => {
  return (
    <section id="who-is-this-for" className="py-20 bg-rudra-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-rudra-text mb-8">
              Does this sound like you?
            </h2>
            <div className="space-y-5">
              {painPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-3 animate-fadeSlideIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-rudra-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-rudra-text">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-rudra-text mb-8">
              We work with
            </h2>
            <div className="flex flex-wrap gap-3">
              {businessTypes.map((type, index) => (
                <span
                  key={type}
                  className="inline-flex rounded-full bg-rudra-accent/10 text-rudra-accent px-4 py-2 text-sm font-medium animate-fadeSlideIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
