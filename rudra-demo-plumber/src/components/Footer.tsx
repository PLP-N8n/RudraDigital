import { Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-trade-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 — Brand info */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              CentralFlow Plumbing &amp; Heating
            </h3>
            <a
              href="tel:+441234567890"
              className="flex items-center gap-2 text-gray-300 hover:text-trade-orange transition-colors mb-2"
            >
              <Phone className="w-4 h-4" />
              01234 567 890
            </a>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Grangemouth, Falkirk &amp; Central Scotland</span>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-trade-orange transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Rudra Digital credit */}
          <div>
            <h3 className="text-lg font-bold mb-3">Website By</h3>
            <a
              href="https://rudradigital.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-trade-orange hover:text-trade-orange-hover font-semibold transition-colors"
            >
              Rudra Digital
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Professional websites for trades &amp; local businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-gray-500 text-xs text-center">
            &copy; 2026 CentralFlow Plumbing &amp; Heating. Gas Safe Registered.
            This is a demo website.
          </p>
        </div>
      </div>
    </footer>
  );
}
