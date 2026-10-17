/* ============================================================
   11 · KINETIC — words that scramble, split and settle.
   The still side is one enormous letter. As you scroll it steps through the
   alphabet, and between two letters each is cut in half across the middle: the
   halves slide apart in opposite directions as one fades out and the next slides
   together. The numbers that drive it are the page's --f, read by CSS.
   Everything below is a line of moving type; the ones that react to the pointer
   work from the keyboard too.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { ScrambleReveal } from "./scramble-reveal/ScrambleReveal";
import { LetterSplit } from "./letter-split/LetterSplit";
import { WaveText } from "./wave-text/WaveText";
import { Typewriter } from "./typewriter/Typewriter";
import { RollHover } from "./roll-hover/RollHover";
import { BlurIn } from "./blur-in/BlurIn";
import { StaggerRise } from "./stagger-rise/StaggerRise";
import { StrokeSwell } from "./stroke-swell/StrokeSwell";
import { MagnetLetters } from "./magnet-letters/MagnetLetters";
import { GradientSweep } from "./gradient-sweep/GradientSweep";
import { OutlineFill } from "./outline-fill/OutlineFill";
import { Glitch } from "./glitch/Glitch";
import { NeonFlicker } from "./neon-flicker/NeonFlicker";
import { SpotlightReveal } from "./spotlight-reveal/SpotlightReveal";
import { KerningBreathe } from "./kerning-breathe/KerningBreathe";
import { ScatterWords } from "./scatter-words/ScatterWords";
import { CircleText } from "./circle-text/CircleText";
import { WavyPath } from "./wavy-path/WavyPath";
import { StackSlam } from "./stack-slam/StackSlam";
import { RingLetters } from "./ring-letters/RingLetters";
import { WordSwap } from "./word-swap/WordSwap";
import { UnderlineDraw } from "./underline-draw/UnderlineDraw";
import { FlipWords } from "./flip-words/FlipWords";
import { BounceLetters } from "./bounce-letters/BounceLetters";
import { StretchWord } from "./stretch-word/StretchWord";
import { FisheyeText } from "./fisheye-text/FisheyeText";
import { SlantDial } from "./slant-dial/SlantDial";
import { AnagramShuffle } from "./anagram-shuffle/AnagramShuffle";
import { PopIn } from "./pop-in/PopIn";
import { EchoTrail } from "./echo-trail/EchoTrail";
import { MirrorRipple } from "./mirror-ripple/MirrorRipple";
import { StrokeWrite } from "./stroke-write/StrokeWrite";
import { CipherCycle } from "./cipher-cycle/CipherCycle";
import { DepthLayers } from "./depth-layers/DepthLayers";
import { LiquidWobble } from "./liquid-wobble/LiquidWobble";
import { LetterGrid } from "./letter-grid/LetterGrid";
import { LetterBurst } from "./letter-burst/LetterBurst";
import { LetterDrop } from "./letter-drop/LetterDrop";
import { TrackingIn } from "./tracking-in/TrackingIn";
import { ZoomThrough } from "./zoom-through/ZoomThrough";
import { SliceSlide } from "./slice-slide/SliceSlide";
import { KaraokeWords } from "./karaoke-words/KaraokeWords";

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
