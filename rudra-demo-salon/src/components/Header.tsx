import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="font-playfair text-2xl font-bold text-salon-text">
            Glow Hair Studio
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-salon-text-muted hover:text-salon-text transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+441234567890"
              className="inline-flex items-center gap-2 bg-salon-accent hover:bg-salon-accent-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-salon-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-salon-text hover:text-salon-accent transition-colors text-lg font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+441234567890"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center gap-2 bg-salon-accent hover:bg-salon-accent-hover text-white px-5 py-3 rounded-full text-base font-semibold transition-colors mt-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
