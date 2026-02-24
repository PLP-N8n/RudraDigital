# Demo Sites Design — Hairdresser & Plumber

**Date:** 2026-02-23
**Status:** Approved

## Purpose

Build two demo/template sites to showcase on Rudra Digital's portfolio. These are the primary sales tools — shown to prospects on phone/tablet to close deals. Each site doubles as a fork-ready template for real clients.

## Architecture

- **Approach:** Two separate repos (`rudra-demo-salon`, `rudra-demo-plumber`)
- **Stack:** React 19 + TypeScript + Vite + Tailwind CSS (CDN)
- **Hosting:** Vercel, subdomains of rudradigital.uk (`salon-demo.rudradigital.uk`, `trades-demo.rudradigital.uk`)
- **Imagery:** Free stock photos from Unsplash/Pexels (replaced with client photos on real builds)
- **Client workflow:** Fork repo → swap content/photos → deploy to client domain → invoice £499

## Design: Site 1 — Glow Hair Studio (Women's Salon)

**Fictional business:** Glow Hair Studio, Falkirk

**Color palette:**
- Background: warm cream/white (#FFF8F5 or similar)
- Accent: blush pink (#D4A0A0) + soft gold (#C5A55A)
- Text: dark charcoal (#2D2D2D)
- Tone: elegant, warm, approachable

**Sections:**

### 1. Hero
- Full-width stock photo of salon interior
- Headline: "Beautiful Hair, Effortlessly You."
- Subtext: "Falkirk's home for cuts, colour & styling."
- CTAs: "Book Now" (tel: link) + "See Our Services" (anchor scroll)

### 2. Services & Pricing
Card grid layout:
- Cut & Blow Dry — from £35
- Colour — from £55
- Highlights — from £70
- Treatments & Conditioning — from £25
- Bridal & Occasion — from £80

### 3. About
- Short paragraph + stock photo of a stylist
- "Run by [Name] with 10+ years experience in Falkirk..."
- Humanizes the business, builds trust

### 4. Reviews
- 3-4 fake but realistic Google-style reviews
- Star ratings, first names, short testimonials
- Example: "Best haircut I've had in years! Sarah really listens to what you want." — Emma R. ★★★★★

### 5. Contact
- Form: name, phone number, message
- Click-to-call button (prominent, mobile-optimized)
- WhatsApp link
- Google Maps embed (Falkirk pin)
- Opening hours displayed

### 6. Footer
- Business name, address, phone
- "Website by Rudra Digital" with link to rudradigital.uk

## Design: Site 2 — CentralFlow Plumbing & Heating

**Fictional business:** CentralFlow Plumbing & Heating, Grangemouth/Falkirk

**Color palette:**
- Background: white (#FFFFFF)
- Primary: deep navy (#1B2A4A)
- Accent: bright orange (#E8652B)
- Text: dark navy on white sections, white on navy sections
- Tone: professional, trustworthy, high-contrast

**Sections:**

### 1. Hero
- Stock photo of professional plumber at work
- Headline: "Your Local Plumbing & Heating Experts."
- Subtext: "Serving Grangemouth, Falkirk & Central Scotland. No call-out fee."
- CTAs: "Call Now" (tel: link) + "Get a Free Quote" (anchor to contact)

### 2. Services
Card grid:
- Boiler Installation & Repair
- Emergency Plumbing (24/7)
- Bathroom Installation
- Central Heating Systems
- Gas Safety Checks
- Leaks & Pipe Repairs

### 3. Why Choose Us
Trust badge row:
- Gas Safe Registered (with logo placeholder)
- No Call-Out Fee
- Free Quotes
- 5-Star Rated

### 4. Reviews
- 3-4 realistic reviews
- Example: "Fixed our boiler same day. Professional, fair price, cleaned up after. Highly recommend." — James M. ★★★★★

### 5. Contact
- Form: name, phone, postcode, describe the issue
- Prominent click-to-call button
- WhatsApp link
- Google Maps showing service area (Grangemouth/Falkirk/Central Scotland)
- "Emergency? Call us now — available 24/7"

### 6. Footer
- Business name, service area, phone
- "Website by Rudra Digital" with link to rudradigital.uk

## Shared Requirements

- Mobile-first responsive design
- Target: <3 second load, Lighthouse 90+
- No unnecessary JavaScript
- Smooth scroll navigation
- Click-to-call works on mobile
- SEO meta tags and structured data (LocalBusiness schema)
- All content easily replaceable (business name, services, prices, photos in obvious locations)

## What These Are NOT

- Not real businesses — fictional names, stock photos, placeholder phone numbers
- Not meant to be feature-complete — they represent the £499 Starter package
- Not portfolio pieces for Rudra Digital itself — they ARE the product demos
