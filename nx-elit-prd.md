# PRD — NX Elit Hotel Website (MVP)
**A dark, premium, parallax-scroll marketing site for NX Elit, Kolkata**

Version 1.0 · Draft for review

---

## 1. Background & Why This Project Exists

NX Elit is a newly opened boutique 4-star hotel on Kolkata's Eastern Metropolitan (EM) Bypass — 28 rooms across Executive Deluxe, Deluxe, Super Deluxe and a Suite category, interiors by designer Vinoo Chadha, a signature "colour-coded floor" identity (blue floor, green floors, red floor), an in-house restaurant (Kitchen 165) with a strong F&B focus, and a ~2,000 sq ft banquet space coming online for events. It currently exists online mainly as a listing on OTAs (MakeMyTrip, Booking.com, Agoda, Trip.com) — there is no direct brand website.

**The gap:** OTA listings sell the hotel as a commodity — a photo grid, a price, and a star rating next to five competitors. They cannot communicate what actually differentiates NX Elit (the boutique design concept, the colour-floor identity, the F&B focus) or build a direct, commission-free booking/enquiry channel.

**The opportunity:** A dark, cinematic, motion-led brand website that sells the *feeling* of staying at NX Elit — positioned closer to a boutique hospitality brand than a generic bypass hotel — while still doing the practical job of getting a guest to check dates, see rooms, and enquire or book.

---

## 2. Goals

| # | Goal | How we'll know |
|---|------|-----------------|
| G1 | Establish a distinct premium/boutique brand identity independent of OTA listings | Site is visually differentiated from competitor hotel sites (Vivanta, Gateway, etc.) |
| G2 | Drive qualified direct enquiries / bookings (bypassing OTA commission) | Enquiry form submissions, "Check Availability" clicks |
| G3 | Communicate the hotel's actual differentiators — boutique design, colour floors, Kitchen 165, banquet space | Time on Story/Rooms/Dining sections, scroll depth |
| G4 | Ship a real MVP fast — not a 6-month cinematic showreel project | 4–6 week build, single hero video/visual, not five |

### Non-goals for MVP
- No live booking engine / payment gateway integration (out of scope — Phase 2)
- No CMS / admin panel (content is hardcoded/config-driven for MVP)
- No multi-language (English only for MVP; Bengali/Hindi is a Phase 2 candidate)
- No user accounts, loyalty program, or guest portal
- No blog / SEO content hub (Phase 2)

---

## 3. Audience

| Persona | Context | What they need from the site |
|---|---|---|
| **Business traveller** | EM Bypass corridor has heavy corporate traffic (IT parks, Salt Lake, offices nearby) | Fast load, clear room types, WiFi/workspace confirmation, easy enquiry, address/map |
| **Leisure / couple traveller** | Discovering Kolkata, wants a "design hotel" not a generic business box | Strong visual storytelling, gallery, ambience, Kitchen 165 |
| **Event / banquet enquirer** | Corporate offsite, small social event (once banquet is live) | Banquet capacity, photos, enquiry path — can be a lightweight Phase 1.1 addition |
| **OTA-first browser doing due diligence** | Already found NX Elit on MakeMyTrip/Booking, wants to confirm it's legit/premium before booking | Trust signals, real photography, clear location, contact info that matches OTA listing |

---

## 4. Success Metrics (MVP)

- **Primary:** Enquiry form submissions / "Check Availability" click-throughs per week
- **Secondary:** Avg. scroll depth ≥ 75% on homepage, bounce rate < 55%
- **Technical:** LCP < 2.5s on 4G mobile despite parallax/video hero (see §9 performance budget)
- **Qualitative:** Hotel ops team reports guests mentioning the website in reviews/calls

---

## 5. Information Architecture (MVP = mostly one long-scroll homepage)

Given this is a small 28-room boutique property, the strongest pattern (and the one your inspiration sites use) is **one cinematic long-scroll homepage** with anchor sections, plus 2 light sub-pages. Don't over-build IA for a hotel this size.

