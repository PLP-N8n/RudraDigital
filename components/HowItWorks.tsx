import React from 'react';
import { MessageCircle, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    name: 'Free Consultation',
    description: 'Tell us about your business and what you need. We\'ll recommend the best approach — no jargon, no pressure, no obligation.',
    icon: MessageCircle,
  },
  {
    id: '02',
    name: 'Design & Build',
    description: 'We create your website and send you a preview link. You review it, give feedback, and we revise until you love it.',
    icon: Code,
  },
  {
    id: '03',
    name: 'Launch & Support',
    description: 'We go live, set up your Google listing, and hand everything over. Need changes later? We\'re always here to help.',
    icon: Rocket,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-rudra-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold text-rudra-text sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-rudra-text-muted lg:mx-auto">
            Three simple steps to get your business online.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-rudra-text/10" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center animate-fadeSlideIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white border-2 border-rudra-accent z-10 mb-6">
                  <step.icon className="w-10 h-10 text-rudra-accent" />
                </div>
                <h3 className="text-xl font-bold text-rudra-text mb-2">{step.name}</h3>
                <p className="text-rudra-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
