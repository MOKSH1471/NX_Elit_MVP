# NX Elit — Website Architecture, Layout, Motion & Design System Specification

> **Target Audience**: AI Agents, LLMs, and Human Engineers.  
> **Purpose**: This document is an exhaustive, self-contained technical specification of the **NX Elit** boutique hotel website. Any AI reading this file will understand the entire application architecture, routing, component hierarchy, design tokens, responsive layouts, state workflows, and motion/transition timings without needing to inspect individual source files.

---

## 1. Executive Summary & Brand Identity

- **Property**: **NX Elit** (4-Star Luxury Boutique Hotel)
- **Location**: EM Bypass Corridor, Kolkata, West Bengal, India (near Science City, Salt Lake Sector V IT Hub, 12 km / ~25 mins to CCU Airport).
- **Managing Director**: Raju Saha
- **Interior Architect**: **Vinoo Chadha**
- **Brand Archetype**: Dark luxury, cinematic moody contrast, high-end hospitality, architectural materiality, quiet acoustic sanctuary.
- **Core Concept — Signature Colour-Coded Floors**:
  - **Level 02**: *Cobalt & Sapphire Blue* (`#1d4ed8` / `#3b82f6`) — Oceanic calm, focus, workstation residences.
  - **Level 03 & 04**: *Forest Emerald Green* (`#059669` / `#10b981`) — Botanical rejuvenation, oak wood, brass detailing.
  - **Level 05**: *Crimson & Ruby Red* (`#e11d48` / `#f43f5e`) — Crown jewel suites, private skyline vistas, master residences.
- **Gastronomy**: **NX Kitchen** (2,200 sq ft) overseen by Corporate Chef Naresh Kumar, featuring a 30-seat cherry-red bar lounge and a 32-cover ivory-and-gold restaurant.
- **Banqueting**: 2,000 sq ft versatile banquet hall for up to 150 guests.

---

## 2. Technical Stack

| Layer | Technology | Version / Specification |
|---|---|---|
| **Framework** | Next.js (App Router with Turbopack) | `16.3.0` |
| **Runtime** | React / React DOM | `19.2.8` |
| **Language** | TypeScript | `^5` (Strict Mode) |
| **CSS Engine** | Tailwind CSS | `v4` (`@tailwindcss/postcss: ^4`) |
| **Motion & Animation** | Framer Motion | `^13.0.0` |
| **3D & Canvas Engine** | GSAP + gl-matrix | `gsap: ^3.15.0`, `gl-matrix: ^3.4.4` |
| **Smooth Scroll** | Lenis | `^1.3.26` |
| **Iconography** | Lucide React | `^1.30.0` |
| **Styling Helpers** | clsx, tailwind-merge | `clsx: ^2.1.1`, `tailwind-merge: ^3.6.0` |

---

## 3. Design System & Style Tokens

### 3.1 Color Palette
```css
/* Core Canvas */
--background: #09090b;       /* Deepest obsidian black */
--foreground: #f4f3ef;       /* Warm editorial off-white */
--card: #121216;             /* Elevated dark surface */
--card-foreground: #f4f3ef;
--primary: #ffffff;
--primary-foreground: #09090b;

/* Accents */
Gold / Brass:    #d4af37 (base), #fce9a6 (light), #b8860b (deep)
Sapphire (L2):   #1d4ed8 / #3b82f6 (blue)
Emerald (L3/L4): #059669 / #10b981 (green)
Ruby (L5):       #e11d48 / #f43f5e (rose/red)
```

### 3.2 Typography System
Four complementary Google Fonts imported in `src/app/layout.tsx`:
1. **`Cormorant Garamond` (`--font-serif`)**:
   - Weights: `400, 500, 600, 700`.
   - Used for: Display headlines, hero wordmark, section headers (`h1`, `h2`, `h3`), Italian/designer quotes.
2. **`Plus Jakarta Sans` (`--font-sans`)**:
   - Weights: `300, 400, 500, 600, 700`.
   - Used for: Primary UI body copy, paragraphs, form labels, general reading.
3. **`Cinzel` (`--font-cinzel`)**:
   - Weights: `400, 500, 600, 700, 800`.
   - Letter-spacing: `0.14em` to `0.32em` uppercase.
   - Used for: Luxury eyebrows, room category badges, navigation links, primary CTA buttons.
