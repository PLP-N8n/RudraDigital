# Rudra Digital Full Overhaul Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Overhaul the Rudra Digital marketing site — rewrite all copy, update pricing, add contact form, FAQ, guarantee section, privacy/terms pages, and deploy quote wizard to subdomain.

**Architecture:** Modify existing React SPA components in-place. Add 2 new components (FAQ, Guarantee). Privacy/Terms as simple modal/scroll sections. Quote wizard as separate repo deployed to Vercel subdomain.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS (CDN), lucide-react

---

## Task 1: Rewrite Hero section

**Files:**
- Modify: `C:/Projects/Rudra Digital/components/Hero.tsx`

**Implementation:**

Replace entire Hero component with:
- Headline: "Simple websites that bring customers to your door"
- Subtext: "Clean, professional websites for local businesses across Central Scotland. No clutter, no fuss — just results."
- CTAs: "See Our Work" → #portfolio (primary button) + "Get a Free Quote" → #contact (outline button)
- Trust strip below: 4 items in a responsive row (2x2 mobile, 4-col desktop):
  - CheckCircle icon — "Free Revisions"
  - Zap icon — "Fast Delivery"
  - Shield icon — "No Hidden Fees"
  - Smartphone icon — "Mobile-First"
- Keep existing animation/styling patterns from current Hero
- Use rudra-accent for CTAs, rudra-text for headlines

**Step 1:** Read current Hero.tsx to understand exact structure
**Step 2:** Rewrite with new copy and trust strip
**Step 3:** Verify in browser — hero displays, CTAs scroll correctly, trust strip responsive
**Step 4:** Commit

```bash
git add components/Hero.tsx
git commit -m "feat: rewrite hero with new copy and trust strip"
```

---

## Task 2: Rewrite Services → "What We Do"

**Files:**
- Modify: `C:/Projects/Rudra Digital/components/Services.tsx`

**Implementation:**

Replace services data with 4 items:
1. Layout icon — "Website Design" — "A clean, professional site that represents your business online. Built from scratch, tailored to your brand."
2. Smartphone icon — "Mobile Optimisation" — "Your site looks perfect on every phone, tablet, and desktop. Over 60% of your customers browse on mobile."
3. Search icon — "Local SEO" — "Help customers in your area find you on Google. We set up your Google Business profile and optimise for local search."
4. Headphones icon — "Ongoing Support" — "Updates, changes, and maintenance whenever you need it. We're always just a message away."

- Section heading: "What We Do"
- Subheading: "Everything you need to get found and get booked"
- Keep existing card styling (white bg, rounded-xl, shadow, hover effect)
- Update grid: grid-cols-1 sm:grid-cols-2 (4 cards = 2x2 on desktop, no 3-col needed)

**Step 1:** Read current Services.tsx
**Step 2:** Rewrite with new services data and heading
**Step 3:** Verify in browser — 4 cards, responsive grid
**Step 4:** Commit

```bash
git add components/Services.tsx
git commit -m "feat: rewrite services as What We Do with 4 focused offerings"
```

---

## Task 3: Add Guarantee section

**Files:**
- Create: `C:/Projects/Rudra Digital/components/Guarantee.tsx`
- Modify: `C:/Projects/Rudra Digital/App.tsx` (add Guarantee between Services and WhoIsThisFor)

**Implementation:**

New component — a trust badge row:
- Section with rudra-bg-secondary background, py-16
- 4 badges in a responsive grid (2x2 mobile, 4-col desktop), centered:
  1. RefreshCw icon — "Unlimited Revisions" — "We revise until you love it"
  2. DollarSign/PoundSterling or BadgeCheck icon — "No Hidden Fees" — "The price we quote is the price you pay"
  3. Clock icon — "7-Day Delivery" — "Simple sites live in under a week"
  4. Heart icon — "100% Yours" — "Your content stays yours, always"
- Each badge: text-center, icon (rudra-accent, size 40), bold title, muted description
- No section ID needed (not in nav)

Update App.tsx: add `<Guarantee />` between `<Services />` and `<WhoIsThisFor />`

**Step 1:** Create Guarantee.tsx with 4 badges
**Step 2:** Import and add to App.tsx
**Step 3:** Verify in browser
**Step 4:** Commit

```bash
git add components/Guarantee.tsx App.tsx
git commit -m "feat: add guarantee trust badges section"
```

---

## Task 4: Rewrite WhoIsThisFor

