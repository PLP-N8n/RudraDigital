import React from 'react';
import { Smartphone, Layout, UserCheck } from 'lucide-react';

const features = [
  {
    name: 'Single Page Design',
    description: 'Everything your customers need to know on one clear, concise page. No complex navigation or confusing menus.',
    icon: Layout,
  },
  {
    name: 'Mobile Optimized',
    description: 'Your site will look perfect on every device, ensuring customers on-the-go can easily read and contact you.',
    icon: Smartphone,
  },
  {
    name: 'Contact Focused',
    description: 'Designed with one goal in mind: helping new clients call, message, or email you effortlessly.',
    icon: UserCheck,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-rudra-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-rudra-text sm:text-4xl">
            What we offer
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-rudra-text-muted">
            We focus on the essentials to get you online quickly and effectively.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="pt-6 animate-fadeSlideIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full border border-rudra-text/10 shadow-sm">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-rudra-accent rounded-md">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-rudra-text tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-rudra-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
