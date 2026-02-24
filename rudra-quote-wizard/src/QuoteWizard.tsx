import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  SkipForward,
  CheckCircle,
  Building2,
  Palette,
  FileText,
  Globe,
  Search,
  Clock,
  Calculator,
  User,
} from 'lucide-react';
import type { QuoteData } from './types';
import {
  defaultQuoteData,
  STEPS,
  BUSINESS_TYPES,
  PAGE_OPTIONS,
  FEATURE_OPTIONS,
  PRICING,
  ADDONS,
  EARLY_BIRD_DISCOUNT,
  VAT_RATE,
} from './types';
import { useLocalStorage } from './useLocalStorage';

const STEP_ICONS = [User, Building2, Palette, FileText, Globe, Search, Clock, Calculator];

// ─── Progress Bar ───────────────────────────────────────────────
const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-rudra-text">
        Step {current + 1} of {total}
      </span>
      <span className="text-sm text-rudra-text-muted">{STEPS[current]}</span>
    </div>
    <div className="w-full bg-rudra-bg-secondary rounded-full h-2">
      <div
        className="bg-rudra-accent h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
    <div className="flex justify-between mt-2">
      {STEPS.map((step, i) => {
        const Icon = STEP_ICONS[i];
        return (
          <div
            key={step}
            className={`hidden sm:flex flex-col items-center gap-1 ${
              i <= current ? 'text-rudra-accent' : 'text-rudra-text-muted/40'
            }`}
          >
            <Icon className="w-4 h-4" />
          </div>
        );
      })}
    </div>
  </div>
);

// ─── Reusable form elements ────────────────────────────────────
const Label: React.FC<{ children: React.ReactNode; optional?: boolean }> = ({ children, optional }) => (
  <label className="block text-sm font-medium text-rudra-text mb-1.5">
    {children}
    {optional && <span className="text-rudra-text-muted font-normal ml-1">(optional)</span>}
  </label>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className="w-full rounded-lg border border-rudra-text/15 bg-white px-4 py-2.5 text-rudra-text placeholder:text-rudra-text-muted/50 focus:outline-none focus:ring-2 focus:ring-rudra-accent/30 focus:border-rudra-accent transition-colors"
  />
);

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }> = ({
  children,
  ...props
}) => (
  <select
    {...props}
    className="w-full rounded-lg border border-rudra-text/15 bg-white px-4 py-2.5 text-rudra-text focus:outline-none focus:ring-2 focus:ring-rudra-accent/30 focus:border-rudra-accent transition-colors"
  >
    {children}
  </select>
);

const Checkbox: React.FC<{
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description?: string;
}> = ({ checked, onChange, label, description }) => (
  <label className="flex items-start gap-3 p-3 rounded-lg border border-rudra-text/10 hover:border-rudra-accent/30 cursor-pointer transition-colors bg-white">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-0.5 h-5 w-5 rounded border-rudra-text/20 text-rudra-accent focus:ring-rudra-accent/30"
    />
    <div>
      <span className="text-sm font-medium text-rudra-text">{label}</span>
      {description && <p className="text-xs text-rudra-text-muted mt-0.5">{description}</p>}
    </div>
  </label>
);

