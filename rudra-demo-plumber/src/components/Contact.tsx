import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, MapPin, Loader2 } from 'lucide-react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@rudradigital.uk';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
          postcode: data.get('postcode'),
          message: data.get('message'),
          _subject: `New enquiry from ${data.get('name')} — CentralFlow Plumbing Demo`,
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
  }

  return (
    <section id="contact" className="py-20 bg-trade-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
          Get a Free Quote
        </h2>

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          {/* Left — Quote form */}
          <div className="md:w-1/2">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <p className="text-green-800 font-semibold text-lg">Thanks!</p>
                <p className="text-green-700 mt-2">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white text-trade-navy rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-trade-orange"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-white text-trade-navy rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-trade-orange"
                />
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  className="w-full bg-white text-trade-navy rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-trade-orange"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Describe the issue"
                  className="w-full bg-white text-trade-navy rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-trade-orange"
                />

                {status === 'error' && (
                  <p className="text-red-300 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-trade-orange hover:bg-trade-orange-hover text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request Free Quote'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right — Contact info */}
          <div className="md:w-1/2 text-white space-y-6">
            <div>
              <a
                href="tel:+441234567890"
                className="flex items-center gap-3 text-2xl font-bold text-trade-orange hover:underline"
              >
                <Phone className="w-7 h-7" />
                01234 567 890
              </a>
              <p className="font-bold mt-2 text-lg">
                Emergency? Call now &mdash; available 24/7
              </p>
            </div>

            <a
              href="https://wa.me/441234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-trade-orange transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
              <p className="text-gray-300 text-sm leading-relaxed">
                Service area: Grangemouth, Falkirk, Stirling, Bo&apos;ness,
                Linlithgow &amp; surrounding areas
              </p>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="CentralFlow service area — Grangemouth"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35800!2d-3.7174!3d56.0118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d3a7b3b3b3b3%3A0x0!2sGrangemouth!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
