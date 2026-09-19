export const EASE = {
  travel: 'none',                    // scrubbed motion — never ease a scrub
  seat:   [0.16, 1, 0.3, 1],         // panel settling
  reveal: [0.72, 0, 0.12, 1],        // mask / disc expansion
  swap:   [0.4, 0, 0.2, 1],          // colour + eyebrow crossfade
} as const;

export const DUR = {
  chrome: 0.6,   // shell colour inversion
  swap:   0.45,  // eyebrow crossfade
  seat:   0.9,   // bevel panel seat
  scrub:  1,     // ScrollTrigger scrub smoothing, in seconds of catch-up
} as const;

export const BP = {
  desktop: '(min-width: 1024px)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  desktopNoReduced: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
} as const;
