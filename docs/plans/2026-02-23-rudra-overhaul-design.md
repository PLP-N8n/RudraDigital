# Rudra Digital Full Overhaul — Design

**Date:** 2026-02-23
**Status:** Approved

## Purpose

Overhaul the Rudra Digital marketing site to match the quality of the demo sites, fix all identified issues, update positioning/pricing, add missing sections, and deploy the quote wizard as a subdomain.

## Changes to Existing Components

### 1. Hero
- **Headline:** "Simple websites that bring customers to your door"
- **Subtext:** "Clean, professional websites for local businesses across Central Scotland. No clutter, no fuss — just results."
- **CTAs:** "See Our Work" (#portfolio) + "Get a Free Quote" (#contact)
- **Trust strip below hero:** 4 items — "Free Revisions" | "Fast Delivery" | "No Hidden Fees" | "Mobile-First"

### 2. Services → "What We Do"
4 focused services replacing the current 3:
1. Website Design — "A clean, professional site that represents your business online"
2. Mobile Optimisation — "Your site looks perfect on every phone, tablet, and desktop"
3. Local SEO — "Help customers in your area find you on Google"
4. Ongoing Support — "Updates, changes, and maintenance whenever you need it"

### 3. WhoIsThisFor (rewritten)
Pain-point checklist:
- "You rely on word of mouth but want more enquiries"
- "Your current website is outdated or you don't have one"
- "Customers can't find you on Google"
- "You want a professional online presence without the hassle"

Business types: Hairdressers & Salons, Plumbers & Electricians, Builders & Roofers, Cafes & Restaurants, Shops & Retailers, Freelancers & Consultants

### 4. Pricing (updated tiers)
- **Starter £299** — 1-page site, contact form, mobile-ready, basic SEO, Google Maps, 5-7 day delivery
- **Professional £599** — Up to 5 pages, booking link, Google Business setup, full SEO, 10-14 days, 2 revision rounds
- **Growth £999** — Up to 10 pages, custom copywriting, blog, newsletter, analytics, 14-21 days, unlimited revisions
- **Add-ons:** Maintenance £39/mo, SEO & Content £79/mo
- **Note:** "All prices exclude VAT. Includes hosting on fast CDN. Domain registration from £10/year."

### 5. Portfolio (already updated)
- Glow Hair Studio, CentralFlow Plumbing, Pure Living Pro

### 6. HowItWorks (rewritten)
1. **Free Consultation** — "Tell us about your business. We'll suggest the best approach — no obligation."
2. **Design & Build** — "We create your site and send you a preview. Revise until you love it."
3. **Launch & Support** — "We go live, set up Google, and provide ongoing support."

### 7. Contact (enhanced)
- Add contact form: Name, Phone, Business Type (dropdown), Message
- Add phone: 07449 938510 (click-to-call)
- Keep WhatsApp + email (contact@rudradigital.uk)
- Add: "We'll get back to you within 24 hours"
- Add CTA: "Want a detailed breakdown?" → link to quote.rudradigital.uk

### 8. Footer (enhanced)
- Add phone: 07449 938510
- Add location: "Based in Central Scotland"
- Fix Privacy link → /privacy route or anchor
- Fix Terms link → /terms route or anchor
- Keep "Website by Rudra Digital"
- Updated copyright

## New Sections

### 9. FAQ (after HowItWorks, before Contact)
5 questions:
1. "Do I need to provide photos and text?" — "We can work with what you have. If you need copywriting or stock photos, we'll sort it."
2. "Is hosting included?" — "We deploy your site for free on fast, reliable hosting. You only pay for your domain name (usually £10-15/year)."
3. "Can I update my website myself?" — "Yes — we'll show you how. Or we can handle updates for you with a monthly support plan."
4. "What if I'm not happy with the design?" — "We offer unlimited revisions until you love it. We don't launch until you're 100% satisfied."
5. "How long does it take?" — "A simple one-page site takes 5-7 days. Larger sites take 2-3 weeks."

### 10. Trust/Guarantee strip (between Services and WhoIsThisFor)
- "Unlimited Revisions" — "We revise until you love it"
- "No Hidden Fees" — "The price we quote is the price you pay"
- "7-Day Delivery" — "Simple sites live in under a week"
- "100% Yours" — "Your content stays yours, always"

## New Pages (inline sections or simple scroll-to)

### 11. Privacy Policy
- Simple privacy policy covering: what data is collected (contact form), how it's used, GDPR compliance, cookie usage
- Referenced from footer
- Based on Clause 18 of the Client Service Agreement

### 12. Terms of Service
- Summary of key client-facing terms from the Client Service Agreement
- Link to download full PDF
- Referenced from footer

## Separate Deployment

### 13. Quote Wizard (quote.rudradigital.uk)
- The existing quote wizard component, deployed as standalone site
- Updated pricing: £299/£599/£999 (matching main site)
- Updated add-on pricing to match
- Linked from Contact section CTA
- Client Service Agreement PDF available for download from results page

## Technical Fixes
- Ensure all animations work (fadeSlideIn defined in Tailwind config)
- Remove unused video references from Portfolio
- Add scroll-margin-top consistency
- Ensure all anchor links work correctly

## Files Affected
- `components/Hero.tsx` — full rewrite
- `components/Services.tsx` — full rewrite
- `components/WhoIsThisFor.tsx` — full rewrite
- `components/Pricing.tsx` — pricing + copy update
- `components/Portfolio.tsx` — already done
- `components/HowItWorks.tsx` — full rewrite
- `components/Contact.tsx` — add form, phone, CTA
- `components/Footer.tsx` — add info, fix links
- `App.tsx` — add FAQ component, add Guarantee component
- New: `components/FAQ.tsx`
- New: `components/Guarantee.tsx`
- New: `components/Privacy.tsx` (or inline in Footer area)
- New: `components/Terms.tsx` (or inline in Footer area)
- `index.html` — update meta description to match new copy
- Separate repo: `rudra-quote-wizard/` for quote.rudradigital.uk
