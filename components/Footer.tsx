import React from 'react';

const quickLinks = [
  { label: 'What We Do', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">Rudra Digital</h3>
            <p className="text-gray-400 mt-2">Based in Central Scotland</p>
            <a href="tel:+447449938510" className="text-gray-300 hover:text-white transition-colors block mt-2">
              07449 938510
            </a>
            <a href="mailto:contact@rudradigital.uk" className="text-gray-300 hover:text-white transition-colors block mt-1">
              contact@rudradigital.uk
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <nav className="space-y-2">
              <button
                onClick={onOpenPrivacy}
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Privacy Policy
              </button>
              <button
                onClick={onOpenTerms}
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Terms of Service
              </button>
            </nav>
            <p className="text-gray-500 text-sm mt-6">Website by Rudra Digital</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Rudra Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
