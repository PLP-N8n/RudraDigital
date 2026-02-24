import React from 'react';
import { X } from 'lucide-react';

interface PrivacyProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Privacy: React.FC<PrivacyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black/50" />
      <div
        className="relative bg-rudra-bg rounded-2xl shadow-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-rudra-bg border-b border-rudra-text/10 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-extrabold text-rudra-text">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-rudra-bg-secondary text-rudra-text-muted hover:text-rudra-text transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          <p className="text-sm text-rudra-text-muted mb-8">Last updated: February 2026</p>

          <div className="space-y-6 text-rudra-text-muted leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">What We Collect</h3>
              <p>When you use our contact form, we collect your name, phone number, business type, and message. If you use our quote tool, we also collect your email address and business details.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">How We Use It</h3>
              <p>We use your information solely to respond to your enquiry, prepare quotes, and deliver our services. We never sell or share your data with third parties.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Cookies</h3>
              <p>Our website uses minimal cookies for basic analytics (visitor counts). We don't use tracking cookies or third-party advertising cookies.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Your Rights</h3>
              <p>Under UK GDPR, you have the right to access, correct, or delete your personal data at any time. Contact us at contact@rudradigital.uk to exercise these rights.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Contact</h3>
              <p>For any privacy-related questions, email us at <a href="mailto:contact@rudradigital.uk" className="text-rudra-accent hover:underline">contact@rudradigital.uk</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