**Files:**
- Modify: `C:/Projects/Rudra Digital/components/WhoIsThisFor.tsx`

**Implementation:**

Two-part layout:
- Left/top: "Does this sound like you?" heading, then pain-point checklist with CheckCircle icons:
  - "You rely on word of mouth but want more enquiries"
  - "Your current website is outdated or you don't have one"
  - "Customers can't find you on Google"
  - "You want a professional online presence without the hassle"
- Right/bottom: "We work with" heading, then business type tags/badges:
  - Hairdressers & Salons
  - Plumbers & Electricians
  - Builders & Roofers
  - Cafes & Restaurants
  - Shops & Retailers
  - Freelancers & Consultants
- Tags: inline-flex, rounded-full, rudra-accent/10 bg, rudra-accent text, px-4 py-2
- Keep section id="who-is-this-for"

**Step 1:** Read current WhoIsThisFor.tsx
**Step 2:** Rewrite with pain points + business types
**Step 3:** Verify in browser
**Step 4:** Commit

```bash
git add components/WhoIsThisFor.tsx
git commit -m "feat: rewrite who-is-this-for with pain points and business types"
```

---

## Task 5: Update Pricing

**Files:**
- Modify: `C:/Projects/Rudra Digital/components/Pricing.tsx`

**Implementation:**

Update pricing tiers:
1. **Starter — £299**
   - 1-page website
   - Mobile-responsive design
   - Contact form
   - Basic SEO setup
   - Google Maps embed
   - Delivered in 5–7 days
   - 1 round of revisions

2. **Professional — £599** (marked "Most Popular")
   - Up to 5 pages
   - Custom design
   - Full SEO optimisation
   - Google Business Profile setup
   - Booking link integration
   - Delivered in 10–14 days
   - 2 rounds of revisions

3. **Growth — £999**
   - Up to 10 pages
   - Custom copywriting
   - Blog setup
   - Newsletter integration
   - Analytics dashboard
   - Delivered in 14–21 days
   - Unlimited revisions
   - 1 month free maintenance

Update add-ons:
- Monthly Maintenance: £39/mo
- SEO & Content Updates: £79/mo

Add note below pricing: "All prices exclude VAT. Hosting included on fast CDN. Domain registration from £10/year."

**Step 1:** Read current Pricing.tsx
**Step 2:** Update all pricing data and add-ons
**Step 3:** Verify in browser — 3 tiers, correct prices, add-ons display
**Step 4:** Commit

```bash
git add components/Pricing.tsx
git commit -m "feat: update pricing to 299/599/999 tiers"
```

---

## Task 6: Rewrite HowItWorks

**Files:**
- Modify: `C:/Projects/Rudra Digital/components/HowItWorks.tsx`

**Implementation:**

Replace 3 steps:
1. MessageCircle icon — "Free Consultation" — "Tell us about your business and what you need. We'll recommend the best approach — no jargon, no pressure, no obligation."
2. Code icon — "Design & Build" — "We create your website and send you a preview link. You review it, give feedback, and we revise until you love it."
3. Rocket icon — "Launch & Support" — "We go live, set up your Google listing, and hand everything over. Need changes later? We're always here to help."

Keep existing step numbering/connecting line visual.

**Step 1:** Read current HowItWorks.tsx
**Step 2:** Rewrite with new steps
**Step 3:** Verify in browser
**Step 4:** Commit

```bash
git add components/HowItWorks.tsx
git commit -m "feat: rewrite how-it-works with consultation focus"
```

---

## Task 7: Add FAQ section

**Files:**
- Create: `C:/Projects/Rudra Digital/components/FAQ.tsx`
- Modify: `C:/Projects/Rudra Digital/App.tsx` (add FAQ after HowItWorks, before Contact)

**Implementation:**

Accordion-style FAQ with 5 questions:

1. **"Do I need to provide photos and text?"**
   "We can work with what you have. If you need professional copywriting or stock photography, we'll sort it — just let us know when we chat."

2. **"Is hosting included?"**
   "Yes. We deploy your site on fast, reliable hosting at no extra cost. You only pay for your domain name, which is usually £10–15 per year."

3. **"Can I update my website myself?"**
   "Absolutely. We'll walk you through how to request changes. Or if you'd rather not think about it, our monthly support plans start at £39/month."

4. **"What if I'm not happy with the design?"**
   "We offer unlimited revisions until you love it. Your site doesn't go live until you're 100% satisfied. That's our promise."

