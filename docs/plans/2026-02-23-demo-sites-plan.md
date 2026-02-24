# Demo Sites Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build two demo/template websites (hair salon + plumber) as separate repos, deployed to Vercel subdomains of rudradigital.uk, to use as sales tools and fork-ready client templates.

**Architecture:** Two independent React SPAs. Each repo is self-contained with all content in easily-swappable locations. Tailwind CDN for styling (matching Rudra Digital's approach). Deployed to Vercel with custom subdomains.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS (CDN), Vercel hosting, Unsplash/Pexels stock photos (referenced by URL).

---

## Part 1: Glow Hair Studio (Salon Demo)

### Task 1: Scaffold the salon project

**Files:**
- Create: `C:/Projects/rudra-demo-salon/package.json`
- Create: `C:/Projects/rudra-demo-salon/tsconfig.json`
- Create: `C:/Projects/rudra-demo-salon/vite.config.ts`
- Create: `C:/Projects/rudra-demo-salon/index.html`
- Create: `C:/Projects/rudra-demo-salon/src/index.tsx`
- Create: `C:/Projects/rudra-demo-salon/src/App.tsx`

**Step 1: Create project directory and init**

```bash
mkdir -p "C:/Projects/rudra-demo-salon/src/components"
cd "C:/Projects/rudra-demo-salon"
git init
```

**Step 2: Create package.json**

```json
{
  "name": "rudra-demo-salon",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.563.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

**Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": { "@/*": ["./*"] }
  },
  "include": ["src"]
}
```

**Step 4: Create vite.config.ts**

```typescript
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: { port: 3001, host: '0.0.0.0' },
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') }
  }
});
```

**Step 5: Create index.html**

The main HTML shell with:
- Tailwind CDN script with custom config (blush pink palette)
- Inter + Playfair Display fonts from Google Fonts
- SEO meta tags for "Glow Hair Studio Falkirk"
- LocalBusiness structured data (JSON-LD)
- Custom color tokens: `salon-bg: '#FFF8F5'`, `salon-text: '#2D2D2D'`, `salon-accent: '#D4A0A0'`, `salon-accent-hover: '#C08080'`, `salon-gold: '#C5A55A'`

**Step 6: Create src/index.tsx and src/App.tsx**

Standard React 19 entry point rendering App with all section components.

```tsx
// App.tsx sections in order:
// Header, Hero, Services, About, Reviews, Contact, Footer
```

**Step 7: Install deps and verify it runs**

```bash
cd "C:/Projects/rudra-demo-salon"
npm install
npm run dev
```

Expected: Dev server on http://localhost:3001 with blank page.

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold salon demo project"
```

---

### Task 2: Build salon Header component

**Files:**
- Create: `C:/Projects/rudra-demo-salon/src/components/Header.tsx`

**Implementation:**
- Fixed top navbar, transparent bg that gets white bg + shadow on scroll
- Left: "Glow Hair Studio" text logo (Playfair Display font)
- Right desktop: nav links (Services, About, Reviews, Contact) + "Call Now" CTA button
- Mobile: hamburger menu icon, slide-down menu
- Smooth scroll to anchor sections
- Colors: salon-text for links, salon-accent for CTA

**Step 1: Build component with scroll state, mobile toggle, nav links**
**Step 2: Verify in browser — sticky header, mobile menu works**
**Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: add salon header with mobile nav"
```

---

### Task 3: Build salon Hero section

**Files:**
- Create: `C:/Projects/rudra-demo-salon/src/components/Hero.tsx`

**Implementation:**
- Full-width section with background image (Unsplash salon interior photo via URL)
- Semi-transparent dark overlay for text readability
- Headline: "Beautiful Hair, Effortlessly You." (Playfair Display, white, large)
- Subtext: "Falkirk's home for cuts, colour & styling." (Inter, white/light)
- Two CTA buttons:
  - "Book Now" → `tel:+441234567890` (salmon/pink filled button)
  - "See Our Services" → anchor scroll to #services (outline white button)
- Mobile: stack buttons vertically, smaller text

**Unsplash image suggestion:** Search "hair salon interior" — use a warm, well-lit salon photo. Reference via `https://images.unsplash.com/photo-XXXXX?w=1600&q=80`. Find a specific one at build time.

**Step 1: Build component with hero layout, overlay, CTAs**
**Step 2: Verify in browser — image loads, buttons work, mobile responsive**
**Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add salon hero section"
```

---

### Task 4: Build salon Services section

**Files:**
- Create: `C:/Projects/rudra-demo-salon/src/components/Services.tsx`

**Implementation:**
- Section id="services" with heading "Our Services"
- Card grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Each card: icon (lucide-react), service name, short description, "from £XX" price
- Services:
  1. Scissors icon — Cut & Blow Dry — "A fresh cut tailored to your style and face shape." — from £35
  2. Palette/Paintbrush icon — Colour — "From subtle highlights to bold transformations." — from £55
  3. Sparkles icon — Highlights — "Hand-painted balayage and foil highlights." — from £70
  4. Droplets icon — Treatments — "Deep conditioning and repair for all hair types." — from £25
  5. Crown icon — Bridal & Occasion — "Look stunning on your special day." — from £80
- Cards: white bg, subtle shadow, rounded corners, salon-accent border-top

**Step 1: Build component with services data array and card grid**
**Step 2: Verify — cards display, responsive grid works**
**Step 3: Commit**

```bash
git add src/components/Services.tsx
git commit -m "feat: add salon services section"
```

---

### Task 5: Build salon About section

**Files:**
- Create: `C:/Projects/rudra-demo-salon/src/components/About.tsx`

**Implementation:**
- Section id="about" with cream/blush background
- Two-column layout (image left, text right; stacks on mobile)
- Stock photo of a female hairstylist (Unsplash)
- Heading: "About Glow Hair Studio"
- Text: "Founded in 2018, Glow Hair Studio has been helping the women of Falkirk look and feel their best. Our experienced stylists combine the latest techniques with a warm, welcoming atmosphere. Whether you're after a fresh trim, a bold new colour, or a complete transformation — we're here to make it happen."
- Optional: "10+ Years Experience" / "5,000+ Happy Clients" stat badges

**Step 1: Build component with two-column layout**
**Step 2: Verify — image loads, text readable, stacks on mobile**
**Step 3: Commit**

```bash
git add src/components/About.tsx
git commit -m "feat: add salon about section"
```

---

### Task 6: Build salon Reviews section

**Files:**
- Create: `C:/Projects/rudra-demo-salon/src/components/Reviews.tsx`

**Implementation:**
- Section id="reviews" with white background
- Heading: "What Our Clients Say"
- 4 review cards in a responsive grid (1 col mobile, 2 col desktop)
- Each card: 5 gold stars, review text (2-3 sentences), reviewer name + initial
- Reviews:
  1. "Best haircut I've had in years! Sarah really listens to what you want and the salon is so relaxing." — Emma R.
  2. "I've been coming here for my colour for 3 years now. Wouldn't trust anyone else with my highlights." — Lucy M.
  3. "Went in for a trim and came out feeling like a new person. The team are so friendly and talented." — Karen T.
  4. "Booked a bridal trial and it was perfect first time. Made my wedding day stress-free!" — Sophie W.
- Cards: white bg, subtle shadow, left border in salon-gold

**Step 1: Build component with reviews data and card grid**
**Step 2: Verify — cards display, stars render, responsive**
**Step 3: Commit**

```bash
git add src/components/Reviews.tsx
git commit -m "feat: add salon reviews section"
```

---

### Task 7: Build salon Contact section

**Files:**
- Create: `C:/Projects/rudra-demo-salon/src/components/Contact.tsx`

**Implementation:**
- Section id="contact" with light blush background
- Two-column layout (form left, info right; stacks on mobile)
- Left: Contact form
  - Fields: Name (text), Phone (tel), Message (textarea)
  - Submit button (salon-accent color): "Send Message"
  - Form action: mailto: or just visual demo (no backend)
- Right: Contact info
  - Phone: 01234 567 890 (click-to-call link)
  - WhatsApp link with phone icon
  - Address: 123 High Street, Falkirk, FK1 1AA
  - Opening hours:
    - Mon-Fri: 9am - 6pm
    - Saturday: 9am - 5pm
    - Sunday: Closed
  - Google Maps embed iframe (Falkirk town centre coordinates)

**Step 1: Build component with form and info layout**
**Step 2: Verify — form renders, tel: links work, map shows**
**Step 3: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: add salon contact section"
```

---

### Task 8: Build salon Footer

**Files:**
- Create: `C:/Projects/rudra-demo-salon/src/components/Footer.tsx`

**Implementation:**
- Dark charcoal background (#2D2D2D), white/light text
- Left: "Glow Hair Studio" + address + phone
- Centre: Quick links (Services, About, Reviews, Contact)
- Right: "Website by Rudra Digital" with link to https://rudradigital.uk
- Bottom: "© 2026 Glow Hair Studio. All rights reserved." (demo disclaimer)
- Responsive: stacks to single column on mobile

**Step 1: Build component**
**Step 2: Verify — links work, responsive**
**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add salon footer with Rudra Digital credit"
```

---

### Task 9: Polish salon site and deploy

**Step 1: Add CSS for scroll-margin-top on sections (90px for fixed header offset)**
**Step 2: Test full page flow top-to-bottom on mobile viewport (Chrome DevTools)**
**Step 3: Run `npm run build` — verify clean build, no errors**
**Step 4: Deploy to Vercel**

```bash
cd "C:/Projects/rudra-demo-salon"
npx vercel --prod
```

**Step 5: Configure subdomain `salon-demo.rudradigital.uk` in Vercel dashboard**
**Step 6: Commit any final tweaks**

```bash
git add -A
git commit -m "feat: polish and prepare for deployment"
```

---

## Part 2: CentralFlow Plumbing & Heating (Plumber Demo)

### Task 10: Scaffold the plumber project

**Files:** Same structure as salon but in `C:/Projects/rudra-demo-plumber/`

**Step 1: Create project by copying salon scaffold**

```bash
mkdir -p "C:/Projects/rudra-demo-plumber/src/components"
cd "C:/Projects/rudra-demo-plumber"
git init
```

**Step 2: Create package.json** (same deps, name: "rudra-demo-plumber")
**Step 3: Create tsconfig.json** (identical)
**Step 4: Create vite.config.ts** (port: 3002)

**Step 5: Create index.html**

Different from salon:
- Color tokens: `trade-bg: '#FFFFFF'`, `trade-navy: '#1B2A4A'`, `trade-orange: '#E8652B'`, `trade-orange-hover: '#D4571F'`, `trade-text: '#1B2A4A'`, `trade-light: '#F5F7FA'`
- Fonts: Inter only (no Playfair — trades should feel direct, not fancy)
- SEO: "CentralFlow Plumbing & Heating — Grangemouth, Falkirk"
- LocalBusiness structured data for Plumber

**Step 6: Create src/index.tsx and src/App.tsx**

```tsx
// App.tsx sections: Header, Hero, Services, WhyChooseUs, Reviews, Contact, Footer
```

**Step 7: npm install, verify dev server on :3002**
**Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold plumber demo project"
```

---

### Task 11: Build plumber Header

**Files:**
- Create: `C:/Projects/rudra-demo-plumber/src/components/Header.tsx`

**Implementation:**
- Fixed top, white bg with navy text
- Left: "CentralFlow" logo text (bold Inter) + small "Plumbing & Heating" subtitle
- Right desktop: Services, Why Us, Reviews, Contact links + "Call Now: 01234 567 890" (orange button with phone icon)
- Mobile: hamburger, same nav
- Phone number ALWAYS visible in header (even on mobile, as a small bar above nav)

**Step 1: Build component**
**Step 2: Verify — phone visible on mobile, nav works**
**Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: add plumber header with prominent phone number"
```

---

### Task 12: Build plumber Hero

**Files:**
- Create: `C:/Projects/rudra-demo-plumber/src/components/Hero.tsx`

**Implementation:**
- Navy background or photo with dark overlay
- Stock photo: professional plumber working (Unsplash)
- Headline: "Your Local Plumbing & Heating Experts" (white, bold, large)
- Subtext: "Serving Grangemouth, Falkirk & Central Scotland. No call-out fee." (white/light grey)
- CTAs:
  - "Call Now" → `tel:+441234567890` (orange filled button, Phone icon)
  - "Get a Free Quote" → anchor to #contact (white outline button)
- Trust strip below hero: "Gas Safe Registered | No Call-Out Fee | Free Quotes | 24/7 Emergency"

**Step 1: Build component with hero and trust strip**
**Step 2: Verify**
**Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add plumber hero with trust strip"
```

---

### Task 13: Build plumber Services

**Files:**
- Create: `C:/Projects/rudra-demo-plumber/src/components/Services.tsx`

**Implementation:**
- Section id="services", light grey background (#F5F7FA)
- Heading: "Our Services"
- 6-card grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each card: icon (lucide-react), service name, 1-2 sentence description
  1. Flame icon — Boiler Installation & Repair — "New boiler installs, repairs and annual servicing for all major brands."
  2. Droplets icon — Emergency Plumbing — "Burst pipes, leaks, blockages — we're available 24/7 for emergencies."
  3. Bath icon — Bathroom Installation — "Full bathroom fitting from design to finish, including tiling and plumbing."
  4. Thermometer icon — Central Heating — "Radiator installs, powerflush, underfloor heating and full system upgrades."
  5. ShieldCheck icon — Gas Safety Checks — "Landlord gas safety certificates and annual checks. Gas Safe registered."
  6. Wrench icon — Leaks & Repairs — "Fast, reliable repair for leaking taps, toilets, pipes and joints."
- Cards: white bg, subtle shadow, navy left border, orange icon color

**Step 1: Build component**
**Step 2: Verify**
**Step 3: Commit**

```bash
git add src/components/Services.tsx
git commit -m "feat: add plumber services section"
```

---

### Task 14: Build plumber Why Choose Us

**Files:**
- Create: `C:/Projects/rudra-demo-plumber/src/components/WhyChooseUs.tsx`

**Implementation:**
- Section id="why-us", white background
- Heading: "Why Choose CentralFlow?"
- 4 trust badges in a row (responsive grid)
  1. ShieldCheck — "Gas Safe Registered" — "Fully certified for all gas work"
  2. PoundSterling/Banknote — "No Call-Out Fee" — "You only pay for the work we do"
  3. FileText — "Free Quotes" — "Honest, upfront pricing with no surprises"
  4. Star — "5-Star Rated" — "Trusted by homeowners across Central Scotland"
- Each badge: large icon (orange), bold title (navy), short description (grey)

**Step 1: Build component**
**Step 2: Verify**
**Step 3: Commit**

```bash
git add src/components/WhyChooseUs.tsx
git commit -m "feat: add plumber trust badges section"
```

---

### Task 15: Build plumber Reviews

**Files:**
- Create: `C:/Projects/rudra-demo-plumber/src/components/Reviews.tsx`

**Implementation:**
- Section id="reviews", light grey background
- Heading: "What Our Customers Say"
- 4 review cards (same layout as salon but navy/orange styling)
- Reviews:
  1. "Fixed our boiler same day we called. Professional, fair price, cleaned up after. Highly recommend." — James M.
  2. "Had a full bathroom refit done. The quality of work was outstanding and they finished ahead of schedule." — Sarah K.
  3. "Emergency leak at 11pm on a Sunday — they were here within 40 minutes. Absolute lifesavers." — David T.
  4. "Best plumber we've used in 20 years. Honest pricing, great communication, and proper Gas Safe certificates." — Margaret H.
- Cards: white bg, shadow, orange left border

**Step 1: Build component**
**Step 2: Verify**
**Step 3: Commit**

```bash
git add src/components/Reviews.tsx
git commit -m "feat: add plumber reviews section"
```

---

### Task 16: Build plumber Contact

**Files:**
- Create: `C:/Projects/rudra-demo-plumber/src/components/Contact.tsx`

**Implementation:**
- Section id="contact", navy background, white text
- Two-column (form left, info right)
- Left: Contact/quote form
  - Fields: Name, Phone, Postcode, "Describe the issue" (textarea)
  - Orange submit button: "Request Free Quote"
- Right: Contact info
  - Large phone number with click-to-call (orange highlight)
  - "Emergency? Call now — available 24/7" prominent callout
  - WhatsApp link
  - Service area: "Grangemouth, Falkirk, Stirling, Bo'ness, Linlithgow & surrounding areas"
  - Google Maps embed (Grangemouth/Falkirk area)

**Step 1: Build component**
**Step 2: Verify — form, tel links, map**
**Step 3: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: add plumber contact section"
```

---

### Task 17: Build plumber Footer

**Files:**
- Create: `C:/Projects/rudra-demo-plumber/src/components/Footer.tsx`

**Implementation:**
- Very dark navy bg (#0F1B33), white text
- Left: "CentralFlow Plumbing & Heating" + phone + service area
- Centre: Services list, quick links
- Right: "Website by Rudra Digital" with link
- Bottom: "© 2026 CentralFlow Plumbing & Heating." + "Gas Safe Registered"

**Step 1: Build component**
**Step 2: Verify**
**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add plumber footer"
```

---

### Task 18: Polish plumber site and deploy

**Step 1: Add scroll-margin-top CSS, test full flow**
**Step 2: Mobile viewport testing**
**Step 3: `npm run build` — clean build**
**Step 4: Deploy to Vercel**

```bash
cd "C:/Projects/rudra-demo-plumber"
npx vercel --prod
```

**Step 5: Configure subdomain `trades-demo.rudradigital.uk`**
**Step 6: Final commit**

```bash
git add -A
git commit -m "feat: polish and prepare for deployment"
```

---

## Part 3: Update Rudra Digital Portfolio

### Task 19: Update Rudra Digital portfolio section

**Files:**
- Modify: `C:/Projects/Rudra Digital/components/Portfolio.tsx`

**Implementation:**
- Replace Global Telecom and Open Adjudication entries with:
  1. Glow Hair Studio — salon-demo.rudradigital.uk — "Modern, mobile-friendly website for a women's hair salon" — Tags: Responsive, Booking-Ready, Local SEO
  2. CentralFlow Plumbing — trades-demo.rudradigital.uk — "Professional website for a local plumbing & heating business" — Tags: Responsive, Click-to-Call, Trust Signals
  3. Keep Pure Living Pro (or replace if desired)
- Link cards to live subdomain URLs
- Screenshot images instead of videos (faster loading, no broken video issues)

**Step 1: Update Portfolio.tsx with new entries**
**Step 2: Verify in browser**
**Step 3: Commit**

```bash
cd "C:/Projects/Rudra Digital"
git add components/Portfolio.tsx
git commit -m "feat: update portfolio with salon and plumber demos"
```

---

## Summary

| Task | What | Time Est |
|------|------|----------|
| 1-9 | Salon demo (scaffold → deploy) | ~2-3 hours |
| 10-18 | Plumber demo (scaffold → deploy) | ~2-3 hours |
| 19 | Update Rudra Digital portfolio | ~15 min |

**Total: ~5-6 hours of focused work.**
