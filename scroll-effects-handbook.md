# Comprehensive Scroll-Based Effects Catalog & Implementation Handbook

> A definitive engineering reference of all scroll-driven interactions, kinetic animations, mathematical transforms, and architectural patterns. Covers the active production patterns implemented across the Galileo & Duke platform, plus industry-standard Awwwards & Apple-grade scroll techniques. Built with **Framer Motion / Motion**, **Lenis Smooth Scroll**, **GSAP ScrollTrigger**, **Native CSS Scroll-Driven Animations**, and **React Three Fiber**.

---

## Table of Contents

- [1. Architectural Foundations & Setup](#1-architectural-foundations--setup)
  - [1.1 Global Lenis Smooth Scroll Provider](#11-global-lenis-smooth-scroll-provider)
  - [1.2 GSAP ScrollTrigger Hooks Foundation](#12-gsap-scrolltrigger-hooks-foundation)
  - [1.3 Modal Scroll Locking & Lenis Prevention](#13-modal-scroll-locking--lenis-prevention)
- [2. Vertical-to-Horizontal Kinetic Pinning](#2-vertical-to-horizontal-kinetic-pinning)
  - [2.1 Pinned Horizontal Carousel](#21-pinned-horizontal-carousel)
  - [2.2 Dynamic Dimension Horizontal Timeline with Milestone Detection](#22-dynamic-dimension-horizontal-timeline-with-milestone-detection)
  - [2.3 Conduit System Architecture Pipeline](#23-conduit-system-architecture-pipeline)
  - [2.4 Multi-Stage Horizontal Screen Hijacking](#24-multi-stage-horizontal-screen-hijacking)
- [3. Curtain & Split-Screen Transitions](#3-curtain--split-screen-transitions)
  - [3.1 Split-Screen Opposing Curtain Adventure](#31-split-screen-opposing-curtain-adventure)
  - [3.2 Cinematic Dual-Viewport Slide & Minimap Tracker](#32-cinematic-dual-viewport-slide--minimap-tracker)
- [4. 3D Stacking & Sticky Deck Systems](#4-3d-stacking--sticky-deck-systems)
  - [4.1 Physics-Based Scroll Card Stack with Local Lenis Instance](#41-physics-based-scroll-card-stack-with-local-lenis-instance)
  - [4.2 Lightweight Sticky Offset Stacking Deck](#42-lightweight-sticky-offset-stacking-deck)
- [5. Cinematic Parallax & Spatial Effects](#5-cinematic-parallax--spatial-effects)
  - [5.1 Exploding Zoom Parallax with Child Counter-Scale](#51-exploding-zoom-parallax-with-child-counter-scale)
  - [5.2 3D Isometric Ribbon Parallax with Spring Rotation](#52-3d-isometric-ribbon-parallax-with-spring-rotation)
  - [5.3 Multi-Tier Floating Hero Parallax](#53-multi-tier-floating-hero-parallax)
  - [5.4 3-Lane Waterfall Gallery Parallax](#54-3-lane-waterfall-gallery-parallax)
  - [5.5 Differential Multi-Layer Typography Parallax](#55-differential-multi-layer-typography-parallax)
- [6. Scroll-Velocity & Dynamic Marquees](#6-scroll-velocity--dynamic-marquees)
  - [6.1 Velocity-Accelerating Interactive Text Marquee](#61-velocity-accelerating-interactive-text-marquee)
  - [6.2 Angled Velocity Ribbon](#62-angled-velocity-ribbon)
  - [6.3 Dual Opposing Logo Marquee with Pixel-Modulo Wrapping](#63-dual-opposing-logo-marquee-with-pixel-modulo-wrapping)
- [7. Container-Level & Reveal Mechanics](#7-container-level--reveal-mechanics)
  - [7.1 Container-Bound Sticky Scroll Reveal with Wheel Trapping](#71-container-bound-sticky-scroll-reveal-with-wheel-trapping)
  - [7.2 Velocity-Gated Narrative Accordion Showcase](#72-velocity-gated-narrative-accordion-showcase)
  - [7.3 Apple-Style Word-by-Word Text Reveal](#73-apple-style-word-by-word-text-reveal)
- [8. 3D Spatial & Orbital Kinetic Systems](#8-3d-spatial--orbital-kinetic-systems)
  - [8.1 Monolith 3D Rise from the Deep](#81-monolith-3d-rise-from-the-deep)
  - [8.2 Kinetic Orbital Planetary Ring System with Counter-Rotation](#82-kinetic-orbital-planetary-ring-system-with-counter-rotation)
  - [8.3 Void Artifact Materialization](#83-void-artifact-materialization)
- [9. Navigation, Progress & Utility Micro-Interactions](#9-navigation-progress--utility-micro-interactions)
  - [9.1 Directional Hysteresis Floating Navbar](#91-directional-hysteresis-floating-navbar)
  - [9.2 Vertical Glowing Beam Progress Timeline](#92-vertical-glowing-beam-progress-timeline)
  - [9.3 Debounced Smart Back-to-Top Button](#93-debounced-smart-back-to-top-button)
- [10. Advanced Industry Standards (Web Researched Innovations)](#10-advanced-industry-standards-web-researched-innovations)
  - [10.1 Apple-Style Canvas Image Sequence Scrubber (AirPods/Mac Pro Rig)](#101-apple-style-canvas-image-sequence-scrubber-airpodsmac-pro-rig)
  - [10.2 Native CSS Scroll-Driven Animations (Zero-JS Compositor Thread)](#102-native-css-scroll-driven-animations-zero-js-compositor-thread)
  - [10.3 Dynamic SVG Path Drawing via `pathLength`](#103-dynamic-svg-path-drawing-via-pathlength)
  - [10.4 Scroll-Velocity Kinetic Skew & Momentum Distortion](#104-scroll-velocity-kinetic-skew--momentum-distortion)
  - [10.5 Geometric Clip-Path Portal & Expanding Circle Wipe](#105-geometric-clip-path-portal--expanding-circle-wipe)
  - [10.6 3D Canvas Camera Dolly & Scrollytelling Rig (React Three Fiber)](#106-3d-canvas-camera-dolly--scrollytelling-rig-react-three-fiber)
  - [10.7 Multi-Stop Background Palette Color Morphing](#107-multi-stop-background-palette-color-morphing)
  - [10.8 Curved Motion Path Scroll (Bézier Arc Choreography)](#108-curved-motion-path-scroll-bézier-arc-choreography)
- [11. Quick Reference Matrix](#11-quick-reference-matrix)
- [12. Performance & Optimization Guidelines](#12-performance--optimization-guidelines)

---

## 1. Architectural Foundations & Setup

### 1.1 Global Lenis Smooth Scroll Provider
Provides buttery smooth physics-based inertia scrolling while respecting user reduced-motion preferences.

- **Primary Source**: [SmoothScrollProvider.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/providers/SmoothScrollProvider.tsx)
- **Core Dependencies**: `lenis/react`, `framer-motion`

```tsx
'use client';

import { ReactLenis } from 'lenis/react';
import { MotionConfig } from 'framer-motion';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const prefersReducedMotion = typeof window !== 'undefined' 
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <MotionConfig reducedMotion="user">
            <ReactLenis 
                root 
                options={{
                    lerp: prefersReducedMotion ? 1 : 0.14,
                    smoothWheel: !prefersReducedMotion,
                    syncTouch: false,
                    wheelMultiplier: 1.0,
                }}
            >
                {children}
            </ReactLenis>
        </MotionConfig>
    );
}
```

---

### 1.2 GSAP ScrollTrigger Hooks Foundation
Utility hooks for declarative trigger-based animations using GSAP and ScrollTrigger with automatic SSR safety and context cleanup.

- **Primary Source**: [useScrollAnimation.ts](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/hooks/useScrollAnimation.ts)
- **Core Dependencies**: `gsap`, `gsap/ScrollTrigger`

```tsx
'use client';

import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimationOptions {
    trigger?: string | Element;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    toggleActions?: string;
    onEnter?: () => void;
    onLeave?: () => void;
}

export function useScrollAnimation<T extends HTMLElement>(
    animationCallback: (element: T, gsapInstance: typeof gsap) => gsap.core.Timeline | gsap.core.Tween | void,
    options: UseScrollAnimationOptions = {}
): RefObject<T> {
    const elementRef = useRef<T>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const element = elementRef.current;
        if (!element) return;

        const ctx = gsap.context(() => {
            const animation = animationCallback(element, gsap);
            if (animation) {
                ScrollTrigger.create({
                    trigger: options.trigger || element,
                    start: options.start || 'top 80%',
                    end: options.end || 'bottom 20%',
                    scrub: options.scrub,
                    markers: options.markers,
                    toggleActions: options.toggleActions || 'play none none reverse',
                    animation,
                    onEnter: options.onEnter,
                    onLeave: options.onLeave,
                });
            }
        }, element);

        return () => ctx.revert();
    }, [animationCallback, options]);

    return elementRef as RefObject<T>;
}

export function useFadeIn<T extends HTMLElement>(delay = 0, duration = 0.6): RefObject<T> {
    return useScrollAnimation<T>((element, g) => {
        return g.fromTo(element, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration, delay, ease: 'power2.out' });
    });
}

export function useParallax<T extends HTMLElement>(speed = 0.5): RefObject<T> {
    return useScrollAnimation<T>(
        (element, g) => g.to(element, { y: () => -window.innerHeight * speed, ease: 'none' }),
        { scrub: true, start: 'top bottom', end: 'bottom top' }
    );
}
```

---

### 1.3 Modal Scroll Locking & Lenis Prevention
Prevents background page scrolling while retaining smooth scroll functionality inside modals or slide-overs.

- **Primary Source**: [ProjectDetail.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/projects/ProjectDetail.tsx#L180-L194)
- **Key Attribute**: `data-lenis-prevent` on internal scroll containers.

```tsx
import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

export function ModalScrollLock({ isOpen }: { isOpen: boolean }) {
    const lenis = useLenis();

    useEffect(() => {
        if (!isOpen) return;

        if (lenis) lenis.stop();
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            if (lenis) lenis.start();
        };
    }, [isOpen, lenis]);

    return (
        <div 
            className="fixed inset-0 z-50 overflow-y-auto"
            data-lenis-prevent // CRITICAL: Allows native wheel events inside modal without triggering Lenis root
        >
            {/* Modal Body */}
        </div>
    );
}
```

---

## 2. Vertical-to-Horizontal Kinetic Pinning

### 2.1 Pinned Horizontal Carousel
Pins the viewport using a tall container (`h-[350vh]`), translating a horizontal card track on the X-axis proportionally to vertical scroll progression.

- **Primary Source**: [horizontal-scroll-carousel.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/horizontal-scroll-carousel.tsx)
- **Formula**: `x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"])`

```tsx
'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

export const HorizontalScrollCarousel = ({ items }: { items: any[] }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']);

    return (
        <section ref={targetRef} className="relative h-[350vh] bg-background">
            <div className="sticky top-0 flex flex-col h-screen overflow-hidden justify-center">
                <div className="flex items-center w-full relative">
                    <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24 absolute w-max">
                        {items.map((item, idx) => (
                            <div key={idx} className="w-[320px] md:w-[380px] h-[450px] shrink-0 bg-card border border-border p-6 rounded-2xl">
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
```

---

### 2.2 Dynamic Dimension Horizontal Timeline with Milestone Detection
Measures track width with `ResizeObserver` so the horizontal transform stops exactly when the last card hits the edge. Detects the active item under the scroll tip in real-time.

- **Primary Source**: [horizontal-timeline.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/horizontal-timeline.tsx)

```tsx
'use client';

import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function HorizontalTimeline({ data }: { data: { title: string; content: React.ReactNode }[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        if (!scrollRef.current) return;
        const updateDimensions = () => {
            if (scrollRef.current) {
                setScrollWidth(scrollRef.current.scrollWidth);
                setViewportWidth(window.innerWidth);
            }
        };
        updateDimensions();
        const ro = new ResizeObserver(updateDimensions);
        ro.observe(scrollRef.current);
        window.addEventListener('resize', updateDimensions);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', updateDimensions);
        };
    }, [data]);

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const lineTip = latest * window.innerWidth;
        let current = -1;
        for (let i = 0; i < data.length; i++) {
            const el = itemRefs.current[i];
            if (el) {
                const rect = el.getBoundingClientRect();
                const end = itemRefs.current[i + 1]?.getBoundingClientRect().left ?? (rect.left + rect.width);
                if (lineTip >= rect.left && lineTip < end) {
                    current = i;
                    break;
                }
            }
        }
        setActiveIndex(current);
    });

    const xTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -Math.max(0, scrollWidth - viewportWidth + 200)]
    );
    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div ref={containerRef} className="relative w-full h-[400vh]">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <motion.div 
                    style={{ width: progressWidth }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary z-10" 
                />

                <motion.div
                    ref={scrollRef}
                    style={{ x: xTransform }}
                    className="flex flex-row items-center px-16 w-max gap-20 absolute left-0 top-1/2 -translate-y-1/2 z-20"
                >
                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            ref={(el) => { itemRefs.current[idx] = el; }}
                            className={`w-[360px] shrink-0 transition-transform ${activeIndex === idx ? 'scale-105' : 'opacity-70'}`}
                        >
                            {item.content}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
```

---

### 2.3 Conduit System Architecture Pipeline
A horizontal scroll conduit featuring pulsing connecting wires, dynamic flow particles, live process logs, and an on-screen scroll coordinate meter.

- **Primary Source**: [SystemPipeline.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/SystemPipeline.tsx)
- **Formula**: `x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(tools.length - 1) * 25}%`])`

---

### 2.4 Multi-Stage Horizontal Screen Hijacking
Pins the screen and performs an orchestrated horizontal panel slide between two distinct full-screen environments (`width: 200vw`), toggling border curvature and panel lifecycle states based on progress milestones.

- **Primary Source**: [AboutSection.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/sections/AboutSection.tsx#L475-L545)
- **Key Milestone Map**:
  - `xShift`: `[0, 0.08, 0.32, 1]` -> `["0vw", "0vw", "-100vw", "-100vw"]`
  - Exit transform: `[0, 1]` -> `scale: 0.85`, `borderRadius: 40px`, `opacity: 0`

---

## 3. Curtain & Split-Screen Transitions

### 3.1 Split-Screen Opposing Curtain Adventure
Cards split down the vertical axis. As the user scrolls through the tall container, visual media and editorial content slide from opposite off-screen directions (`-120%` and `+120%`) to meet seamlessly in the center.

- **Primary Source**: [animated-scroll.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/animated-scroll.tsx)
- **Key Transforms**:
  - `leftY`: `[enterStart, enterEnd, exitStart, exitEnd]` -> `["-120%", "0%", "0%", "-120%"]`
  - `rightY`: `[enterStart, enterEnd, exitStart, exitEnd]` -> `["120%", "0%", "0%", "120%"]`

```tsx
const step = 1 / totalPages;
const enterStart = index === 0 ? -0.1 : (index - 0.45) * step;
const enterEnd = index === 0 ? -0.01 : (index + 0.1) * step;
const exitStart = (index + 0.55) * step;
const exitEnd = (index + 1.1) * step;

const leftY = useTransform(
    scrollProgress,
    [enterStart, enterEnd, exitStart, exitEnd],
    [leftHasVisual ? "-120%" : "120%", "0%", "0%", leftHasVisual ? "-120%" : "120%"]
);

const rightY = useTransform(
    scrollProgress,
    [enterStart, enterEnd, exitStart, exitEnd],
    [rightHasVisual ? "-120%" : "120%", "0%", "0%", rightHasVisual ? "-120%" : "120%"]
);
```

---

### 3.2 Cinematic Dual-Viewport Slide & Minimap Tracker
A pinned presentation engine that locks full-screen background hero imagery while simultaneously translating an overlay floating minimap box with matching internal offsets. Uses stepped piecewise mapping for discrete slide transitions without spring lag.

- **Primary Source**: [argent-loop-infinite-slider.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/argent-loop-infinite-slider.tsx)

```tsx
const scrollMap: number[] = [0];
const yMap: string[] = ["0vh"];
const internalYMap: string[] = ["0px"];

projects.forEach((_, i) => {
    if (i === 0) return;
    const boundary = i * projectStep;
    scrollMap.push(
        Math.max(0, boundary - transWindow / 2),
        Math.min(projectArea, boundary + transWindow / 2)
    );
    yMap.push(`-${(i - 1) * 100}vh`, `-${i * 100}vh`);
    internalYMap.push(`-${(i - 1) * 250}px`, `-${i * 250}px`);
});
```

---

## 4. 3D Stacking & Sticky Deck Systems

### 4.1 Physics-Based Scroll Card Stack with Local Lenis Instance
Cards scroll up into view, pin at designated percentages of the container, progressively scale down (`baseScale + i * itemScale`), apply depth-based blur filters to cards underneath, and smoothly tilt with rotation.

- **Primary Source**: [ScrollStack.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/ScrollStack.tsx)

```tsx
const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
const filter = blur > 0 ? `blur(${blur}px)` : '';

card.style.transform = transform;
card.style.filter = filter;
```

---

### 4.2 Lightweight Sticky Offset Stacking Deck
A zero-dependency, CSS-sticky card stack with progressive top margins and counter-scaling.

- **Primary Source**: [showcase-stack.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/showcase-stack.tsx)

```tsx
'use client';

import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, Children } from 'react';

const StackCard = ({ children, index, totalCards, scrollProgress }: {
    children: React.ReactNode;
    index: number;
    totalCards: number;
    scrollProgress: MotionValue<number>;
}) => {
    const targetScale = 1 - (totalCards - index) * 0.05;
    const scale = useTransform(scrollProgress, [index * (1 / totalCards), 1], [1, targetScale]);

    return (
        <div
            className="h-screen flex items-center justify-center sticky top-0"
            style={{ zIndex: index + 1 }}
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${index * 25}px)`,
                }}
                className="relative w-full origin-top"
            >
                {children}
            </motion.div>
        </div>
    );
};
```

---

## 5. Cinematic Parallax & Spatial Effects

### 5.1 Exploding Zoom Parallax with Child Counter-Scale
Pins a 7-image gallery inside a sticky container. As scroll progresses, outer images scale aggressively (`1 -> 4.2`, `1 -> 5.2`) and disperse away while fading out (`outerOpacity`). The center hero image expands (`1 -> 3.5`), while its child buttons apply an inverted counter-scale so text remains razor-sharp and normal sized.

- **Primary Source**: [zoom-parallax.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/zoom-parallax.tsx)

```tsx
const scaleCenter = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
const buttonScale = useTransform(scaleCenter, (s) => 1 / s);
const outerOpacity = useTransform(scrollYProgress, [0, 0.45, 0.72], [1, 0.85, 0]);

<motion.div style={{ scale: buttonScale }} className="relative z-10 flex flex-col items-center">
    {children}
</motion.div>
```

---

### 5.2 3D Isometric Ribbon Parallax with Spring Rotation
Transforms a list of project cards into two opposing horizontal ribbons placed in a 3D perspective field (`perspective: 1800px`). As user scrolls down, row 1 translates right (`0 -> +800px`), row 2 translates left (`0 -> -800px`), with spring-smoothed rotation around the X and Z axes.

- **Primary Source**: [hero-parallax.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/hero-parallax.tsx)

```tsx
const translateX = useTransform(scrollYProgress, [0, 1], [0, 800]);
const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -800]);
const rotateXRaw = useTransform(scrollYProgress, [0, 0.2], [5, 0]);
const rotateX = useSpring(rotateXRaw, { stiffness: 200, damping: 20 });
const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
```

---

### 5.3 Multi-Tier Floating Hero Parallax
Features a pinned background hero that scales up from `0.5` to `1` and rounds corners from `24px` to `0px`, with 5 layered foreground satellite images initialized below the viewport that fly upwards at distinct speeds.

- **Primary Source**: [SmoothScrollHero.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/sections/SmoothScrollHero.tsx)

```tsx
const y = useTransform(scrollY, [0, SECTION_HEIGHT], [start, end]);
const scale = useTransform(scrollY, [0, SECTION_HEIGHT], [1, 1.2]);
const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
```

---

### 5.4 3-Lane Waterfall Gallery Parallax
A 3-column vertical image gallery where each column travels at a different speed (`1.2x`, `2.0x`, `0.8x`) with staggered initial top offsets (`-45%`, `-95%`, `-65%`), smoothed via a gentle low-pass spring filter.

- **Primary Source**: [certificate-marquee.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/certificate-marquee.tsx)

---

### 5.5 Differential Multi-Layer Typography Parallax
Staggers vertical translation speeds across heading sub-elements, labels, and description blocks to produce a 3D parallax depth effect between typography and cards.

- **Primary Source**: [impact-section.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/impact-section.tsx#L20-L23), [ManifestoHero.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/sections/gallery/ManifestoHero.tsx#L19-L22)

---

## 6. Scroll-Velocity & Dynamic Marquees

### 6.1 Velocity-Accelerating Interactive Text Marquee
A continuous ticker running on `useAnimationFrame` that measures scroll velocity using `useVelocity(scrollY)`. Scrolling faster accelerates the ticker; reversing scroll direction reverses the ticker flow.

- **Primary Source**: [ScrollVelocity.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/ScrollVelocity.tsx), [TextScrollMarquee.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/TextScrollMarquee.tsx)

```tsx
'use client';

import React, { useRef } from 'react';
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from 'framer-motion';

export function VelocityText({ children, baseVelocity = 100 }: { children: string; baseVelocity?: number }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const wrap = (min: number, max: number, v: number) => {
        const range = max - min;
        return ((((v - min) % range) + range) % range) + min;
    };

    const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden whitespace-nowrap flex">
            <motion.div className="flex whitespace-nowrap gap-10" style={{ x }}>
                {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className="text-5xl font-black uppercase tracking-tight">
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
```

---

### 6.2 Angled Velocity Ribbon
Diagonal banner ribbon spanning `200vw` at a custom tilt angle, dynamically accelerating when the page scrolls.

- **Primary Source**: [infinite-ribbon.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/infinite-ribbon.tsx)

---

### 6.3 Dual Opposing Logo Marquee with Pixel-Modulo Wrapping
Measures element pixel width via `scrollWidth` and uses pure pixel-level modulo calculation to prevent layout jumps across browser resizes.

- **Primary Source**: [ExperienceMarquee.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/sections/ExperienceMarquee.tsx)

```tsx
const x = useTransform(baseX, (v) => {
    if (contentWidth <= 0) return "0px";
    const mod = ((v % contentWidth) + contentWidth) % contentWidth;
    return baseVelocity > 0 ? `${-contentWidth + mod}px` : `${-mod}px`;
});
```

---

## 7. Container-Level & Reveal Mechanics

### 7.1 Container-Bound Sticky Scroll Reveal with Wheel Trapping
A multi-card reveal widget operating inside an internal scroll container (`useScroll({ container: ref })`). Intercepts wheel events until edges are reached, switching right-side sticky cards with spring transitions.

- **Primary Source**: [sticky-scroll-reveal.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/sticky-scroll-reveal.tsx)

---

### 7.2 Velocity-Gated Narrative Accordion Showcase
Monitors `useVelocity(scrollYProgress)` to automatically collapse narrative rows during rapid scrolling and expand the closest active member only when scrolling slows down.

- **Primary Source**: [team-showcase.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/team-showcase.tsx#L128-L134)

```tsx
if (velocity > 0.015) {
    if (expandedId !== null) setExpandedId(null); // Close during fast scroll
} else if (velocity < 0.008) {
    if (expandedId !== targetId) setExpandedId(targetId); // Open on settle
}
```

---

### 7.3 Apple-Style Word-by-Word Text Reveal
Splits a paragraph into individual words, mapping each word's opacity to a fractional slice of the section's scroll progression.

- **Primary Source**: [text-reveal.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/text-reveal.tsx)

```tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

export const TextReveal = ({ children }: { children: string }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const words = children.split(' ');

    return (
        <div ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-0 mx-auto flex h-screen max-w-4xl items-center px-6">
                <p className="flex flex-wrap text-4xl font-bold">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
                    })}
                </p>
            </div>
        </div>
    );
};

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative mx-1.5 my-1">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }} className="text-foreground">
                {children}
            </motion.span>
        </span>
    );
};
```

---

## 8. 3D Spatial & Orbital Kinetic Systems

### 8.1 Monolith 3D Rise from the Deep
As cards scroll into view, they rotate up from an oblique 3D tilt angle (`rotateX: 45deg -> 0deg`), scaling up while their Gaussian blur dissolves from `20px` to `0px`.

- **Primary Source**: [MonolithStack.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/MonolithStack.tsx), [VoidWorkbench.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/VoidWorkbench.tsx)

```tsx
const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
});

const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 1]);
const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
const blur = useTransform(scrollYProgress, [0, 0.8, 1], ["20px", "5px", "0px"]);
const springScale = useSpring(scale, { stiffness: 100, damping: 30 });
```

---

### 8.2 Kinetic Orbital Planetary Ring System with Counter-Rotation
Renders concentric planetary rings that orbit clockwise and counter-clockwise based on scroll progress. Utilizes a counter-rotation transform on each satellite element so icons remain upright as they orbit.

- **Primary Source**: [OrbitalWorkbench.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/OrbitalWorkbench.tsx)

```tsx
const rotate = useTransform(progress, [0, 1], [0, 360 * ring.speed]);
const counterRotate = useTransform(rotate, (r) => -r);
```

---

### 8.3 Void Artifact Materialization
Staggers particle artifact items with individual index-derived speed offsets and tilt angles.

- **Primary Source**: [NebulaWorkbench.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/NebulaWorkbench.tsx#L63-L66)

---

## 9. Navigation, Progress & Utility Micro-Interactions

### 9.1 Directional Hysteresis Floating Navbar
Detects scroll direction with hysteresis thresholds to prevent flutter: hides on scroll down (`diff > 8 && currentScrollY > 100`), reveals on scroll up (`diff < -8`), while scroll depth triggers glassmorphism backdrop blur.

- **Primary Source**: [Navbar.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/layout/Navbar.tsx#L120-L138)

---

### 9.2 Vertical Glowing Beam Progress Timeline
Measures total container height using a `ResizeObserver` and maps a glowing vertical gradient beam from `0px` to `totalHeight` as the user traverses the timeline.

- **Primary Source**: [timeline.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/timeline.tsx#L43-L50)

---

### 9.3 Debounced Smart Back-to-Top Button
Hides the button immediately when active scrolling is detected, then debounces for 100ms and reveals it only when scrolling stops (provided scroll depth > 100px). Includes a magnetic cursor pull.

- **Primary Source**: [BackToTop.tsx](file:///c:/Users/MOKSH/OneDrive/Desktop/galileo/reference-personalblog/src/components/ui/BackToTop.tsx#L40-L75)

---

## 10. Advanced Industry Standards (Web Researched Innovations)

### 10.1 Apple-Style Canvas Image Sequence Scrubber (AirPods/Mac Pro Rig)
The gold standard of luxury hardware showcases. Instead of struggling with heavy video decoding delays on scroll, a high-performance 2D canvas scrubs through pre-rendered image frames synchronized directly with scroll depth.

- **Best Library**: GSAP ScrollTrigger or Framer Motion
- **Core Concept**: Preload image sequence into memory, bind scroll distance to integer frame index, redraw on canvas during scroll update.

```tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface CanvasScrubberProps {
    frameCount: number;
    framePath: (index: number) => string;
    width?: number;
    height?: number;
}

export function CanvasImageScrubber({ frameCount, framePath, width = 1920, height = 1080 }: CanvasScrubberProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 1. Preload image array
        const images: HTMLImageElement[] = [];
        const state = { frame: 0 };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = framePath(i);
            images.push(img);
        }

        const render = () => {
            const currentImg = images[Math.round(state.frame)];
            if (currentImg && currentImg.complete) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Maintain aspect ratio cover fill
                const hRatio = canvas.width / currentImg.width;
                const vRatio = canvas.height / currentImg.height;
                const ratio = Math.max(hRatio, vRatio);
                const centerShiftX = (canvas.width - currentImg.width * ratio) / 2;
                const centerShiftY = (canvas.height - currentImg.height * ratio) / 2;
                ctx.drawImage(
                    currentImg, 
                    0, 0, currentImg.width, currentImg.height,
                    centerShiftX, centerShiftY, currentImg.width * ratio, currentImg.height * ratio
                );
            }
        };

        images[0].onload = render;

        // 2. Pin container and scrub frames with GSAP ScrollTrigger
        const trigger = ScrollTrigger.create({
            trigger: container,
            start: 'top top',
            end: '+=3000', // 3000px of scroll distance
            scrub: 0.5,
            pin: true,
            onUpdate: (self) => {
                state.frame = self.progress * (frameCount - 1);
                render();
            }
        });

        return () => {
            trigger.kill();
        };
    }, [frameCount, framePath]);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
            <canvas 
                ref={canvasRef} 
                width={width} 
                height={height} 
                className="w-full h-full object-cover pointer-events-none"
            />
        </div>
    );
}
```

---

### 10.2 Native CSS Scroll-Driven Animations (Zero-JS Compositor Thread)
Modern browser native API executing animations entirely off the main thread on the GPU compositor thread without a single line of animation JavaScript.

- **Key Properties**: `animation-timeline: scroll()`, `animation-timeline: view()`, `animation-range`
- **Supported**: Modern Chromium, Safari 18+, Firefox with progressive enhancement

```css
/* Reading Progress Bar (Tied to container scroll) */
.scroll-progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #10b981;
    transform-origin: 0 50%;
    transform: scaleX(0);
    
    /* Native CSS Scroll-Driven Timeline */
    animation: scale-progress auto linear;
    animation-timeline: scroll();
}

@keyframes scale-progress {
    to { transform: scaleX(1); }
}

/* Entrance Animation (Tied to element entering viewport) */
.view-reveal-card {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
    animation: view-fade-in auto ease-out forwards;
    animation-timeline: view();
    animation-range: entry 10% cover 40%; /* Runs while element traverses 10% to 40% of viewport */
}

@keyframes view-fade-in {
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
```

---

### 10.3 Dynamic SVG Path Drawing via `pathLength`
Replaces legacy `stroke-dashoffset` / `getTotalLength()` DOM calculations with Framer Motion's normalized `pathLength` (`0` to `1`).

- **Core Formula**: `pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])`

```tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ScrollDrawnSVGLine() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end center']
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={containerRef} className="h-[150vh] relative flex items-center justify-center">
            <svg viewBox="0 0 400 800" className="w-full max-w-lg h-auto overflow-visible">
                <motion.path
                    d="M 200 0 C 400 200, 0 400, 200 600 S 400 750, 200 800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary"
                    style={{ pathLength }}
                />
            </svg>
        </div>
    );
}
```

---

### 10.4 Scroll-Velocity Kinetic Skew & Momentum Distortion
Tracks user scroll velocity and tilts typography or image cards dynamically based on speed. Slower scrolling keeps elements level; aggressive scrolling adds a dramatic physical "lean".

- **Core Formula**: `skewY = useTransform(smoothVelocity, [-1000, 1000], [-15, 15])`

```tsx
'use client';

import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

export function VelocitySkewBlock({ children }: { children: React.ReactNode }) {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    
    // Spring smoothing prevents aliasing and jitter
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    
    // Converts pixel velocity to tilt angle degrees
    const skewY = useTransform(smoothVelocity, [-1200, 1200], [-12, 12]);
    const scale = useTransform(smoothVelocity, [-1200, 0, 1200], [0.96, 1, 0.96]);

    return (
        <motion.div style={{ skewY, scale, transformOrigin: "center center" }} className="will-change-transform">
            {children}
        </motion.div>
    );
}
```

---

### 10.5 Geometric Clip-Path Portal & Expanding Circle Wipe
Pins two layers and expands an aperture circle or polygonal mask from `0%` to `150%` to reveal an entirely different visual theme, video, or background underneath.

- **Formula**: `clipPath = useTransform(scrollYProgress, [0, 1], ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"])`

```tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function CirclePortalReveal({ 
    topLayer, 
    revealedLayer 
}: { 
    topLayer: React.ReactNode; 
    revealedLayer: React.ReactNode; 
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ['circle(0% at 50% 50%)', 'circle(150% at 50% 50%)']
    );

    return (
        <div ref={containerRef} className="relative h-[250vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Background base layer */}
                <div className="absolute inset-0 z-0">{topLayer}</div>

                {/* Masked aperture overlay layer */}
                <motion.div 
                    style={{ clipPath }} 
                    className="absolute inset-0 z-10 will-change-[clip-path]"
                >
                    {revealedLayer}
                </motion.div>
            </div>
        </div>
    );
}
```

---

### 10.6 3D Canvas Camera Dolly & Scrollytelling Rig (React Three Fiber)
Combines React Three Fiber with Drei's `ScrollControls` to drive 3D camera position, lookAt vectors, and model rotation directly through scroll offsets.

- **Dependencies**: `@react-three/fiber`, `@react-three/drei`, `three`

```tsx
'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

function CameraScrollRig() {
    const scroll = useScroll(); // Returns scroll.offset (0 to 1)
    const { camera } = useThree();

    const startPos = new THREE.Vector3(0, 0, 8);
    const midPos = new THREE.Vector3(4, 2, 4);
    const endPos = new THREE.Vector3(0, -2, 2);

    useFrame(() => {
        const progress = scroll.offset; // 0 to 1

        if (progress < 0.5) {
            const localT = progress / 0.5;
            camera.position.lerpVectors(startPos, midPos, localT);
        } else {
            const localT = (progress - 0.5) / 0.5;
            camera.position.lerpVectors(midPos, endPos, localT);
        }

        camera.lookAt(0, 0, 0);
    });

    return null;
}

export function ThreeScrollScene() {
    return (
        <div className="w-full h-screen">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />
                {/* ScrollControls creates the virtual scroll runway */}
                <ScrollControls pages={3} damping={0.1}>
                    <CameraScrollRig />
                    <mesh rotation={[0.4, 0.2, 0]}>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshStandardMaterial color="#10b981" roughness={0.2} metalness={0.8} />
                    </mesh>
                </ScrollControls>
            </Canvas>
        </div>
    );
}
```

---

### 10.7 Multi-Stop Background Palette Color Morphing
Interpolates page or container background color smoothly across multi-stop brand palettes as sections come into view.

- **Formula**: `backgroundColor = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["#09090b", "#0f172a", "#18181b", "#000000"])`

```tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function PaletteMorphContainer({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.33, 0.66, 1],
        ['#09090b', '#064e3b', '#1e1b4b', '#000000']
    );

    return (
        <motion.div ref={containerRef} style={{ backgroundColor }} className="transition-colors duration-200">
            {children}
        </motion.div>
    );
}
```

---

### 10.8 Curved Motion Path Scroll (Bézier Arc Choreography)
Guides an element along a curved spatial path (Bézier or arc) instead of a simple linear translation as the page scrolls.

- **Implementation**: GSAP ScrollTrigger paired with GSAP MotionPathPlugin

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export function CurvedScrollObject() {
    const containerRef = useRef<HTMLDivElement>(null);
    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !orbRef.current) return;

        const tween = gsap.to(orbRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            },
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: 300, y: 400 },
                    { x: -200, y: 800 },
                    { x: 100, y: 1200 },
                ],
                curviness: 1.5,
                autoRotate: true,
            },
            ease: 'none'
        });

        return () => tween.kill();
    }, []);

    return (
        <div ref={containerRef} className="relative h-[200vh] w-full overflow-hidden">
            <div 
                ref={orbRef} 
                className="w-16 h-16 rounded-full bg-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.8)] absolute top-0 left-1/2" 
            />
        </div>
    );
}
```

---

## 11. Quick Reference Matrix

| Effect Name | Tech Stack | Container Height | Pinning Strategy | Key Formula / Motion Primitive | Primary Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Horizontal Carousel** | Framer Motion | `h-[350vh]` | `sticky top-0 h-screen` | `x: [0%, -68%]` | Projects, Skills showcases |
| **Dynamic Timeline** | Framer Motion | `h-[400vh]` | `sticky top-0 h-screen` | `x: [0, -(scrollWidth - innerWidth)]` | Work history, Career journey |
| **Conduit Pipeline** | Framer Motion | `h-[400vh]` | `sticky top-0 h-screen` | `x: [0%, -((N-1)*25)%]` | Tech stack, System architectures |
| **Opposing Curtains** | Framer Motion | `h-[600vh]` | `sticky top-0 h-screen` | `leftY: 120%->0%`, `rightY: -120%->0%` | Agency service packages, Portals |
| **Dual Slide & Minimap** | Framer Motion | `h-[300vh]` | `sticky top-0 h-screen` | Discrete stepped piece-wise array map | Commissioned works flagship slider |
| **Physics Card Stack** | Local Lenis + JS | Dynamic | Custom RAF loop | `translateY`, `scale`, `rotation`, `blur` | Portfolio case study decks |
| **Sticky Offset Deck** | Framer Motion | Natural | CSS `sticky top-0` | `top: -5vh + i*25px`, `scale` down | Lightweight card collections |
| **Exploding Zoom** | Framer Motion | `h-[300vh]` | `sticky top-0 h-screen` | Center: `1->3.5`, Outer: `1->5.2` + dispersion | Hero intros, Media gallery reveals |
| **3D Isometric Ribbon** | Framer Motion | `h-[140vh]` | Pinned Header + 3D View | `translateX: +-800px`, `rotateX/Z` spring | Product showreel, Selected work |
| **Floating Satellites** | Framer Motion | `1500px + 100vh` | `sticky top-0` Center | `translateY: [start, end]`, `scale` | Cinematic landing hero experiences |
| **Velocity Marquee** | Framer Motion | Single row | Continuous ticker | `useVelocity(scrollY)` + `useAnimationFrame` | Kinetic slogans, Technology tickers |
| **Sticky Scroll Reveal** | Framer Motion | `h-[35rem]` | Internal Container | `useScroll({ container })` + Breakpoints | Feature highlights, Specs breakdown |
| **Word Text Reveal** | Framer Motion | `h-[200vh]` | `sticky top-0 h-screen` | Word opacity: `[i/N, (i+1)/N] -> [0, 1]` | Manifesto sections, Quotes, Philosophy |
| **Monolith 3D Rise** | Framer Motion | `min-h-[200vh]` | In-view Intersection | `rotateX: 45->0deg`, `blur: 20->0px` | Artifacts showcase, Deep dive cards |
| **Kinetic Orbit Rings** | Framer Motion | `h-[250vh]` | `sticky top-0 h-screen` | `rotate: 360 * speed`, `counterRotate: -r` | Interactive planetary tech ecosystems |
| **Canvas Image Scrubber** | GSAP + Canvas | `h-[400vh]` | GSAP Pin | `ctx.drawImage(images[frame])` | Apple-style hardware product reveals |
| **Native CSS Scroll** | Pure CSS | Natural | None (Compositor) | `animation-timeline: view() / scroll()` | Reading bars, Zero-JS card fade-ins |
| **SVG Path Drawing** | Framer Motion | `h-[150vh]` | In-view Intersection | `pathLength: [0, 1]` | Circuit traces, Flowcharts, Diagrams |
| **Velocity Skew Tilt** | Framer Motion | Natural | None | `skewY: useTransform(smoothVelocity)` | Editorial typography, Kinetic lists |
| **Clip-Path Portal Wipe** | Framer Motion | `h-[250vh]` | `sticky top-0 h-screen` | `clipPath: circle(0% -> 150%)` | Dramatic theme transitions, Video portals |
| **3D Camera Dolly** | R3F + Drei | `pages={N}` | R3F ScrollControls | `camera.position.lerpVectors(...)` | 3D WebGL scenes, Spatial storytelling |
| **Palette Morph** | Framer Motion | Full Page | Continuous Scroll | `backgroundColor: useTransform(...)` | Ambient mood shift across page sections |
| **Curved Motion Path** | GSAP MotionPath | `h-[200vh]` | GSAP Pin / Scrub | Bézier polynomial coordinates | Floating drones, Abstract energy orbs |

---

## 12. Performance & Optimization Guidelines

1. **GPU Compositing & Layout Thrashing**: Always apply `willChange: "transform, opacity"` and ensure animated properties do not trigger browser reflow (avoid animating `top`, `left`, `width`, `height`, or `margin`). Stick to `transform` and `opacity`.
2. **Reduced Motion Compliance**: Respect `prefers-reduced-motion` across both Lenis (`smoothWheel: false`) and Motion (`<MotionConfig reducedMotion="user">`) to comply with accessibility standards and prevent nausea.
3. **Compositor Offloading (CSS Animation Timelines)**: For simple entrance fades and reading progress bars, prefer native CSS `animation-timeline` over JavaScript scroll event listeners to execute at 120fps directly on the GPU compositor thread.
4. **Virtualizing Heavy Assets (Canvas vs Video)**: For scrubbing high-density frames on scroll, use an HTML `<canvas>` with preloaded image arrays or spritesheets rather than scrubbing HTML `<video>` elements (which stutter due to keyframe seek latency).
5. **Lenis Modal Prevention**: Always tag nested scrollable containers inside overlays or modals with `data-lenis-prevent` to prevent wheel-event bubbling conflicts.
