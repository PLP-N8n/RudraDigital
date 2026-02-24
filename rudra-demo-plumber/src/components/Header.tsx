import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar — always visible */}
      <div className="bg-trade-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-center sm:justify-end">
          <a
            href="tel:+441234567890"
            className="flex items-center gap-2 text-sm font-medium hover:text-trade-orange transition-colors"
          >
            <Phone className="w-4 h-4" />
            01234 567 890
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-trade-navy tracking-tight">
              CentralFlow
            </span>
            <span className="text-xs text-trade-text-muted font-medium -mt-0.5">
              Plumbing &amp; Heating
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-trade-navy hover:text-trade-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+441234567890"
              className="inline-flex items-center gap-2 bg-trade-orange hover:bg-trade-orange-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-trade-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-trade-navy hover:text-trade-orange transition-colors border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+441234567890"
              className="mt-3 flex items-center justify-center gap-2 bg-trade-orange hover:bg-trade-orange-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
