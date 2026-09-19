'use client';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll(): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false, // let native iOS momentum run; overriding it feels sticky
  });

  const raf = (time: number) => lenis.raf(time * 1000);

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  document.fonts.ready.then(() => ScrollTrigger.refresh());

  return () => {
    gsap.ticker.remove(raf);
    lenis.destroy();
  };
}