const RadioCard: React.FC<{
  selected: boolean;
  onClick: () => void;
  label: string;
  description?: string;
  badge?: string;
}> = ({ selected, onClick, label, description, badge }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
      selected
        ? 'border-rudra-accent bg-rudra-accent/5'
        : 'border-rudra-text/10 bg-white hover:border-rudra-accent/30'
    }`}
  >
    <div className="flex items-center justify-between">
      <span className="font-medium text-rudra-text">{label}</span>
      {badge && (
        <span className="text-xs font-semibold bg-rudra-accent text-white px-2 py-0.5 rounded-full">{badge}</span>
      )}
    </div>
    {description && <p className="text-sm text-rudra-text-muted mt-1">{description}</p>}
  </button>
);

// ─── Step Components ────────────────────────────────────────────

const Step1AboutYou: React.FC<{ data: QuoteData; update: (d: Partial<QuoteData>) => void }> = ({ data, update }) => (
  <div className="space-y-5">
    <h2 className="text-2xl font-bold text-rudra-text">Tell us about your business</h2>
    <p className="text-rudra-text-muted">We'll use this to personalise your quote. Fields marked optional can be skipped.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <Label>Your Name</Label>
        <Input value={data.contactName} onChange={(e) => update({ contactName: e.target.value })} placeholder="e.g. John Smith" />
      </div>
      <div>
        <Label>Business Name</Label>
        <Input value={data.businessName} onChange={(e) => update({ businessName: e.target.value })} placeholder="e.g. Smith's Plumbing" />
      </div>
    </div>

    <div>
      <Label>Business Type</Label>
      <Select value={data.businessType} onChange={(e) => update({ businessType: e.target.value })}>
        <option value="">Select your industry...</option>
        {BUSINESS_TYPES.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </Select>
    </div>

    <div>
      <Label optional>Location</Label>
      <Input value={data.location} onChange={(e) => update({ location: e.target.value })} placeholder="e.g. Edinburgh, Stirling, Glasgow..." />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <Label optional>Phone</Label>
        <Input type="tel" value={data.phone} onChange={(e) => update({ phone: e.target.value })} placeholder="07..." />
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" value={data.email} onChange={(e) => update({ email: e.target.value })} placeholder="you@business.co.uk" />
      </div>
    </div>
  </div>
);

const Step2WhatYouNeed: React.FC<{ data: QuoteData; update: (d: Partial<QuoteData>) => void }> = ({ data, update }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-rudra-text">What do you need?</h2>
    <p className="text-rudra-text-muted">Choose a package and pick the pages and features you'd like.</p>

    <div>
      <Label>Choose a package</Label>
      <div className="space-y-3">
        <RadioCard
          selected={data.siteType === 'starter'}
          onClick={() => update({ siteType: 'starter' })}
          label={`${PRICING.starter.label} — £${PRICING.starter.setup}`}
          description={PRICING.starter.description}
        />
        <RadioCard
          selected={data.siteType === 'professional'}
          onClick={() => update({ siteType: 'professional' })}
          label={`${PRICING.professional.label} — £${PRICING.professional.setup}`}
          description={PRICING.professional.description}
          badge="Most Popular"
        />
        <RadioCard
          selected={data.siteType === 'growth'}
          onClick={() => update({ siteType: 'growth' })}
          label={`${PRICING.growth.label} — £${PRICING.growth.setup}`}
          description={PRICING.growth.description}
        />
      </div>
    </div>

    <div>
      <Label>Which pages do you need?</Label>
      <div className="grid grid-cols-2 gap-2">
        {PAGE_OPTIONS.map((page) => (
          <Checkbox
            key={page}
            checked={data.pages.includes(page)}
            onChange={(checked) =>
              update({ pages: checked ? [...data.pages, page] : data.pages.filter((p) => p !== page) })
            }
            label={page}
          />
        ))}
      </div>
    </div>

    <div>
      <Label optional>Features you'd like</Label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {FEATURE_OPTIONS.map((feature) => (
          <Checkbox
            key={feature}
            checked={data.features.includes(feature)}
            onChange={(checked) =>
              update({ features: checked ? [...data.features, feature] : data.features.filter((f) => f !== feature) })
            }
            label={feature}
          />
        ))}
      </div>
    </div>
  </div>
);

const Step3Design: React.FC<{ data: QuoteData; update: (d: Partial<QuoteData>) => void }> = ({ data, update }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-rudra-text">Design preferences</h2>
    <p className="text-rudra-text-muted">Help us understand the look and feel you're going for. All fields are optional — we'll discuss this further during your free consultation.</p>

    <div>
      <Label optional>Design style</Label>
      <div className="grid grid-cols-2 gap-3">
        {(['modern', 'classic', 'bold', 'minimal'] as const).map((style) => (
          <RadioCard
            key={style}
            selected={data.designStyle === style}
            onClick={() => update({ designStyle: style })}
            label={style.charAt(0).toUpperCase() + style.slice(1)}
            description={
              style === 'modern' ? 'Clean lines, plenty of white space'
              : style === 'classic' ? 'Traditional, trustworthy feel'
              : style === 'bold' ? 'Strong colours, high impact'
              : 'Simple, stripped back, elegant'
            }
          />
        ))}
      </div>
    </div>

    <div>
      <Label optional>Colour preference</Label>
      <Input
        value={data.colourPreference}
        onChange={(e) => update({ colourPreference: e.target.value })}
        placeholder="e.g. Blue and white, earthy tones, match our logo..."
      />
    </div>

    <div>
      <Label optional>Website inspiration</Label>
      <Input
        value={data.inspirationUrl}
        onChange={(e) => update({ inspirationUrl: e.target.value })}
        placeholder="Paste a URL of a site you like..."
      />
    </div>

    <div>
      <Label optional>Do you have a logo?</Label>
      <div className="flex gap-3">
        <RadioCard selected={data.hasLogo === 'yes'} onClick={() => update({ hasLogo: 'yes' })} label="Yes" />
        <RadioCard selected={data.hasLogo === 'no'} onClick={() => update({ hasLogo: 'no' })} label="No" description="We can help with that" />
      </div>
    </div>
  </div>
);

const Step4Content: React.FC<{ data: QuoteData; update: (d: Partial<QuoteData>) => void }> = ({ data, update }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-rudra-text">Content & media</h2>
    <p className="text-rudra-text-muted">Do you have text and images ready, or do you need help?</p>

    <div>
      <Label>Is your content ready?</Label>
      <div className="space-y-3">
        <RadioCard
          selected={data.contentReady === 'yes'}
          onClick={() => update({ contentReady: 'yes' })}
          label="Yes, it's ready"
          description="I have all text, images, and branding prepared"
        />
        <RadioCard
          selected={data.contentReady === 'some'}
          onClick={() => update({ contentReady: 'some' })}
          label="Some of it"
          description="I have some content but need help with the rest"
        />
        <RadioCard
          selected={data.contentReady === 'no'}
          onClick={() => update({ contentReady: 'no' })}
          label="Not yet"
          description="I'll need help with copywriting and images"
        />
      </div>
    </div>

    {(data.contentReady === 'some' || data.contentReady === 'no') && (
      <div className="space-y-3 p-4 bg-rudra-bg-secondary rounded-lg">
        <p className="text-sm font-medium text-rudra-text">We can help with:</p>
        <Checkbox
          checked={data.needsCopywriting}
          onChange={(v) => update({ needsCopywriting: v })}
          label={`Professional Copywriting — £${ADDONS.copywriting.price}`}
          description="We write clear, SEO-friendly text for all your pages"
        />
        <Checkbox
          checked={data.needsPhotography}
          onChange={(v) => update({ needsPhotography: v })}
          label={`Stock Photo Package — £${ADDONS.photography.price}`}
          description="High-quality, relevant stock images for your site"
        />
      </div>
    )}
  </div>
);

const Step5Domain: React.FC<{ data: QuoteData; update: (d: Partial<QuoteData>) => void }> = ({ data, update }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-rudra-text">Domain & hosting</h2>
    <p className="text-rudra-text-muted">We'll need somewhere to put your website. Don't worry if you're unsure — we'll sort this out together.</p>

    <div>
      <Label>Do you have a domain name?</Label>
      <div className="flex gap-3">
        <RadioCard selected={data.hasDomain === 'yes'} onClick={() => update({ hasDomain: 'yes' })} label="Yes" />
        <RadioCard selected={data.hasDomain === 'no'} onClick={() => update({ hasDomain: 'no' })} label="No" description={`We'll register one — £${ADDONS.domain.price}/year`} />
      </div>
    </div>

    {data.hasDomain === 'yes' && (
      <div>
        <Label optional>What's your domain?</Label>
        <Input
          value={data.domainName}
          onChange={(e) => update({ domainName: e.target.value })}
          placeholder="e.g. mybusiness.co.uk"
        />
      </div>
    )}

    <Checkbox
      checked={data.needsHosting}
      onChange={(v) => update({ needsHosting: v })}
      label={`Hosting & SSL — £${ADDONS.hosting.price}/month`}
      description="Fast, secure hosting with free SSL certificate included"
    />
  </div>
);