4. **`Space Grotesk` (`--font-space` / `--font-mono`)**:
   - Weights: `300, 400, 500, 600, 700`.
   - Used for: Numbers, numerical tickers, room dimensions (`280 sq ft`), prices (`₹4,500`), technical specifications.

### 3.3 Glassmorphism & Elevation Utilities
- `.glass-nav`: `background: rgba(9, 9, 11, 0.88); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.08);`
- `.luxury-glass`: `background: rgba(18, 18, 22, 0.72); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08);`
- `.luxury-glass-elevated`: `background: rgba(22, 22, 28, 0.82); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.6);`
- `.gold-gradient-text`: `linear-gradient(135deg, #fce9a6 0%, #d4af37 50%, #b8860b 100%)` with `-webkit-background-clip: text`.

---

## 4. Application Routes & Page Hierarchies

```
src/app/
├── layout.tsx              # Root HTML, font variables, dark mode, global SEO metadata
├── globals.css             # Tailwind v4 theme, font tokens, glass utilities, custom scrollbar
├── page.tsx                # Single-page marketing journey (Home)
├── rooms/
│   └── page.tsx            # Dedicated accommodations & suites catalog
├── contact/
│   └── page.tsx            # Standalone contact, reception desk & map route
├── error.tsx               # Client-side 500 error boundary
├── global-error.tsx        # Global fallback error boundary
└── not-found.tsx           # Luxury 404 handler
```

### Route 1: Homepage (`src/app/page.tsx`)
Assembles the complete narrative in sequence:
1. `<SplashScreen />` — First-visit camera zoom transition (auto dismisses or skips)
2. `<Navbar />` — Fixed header with scroll progress & floating pill background
3. `<HeroSection />` — 100vh full-bleed photographic crossfade carousel with CTA
4. `<StorySection />` — Architectural philosophy, live stat tickers & interactive floor switcher
5. `<PressMarquee />` — Continuous marquee ticker with press accolades
6. `<DiningSection />` — NX Kitchen spotlight with venue tabs (Lounge, Restaurant, Terrace)
7. `<ExperienceSection />` — 6 core amenities + 2,000 sq ft banquet hall spotlight
8. `<ReviewsSection />` — 3D depth carousel with verified guest testimonials
9. `<LocationSection />` — Airport & Sector V transit cards + dark inverted Google Map
10. `<ContactSection />` — Reception channels + live interactive enquiry form
11. `<Footer />` — Comprehensive directory, floor themes list, social channels
12. `<FloatingBookingBar />` — Fixed bottom drawer trigger with quick dropdowns (appears after 400px scroll)
13. `<EnquiryDrawer />` — Global slide-over drawer for room and banquet bookings

### Route 2: Residences Catalog (`src/app/rooms/page.tsx`)
- Contains `<Navbar />`, `<RoomsSection />`, `<Footer />`, `<FloatingBookingBar />`, and `<EnquiryDrawer />`.
- Focuses entirely on guest residences with floor filter tabs, dual view modes (Editorial vs Grid), and deep-dive modals.

### Route 3: Contact & Location (`src/app/contact/page.tsx`)
- Contains `<Navbar />`, `<ContactSection />`, `<LocationSection />`, `<Footer />`, and `<EnquiryDrawer />`.
- Clean route for Google Business profiles and social links.

---

## 5. Motion, Layout Transitions & Interactive Dynamics

Every transition on this website is engineered for a dark, ultra-premium boutique hospitality feel. Below is the exact behavioral specification for every animated element.

### 5.1 Intro Cinematic Zoom Splash Screen (`SplashScreen.tsx`)
- **Execution Mechanism**: Fullscreen overlay (`fixed inset-0 z-50 bg-[#09090b]`).
- **Scroll Lock**: Sets `document.body.style.overflow = "hidden"` immediately upon mount; restores on completion.
- **Timeline & Stages**:
  1. **Hold Phase (0ms to 850ms)**: Displays centered wordmark cutout "NX ELIT" over property photography with a subtle pulsing gold badge.
  2. **Camera Push Phase (850ms to 2650ms)**:
     - SVG Cutout Mask (`#splash-auto-knockout-mask`): Scale transitions from `1` to `28` over **1.8 seconds** using cubic bezier `ease: [0.72, 0, 0.12, 1]`.
     - Background Image Counter-Scale: Transitions from `scale: 1.08` to `scale: 1.0` over **1.9 seconds** (`ease: [0.65, 0, 0.08, 1]`), producing realistic optical parallax depth.
     - Brand Header & Skip Button: Fades out in **350ms** (`opacity: 1 -> 0, y: 0 -> -12px`).
  3. **Fade-Through Phase**: Splash container fades opacity to `0` with a delay of **1.05s** and duration of **0.75s** (`ease: [0.4, 0, 0.2, 1]`).
  4. **Skip Action**: Clicking anywhere or pressing "Skip Intro" instantly completes the transition and restores scrolling.

