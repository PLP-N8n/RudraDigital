import React from 'react';
import { X } from 'lucide-react';

interface TermsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Terms: React.FC<TermsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black/50" />
      <div
        className="relative bg-rudra-bg rounded-2xl shadow-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-rudra-bg border-b border-rudra-text/10 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-extrabold text-rudra-text">Terms of Service</h2>
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
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Payment</h3>
              <p>Setup fees are paid in full before work begins. Monthly maintenance fees are billed on the 1st of each month.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Revisions</h3>
              <p>Your project includes 2 rounds of revisions as standard. Growth package clients receive unlimited revisions.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Your Content</h3>
              <p>You provide text, images, and branding within 14 days of our agreement. We can help with copywriting and stock photos for an additional fee.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Approval</h3>
              <p>You have 7 business days to review each phase of your project. If we don't hear back within that window, the work is considered approved.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Ownership</h3>
              <p>Your content remains yours. We retain rights to our code, templates, and development tools. Upon full payment, you receive a licence to use the website for your business.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Cancellation</h3>
              <p>Cancel before work starts: full refund. Cancel after work starts: the setup fee is non-refundable, but you receive all work completed to date.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-rudra-text mb-2">Governing Law</h3>
              <p>This agreement is governed by Scottish law. A full Client Service Agreement is provided for signing before any work begins.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