const Step6Extras: React.FC<{ data: QuoteData; update: (d: Partial<QuoteData>) => void }> = ({ data, update }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-rudra-text">SEO & ongoing support</h2>
    <p className="text-rudra-text-muted">Optional extras to help your site perform and stay up to date. Skip if unsure — we can add these later.</p>

    <div className="space-y-3">
      <Checkbox
        checked={data.needsSeo}
        onChange={(v) => update({ needsSeo: v })}
        label={`Monthly SEO Package — £${ADDONS.seo.price}/month`}
        description="Get found on Google: keyword research, on-page SEO, monthly reports"
      />
      <Checkbox
        checked={data.needsGoogleBusiness}
        onChange={(v) => update({ needsGoogleBusiness: v })}
        label={`Google Business Profile Setup — £${ADDONS.googleBusiness.price}`}
        description="Appear on Google Maps and local search results"
      />
      <Checkbox
        checked={data.socialLinks}
        onChange={(v) => update({ socialLinks: v })}
        label="Social Media Links"
        description="Free — we'll link your Facebook, Instagram, etc."
      />
      <Checkbox
        checked={data.needsMaintenance}
        onChange={(v) => update({ needsMaintenance: v })}
        label={`Maintenance & Updates — £${ADDONS.maintenance.price}/month`}
        description="We keep your site updated, secure, and backed up"
      />
    </div>
  </div>
);