### 5.2 Top Navigation Header (`Navbar.tsx`)
- **Scroll Progress Indicator (`ScrollProgress.tsx`)**:
  - Pinned to the top edge: `fixed top-0 left-0 right-0 h-[2px] z-50`.
  - Driven by Framer Motion's `useScroll` and `scaleX` transform (`originX: 0`).
- **Header State Morph**:
  - Initial (`scrollY <= 40px`): Transparent backdrop with a downward gradient (`from-black/90 via-black/40 to-transparent`), padding `py-5`.
  - Scrolled (`scrollY > 40px`): Morphs smoothly via `transition-all duration-500` into `.glass-nav` (`backdrop-blur-12px bg-[#09090b]/88 py-3 shadow-xl`).
- **Spring-Loaded Floating Hover Pill (`AnimatedBackground.tsx`)**:
  - Uses Framer Motion's shared `layoutId="animated-bg-[id]"` pattern.
  - As the user hovers across "Story", "Residences", "NX Kitchen", etc., the capsule pill background glides dynamically underneath the active link with spring physics:
    ```ts
    transition: { type: "spring", bounce: 0.2, duration: 0.3 }
    ```
- **Mobile Menu Drawer**:
  - Full-screen slide/fade overlay (`fixed inset-0 z-30 bg-black/95 backdrop-blur-xl`) with direct links, reception buttons, and social channels.

### 5.3 Hero Photographic Slideshow (`HeroSection.tsx`)
- **Auto-Rotation**: Slides advance automatically every **6,000ms** (`HERO_SLIDES.length = 3`).
- **Crossfade Transition**:
  - Image layers stacked absolutely.
  - Active slide transitions with `transition-opacity duration-[1400ms] ease-in-out` (`opacity-100` vs `opacity-0`).
- **Progressive Blur Loading (`ProgressiveBlur.tsx`)**:
  - Images load initially with `blur-md scale-105 opacity-40`.
  - Upon `onLoad`, smooth transition to `blur-0 scale-100 opacity-100` over **700ms ease-out**.
- **Hero Typography Entrance**:
  - Staggered entrance 120ms after mount: `opacity-0 translate-y-4 -> opacity-100 translate-y-0` with `duration-700`.
- **Slide Indicator Dots**:
  - Active dot animates width from `w-[5px]` to `w-7` with `duration-500`.

### 5.4 Signature Colour Floors Interactive Showcase (`StorySection.tsx`)
- **Dynamic Ambient Color Mesh Glow**:
  - Ambient radial glow `div` (`w-[800px] h-[500px] blur-[140px]`) centered behind content.
  - Its background color transitions over **1,000ms**:
    - Level 02: `rgba(30, 58, 138, 0.22)` (Sapphire)
    - Level 03/04: `rgba(6, 78, 59, 0.22)` (Emerald)
    - Level 05: `rgba(136, 19, 55, 0.22)` (Ruby)
- **Floor Switcher Tabs**:
  - Switching tabs smoothly swaps the 12-column showcase layout: photography, materials list, room count, and designer quotes by Vinoo Chadha.
  - Active tab scales to `scale-105` with `bg-white text-black`.
- **Numerical Spring Counters (`Counter.tsx`)**:
  - Triggered on scroll into view (`stiffness: 90, damping: 25, duration: 1.5s`).
  - Numbers roll fluidly from `0` to target values: `28` (Residences), `5` (Floors), `4★` (Boutique Rating), `2,200` (Sq Ft Gastronomy).

### 5.5 Infinite Ticker / Marquee (`PressMarquee.tsx` & `InfiniteScroll.tsx`)
- **Continuous Velocity**:
  - Runs infinitely with horizontal translation (`translateX`) at a constant smooth speed of 30.
  - Content repeats seamlessly with no jump or stutter.

