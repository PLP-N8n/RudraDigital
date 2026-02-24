import { ShieldCheck, Banknote, FileText, Star } from 'lucide-react';

const badges = [
  {
    icon: ShieldCheck,
    title: 'Gas Safe Registered',
    desc: 'Fully certified for all gas work',
  },
  {
    icon: Banknote,
    title: 'No Call-Out Fee',
    desc: 'You only pay for the work we do',
  },
  {
    icon: FileText,
    title: 'Free Quotes',
    desc: 'Honest, upfront pricing with no surprises',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    desc: 'Trusted by homeowners across Central Scotland',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-trade-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-trade-navy text-center mb-14">
          Why Choose CentralFlow?
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="bg-trade-light rounded-xl p-8 text-center flex flex-col items-center"
            >
              <badge.icon className="w-12 h-12 text-trade-orange mb-4" />
              <h3 className="text-lg font-bold text-trade-navy mb-2">{badge.title}</h3>
              <p className="text-trade-text-muted text-sm">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