```
/                        → Homepage (long-scroll, all core sections)
  #hero
  #story              (About / boutique concept / colour floors)
  #rooms              (Room categories, links to detail if needed)
  #dining             (Kitchen 165)
  #experience         (Amenities / banquet teaser / EM Bypass location perks)
  #gallery
  #location
  #contact / enquiry

/rooms/[slug]            → Optional room detail page (Phase 1.1 if time allows;
                            MVP can do rooms as an in-page expandable section instead)
/contact                 → Standalone contact page (same content as #contact,
                            for direct-link / Google Business / OTA bio links)
```

**MVP recommendation:** ship `/` and `/contact` only. Room detail pages are a fast Phase 2 add once you have real per-room photography.

---

## 6. Page/Section Breakdown

### 6.1 Hero (`#hero`)
- Full-viewport, dark, cinematic. Looping muted background video (lobby/room walkthrough, 8–12s, or a high-quality photo + subtle Ken Burns zoom if no video exists yet) with a dark gradient overlay for text legibility.
- Wordmark "NX ELIT" — large, letter-spaced, kinetic entrance (text reveal / scramble-in) using an **Unlumen UI `Text Reveal` / `Scramble Text`** component.
- One-line positioning statement: *"A boutique address on EM Bypass, Kolkata."*
- Two CTAs: primary **"Check Availability"** (opens enquiry/booking flow), secondary **"Explore NX Elit"** (scroll-cue, animated arrow/chevron using a subtle bounce).
- Scroll-linked parallax: hero video/image scales/darkens slightly as user scrolls past it (GSAP ScrollTrigger `pin` + `scale`), background mesh-gradient blob (via **Shape Factory Gradient**-generated CSS, exported once as static gradient tokens — not regenerated at runtime) slowly drifting behind the wordmark for depth.
- Reference pattern: this is the section that should look closest to the `dark.design` inspiration set (large type, minimal chrome, confident negative space, one hero visual, no clutter).

### 6.2 Story (`#story`)
- "Not just another business hotel" narrative — 2–3 short paragraphs on the boutique concept and Vinoo Chadha-designed interiors.
- **Signature interactive element: the Colour Floor strip.** A horizontal (desktop) / vertical (mobile) scroll-driven strip representing the 5 guest floors, each tinted with its real palette (2nd floor = blue, 3rd/4th = green, 5th = red). As the user scrolls through this section, the background ambient colour of the strip shifts floor-to-floor (GSAP ScrollTrigger scrubbed colour interpolation). This is the one "wow" interaction worth investing real effort in for MVP — it's the hotel's actual, real differentiator, not an invented gimmick.
- Small stat row (rooms count, floors, opened year) using **Unlumen UI `Count Up`** for a subtle number-animate-in.

### 6.3 Rooms (`#rooms`)
- Card grid or horizontal scroll-snap gallery of the 4 categories: Executive Deluxe, Deluxe, Super Deluxe, Suite.
- Each card: image, name, 2–3 key facts (size if available, bed config, floor/colour theme if applicable), "Enquire" micro-CTA.
- Use **Unlumen UI `Tilt Card`** for a subtle 3D hover tilt + **`Progressive Blur`** on card image load-in for a premium feel without heavy JS.
- MVP note: if per-room copy/photos aren't ready for all 4 categories at launch, ship with the categories that have real assets and mark others "Coming Soon" rather than inventing fake specs — the account's PRD workflow history (ResQ, SyncFest) suggests treating placeholder data as a real risk, not a formality to skip past.

### 6.4 Dining — NX Kitchen (`#dining`)
- Dedicated visual break from the room grid — full-bleed image/video of the restaurant, name treatment for "NX Kitchen" (30-seat lounge in black-and-gold with a cherry-red bar, 32-cover restaurant in ivory and gold), short copy on the F&B focus and Corporate Chef Naresh Kumar's menu (global favourites, modern Indian, fusion). Mention the upcoming terrace tandoor restaurant and ground-floor café if they're live by launch.
- One quiet parallax layer (background image scrolls slower than foreground text) — don't stack multiple effects here, this section's job is to feel calm compared to the Story section's colour interaction.