### 5.6 NX Kitchen Gastronomy Venue Switcher (`DiningSection.tsx`)
- **Interactive Venue Tabs**:
  - 3 Venues: `lounge` (Cherry-Red Bar, 30 seats), `restaurant` (Ivory & Gold, 32 covers), `terrace` (Terrace Tandoor & Bakery).
  - Background radial ambient glow transitions dynamically (`duration-1000`) between:
    - Lounge: `rgba(225, 29, 72, 0.22)`
    - Restaurant: `rgba(212, 175, 55, 0.22)`
    - Terrace: `rgba(245, 158, 11, 0.2)`
- **Menu & Ambience Content Fade**:
  - Tab selection dynamically updates image, hours, capacity, aesthetic statement, and signature dishes with glowing badge highlights.

### 5.7 Amenities & Banquet Showcase (`ExperienceSection.tsx`)
- **Staggered Card Reveals (`AnimatedGroup.tsx`)**:
  - Amenities grid activates when scrolling into view:
    ```ts
    container: { visible: { transition: { staggerChildren: 0.12 } } }
    item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } }
    ```
- **Banquet Feature Card**:
  - Full-bleed photography of the 2,000 sq ft hall with direct CTA to open the slide-over drawer preselected for "banquet".

### 5.8 3D Depth Testimonials Carousel (`ReviewsSection.tsx` & `DepthCarousel.tsx`)
- **Engine**: GSAP + 3D CSS transforms.
- **Parameters**:
  - `perspective: 1400px`
  - `cardWidth: 360px`, `cardHeight: 460px`
  - `depth: 220px`, `spread: 90px`, `tilt: 22deg`
  - `falloff: 0.2`, `blur: 6px`
- **Interactions**:
  - Draggable / touchable with inertia physics and spring dampening.
  - Mousewheel navigation enabled.
  - Automatic focus, card layering, depth darkening overlay (`tint: #05060a`), and active indicator dots.

### 5.9 Accommodations & Suite Catalog (`RoomsSection.tsx`)
- **Dual View Modes**:
  1. **Editorial Split Showcase (`editorial`)**: Alternating left/right 60/40 magazine spread layout with full-bleed photography, spec grids, amenity tags, starting rates, and detail modals.
  2. **Architectural Grid (`grid`)**: Compact 2-column card layout for fast comparison.
- **Floor Level Filter**:
  - Live filtering: "All Residences (4)", "2nd Floor (Sapphire)", "3rd & 4th Floors (Emerald)", "5th Floor Suites (Ruby)".
- **Full Specifications Modal**:
  - Triggered by the info button (`Info` icon).
  - Opens a centered popup (`fixed inset-0 z-50 bg-black/90 backdrop-blur-md`) with room imagery, complete amenity checklists, exact square footage, bedding configurations, and a direct reservation button.

### 5.10 Floating Quick Reservation Bar (`FloatingBookingBar.tsx`)
- **Visibility Threshold**:
  - Monitors `window.scrollY`.
  - Hidden at page top; slides into view once `scrollY > 400px` (past hero).
- **Motion Spec**:
  - `initial={{ y: 80, opacity: 0 }}`
  - `animate={{ y: 0, opacity: 1 }}`
  - `exit={{ y: 80, opacity: 0 }}`
  - `transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}`
- **Visual Shielding**:
  - 100% opaque solid luxury background (`#111116`, border `#3f3f46`, shadow `[0_20px_50px_rgba(0,0,0,0.95)]`).
  - Completely prevents underlying page text from bleeding through.
- **Interactive Controls**:
  - Category selector dropdown
  - Guest count selector dropdown
  - Date picker trigger
  - Gold gradient button: "Check Rates" (opens `EnquiryDrawer` with state).
  - Dismiss button (`X`) to hide the bar for the rest of the session.

### 5.11 Universal Slide-Over Enquiry Drawer (`EnquiryDrawer.tsx`)
- **Architecture**:
  - Pinned to the right edge: `fixed inset-y-0 right-0 max-w-md w-screen z-50`.
  - Accompanied by full-screen backdrop `bg-black/80 backdrop-blur-md`.
- **Preselection Logic**:
  - Accepts `preselectedRoomId` (e.g. `'executive-deluxe'`, `'elit-suite'`).
  - Accepts `preselectedType` (`'room'` | `'banquet'`).
