import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need to provide photos and text?',
    answer: 'We can work with what you have. If you need professional copywriting or stock photography, we\'ll sort it — just let us know when we chat.',
  },
  {
    question: 'Is hosting included?',
    answer: 'Yes. We deploy your site on fast, reliable hosting at no extra cost. You only pay for your domain name, which is usually £10–15 per year.',
  },
  {
    question: 'Can I update my website myself?',
    answer: 'Absolutely. We\'ll walk you through how to request changes. Or if you\'d rather not think about it, our monthly support plans start at £39/month.',
  },
  {
    question: 'What if I\'m not happy with the design?',
    answer: 'We offer unlimited revisions until you love it. Your site doesn\'t go live until you\'re 100% satisfied. That\'s our promise.',
  },
  {
    question: 'How long does it take?',
    answer: 'A simple one-page site takes 5–7 days. Larger sites with custom features take 2–3 weeks. We\'ll give you an exact timeline during your free consultation.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-rudra-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-rudra-text sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-rudra-text/10 overflow-hidden bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-rudra-text pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-rudra-accent flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-rudra-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
