import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, ExternalLink, Loader2 } from 'lucide-react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@rudradigital.uk';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          businessType: data.get('businessType'),
          message: data.get('message'),
          _subject: `New enquiry from ${data.get('name')} — Rudra Digital`,
          _template: 'table',
        }),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-rudra-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-rudra-text sm:text-4xl">
            Let's Build Your Website
          </h2>
          <p className="mt-4 text-xl text-rudra-text-muted max-w-2xl mx-auto">
            Get in touch today — no obligation, no jargon, just a friendly chat about your business.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-rudra-text mb-6">Send Us a Message</h3>
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <p className="text-green-800 font-semibold text-lg">Thanks!</p>
                <p className="text-green-700 mt-2">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-rudra-text/10 p-3 focus:ring-2 focus:ring-rudra-accent focus:border-transparent outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                  className="w-full rounded-lg border border-rudra-text/10 p-3 focus:ring-2 focus:ring-rudra-accent focus:border-transparent outline-none"
                />
                <select
                  name="businessType"
                  className="w-full rounded-lg border border-rudra-text/10 p-3 focus:ring-2 focus:ring-rudra-accent focus:border-transparent outline-none text-rudra-text-muted"
                  defaultValue=""
                >
                  <option value="" disabled>Select your business type...</option>
                  <option>Hairdresser / Salon</option>
                  <option>Plumber / Electrician</option>
                  <option>Builder / Roofer</option>
                  <option>Restaurant / Cafe</option>
                  <option>Shop / Retail</option>
                  <option>Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full rounded-lg border border-rudra-text/10 p-3 focus:ring-2 focus:ring-rudra-accent focus:border-transparent outline-none resize-none"
                />

                {status === 'error' && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-rudra-accent text-white font-semibold py-3 rounded-lg hover:bg-rudra-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-rudra-text mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a href="tel:+447449938510" className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-rudra-accent" />
                <span className="text-xl font-bold text-rudra-text group-hover:text-rudra-accent transition-colors">07449 938510</span>
              </a>
              <a href="mailto:contact@rudradigital.uk" className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-rudra-accent" />
                <span className="text-rudra-text group-hover:text-rudra-accent transition-colors">contact@rudradigital.uk</span>
              </a>
              <a href="https://wa.me/447449938510" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <MessageCircle className="w-5 h-5 text-rudra-accent" />
                <span className="text-rudra-text group-hover:text-rudra-accent transition-colors">Chat on WhatsApp</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-rudra-accent" />
                <span className="text-rudra-text-muted">We reply within 24 hours</span>
              </div>
            </div>

            <div className="border-t border-rudra-text/10 my-6" />

            <p className="text-rudra-text-muted mb-4">Want a detailed breakdown?</p>
            <a
              href="https://quote.rudradigital.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-rudra-accent text-rudra-accent rounded-lg px-6 py-3 font-medium hover:bg-rudra-accent hover:text-white transition-colors"
            >
              Get Your Free Quote
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