5. **"How long does it take?"**
   "A simple one-page site takes 5–7 days. Larger sites with custom features take 2–3 weeks. We'll give you an exact timeline during your free consultation."

- Section id="faq", py-20, bg-rudra-bg
- Heading: "Frequently Asked Questions"
- Each Q/A: clickable question (bold, with ChevronDown icon that rotates), answer slides open/closed
- Use useState for open/close state per question
- Styling: rounded-xl border, p-6, gap-4 between items

**Step 1:** Create FAQ.tsx with accordion behavior
**Step 2:** Import and add to App.tsx after HowItWorks
**Step 3:** Verify in browser — click to open/close works
**Step 4:** Commit

```bash
git add components/FAQ.tsx App.tsx
git commit -m "feat: add FAQ accordion section"
```

---

## Task 8: Enhance Contact section

**Files:**
- Modify: `C:/Projects/Rudra Digital/components/Contact.tsx`

**Implementation:**

Replace current email/WhatsApp-only contact with:

**Left column (md:w-1/2) — Contact form:**
- Name input (text, required)
- Phone input (tel, required)
- Business Type dropdown (select): Hairdresser/Salon, Plumber/Electrician, Builder/Roofer, Restaurant/Cafe, Shop/Retail, Other
- Message textarea (4 rows)
- Submit button: "Send Message" (rudra-accent bg, white text, full width)
- Form does preventDefault (demo — no backend)
- Show a success message on submit: "Thanks! We'll get back to you within 24 hours."

**Right column (md:w-1/2) — Contact info:**
- Phone icon + "07449 938510" as `<a href="tel:+447449938510">` with large text
- Mail icon + "contact@rudradigital.uk" as mailto link
- MessageCircle icon + "Chat on WhatsApp" as `<a href="https://wa.me/447449938510">`
- Clock icon + "We reply within 24 hours"
- Divider
- "Want a detailed breakdown?" text + CTA button: "Get Your Free Quote →" linking to https://quote.rudradigital.uk (target _blank, rudra-accent outline button)

Keep section id="contact"

**Step 1:** Read current Contact.tsx
**Step 2:** Rewrite with form + info layout
**Step 3:** Verify in browser — form renders, tel links work, success message shows
**Step 4:** Commit

```bash
git add components/Contact.tsx
git commit -m "feat: add contact form with phone and quote wizard CTA"
```

---

## Task 9: Enhance Footer

**Files:**
- Modify: `C:/Projects/Rudra Digital/components/Footer.tsx`

**Implementation:**

Update footer to 3 columns:

**Col 1 — Brand:**
- "Rudra Digital" heading
- "Based in Central Scotland"
- Phone: 07449 938510 (click-to-call)
- Email: contact@rudradigital.uk

