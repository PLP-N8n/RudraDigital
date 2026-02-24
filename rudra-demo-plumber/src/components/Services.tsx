import { Flame, Droplets, Bath, Thermometer, ShieldCheck, Wrench } from 'lucide-react';

const services = [
  {
    icon: Flame,
    name: 'Boiler Installation & Repair',
    desc: 'New boiler installs, repairs and annual servicing for all major brands.',
  },
  {
    icon: Droplets,
    name: 'Emergency Plumbing',
    desc: "Burst pipes, leaks, blockages \u2014 we're available 24/7 for emergencies.",
  },
  {
    icon: Bath,
    name: 'Bathroom Installation',
    desc: 'Full bathroom fitting from design to finish, including tiling and plumbing.',
  },
  {
    icon: Thermometer,
    name: 'Central Heating',
    desc: 'Radiator installs, powerflush, underfloor heating and full system upgrades.',
  },
  {
    icon: ShieldCheck,
    name: 'Gas Safety Checks',
    desc: 'Landlord gas safety certificates and annual checks. Gas Safe registered.',
  },
  {
    icon: Wrench,
    name: 'Leaks & Repairs',
    desc: 'Fast, reliable repair for leaking taps, toilets, pipes and joints.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-trade-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-trade-navy mb-3">
            Our Services
          </h2>
          <p className="text-trade-text-muted text-lg">
            Professional plumbing and heating solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.name}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border-l-4 border-trade-navy"
            >
              <svc.icon className="w-10 h-10 text-trade-orange mb-4" />
              <h3 className="text-lg font-bold text-trade-navy mb-2">{svc.name}</h3>
              <p className="text-trade-text-muted text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