const Step7Timeline: React.FC<{ data: QuoteData; update: (d: Partial<QuoteData>) => void }> = ({ data, update }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-rudra-text">Timeline & notes</h2>
    <p className="text-rudra-text-muted">When do you need your site? Any other details we should know?</p>

    <div>
      <Label>How soon do you need it?</Label>
      <div className="space-y-3">
        <RadioCard
          selected={data.timeline === 'asap'}
          onClick={() => update({ timeline: 'asap' })}
          label="As soon as possible"
          description="We'll prioritise your project"
        />
        <RadioCard
          selected={data.timeline === '2-4weeks'}
          onClick={() => update({ timeline: '2-4weeks' })}
          label="Within 2–4 weeks"
          description="Standard delivery"
        />
        <RadioCard
          selected={data.timeline === 'flexible'}
          onClick={() => update({ timeline: 'flexible' })}
          label="I'm flexible"
          description="No rush, take your time"
        />
      </div>
    </div>

    <div>
      <Label optional>Anything else?</Label>
      <textarea
        value={data.additionalNotes}
        onChange={(e) => update({ additionalNotes: e.target.value })}
        rows={4}
        className="w-full rounded-lg border border-rudra-text/15 bg-white px-4 py-2.5 text-rudra-text placeholder:text-rudra-text-muted/50 focus:outline-none focus:ring-2 focus:ring-rudra-accent/30 focus:border-rudra-accent transition-colors resize-none"
        placeholder="Tell us about any specific requirements, deadlines, or questions..."
      />
    </div>
  </div>
);

