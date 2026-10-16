/* ============================================================
   14 · GLYPHS — outlines, strokes and letterforms.
   The still side is a type specimen sheet: one huge glyph at a time, drawn
   against the five lines every letter lives between (ascender, cap height,
   x-height, baseline, descender). The scroll outlines the glyph, then a scan
   line fills it from the top; the next glyph takes over. The metrics are the
   real ones for the site's serif. Everything is CSS reading the page's --pin.
   The ring carries forty-two things you can do to a letter.
   ============================================================ */

import { Visual } from './Visual';
import { StrokeWeight } from './StrokeWeight';
import { OutlinePass } from './OutlinePass';
import { PaintOrder } from './PaintOrder';
import { DoubleOutline } from './DoubleOutline';
import { GradientStroke } from './GradientStroke';
import { StencilCut } from './StencilCut';
import { Knockout } from './Knockout';
import { LongShadow } from './LongShadow';
import { Extrude } from './Extrude';
import { PatternFill } from './PatternFill';
import { AuroraFill } from './AuroraFill';
import { Halftone } from './Halftone';
import { Anatomy } from './Anatomy';
import { MetricsBox } from './MetricsBox';
import { Overshoot } from './Overshoot';
import { GeometricSet } from './GeometricSet';
import { GlyphGrid } from './GlyphGrid';
import { AlphabetStrip } from './AlphabetStrip';
import { Monoline } from './Monoline';
import { StressAxis } from './StressAxis';
import { SerifStyles } from './SerifStyles';
import { KerningPair } from './KerningPair';
import { Tracking } from './Tracking';
import { Leading } from './Leading';
import { TypeScale } from './TypeScale';
import { BaselineGrid } from './BaselineGrid';
import { HangingPunctuation } from './HangingPunctuation';
import { SkipInk } from './SkipInk';
import { Numerals } from './Numerals';
import { Ligatures } from './Ligatures';
import { CapsToggle } from './CapsToggle';
import { VerticalText } from './VerticalText';
import { LetterCompass } from './LetterCompass';
import { WeightLadder } from './WeightLadder';
import { FamilySwap } from './FamilySwap';
import { Ampersand } from './Ampersand';
import { DropCap } from './DropCap';
import { ItalicAngle } from './ItalicAngle';
import { TypeTester } from './TypeTester';
import { BowlMorph } from './BowlMorph';
import { WordSpacing } from './WordSpacing';
import { CodePoint } from './CodePoint';

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
