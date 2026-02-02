import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-rudra-bg py-12 border-t border-rudra-text/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center gap-4">
          <img
            src="/Logo.png"
            alt="Rudra Digital"
            className="h-8 w-auto"
          />
          <div>
            <p className="text-sm text-rudra-text-muted">
              &copy; {new Date().getFullYear()} Rudra Digital. All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex space-x-6">
          <a href="/privacy" className="text-rudra-text-muted hover:text-rudra-accent transition-colors">
            Privacy
          </a>
          <a href="/terms" className="text-rudra-text-muted hover:text-rudra-accent transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};
