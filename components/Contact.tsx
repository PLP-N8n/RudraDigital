import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-rudra-bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-rudra-text sm:text-4xl mb-8">
          Ready to get started?
        </h2>
        <p className="text-xl text-rudra-text-muted mb-12 max-w-2xl mx-auto">
          Contact us today to discuss your new website. No complex forms, just reach out directly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="mailto:contact@rudradigital.uk"
            className="group flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-rudra-text/10 shadow-sm hover:border-rudra-accent transition-colors"
          >
            <Mail className="h-10 w-10 text-rudra-accent mb-4" />
            <span className="text-lg font-medium text-rudra-text">Email Us</span>
            <span className="text-rudra-text-muted text-sm mt-1">contact@rudradigital.uk</span>
          </a>

          <a
            href="https://wa.me/447449938510"
            className="group flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-rudra-text/10 shadow-sm hover:border-rudra-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-10 w-10 text-rudra-accent mb-4" />
            <span className="text-lg font-medium text-rudra-text">WhatsApp</span>
            <span className="text-rudra-text-muted text-sm mt-1">Chat with us directly</span>
          </a>
        </div>
      </div>
    </section>
  );
};
