import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

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
        isScrolled
          ? 'bg-rudra-bg shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a
              href="#"
              className="flex items-center"
              aria-label="Rudra Digital Home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', window.location.pathname);
                setIsMobileMenuOpen(false);
              }}
            >
              <img
                src="/Logo.png"
                alt="Rudra Digital"
                className="h-10 w-auto"
              />
            </a>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-rudra-text hover:text-rudra-accent hover:bg-rudra-bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rudra-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open main menu"
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <nav className="hidden md:flex space-x-10" role="navigation" aria-label="Main navigation">
            <a
              href="#services"
              className="text-base font-medium text-rudra-text-muted hover:text-rudra-accent transition-colors"
              aria-label="Scroll to Services section"
              onClick={handleNavClick}
            >
              Services
            </a>
            <a
              href="#who-is-this-for"
              className="text-base font-medium text-rudra-text-muted hover:text-rudra-accent transition-colors"
              aria-label="Scroll to Audience section"
              onClick={handleNavClick}
            >
              For Whom
            </a>
            <a
              href="#pricing"
              className="text-base font-medium text-rudra-text-muted hover:text-rudra-accent transition-colors"
              aria-label="Scroll to Pricing section"
              onClick={handleNavClick}
            >
              Pricing
            </a>
            <a
              href="#portfolio"
              className="text-base font-medium text-rudra-text-muted hover:text-rudra-accent transition-colors"
              aria-label="Scroll to Portfolio section"
              onClick={handleNavClick}
            >
              Portfolio
            </a>
            <a
              href="#how-it-works"
              className="text-base font-medium text-rudra-text-muted hover:text-rudra-accent transition-colors"
              aria-label="Scroll to Process section"
              onClick={handleNavClick}
            >
              Process
            </a>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button
              href="#contact"
              variant="primary"
              className="ml-8 whitespace-nowrap text-base font-medium"
              aria-label="Scroll to contact section"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-rudra-text/10 bg-white divide-y divide-rudra-text/10">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    src="/Logo.png"
                    alt="Rudra Digital"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="rounded-md p-2 inline-flex items-center justify-center text-rudra-text hover:text-rudra-accent hover:bg-rudra-bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rudra-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close main menu"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8" role="navigation" aria-label="Mobile navigation">
                  <a
                    href="#services"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-rudra-bg-secondary"
                    onClick={handleNavClick}
                    aria-label="Scroll to Services section"
                  >
                    <span className="ml-3 text-base font-medium text-rudra-text">Services</span>
                  </a>
                  <a
                    href="#who-is-this-for"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-rudra-bg-secondary"
                    onClick={handleNavClick}
                    aria-label="Scroll to Audience section"
                  >
                    <span className="ml-3 text-base font-medium text-rudra-text">For Whom</span>
                  </a>
                  <a
                    href="#pricing"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-rudra-bg-secondary"
                    onClick={handleNavClick}
                    aria-label="Scroll to Pricing section"
                  >
                    <span className="ml-3 text-base font-medium text-rudra-text">Pricing</span>
                  </a>
                  <a
                    href="#portfolio"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-rudra-bg-secondary"
                    onClick={handleNavClick}
                    aria-label="Scroll to Portfolio section"
                  >
                    <span className="ml-3 text-base font-medium text-rudra-text">Portfolio</span>
                  </a>
                  <a
                    href="#how-it-works"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-rudra-bg-secondary"
                    onClick={handleNavClick}
                    aria-label="Scroll to Process section"
                  >
                    <span className="ml-3 text-base font-medium text-rudra-text">Process</span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Button
                href="#contact"
                fullWidth
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Scroll to contact section"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
