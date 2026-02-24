import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';

const navLinks = [
  { label: 'What We Do', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-rudra-bg shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', window.location.pathname);
                setIsMobileMenuOpen(false);
              }}
            >
              <img src="/Logo.png" alt="Rudra Digital" className="h-10 w-auto" />
            </a>
            <a
              href="tel:+447449938510"
              className="hidden lg:flex items-center gap-1.5 text-sm text-rudra-text-muted hover:text-rudra-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              07449 938510
            </a>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="rounded-md p-2 inline-flex items-center justify-center text-rudra-text hover:text-rudra-accent hover:bg-rudra-bg-secondary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-rudra-text-muted hover:text-rudra-accent transition-colors"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end">
            <Button href="#contact" variant="primary" className="ml-8 whitespace-nowrap text-base font-medium">
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-rudra-text/10 bg-white divide-y divide-rudra-text/10">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <img src="/Logo.png" alt="Rudra Digital" className="h-8 w-auto" />
                <button
                  type="button"
                  className="rounded-md p-2 inline-flex items-center justify-center text-rudra-text hover:text-rudra-accent hover:bg-rudra-bg-secondary focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-rudra-bg-secondary"
                      onClick={handleNavClick}
                    >
                      <span className="ml-3 text-base font-medium text-rudra-text">{link.label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-4">
              <a href="tel:+447449938510" className="flex items-center justify-center gap-2 text-rudra-text font-medium">
                <Phone className="w-4 h-4" />
                07449 938510
              </a>
              <Button href="#contact" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
