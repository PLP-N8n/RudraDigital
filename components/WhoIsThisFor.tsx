import React from 'react';
import { CheckCircle } from 'lucide-react';

const audiences = [
  "Local Tradespeople (Plumbers, Electricians)",
  "Independent Consultants",
  "Small Retail Shops",
  "Cafes and Restaurants",
  "Freelancers & Creatives",
  "Service Providers"
];

export const WhoIsThisFor: React.FC = () => {
  return (
    <section id="who-is-this-for" className="py-20 bg-rudra-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-rudra-accent font-semibold tracking-wide uppercase">Audience</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-rudra-text sm:text-4xl">
            Who is this for?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-rudra-text-muted lg:mx-auto">
            Our service is perfect for businesses that need a professional presence without the complexity of a large website.
          </p>
        </div>

        <div className="mt-10 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          <div className="bg-white rounded-2xl p-8 lg:col-span-2 border border-rudra-text/10 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {audiences.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start animate-fadeSlideIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-rudra-accent" />
                  </div>
                  <div className="ml-3 text-lg text-rudra-text font-medium">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
