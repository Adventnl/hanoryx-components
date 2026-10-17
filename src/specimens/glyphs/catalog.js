/* ============================================================
   14 · GLYPHS — outlines, strokes and letterforms.
   The still side is a type specimen sheet: one huge glyph at a time, drawn
   against the five lines every letter lives between (ascender, cap height,
   x-height, baseline, descender). The scroll outlines the glyph, then a scan
   line fills it from the top; the next glyph takes over. The metrics are the
   real ones for the site's serif. Everything is CSS reading the page's --pin.
   The ring carries forty-two things you can do to a letter.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { StrokeWeight } from "./stroke-weight/StrokeWeight";
import { OutlinePass } from "./outline-pass/OutlinePass";
import { PaintOrder } from "./paint-order/PaintOrder";
import { DoubleOutline } from "./double-outline/DoubleOutline";
import { GradientStroke } from "./gradient-stroke/GradientStroke";
import { StencilCut } from "./stencil-cut/StencilCut";
import { Knockout } from "./knockout/Knockout";
import { LongShadow } from "./long-shadow/LongShadow";
import { Extrude } from "./extrude/Extrude";
import { PatternFill } from "./pattern-fill/PatternFill";
import { AuroraFill } from "./aurora-fill/AuroraFill";
import { Halftone } from "./halftone/Halftone";
import { Anatomy } from "./anatomy/Anatomy";
import { MetricsBox } from "./metrics-box/MetricsBox";
import { Overshoot } from "./overshoot/Overshoot";
import { GeometricSet } from "./geometric-set/GeometricSet";
import { GlyphGrid } from "./glyph-grid/GlyphGrid";
import { AlphabetStrip } from "./alphabet-strip/AlphabetStrip";
import { Monoline } from "./monoline/Monoline";
import { StressAxis } from "./stress-axis/StressAxis";
import { SerifStyles } from "./serif-styles/SerifStyles";
import { KerningPair } from "./kerning-pair/KerningPair";
import { Tracking } from "./tracking/Tracking";
import { Leading } from "./leading/Leading";
import { TypeScale } from "./type-scale/TypeScale";
import { BaselineGrid } from "./baseline-grid/BaselineGrid";
import { HangingPunctuation } from "./hanging-punctuation/HangingPunctuation";
import { SkipInk } from "./skip-ink/SkipInk";
import { Numerals } from "./numerals/Numerals";
import { Ligatures } from "./ligatures/Ligatures";
import { CapsToggle } from "./caps-toggle/CapsToggle";
import { VerticalText } from "./vertical-text/VerticalText";
import { LetterCompass } from "./letter-compass/LetterCompass";
import { WeightLadder } from "./weight-ladder/WeightLadder";
import { FamilySwap } from "./family-swap/FamilySwap";
import { Ampersand } from "./ampersand/Ampersand";
import { DropCap } from "./drop-cap/DropCap";
import { ItalicAngle } from "./italic-angle/ItalicAngle";
import { TypeTester } from "./type-tester/TypeTester";
import { BowlMorph } from "./bowl-morph/BowlMorph";
import { WordSpacing } from "./word-spacing/WordSpacing";
import { CodePoint } from "./code-point/CodePoint";

export { Visual };
export { StrokeWeight, OutlinePass, PaintOrder, DoubleOutline, GradientStroke, StencilCut, Knockout, LongShadow, Extrude, PatternFill, AuroraFill, Halftone, Anatomy, MetricsBox, Overshoot, GeometricSet, GlyphGrid, AlphabetStrip, Monoline, StressAxis, SerifStyles, KerningPair, Tracking, Leading, TypeScale, BaselineGrid, HangingPunctuation, SkipInk, Numerals, Ligatures, CapsToggle, VerticalText, LetterCompass, WeightLadder, FamilySwap, Ampersand, DropCap, ItalicAngle, TypeTester, BowlMorph, WordSpacing, CodePoint };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Stroke weight", StrokeWeight, "drag"],
  ["Outline pass", OutlinePass, "auto"],
  ["Paint order", PaintOrder, "click"],
  ["Double outline", DoubleOutline, "auto"],
  ["Gradient stroke", GradientStroke, "auto"],
  ["Stencil cut", StencilCut, "auto"],
  ["Knockout", Knockout, "hover"],
  ["Long shadow", LongShadow, "hover"],
  ["Extrude", Extrude, "auto"],
  ["Pattern fill", PatternFill, "hover"],
  ["Aurora fill", AuroraFill, "auto"],
  ["Halftone", Halftone, "hover"],
  ["Anatomy", Anatomy, "click"],
  ["Metrics box", MetricsBox, "hover"],
  ["Overshoot", Overshoot, "click"],
  ["Geometric set", GeometricSet, "hover"],
  ["Glyph grid", GlyphGrid, "hover"],
  ["Alphabet strip", AlphabetStrip, "drag"],
  ["Monoline", Monoline, "drag"],
  ["Stress axis", StressAxis, "drag"],
  ["Serif styles", SerifStyles, "click"],
  ["Kerning pair", KerningPair, "drag"],
  ["Tracking", Tracking, "drag"],
  ["Leading", Leading, "drag"],
  ["Type scale", TypeScale, "drag"],
  ["Baseline grid", BaselineGrid, "click"],
  ["Hanging punctuation", HangingPunctuation, "click"],
  ["Skip ink", SkipInk, "click"],
  ["Numerals", Numerals, "click"],
  ["Ligatures", Ligatures, "click"],
  ["Caps toggle", CapsToggle, "click"],
  ["Vertical text", VerticalText, "click"],
  ["Letter compass", LetterCompass, "hover"],
  ["Weight ladder", WeightLadder, "hover"],
  ["Family swap", FamilySwap, "click"],
  ["Ampersand", Ampersand, "auto"],
  ["Drop cap", DropCap, "click"],
  ["Italic angle", ItalicAngle, "drag"],
  ["Type tester", TypeTester, "type"],
  ["Bowl morph", BowlMorph, "drag"],
  ["Word spacing", WordSpacing, "drag"],
  ["Code point", CodePoint, "auto"],
];

export default { Visual, items };