**Col 2 — Quick Links:**
- What We Do (#services)
- Pricing (#pricing)
- Our Work (#portfolio)
- Contact (#contact)
- FAQ (#faq)

**Col 3 — Legal:**
- Privacy Policy (anchor link to #privacy — scroll to Privacy section)
- Terms of Service (anchor link to #terms — scroll to Terms section)
- "Website by Rudra Digital"

**Bottom bar:**
- "© 2026 Rudra Digital. All rights reserved."

**Step 1:** Read current Footer.tsx
**Step 2:** Rewrite with 3 columns + correct links
**Step 3:** Verify in browser — links work, responsive stacking
**Step 4:** Commit

```bash
git add components/Footer.tsx
git commit -m "feat: enhance footer with phone, location, and legal links"
```

---

## Task 10: Add Privacy and Terms sections

**Files:**
- Create: `C:/Projects/Rudra Digital/components/Privacy.tsx`
- Create: `C:/Projects/Rudra Digital/components/Terms.tsx`
- Modify: `C:/Projects/Rudra Digital/App.tsx` (add after Footer, before closing div)

**Implementation:**

These are simple text sections (not separate pages/routes) placed after the footer so they exist at the bottom of the page, reachable by anchor links.

**Privacy.tsx:**
- Section id="privacy", py-20, bg-rudra-bg, max-w-3xl mx-auto
- Heading: "Privacy Policy"
- Content covering:
  - What data is collected (contact form submissions: name, phone, business type, message)
  - How it's used (to respond to enquiries, provide quotes)
  - Who it's shared with (nobody — not sold or shared)
  - Cookies (minimal — analytics only, no tracking cookies)
  - Your rights (UK GDPR — access, deletion, correction)
  - Contact: contact@rudradigital.uk
  - Last updated: February 2026

**Terms.tsx:**
- Section id="terms", py-20, bg-rudra-bg-secondary, max-w-3xl mx-auto
- Heading: "Terms of Service"
- Summary of key terms (plain English, not legalese):
  - Payment: Setup fee paid before work begins
  - Revisions: 2 rounds included, unlimited for Growth package
  - Content: You provide text/photos within 14 days of agreement
  - Approval: 7 business days to review each phase
  - Ownership: Your content stays yours. We retain code/template rights.
  - Cancellation: Full refund if we haven't started. No refund once work begins.
  - Maintenance: Optional monthly plans available
  - Governing law: Scotland
- Note: "Full Client Service Agreement provided before any work begins."

**Step 1:** Create Privacy.tsx
**Step 2:** Create Terms.tsx
**Step 3:** Add both to App.tsx (after Footer)
**Step 4:** Verify — anchor links from footer scroll to correct sections
**Step 5:** Commit

```bash
git add components/Privacy.tsx components/Terms.tsx App.tsx
git commit -m "feat: add privacy policy and terms of service sections"
```

---

## Task 11: Update Header nav and index.html meta

**Files:**
- Modify: `C:/Projects/Rudra Digital/components/Header.tsx`
- Modify: `C:/Projects/Rudra Digital/index.html`

**Implementation:**

**Header.tsx:**
- Update nav links to match new section names:
  - "What We Do" (#services)
  - "Pricing" (#pricing)
  - "Our Work" (#portfolio)
  - "FAQ" (#faq)
  - "Contact" (#contact) — CTA button style
- Add phone number to header: small "07449 938510" text visible on desktop, click-to-call

**index.html:**
- Update meta title: "Rudra Digital — Simple websites for local businesses in Central Scotland"
- Update meta description: "Clean, professional websites for local businesses across Central Scotland. From £299. No hidden fees, fast delivery, unlimited revisions."
- Update OG/Twitter meta to match

**Step 1:** Read current Header.tsx and index.html
**Step 2:** Update nav links and add phone number
**Step 3:** Update meta tags
**Step 4:** Verify — nav links scroll correctly, meta tags updated
**Step 5:** Commit

```bash
git add components/Header.tsx index.html
git commit -m "feat: update header nav and SEO meta tags"
```

---

## Task 12: Deploy Quote Wizard

**Files:**
- Create: `C:/Projects/rudra-quote-wizard/` (new repo)

**Implementation:**

- Create new Vite + React project at `C:/Projects/rudra-quote-wizard/`
- Copy the user's quote wizard code as the main App.tsx
- Update pricing in the wizard: change basePackage options from £499/£999/£1,999 to £299/£599/£999
- Update add-on monthly prices to match (maintenance £39, SEO £79)
- Update EARLY_BIRD_DISCOUNT slots text if needed
- Same package.json pattern as demo sites (React 19, Vite, TypeScript)
- No Tailwind CDN needed — the wizard uses inline styles via BRAND object
- Add index.html with proper SEO meta for "Get a Quote — Rudra Digital"
- npm install, npm run build, git init, commit
- Deploy to Vercel as quote.rudradigital.uk

**Step 1:** Scaffold project
**Step 2:** Add quote wizard as App.tsx (with updated pricing)
**Step 3:** npm install && npm run build
**Step 4:** git init && commit
**Step 5:** Deploy to Vercel

```bash
git add -A
git commit -m "feat: deploy quote wizard with updated pricing"
```

---

## Task Summary

| Task | What | Files |
|------|------|-------|
| 1 | Rewrite Hero | Hero.tsx |
| 2 | Rewrite Services | Services.tsx |
| 3 | Add Guarantee section | Guarantee.tsx, App.tsx |
| 4 | Rewrite WhoIsThisFor | WhoIsThisFor.tsx |
| 5 | Update Pricing | Pricing.tsx |
| 6 | Rewrite HowItWorks | HowItWorks.tsx |
| 7 | Add FAQ | FAQ.tsx, App.tsx |
| 8 | Enhance Contact | Contact.tsx |
| 9 | Enhance Footer | Footer.tsx |
| 10 | Add Privacy + Terms | Privacy.tsx, Terms.tsx, App.tsx |
| 11 | Update Header + meta | Header.tsx, index.html |
| 12 | Deploy Quote Wizard | rudra-quote-wizard/ (new repo) |
