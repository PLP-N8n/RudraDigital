import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Loader2 } from 'lucide-react';
import type { FormEvent } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@rudradigital.uk';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          message: data.get('message'),
          _subject: `New enquiry from ${data.get('name')} — Glow Hair Studio Demo`,
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
    <section id="contact" className="py-20 bg-salon-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-salon-text">
            Get In Touch
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left — Contact form */}
          <div className="md:w-1/2 w-full">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <p className="text-green-800 font-semibold text-lg">Thanks!</p>
                <p className="text-green-700 mt-2">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-lg border border-gray-200 p-3 text-salon-text placeholder:text-salon-text-muted/60 focus:outline-none focus:ring-2 focus:ring-salon-accent focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    required
                    className="w-full rounded-lg border border-gray-200 p-3 text-salon-text placeholder:text-salon-text-muted/60 focus:outline-none focus:ring-2 focus:ring-salon-accent focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    className="w-full rounded-lg border border-gray-200 p-3 text-salon-text placeholder:text-salon-text-muted/60 focus:outline-none focus:ring-2 focus:ring-salon-accent focus:border-transparent transition resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-salon-accent hover:bg-salon-accent-hover text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right — Contact info */}
          <div className="md:w-1/2 w-full space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-salon-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-salon-accent" />
              </div>
              <div>
                <p className="font-semibold text-salon-text mb-1">Phone</p>
                <a
                  href="tel:+441234567890"
                  className="text-salon-text-muted hover:text-salon-accent transition-colors"
                >
                  01234 567 890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-salon-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-salon-accent" />
              </div>
              <div>
                <p className="font-semibold text-salon-text mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/441234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-salon-text-muted hover:text-salon-accent transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-salon-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-salon-accent" />
              </div>
              <div>
                <p className="font-semibold text-salon-text mb-1">Address</p>
                <p className="text-salon-text-muted">
                  123 High Street, Falkirk, FK1 1AA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-salon-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-salon-accent" />
              </div>
              <div>
                <p className="font-semibold text-salon-text mb-1">Opening Hours</p>
                <div className="text-salon-text-muted text-sm space-y-1">
                  <p>Mon&ndash;Fri: 9am &ndash; 6pm</p>
                  <p>Saturday: 9am &ndash; 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="mt-4">
              <iframe
                title="Glow Hair Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8900!2d-3.7839!3d56.0019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
