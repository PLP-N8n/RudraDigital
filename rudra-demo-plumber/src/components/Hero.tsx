import { Phone, ShieldCheck, Banknote, FileText, Clock } from 'lucide-react';

export function Hero() {
  const trustItems = [
    { icon: ShieldCheck, label: 'Gas Safe Registered' },
    { icon: Banknote, label: 'No Call-Out Fee' },
    { icon: FileText, label: 'Free Quotes' },
    { icon: Clock, label: '24/7 Emergency' },
  ];

  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-trade-navy via-trade-navy to-[#243656] flex flex-col justify-center pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 text-center flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Your Local Plumbing
          <br />
          &amp; Heating Experts
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Serving Grangemouth, Falkirk &amp; Central Scotland. No call-out fee.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="tel:+441234567890"
            className="inline-flex items-center gap-2 bg-trade-orange hover:bg-trade-orange-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-trade-navy font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Trust strip */}
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <item.icon className="w-7 h-7 text-trade-orange" />
                <span className="text-white font-semibold text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
