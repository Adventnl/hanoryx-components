/* ============================================================
   42 · PATTERNS — grids, dots and hatching as surfaces.
   The still side is a sheet whose surface changes as the scroll advances: a
   field of dots grows, then gives way to hatching from the left. The forty-two
   specimens are swatches. Thirty of them are drawn with nothing but gradients
   and inline SVG tiles (so they cost no images); the rest move, follow the
   pointer or take a slider, and every control can be reached from the keyboard.
   ============================================================ */

import { Visual } from './Visual';
import { DotGrid } from './DotGrid';
import { DotStagger } from './DotStagger';
import { GraphPaper } from './GraphPaper';
import { Blueprint } from './Blueprint';
import { IsoLines } from './IsoLines';
import { Hatching } from './Hatching';
import { CrossHatch } from './CrossHatch';
import { WideStripes } from './WideStripes';
import { Zigzag } from './Zigzag';
import { Checker } from './Checker';
import { Honeycomb } from './Honeycomb';
import { Bricks } from './Bricks';
import { FishScales } from './FishScales';
import { BasketWeave } from './BasketWeave';
import { PlusField } from './PlusField';
import { WaveRows } from './WaveRows';
import { RippleFans } from './RippleFans';
import { RingField } from './RingField';
import { HalftoneRamp } from './HalftoneRamp';
import { ChainLink } from './ChainLink';
import { ScanLines } from './ScanLines';
import { Pinstripe } from './Pinstripe';
import { Tartan } from './Tartan';
import { PolkaMix } from './PolkaMix';
import { LinedSheet } from './LinedSheet';
import { Harlequin } from './Harlequin';
import { Registration } from './Registration';
import { CornerTicks } from './CornerTicks';
import { Stitching } from './Stitching';
import { Pegboard } from './Pegboard';
import { Triangles } from './Triangles';
import { DotDensity } from './DotDensity';
import { HatchAngle } from './HatchAngle';
import { GridSize } from './GridSize';
import { DotSpotlight } from './DotSpotlight';
import { PatternSwap } from './PatternSwap';
import { PatternBlend } from './PatternBlend';
import { PixelMosaic } from './PixelMosaic';
import { GridSnap } from './GridSnap';
import { MovingStripes } from './MovingStripes';
import { OpArtRings } from './OpArtRings';
import { CheckerFlip } from './CheckerFlip';
import { GrainLevel } from './GrainLevel';

export { Visual };
export { DotGrid, DotStagger, GraphPaper, Blueprint, IsoLines, Hatching, CrossHatch, WideStripes, Zigzag, Checker, Honeycomb, Bricks, FishScales, BasketWeave, PlusField, WaveRows, RippleFans, RingField, HalftoneRamp, ChainLink, ScanLines, Pinstripe, Tartan, PolkaMix, LinedSheet, Harlequin, Registration, CornerTicks, Stitching, Pegboard, Triangles, DotDensity, HatchAngle, GridSize, DotSpotlight, PatternSwap, PatternBlend, PixelMosaic, GridSnap, MovingStripes, OpArtRings, CheckerFlip, GrainLevel };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Dot grid", DotGrid, "still"],
  ["Dot stagger", DotStagger, "still"],
  ["Graph paper", GraphPaper, "still"],
  ["Blueprint", Blueprint, "still"],
  ["Iso lines", IsoLines, "still"],
  ["Hatching", Hatching, "still"],
  ["Cross hatch", CrossHatch, "still"],
  ["Wide stripes", WideStripes, "still"],
  ["Zigzag", Zigzag, "still"],
  ["Checker", Checker, "still"],
  ["Honeycomb", Honeycomb, "still"],
  ["Bricks", Bricks, "still"],
  ["Fish scales", FishScales, "still"],
  ["Basket weave", BasketWeave, "still"],
  ["Plus field", PlusField, "still"],
  ["Wave rows", WaveRows, "still"],
  ["Ripple fans", RippleFans, "still"],
  ["Ring field", RingField, "still"],
  ["Halftone ramp", HalftoneRamp, "still"],
  ["Chain link", ChainLink, "still"],
  ["Scan lines", ScanLines, "still"],
  ["Pinstripe", Pinstripe, "still"],
  ["Tartan", Tartan, "still"],
  ["Polka mix", PolkaMix, "still"],
  ["Lined sheet", LinedSheet, "still"],
  ["Harlequin", Harlequin, "still"],
  ["Registration", Registration, "still"],
  ["Corner ticks", CornerTicks, "still"],
  ["Stitching", Stitching, "still"],
  ["Pegboard", Pegboard, "still"],
  ["Triangles", Triangles, "still"],
  ["Dot density", DotDensity, "drag"],
  ["Hatch angle", HatchAngle, "drag"],
  ["Grid size", GridSize, "drag"],
  ["Dot spotlight", DotSpotlight, "hover"],
  ["Pattern swap", PatternSwap, "click"],
  ["Pattern blend", PatternBlend, "drag"],
  ["Pixel mosaic", PixelMosaic, "click"],
  ["Grid snap", GridSnap, "hover"],
  ["Moving stripes", MovingStripes, "auto"],
  ["Op-art rings", OpArtRings, "auto"],
  ["Checker flip", CheckerFlip, "click"],
  ["Grain level", GrainLevel, "drag"],
];

export default { Visual, items };