### 6.5 Experience / Amenities (`#experience`)
- Icon+label grid: 24-hr front desk, room service, laundry, banquet hall (2,000 sq ft — flag "opening soon" if not live yet), free WiFi, parking, airport distance.
- If banquet is a real near-term revenue driver, give it a slightly larger card/teaser with its own mini-CTA ("Enquire about events") rather than burying it in the icon grid — worth confirming with the hotel whether banquet enquiries should route to a different contact than room enquiries.

### 6.6 Gallery (`#gallery`)
- Masonry or horizontal scroll-snap gallery, lightbox on click.
- Keep this section's motion minimal (fade/scale-in on scroll only) — by this point in the page the user has seen several motion patterns; gallery should be about the photography, not more choreography.

### 6.7 Location (`#location`)
- Static embedded map (Google Maps embed or a simple static map image + "Get Directions" link — no need for a JS map library at MVP) showing EM Bypass address, distance to airport (~11–13 km) and key landmarks.
- Short line on connectivity (EM Bypass corridor, IT hub proximity) for the business-traveller persona.

### 6.8 Contact / Enquiry (`#contact`, also `/contact`)
- Enquiry form: Name, Phone, Email, Check-in/Check-out dates, Room type (optional), Message.
- On submit: sends an email/notification to hotel reception (via a transactional email service — see §8) and shows a confirmation state. **No payment, no live inventory check in MVP** — this is a lead-capture form, not a booking engine.
- Also list direct phone number, WhatsApp click-to-chat link, and email — many Indian hotel guests will call or WhatsApp rather than fill a form; don't force the form as the only path.
- Footer: address, socials, OTA listing links (optional — some hotels prefer *not* linking out to OTAs from their own site to keep guests on-site; worth a decision with the hotel owner).

---

## 7. Design System

### 7.1 Palette
- **Base:** near-black backgrounds (`#0A0A0B`–`#111113` range, not pure `#000` — pure black reads cheap next to real photography), off-white text (`#F2F1EE`), not pure white.
- **Signature accent system — the three floor colours** double as the site's entire accent palette instead of inventing a generic "brand blue." Use them deliberately and sparingly:
  - Blue (2nd floor) → primary interactive accent (links, primary button glow, focus states)
  - Green (3rd/4th floor) → secondary accent (success states, "Enquire" confirmations)
  - Red (5th floor) → rare, high-emphasis accent only (e.g. "limited availability" badges) — don't overuse, red reads as alarm/error in UI conventions
- Generate the actual gradient stops via **gradient.shapefactory.co** using the hotel's real photographed floor colours as input (not generic presets), export as CSS custom properties once, and treat them as static design tokens — don't ship a live gradient generator call to end users.

### 7.2 Typography
- One confident display serif or high-contrast sans for the wordmark/headlines (this is where "premium boutique hotel" is won or lost — avoid generic geometric sans-only treatments that read as SaaS, not hospitality).
- One clean grotesk/sans for body copy, tuned for readability on dark backgrounds (min 16px body, generous line-height ~1.6 given dark-mode legibility is harder than light-mode).

### 7.3 Motion principles
- **Lenis** for smooth-scroll base feel; **GSAP + ScrollTrigger** for all scroll-linked choreography (hero pin/scale, Story colour-floor scrub, parallax layers).
- One dedicated "hero-grade" interaction (colour floor strip) — everything else should be restrained (fade/slide/scale on enter, no more than 2 concurrent scroll-linked effects per section) so the site feels cinematic, not busy. This mirrors the restraint you'll see across the `dark.design` reference set — the strongest sites there use one big idea per section, not five.
- Respect `prefers-reduced-motion`: disable parallax/pin effects and fall back to simple fades for users who request it.

### 7.4 Component sourcing map

