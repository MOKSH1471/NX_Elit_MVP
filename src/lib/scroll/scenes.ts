export type Contrast = 'ink' | 'light';
export type TransitionIn = 'arc' | 'bevel' | 'horizontal' | 'cut';

export interface Scene {
  id: string;
  eyebrow: string;        // shell top-center text
  canvas: string;         // background paint
  contrast: Contrast;     // drives rail + nav colour
  transitionIn: TransitionIn;
  vh: number;             // scroll length in viewport heights
}

export const SCENES: Scene[] = [
  { id: 'arrival',  eyebrow: 'A BOUTIQUE ADDRESS',          canvas: '#09090b', contrast: 'light', transitionIn: 'cut',        vh: 1.0 },
  { id: 'ethos',    eyebrow: 'FIVE FLOORS, THREE MOODS',    canvas: '#0d0d10', contrast: 'light', transitionIn: 'horizontal', vh: 0.8 },
  { id: 'sapphire', eyebrow: 'LEVEL 02 — OCEANIC CALM',     canvas: '#0b1733', contrast: 'light', transitionIn: 'arc',        vh: 0.8 },
  { id: 'emerald',  eyebrow: 'LEVELS 03 & 04 — BOTANICAL',  canvas: '#062018', contrast: 'light', transitionIn: 'horizontal', vh: 0.8 },
  { id: 'ruby',     eyebrow: 'LEVEL 05 — THE CROWN',        canvas: '#2a0713', contrast: 'light', transitionIn: 'arc',        vh: 0.8 },
  { id: 'kitchen',  eyebrow: 'NX KITCHEN',                  canvas: '#120d08', contrast: 'light', transitionIn: 'bevel',      vh: 2.0 },
  { id: 'banquet',  eyebrow: 'TWO THOUSAND SQUARE FEET',    canvas: '#f4f3ef', contrast: 'ink',   transitionIn: 'bevel',      vh: 1.5 },
  { id: 'voices',   eyebrow: 'IN THEIR WORDS',              canvas: '#09090b', contrast: 'light', transitionIn: 'cut',        vh: 1.2 },
  { id: 'address',  eyebrow: 'EM BYPASS, KOLKATA',          canvas: '#0b1733', contrast: 'light', transitionIn: 'bevel',      vh: 1.5 },
];

export const INK = { ink: '#09090b', light: '#f4f3ef' } as const;
