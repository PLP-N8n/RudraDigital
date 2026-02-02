import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl animate-fadeSlideIn">
          <span className="block text-rudra-text">Simple websites that help</span>
          <span className="block text-rudra-accent mt-2">customers contact your business</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-rudra-text-muted max-w-2xl mx-auto animate-fadeSlideIn" style={{ animationDelay: '100ms' }}>
          Rudra Digital provides clean, one-page websites designed to help local businesses be easily contacted online. No clutter, just results.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fadeSlideIn" style={{ animationDelay: '200ms' }}>
          <Button
            href="#contact"
            className="px-8 py-3 md:text-lg"
            aria-label="Scroll to contact section"
          >
            Get in touch
          </Button>
          <Button
            href="#how-it-works"
            variant="outline"
            className="px-8 py-3 md:text-lg"
            aria-label="Scroll to how it works section"
          >
            See how it works
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex items-center justify-center gap-6 animate-fadeSlideIn" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-rudra-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-rudra-text-muted">No hidden fees</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-rudra-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-rudra-text-muted">Fast delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