| Need | Source | Notes |
|---|---|---|
| Buttons, tooltips, text reveal/scramble, tilt cards, count-up, progressive blur, magnetic/glow buttons | **Unlumen UI** (`ui.unlumen.com`) | React + Tailwind + Motion, installs via `shadcn` CLI. Use for hero wordmark reveal, room card tilt, stat counters, CTA button micro-interactions. |
| Background gradient tokens for hero/story ambient colour | **Shape Factory Gradient** (`gradient.shapefactory.co`) | Generate static gradient CSS from real floor-colour palette once at design time — not a runtime dependency. |
| Stat/number blocks (e.g. "28 Rooms", "5 Floors", small rating/review-count style cards) | **Bklit UI** (`bklit.com/blocks`) | Heads-up: this is primarily a **charts/data-viz** library (built for analytics dashboards), so use it selectively — its utility/stat-card primitives are a reasonable fit for small counters, but don't force full chart components into a hotel marketing site where they don't belong. |
| Overall restraint/layout inspiration | **dark.design** curated gallery | Reference for "one big idea per section," large confident type, generous negative space, minimal UI chrome. |

---

## 8. Tech Stack (MVP-scoped — this is a marketing site, not an app)

This project doesn't need the full auth/JWT/MongoDB backend stack from your general blueprint — there's no user login, no user-owned data, no CRUD resources. Keep the backend surface area as small as the actual requirement (one enquiry form).

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | SEO matters for a hotel (Google/Maps discovery), and Next gives you easy image optimization for a photography-heavy site + simple deployment on Vercel |
| Styling | Tailwind CSS | Matches Unlumen UI's shadcn-style install pattern |
| Motion | GSAP + ScrollTrigger, Lenis | As above |
| Components | Unlumen UI (via shadcn CLI), selected Bklit UI primitives | As above |
| Enquiry form backend | **One serverless route** (`/api/enquiry`) using a transactional email provider (e.g. Resend) — validate with Zod, rate-limit the route, no database required for MVP (email *is* the record; revisit persistence in Phase 2 if the hotel wants a dashboard) | Avoids standing up Mongo/Express for a single form |
| Map | Static Google Maps embed | No JS map SDK needed at MVP scope |
| Hosting | Vercel | Zero-config with Next.js, good image CDN |
| Analytics | Plausible or GA4 (lightweight, privacy-respecting preferred) | To actually measure §4 metrics |

**Before writing `package.json`:** per your own blueprint's Version Safety Rule — web-search each dependency for latest stable + advisories and confirm with `npm show`, don't hardcode versions from this PRD.

---

## 9. Non-Functional Requirements

- **Performance budget:** parallax/video-heavy dark sites are notorious for tanking mobile LCP. Hard budget: LCP < 2.5s, hero video ≤ 3–4MB compressed (or poster-image-first with video lazy-swapped in), all below-fold images lazy-loaded, GSAP/Lenis code-split so it doesn't block first paint.
- **Accessibility:** dark backgrounds need verified contrast ratios (WCAG AA minimum) for body text and CTAs — easy to fail this on moody hero overlays specifically; `prefers-reduced-motion` support is mandatory, not optional, given how motion-heavy this brief is.
- **SEO:** proper meta/OG tags, schema.org `Hotel` structured data (address, star rating, price range if desired) so Google can surface rich results — this matters more for a hotel than a typical SaaS dark-mode site.
- **Mobile-first reality check:** most hotel searches happen on mobile. The colour-floor scroll interaction and parallax layers need a genuinely good, tested mobile version (likely simplified — e.g. swipe/scroll-snap instead of scrubbed color interpolation) rather than a desktop showpiece with a degraded mobile afterthought.
- **Browser support:** modern evergreen browsers; graceful fallback (static sections, no pin/scrub) for older WebViews common on budget Android devices in the target market.

---

## 9.5 Real NX Elit Reference Photography (for Antigravity / dev use)