// ─── Pricing Calculator ─────────────────────────────────────────
function calculateQuote(data: QuoteData) {
  const pkg = data.siteType ? PRICING[data.siteType] : null;
  const setupBase = pkg ? pkg.setup : 0;

  let oneOffAddons = 0;
  let monthlyAddons = 0;

  if (data.needsCopywriting) oneOffAddons += ADDONS.copywriting.price;
  if (data.needsPhotography) oneOffAddons += ADDONS.photography.price;
  if (data.hasDomain === 'no') oneOffAddons += ADDONS.domain.price;
  if (data.needsGoogleBusiness) oneOffAddons += ADDONS.googleBusiness.price;
  if (data.needsHosting) monthlyAddons += ADDONS.hosting.price;
  if (data.needsSeo) monthlyAddons += ADDONS.seo.price;
  if (data.needsMaintenance) monthlyAddons += ADDONS.maintenance.price;

  const oneOffSubtotal = setupBase + oneOffAddons;
  const earlyBirdSaving = Math.round(oneOffSubtotal * EARLY_BIRD_DISCOUNT);
  const oneOffAfterDiscount = oneOffSubtotal - earlyBirdSaving;
  const oneOffVat = Math.round(oneOffAfterDiscount * VAT_RATE);
  const oneOffTotal = oneOffAfterDiscount + oneOffVat;

  const monthlyVat = Math.round(monthlyAddons * VAT_RATE);
  const monthlyTotal = monthlyAddons + monthlyVat;

  return {
    packageLabel: pkg?.label || 'None selected',
    setupBase,
    oneOffAddons,
    oneOffSubtotal,
    earlyBirdSaving,
    oneOffAfterDiscount,
    oneOffVat,
    oneOffTotal,
    monthlyAddons,
    monthlyVat,
    monthlyTotal,
    yearlyTotal: oneOffTotal + monthlyTotal * 12,
  };
}

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@rudradigital.uk';

