/* ============================================================
   42 · PATTERNS — grids, dots and hatching as surfaces.
   The still side is a sheet whose surface changes as the scroll advances: a
   field of dots grows, then gives way to hatching from the left. The forty-two
   specimens are swatches. Thirty of them are drawn with nothing but gradients
   and inline SVG tiles (so they cost no images); the rest move, follow the
   pointer or take a slider, and every control can be reached from the keyboard.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { DotGrid } from "./dot-grid/DotGrid";
import { DotStagger } from "./dot-stagger/DotStagger";
import { GraphPaper } from "./graph-paper/GraphPaper";
import { Blueprint } from "./blueprint/Blueprint";
import { IsoLines } from "./iso-lines/IsoLines";
import { Hatching } from "./hatching/Hatching";
import { CrossHatch } from "./cross-hatch/CrossHatch";
import { WideStripes } from "./wide-stripes/WideStripes";
import { Zigzag } from "./zigzag/Zigzag";
import { Checker } from "./checker/Checker";
import { Honeycomb } from "./honeycomb/Honeycomb";
import { Bricks } from "./bricks/Bricks";
import { FishScales } from "./fish-scales/FishScales";
import { BasketWeave } from "./basket-weave/BasketWeave";
import { PlusField } from "./plus-field/PlusField";
import { WaveRows } from "./wave-rows/WaveRows";
import { RippleFans } from "./ripple-fans/RippleFans";
import { RingField } from "./ring-field/RingField";
import { HalftoneRamp } from "./halftone-ramp/HalftoneRamp";
import { ChainLink } from "./chain-link/ChainLink";
import { ScanLines } from "./scan-lines/ScanLines";
import { Pinstripe } from "./pinstripe/Pinstripe";
import { Tartan } from "./tartan/Tartan";
import { PolkaMix } from "./polka-mix/PolkaMix";
import { LinedSheet } from "./lined-sheet/LinedSheet";
import { Harlequin } from "./harlequin/Harlequin";
import { Registration } from "./registration/Registration";
import { CornerTicks } from "./corner-ticks/CornerTicks";
import { Stitching } from "./stitching/Stitching";
import { Pegboard } from "./pegboard/Pegboard";
import { Triangles } from "./triangles/Triangles";
import { DotDensity } from "./dot-density/DotDensity";
import { HatchAngle } from "./hatch-angle/HatchAngle";
import { GridSize } from "./grid-size/GridSize";
import { DotSpotlight } from "./dot-spotlight/DotSpotlight";
import { PatternSwap } from "./pattern-swap/PatternSwap";
import { PatternBlend } from "./pattern-blend/PatternBlend";
import { PixelMosaic } from "./pixel-mosaic/PixelMosaic";
import { GridSnap } from "./grid-snap/GridSnap";
import { MovingStripes } from "./moving-stripes/MovingStripes";
import { OpArtRings } from "./op-art-rings/OpArtRings";
import { CheckerFlip } from "./checker-flip/CheckerFlip";
import { GrainLevel } from "./grain-level/GrainLevel";

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