NX Elit has **no live website of its own** — it currently exists only via OTA listings (which don't expose property-specific imagery cleanly) and one press feature. The images below are **real, verified photos of the actual property**, sourced from a t2ONLINE feature published shortly after opening. Use these as genuine placeholder/reference imagery when scaffolding sections in Antigravity — swap for the hotel's own high-res originals before launch, as these are web-compressed press sizes, not launch-ready assets, and are the publication's property until proper licensing/sourcing is sorted with NX Elit directly.

| Section | Image URL | What it shows |
|---|---|---|
| Hero | `https://images.t2online.in/cdn-cgi/image/width=1280,height=720,fit=cover,gravity=face,quality=70,format=auto/https://apis.t2online.in/getImageStream/7514/1783774819201.jpeg` | Signature exterior/hero shot of NX Elit |
| Story / Rooms | `https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774869338.jpg` | Guest room — colour-floor interior design |
| Story / Rooms | `https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774894830.jpg` | Guest room / interior detail |
| Story / Rooms | `https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774924235.jpg` | Guest room / interior detail |
| Dining (NX Kitchen) | `https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774948242.jpg` | NX Kitchen — 30-seat lounge, black-and-gold aesthetic with cherry-red bar |
| Dining (NX Kitchen) | `https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774962930.jpg` | NX Kitchen restaurant — ivory and gold interior, 32-cover dining room |
| Dining (NX Kitchen) | `https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774973226.jpg` | NX Kitchen — wine/purple/blue backsplash detail, window views |
| Experience / Banquet | `https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774989121.jpg` | Banquet space (2,000 sq ft, ground floor) |
| Story / About | `https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783775033228.jpg` | Additional interior/property shot |

**Corrections to earlier sections of this PRD based on the same source:** the restaurant is called **NX Kitchen** (2,200 sq ft — a 30-seat lounge + 32-cover restaurant), not "Kitchen 165" as I'd initially assumed from an unrelated sister property's branding (NX Hotel, a different EM Bypass property under a similarly-named brand, uses "Kitchen 165" — don't conflate the two). NX Elit's Managing Director is Raju Saha. §6.4 and §10's "Dining — Kitchen 165" heading should read **"Dining — NX Kitchen."**

**Still not covered by real photography above, and worth chasing from the hotel directly:** exterior/facade wide shot, lobby/reception, each of the 4 room categories individually (Executive Deluxe / Deluxe / Super Deluxe / Suite), the terrace tandoor restaurant and ground-floor café (both described as upcoming, may not be shot yet), and any video footage for the hero loop.

---

## 10. Content & Asset Requirements (dependency for launch, not a dev task)

This is usually the real bottleneck on hotel sites, flagging explicitly:

- Professional photography: hero video/loop, each room category (all 4, not just 1–2), NX Kitchen interior + food, lobby, banquet space (already have one reference shot — see §9.5), one shot per floor colour if possible for the Story section.
- Confirmed copy: positioning line, story paragraphs, per-room facts (size, bed config — currently unconfirmed from public sources), amenity list, banquet capacity/specs.
- Confirmed logo/wordmark files (vector) rather than recreating "NX ELIT" as styled text only.
- Legal: privacy policy / terms for the enquiry form (India has data protection obligations under the DPDP Act for any form collecting personal data — even a simple enquiry form).

**Open question for the hotel:** should the site link out to OTA listings (MakeMyTrip/Booking/Agoda) for guests who prefer to book there, or drive every CTA to the direct enquiry form only? This affects the CTA strategy across every section.

---

## 11. Rough Milestones

| Phase | Scope | Est. |
|---|---|---|
| 1. Design system + hero | Palette/type tokens from real photography, hero section built and motion-tuned | ~1 week |
| 2. Core sections | Story (incl. colour-floor interaction), Rooms, Dining, Experience | ~1.5–2 weeks |
| 3. Gallery, Location, Contact + enquiry backend | ~1 week |
| 4. Performance pass, accessibility pass, mobile motion simplification, SEO/schema | ~3–5 days |
| 5. Content freeze + QA + launch | ~2–3 days |

Total: **~4–6 weeks**, assuming photography/copy assets are available going in — asset delays are the most likely slippage risk, not the build itself.

---

## 12. Open Questions

1. Real per-room specs (sq ft, bed config, floor assignment per category) — public sources don't confirm these; need from hotel.
2. Banquet hall: live now or "opening soon" at launch? Changes CTA copy and whether it gets full-section treatment.
3. OTA linking strategy (see §10).
4. Is hero video footage available, or should MVP launch with a high-quality photo + Ken Burns treatment and swap in video later?
5. Who owns the enquiry inbox / WhatsApp number operationally (front desk vs. a manager) — affects the "confirmation" messaging shown to users after submit.
