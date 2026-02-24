import { Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 — Brand + address */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-white mb-4">
              Glow Hair Studio
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-salon-accent flex-shrink-0" />
                <span>123 High Street, Falkirk, FK1 1AA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-salon-accent flex-shrink-0" />
                <a
                  href="tel:+441234567890"
                  className="hover:text-white transition-colors"
                >
                  01234 567 890
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Rudra Digital credit */}
          <div>
            <h4 className="font-semibold text-white mb-4">Website by</h4>
            <a
              href="https://rudradigital.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-salon-accent hover:text-salon-accent-hover transition-colors font-medium"
            >
              Rudra Digital
            </a>
            <p className="text-sm mt-2 text-gray-400">
              Professional web design for small businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-gray-500">
            &copy; 2026 Glow Hair Studio. All rights reserved. This is a demo website.
          </p>
        </div>
      </div>
    </footer>
  );
}
