/* ============================================================
   11 · KINETIC — words that scramble, split and settle.
   The still side is one enormous letter. As you scroll it steps through the
   alphabet, and between two letters each is cut in half across the middle: the
   halves slide apart in opposite directions as one fades out and the next slides
   together. The numbers that drive it are the page's --f, read by CSS.
   Everything below is a line of moving type; the ones that react to the pointer
   work from the keyboard too.
   ============================================================ */

import { Visual } from './Visual';
import { ScrambleReveal } from './ScrambleReveal';
import { LetterSplit } from './LetterSplit';
import { WaveText } from './WaveText';
import { Typewriter } from './Typewriter';
import { RollHover } from './RollHover';
import { BlurIn } from './BlurIn';
import { StaggerRise } from './StaggerRise';
import { StrokeSwell } from './StrokeSwell';
import { MagnetLetters } from './MagnetLetters';
import { GradientSweep } from './GradientSweep';
import { OutlineFill } from './OutlineFill';
import { Glitch } from './Glitch';
import { NeonFlicker } from './NeonFlicker';
import { SpotlightReveal } from './SpotlightReveal';
import { KerningBreathe } from './KerningBreathe';
import { ScatterWords } from './ScatterWords';
import { CircleText } from './CircleText';
import { WavyPath } from './WavyPath';
import { StackSlam } from './StackSlam';
import { RingLetters } from './RingLetters';
import { WordSwap } from './WordSwap';
import { UnderlineDraw } from './UnderlineDraw';
import { FlipWords } from './FlipWords';
import { BounceLetters } from './BounceLetters';
import { StretchWord } from './StretchWord';
import { FisheyeText } from './FisheyeText';
import { SlantDial } from './SlantDial';
import { AnagramShuffle } from './AnagramShuffle';
import { PopIn } from './PopIn';
import { EchoTrail } from './EchoTrail';
import { MirrorRipple } from './MirrorRipple';
import { StrokeWrite } from './StrokeWrite';
import { CipherCycle } from './CipherCycle';
import { DepthLayers } from './DepthLayers';
import { LiquidWobble } from './LiquidWobble';
import { LetterGrid } from './LetterGrid';
import { LetterBurst } from './LetterBurst';
import { LetterDrop } from './LetterDrop';
import { TrackingIn } from './TrackingIn';
import { ZoomThrough } from './ZoomThrough';
import { SliceSlide } from './SliceSlide';
import { KaraokeWords } from './KaraokeWords';

export { Visual };
export { ScrambleReveal, LetterSplit, WaveText, Typewriter, RollHover, BlurIn, StaggerRise, StrokeSwell, MagnetLetters, GradientSweep, OutlineFill, Glitch, NeonFlicker, SpotlightReveal, KerningBreathe, ScatterWords, CircleText, WavyPath, StackSlam, RingLetters, WordSwap, UnderlineDraw, FlipWords, BounceLetters, StretchWord, FisheyeText, SlantDial, AnagramShuffle, PopIn, EchoTrail, MirrorRipple, StrokeWrite, CipherCycle, DepthLayers, LiquidWobble, LetterGrid, LetterBurst, LetterDrop, TrackingIn, ZoomThrough, SliceSlide, KaraokeWords };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Scramble reveal", ScrambleReveal, "hover"],
  ["Letter split", LetterSplit, "hover"],
  ["Wave text", WaveText, "auto"],
  ["Typewriter", Typewriter, "auto"],
  ["Roll hover", RollHover, "hover"],
  ["Blur in", BlurIn, "auto"],
  ["Stagger rise", StaggerRise, "click"],
  ["Stroke swell", StrokeSwell, "hover"],
  ["Magnet letters", MagnetLetters, "hover"],
  ["Gradient sweep", GradientSweep, "auto"],
  ["Outline fill", OutlineFill, "hover"],
  ["Glitch", Glitch, "auto"],
  ["Neon flicker", NeonFlicker, "auto"],
  ["Spotlight reveal", SpotlightReveal, "hover"],
  ["Kerning breathe", KerningBreathe, "auto"],
  ["Scatter words", ScatterWords, "click"],
  ["Circle text", CircleText, "auto"],
  ["Wavy path", WavyPath, "auto"],
  ["Stack slam", StackSlam, "click"],
  ["Ring letters", RingLetters, "auto"],
  ["Word swap", WordSwap, "auto"],
  ["Underline draw", UnderlineDraw, "hover"],
  ["Flip words", FlipWords, "auto"],
  ["Bounce letters", BounceLetters, "hover"],
  ["Stretch word", StretchWord, "drag"],
  ["Fisheye text", FisheyeText, "hover"],
  ["Slant dial", SlantDial, "drag"],
  ["Anagram shuffle", AnagramShuffle, "click"],
  ["Pop in", PopIn, "type"],
  ["Echo trail", EchoTrail, "hover"],
  ["Mirror ripple", MirrorRipple, "auto"],
  ["Stroke write", StrokeWrite, "auto"],
  ["Cipher cycle", CipherCycle, "auto"],
  ["Depth layers", DepthLayers, "hover"],
  ["Liquid wobble", LiquidWobble, "auto"],
  ["Letter grid", LetterGrid, "auto"],
  ["Letter burst", LetterBurst, "click"],
  ["Letter drop", LetterDrop, "click"],
  ["Tracking in", TrackingIn, "auto"],
  ["Zoom through", ZoomThrough, "hover"],
  ["Slice slide", SliceSlide, "hover"],
  ["Karaoke words", KaraokeWords, "auto"],
];

export default { Visual, items };
