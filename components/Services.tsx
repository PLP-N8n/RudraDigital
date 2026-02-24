import React from 'react';
import { Layout, Smartphone, Search, Headphones } from 'lucide-react';

const services = [
  {
    name: 'Website Design',
    description: 'A clean, professional site that represents your business online. Built from scratch, tailored to your brand.',
    icon: Layout,
  },
  {
    name: 'Mobile Optimisation',
    description: 'Your site looks perfect on every phone, tablet, and desktop. Over 60% of your customers browse on mobile.',
    icon: Smartphone,
  },
  {
    name: 'Local SEO',
    description: 'Help customers in your area find you on Google. We set up your Google Business profile and optimise for local search.',
    icon: Search,
  },
  {
    name: 'Ongoing Support',
    description: 'Updates, changes, and maintenance whenever you need it. We\'re always just a message away.',
    icon: Headphones,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-rudra-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-rudra-text sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-rudra-text-muted">
            Everything you need to get found and get booked.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="pt-6 animate-fadeSlideIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full border border-rudra-text/10 shadow-sm">
                  <div className="-mt-6">
                    <span className="inline-flex items-center justify-center p-3 bg-rudra-accent rounded-md">
                      <service.icon className="h-6 w-6 text-white" />
                    </span>
                    <h3 className="mt-8 text-lg font-medium text-rudra-text tracking-tight">
                      {service.name}
                    </h3>
                    <p className="mt-5 text-base text-rudra-text-muted">
                      {service.description}
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