- **Interactive Forms & Submission**:
  - Toggle between "Room Reservation" and "Banquet Hall / Event".
  - Name, Phone, Email, Check-In, Check-Out, Room Category, Guest Count, Notes.
  - Simulated async submission with 800ms loading spinner.
  - Success screen displays verified confirmation with immediate WhatsApp concierge escalation button (`https://wa.me/919830000000`).

### 5.12 Luxury Error Experience (`ErrorTemplate.tsx`)
- Handles codes: `404`, `500`, `403`, `408`, `503`.
- Thematic storytelling ("Lost Along the Corridor", "Concierge System Interruption").
- Animated glowing background with color adapted to error severity.
- Direct recovery paths: "Return to Lobby", "Explore Residences", "Direct Front Desk".

---

## 6. Data Model & Static Content Structure (`src/lib/data.ts`)

### 6.1 `HOTEL_INFO`
```ts
{
  name: "NX Elit",
  tagline: "A Boutique Address on EM Bypass, Kolkata",
  address: "EM Bypass Corridor, Near Science City & Salt Lake Sector V, Kolkata, West Bengal 700105",
  phone: "+91 98300 00000",
  whatsapp: "+91 98300 00000",
  email: "reservations@nxelithotel.com",
  checkIn: "14:00 hrs",
  checkOut: "12:00 hrs",
  managingDirector: "Raju Saha",
  interiorDesigner: "Vinoo Chadha",
  totalRooms: 28,
  totalFloors: 5,
  starRating: "4-Star Boutique",
  distanceAirport: "12 km (~25 mins to CCU Airport)",
  distanceITPark: "5 km (~10 mins to Salt Lake Sector V)",
}
```

### 6.2 `ROOM_CATEGORIES` (Summary)
1. **`executive-deluxe`**: 280 sq ft · King/Twin · ₹4,500/night · Levels 2 & 3
2. **`deluxe-room`**: 320 sq ft · King Bed · ₹5,800/night · Levels 3 & 4
3. **`super-deluxe`**: 380 sq ft · Super King · ₹7,200/night · Levels 4 & 5
4. **`elit-suite`**: 550 sq ft · Master Suite Bed · ₹10,500/night · Level 5 Flagship

### 6.3 Real Property Photography Map (`REAL_PHOTOS`)
All images are verified live photography of the real property:
- `heroExterior`: Skyline facade
- `roomColorInterior1`: Level 02 Blue interior
- `roomInteriorDetail2`: Level 03/04 Green interior
- `roomInteriorDetail3`: Level 05 Suite bedroom
- `nxKitchenLounge`: Cherry-red bar lounge
- `nxKitchenRestaurant`: Ivory & gold dining
- `nxKitchenBacksplash`: Dining backsplash & wine nook
- `banquetSpace`: 2,000 sq ft banquet venue
- `propertyInterior`: Lobby & suite salon

---

## 7. How Any AI Should Approach Modifications

When adding or updating features on this website:
1. **Preserve the Dark Aesthetic**: Never use stark white backgrounds. Default to `#09090b` (canvas), `#121216` (card surface), `#18181f` (elevated surface), and `#ffffff` / `#f4f3ef` for text.
2. **Respect Font Hierarchy**:
   - Headlines -> `font-serif` (`Cormorant Garamond`)
   - Eyebrows, Badges, CTAs -> `font-cinzel` (`Cinzel`)
   - Body & descriptions -> `font-sans` (`Plus Jakarta Sans`)
   - Stats, numbers, dimensions, dates -> `font-space` (`Space Grotesk`)
3. **Motion Norms**:
   - Always use Framer Motion springs or gentle bezier curves (e.g. `[0.21, 0.47, 0.32, 0.98]`).
   - Use `InView` with `once: true` and `margin: "-40px"` for scroll-triggered entrance animations.
   - For interactive elements, include hover transitions (`duration-300` or `duration-500`).
4. **Mobile Responsiveness**:
   - All section headers use responsive clamps or `text-3xl sm:text-5xl lg:text-6xl`.
   - All drawers and modals use `max-w-full sm:max-w-md` or `max-h-[90vh] overflow-y-auto`.
   - Grid layouts fold gracefully from `grid-cols-1` to `sm:grid-cols-2` and `lg:grid-cols-3` or `lg:grid-cols-12`.