const Step8Quote: React.FC<{ data: QuoteData }> = ({ data }) => {
  const q = calculateQuote(data);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.contactName,
          email: data.email,
          phone: data.phone,
          business: data.businessName,
          businessType: data.businessType,
          location: data.location,
          package: q.packageLabel,
          pages: data.pages.join(', '),
          features: data.features.join(', '),
          oneOffTotal: `£${q.oneOffTotal}`,
          monthlyTotal: q.monthlyTotal > 0 ? `£${q.monthlyTotal}/mo` : 'None',
          yearlyEstimate: `£${q.yearlyTotal}`,
          timeline: data.timeline,
          notes: data.additionalNotes,
          _subject: `New quote request from ${data.contactName || data.businessName} — £${q.oneOffTotal} + £${q.monthlyTotal}/mo`,
          _template: 'table',
        }),
      });

      if (res.ok) {
        setStatus('success');
        try { localStorage.removeItem('rudra-quote-data'); localStorage.removeItem('rudra-quote-step'); } catch {}
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-rudra-text">Quote submitted!</h2>
        <p className="text-rudra-text-muted max-w-md mx-auto">
          Thanks{data.contactName ? `, ${data.contactName}` : ''}! We'll review your requirements and get back to you within 24 hours with a detailed proposal.
        </p>
        <p className="text-sm text-rudra-text-muted">
          Check your inbox at <strong>{data.email || 'your email'}</strong> for a confirmation.
        </p>
        <a
          href="https://rudradigital.uk"
          className="inline-block mt-6 px-6 py-3 bg-rudra-accent text-white rounded-lg hover:bg-rudra-accent-hover transition-colors font-medium"
        >
          Back to Rudra Digital
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-rudra-text">Your personalised quote</h2>

      {/* Early bird banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-sm font-semibold text-amber-800">
          Early Bird Offer — 20% off your setup fee!
        </p>
        <p className="text-xs text-amber-700 mt-1">
          Limited availability. This discount is applied automatically below.
        </p>
      </div>

      {/* Summary */}
      <div className="bg-white border border-rudra-text/10 rounded-lg divide-y divide-rudra-text/10">
        {/* Business info */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-rudra-text-muted uppercase tracking-wider mb-2">Project details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {data.businessName && <><span className="text-rudra-text-muted">Business:</span><span className="font-medium">{data.businessName}</span></>}
            {data.businessType && <><span className="text-rudra-text-muted">Industry:</span><span className="font-medium">{data.businessType}</span></>}
            {data.siteType && <><span className="text-rudra-text-muted">Package:</span><span className="font-medium">{q.packageLabel}</span></>}
            {data.pages.length > 0 && <><span className="text-rudra-text-muted">Pages:</span><span className="font-medium">{data.pages.join(', ')}</span></>}
          </div>
        </div>

        {/* One-off costs */}
        <div className="p-4 space-y-2">
          <h3 className="text-sm font-semibold text-rudra-text-muted uppercase tracking-wider mb-2">One-off costs</h3>
          <div className="flex justify-between text-sm">
            <span>{q.packageLabel} package</span>
            <span>£{q.setupBase}</span>
          </div>
          {data.needsCopywriting && (
            <div className="flex justify-between text-sm">
              <span>{ADDONS.copywriting.label}</span>
              <span>£{ADDONS.copywriting.price}</span>
            </div>
          )}
          {data.needsPhotography && (
            <div className="flex justify-between text-sm">
              <span>{ADDONS.photography.label}</span>
              <span>£{ADDONS.photography.price}</span>
            </div>
          )}
          {data.hasDomain === 'no' && (
            <div className="flex justify-between text-sm">
              <span>{ADDONS.domain.label}</span>
              <span>£{ADDONS.domain.price}</span>
            </div>
          )}
          {data.needsGoogleBusiness && (
            <div className="flex justify-between text-sm">
              <span>{ADDONS.googleBusiness.label}</span>
              <span>£{ADDONS.googleBusiness.price}</span>
            </div>
          )}
          <div className="flex justify-between text-sm pt-2 border-t border-dashed border-rudra-text/10">
            <span>Subtotal</span>
            <span>£{q.oneOffSubtotal}</span>
          </div>
          <div className="flex justify-between text-sm text-green-600 font-medium">
            <span>Early bird discount (20%)</span>
            <span>-£{q.earlyBirdSaving}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>VAT (20%)</span>
            <span>£{q.oneOffVat}</span>
          </div>
          <div className="flex justify-between text-base font-bold pt-2 border-t border-rudra-text/10">
            <span>One-off total</span>
            <span>£{q.oneOffTotal}</span>
          </div>
        </div>

        {/* Monthly costs */}
        {q.monthlyAddons > 0 && (
          <div className="p-4 space-y-2">
            <h3 className="text-sm font-semibold text-rudra-text-muted uppercase tracking-wider mb-2">Monthly costs</h3>
            {data.needsHosting && (
              <div className="flex justify-between text-sm">
                <span>{ADDONS.hosting.label}</span>
                <span>£{ADDONS.hosting.price}/mo</span>
              </div>
            )}
            {data.needsSeo && (
              <div className="flex justify-between text-sm">
                <span>{ADDONS.seo.label}</span>
                <span>£{ADDONS.seo.price}/mo</span>
              </div>
            )}
            {data.needsMaintenance && (
              <div className="flex justify-between text-sm">
                <span>{ADDONS.maintenance.label}</span>
                <span>£{ADDONS.maintenance.price}/mo</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span>VAT (20%)</span>
              <span>£{q.monthlyVat}/mo</span>
            </div>
            <div className="flex justify-between text-base font-bold pt-2 border-t border-rudra-text/10">
              <span>Monthly total</span>
              <span>£{q.monthlyTotal}/mo</span>
            </div>
          </div>
        )}

        {/* Year 1 total */}
        <div className="p-4 bg-rudra-bg-secondary">
          <div className="flex justify-between text-lg font-bold">
            <span>Estimated Year 1 total</span>
            <span className="text-rudra-accent">£{q.yearlyTotal}</span>
          </div>
          <p className="text-xs text-rudra-text-muted mt-1">
            One-off setup + 12 months of recurring services (inc. VAT)
          </p>
        </div>
      </div>

      {/* Legal note */}
      <p className="text-xs text-rudra-text-muted">
        This is an estimate only. Your final quote may vary after our free consultation.
        All work is governed by our{' '}
        <a href="https://rudradigital.uk/#terms" target="_blank" rel="noopener noreferrer" className="text-rudra-accent hover:underline">
          Client Service Agreement
        </a>
        . Setup fees are paid before work begins (Clause 4). You retain ownership of your content (Clause 9).
      </p>

      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or call us on 07449 938510.</p>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleSubmit}
          disabled={status === 'sending'}
          className="flex-1 px-6 py-3 bg-rudra-accent text-white rounded-lg hover:bg-rudra-accent-hover transition-colors font-semibold text-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Submitting...' : 'Submit Quote Request'}
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-3 border-2 border-rudra-text/15 text-rudra-text rounded-lg hover:border-rudra-accent/30 transition-colors font-medium text-center"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
};

// ─── Main Wizard ────────────────────────────────────────────────
export const QuoteWizard: React.FC = () => {
  const [data, setData] = useLocalStorage<QuoteData>('rudra-quote-data', defaultQuoteData);
  const [step, setStep] = useLocalStorage<number>('rudra-quote-step', 0);

  const update = (partial: Partial<QuoteData>) => setData((prev) => ({ ...prev, ...partial }));

  const canProceed = (): boolean => {
    switch (step) {
      case 0: return !!(data.contactName && data.email);
      case 1: return !!data.siteType;
      default: return true; // all other steps are optional
    }
  };

  const next = () => step < STEPS.length - 1 && setStep(step + 1);
  const prev = () => step > 0 && setStep(step - 1);
  const skip = () => step < STEPS.length - 1 && setStep(step + 1);

  const isLastContentStep = step === STEPS.length - 2;
  const isQuoteStep = step === STEPS.length - 1;

  const stepComponents = [
    <Step1AboutYou data={data} update={update} />,
    <Step2WhatYouNeed data={data} update={update} />,
    <Step3Design data={data} update={update} />,
    <Step4Content data={data} update={update} />,
    <Step5Domain data={data} update={update} />,
    <Step6Extras data={data} update={update} />,
    <Step7Timeline data={data} update={update} />,
    <Step8Quote data={data} />,
  ];

  return (
    <div className="min-h-screen bg-rudra-bg">
      {/* Header */}
      <header className="bg-white border-b border-rudra-text/10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="https://rudradigital.uk" className="flex items-center gap-2">
            <span className="text-lg font-bold text-rudra-text">Rudra Digital</span>
          </a>
          <a
            href="tel:+447449938510"
            className="text-sm text-rudra-text-muted hover:text-rudra-accent transition-colors"
          >
            07449 938510
          </a>
        </div>
      </header>

      {/* Wizard */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <ProgressBar current={step} total={STEPS.length} />

        <div className="bg-white rounded-xl border border-rudra-text/10 shadow-sm p-6 sm:p-8">
          {stepComponents[step]}
        </div>

        {/* Navigation */}
        {!isQuoteStep && (
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              disabled={step === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-rudra-text-muted hover:text-rudra-text disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <div className="flex items-center gap-3">
              {/* Skip button — shown on optional steps (2-6) */}
              {step >= 2 && !isLastContentStep && (
                <button
                  onClick={skip}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-rudra-text-muted hover:text-rudra-text transition-colors"
                >
                  Skip
                  <SkipForward className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={next}
                disabled={!canProceed()}
                className="flex items-center gap-1.5 px-6 py-2.5 bg-rudra-accent text-white rounded-lg hover:bg-rudra-accent-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium text-sm"
              >
                {isLastContentStep ? 'See My Quote' : 'Continue'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Back to edit on quote step */}
        {isQuoteStep && (
          <div className="mt-6">
            <button
              onClick={prev}
              className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-rudra-text-muted hover:text-rudra-text transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to edit answers
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-rudra-text/10 mt-12">
        <div className="max-w-2xl mx-auto px-4 py-6 text-center text-xs text-rudra-text-muted">
          <p>&copy; {new Date().getFullYear()} Rudra Digital. All rights reserved.</p>
          <p className="mt-1">
            <a href="https://rudradigital.uk/#privacy" target="_blank" rel="noopener noreferrer" className="hover:text-rudra-accent">Privacy</a>
            {' · '}
            <a href="https://rudradigital.uk/#terms" target="_blank" rel="noopener noreferrer" className="hover:text-rudra-accent">Terms</a>
          </p>
        </div>
      </footer>
    </div>
  );
};
