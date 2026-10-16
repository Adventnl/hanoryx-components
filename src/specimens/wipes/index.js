/* ============================================================
   34 · WIPES — curtains, clips and reveals.
   A wipe is a rule for how panel B replaces panel A, so nearly every specimen
   is the same two panels and a different rule. Press one to run it; until
   someone does, each runs itself now and then while it is on screen (never under
   reduced motion). The still side is one wipe, scrubbed by the scroll: a clip
   edge sweeps across a pair of panels from first to last.
   ============================================================ */

import { Visual } from './Visual';
import { LeftToRight } from './LeftToRight';
import { RightToLeft } from './RightToLeft';
import { TopDown } from './TopDown';
import { BottomUp } from './BottomUp';
import { DiagonalEdge } from './DiagonalEdge';
import { IrisOpen } from './IrisOpen';
import { CornerIris } from './CornerIris';
import { IrisClose } from './IrisClose';
import { Diamond } from './Diamond';
import { StarBurst } from './StarBurst';
import { RowBlinds } from './RowBlinds';
import { ColumnBlinds } from './ColumnBlinds';
import { PixelChecker } from './PixelChecker';
import { TheatreCurtain } from './TheatreCurtain';
import { ShutterDoors } from './ShutterDoors';
import { BarnDoors } from './BarnDoors';
import { SlatTurn } from './SlatTurn';
import { ClockSweep } from './ClockSweep';
import { RadialWipe } from './RadialWipe';
import { FanWipe } from './FanWipe';
import { ZigzagEdge } from './ZigzagEdge';
import { WaveEdge } from './WaveEdge';
import { InkSpread } from './InkSpread';
import { Push } from './Push';
import { Cover } from './Cover';
import { Uncover } from './Uncover';
import { ZoomCut } from './ZoomCut';
import { CubeTurn } from './CubeTurn';
import { TurnOver } from './TurnOver';
import { HingeFold } from './HingeFold';
import { PagePeel } from './PagePeel';
import { Crossfade } from './Crossfade';
import { BlurDissolve } from './BlurDissolve';
import { GlitchCut } from './GlitchCut';
import { ScanLine } from './ScanLine';
import { SteppedPixels } from './SteppedPixels';
import { ColumnStagger } from './ColumnStagger';
import { RowStagger } from './RowStagger';
import { DragToWipe } from './DragToWipe';
import { ScrubbedWipe } from './ScrubbedWipe';
import { TextMask } from './TextMask';
import { ClickReveal } from './ClickReveal';

export { Visual };
export { LeftToRight, RightToLeft, TopDown, BottomUp, DiagonalEdge, IrisOpen, CornerIris, IrisClose, Diamond, StarBurst, RowBlinds, ColumnBlinds, PixelChecker, TheatreCurtain, ShutterDoors, BarnDoors, SlatTurn, ClockSweep, RadialWipe, FanWipe, ZigzagEdge, WaveEdge, InkSpread, Push, Cover, Uncover, ZoomCut, CubeTurn, TurnOver, HingeFold, PagePeel, Crossfade, BlurDissolve, GlitchCut, ScanLine, SteppedPixels, ColumnStagger, RowStagger, DragToWipe, ScrubbedWipe, TextMask, ClickReveal };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Left to right", LeftToRight, "click"],
  ["Right to left", RightToLeft, "click"],
  ["Top down", TopDown, "click"],
  ["Bottom up", BottomUp, "click"],
  ["Diagonal edge", DiagonalEdge, "click"],
  ["Iris open", IrisOpen, "click"],
  ["Corner iris", CornerIris, "click"],
  ["Iris close", IrisClose, "click"],
  ["Diamond", Diamond, "click"],
  ["Star burst", StarBurst, "click"],
  ["Row blinds", RowBlinds, "click"],
  ["Column blinds", ColumnBlinds, "click"],
  ["Pixel checker", PixelChecker, "click"],
  ["Theatre curtain", TheatreCurtain, "click"],
  ["Shutter doors", ShutterDoors, "click"],
  ["Barn doors", BarnDoors, "click"],
  ["Slat turn", SlatTurn, "click"],
  ["Clock sweep", ClockSweep, "click"],
  ["Radial wipe", RadialWipe, "click"],
  ["Fan wipe", FanWipe, "click"],
  ["Zigzag edge", ZigzagEdge, "click"],
  ["Wave edge", WaveEdge, "click"],
  ["Ink spread", InkSpread, "click"],
  ["Push", Push, "click"],
  ["Cover", Cover, "click"],
  ["Uncover", Uncover, "click"],
  ["Zoom cut", ZoomCut, "click"],
  ["Cube turn", CubeTurn, "click"],
  ["Turn over", TurnOver, "click"],
  ["Hinge fold", HingeFold, "click"],
  ["Page peel", PagePeel, "click"],
  ["Crossfade", Crossfade, "click"],
  ["Blur dissolve", BlurDissolve, "click"],
  ["Glitch cut", GlitchCut, "click"],
  ["Scan line", ScanLine, "click"],
  ["Stepped pixels", SteppedPixels, "click"],
  ["Column stagger", ColumnStagger, "click"],
  ["Row stagger", RowStagger, "click"],
  ["Drag to wipe", DragToWipe, "drag"],
  ["Scrubbed wipe", ScrubbedWipe, "drag"],
  ["Text mask", TextMask, "click"],
  ["Click reveal", ClickReveal, "click"],
];

export default { Visual, items };
