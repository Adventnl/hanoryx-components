/* ============================================================
   34 · WIPES — curtains, clips and reveals.
   A wipe is a rule for how panel B replaces panel A, so nearly every specimen
   is the same two panels and a different rule. Press one to run it; until
   someone does, each runs itself now and then while it is on screen (never under
   reduced motion). The still side is one wipe, scrubbed by the scroll: a clip
   edge sweeps across a pair of panels from first to last.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { LeftToRight } from "./left-to-right/LeftToRight";
import { RightToLeft } from "./right-to-left/RightToLeft";
import { TopDown } from "./top-down/TopDown";
import { BottomUp } from "./bottom-up/BottomUp";
import { DiagonalEdge } from "./diagonal-edge/DiagonalEdge";
import { IrisOpen } from "./iris-open/IrisOpen";
import { CornerIris } from "./corner-iris/CornerIris";
import { IrisClose } from "./iris-close/IrisClose";
import { Diamond } from "./diamond/Diamond";
import { StarBurst } from "./star-burst/StarBurst";
import { RowBlinds } from "./row-blinds/RowBlinds";
import { ColumnBlinds } from "./column-blinds/ColumnBlinds";
import { PixelChecker } from "./pixel-checker/PixelChecker";
import { TheatreCurtain } from "./theatre-curtain/TheatreCurtain";
import { ShutterDoors } from "./shutter-doors/ShutterDoors";
import { BarnDoors } from "./barn-doors/BarnDoors";
import { SlatTurn } from "./slat-turn/SlatTurn";
import { ClockSweep } from "./clock-sweep/ClockSweep";
import { RadialWipe } from "./radial-wipe/RadialWipe";
import { FanWipe } from "./fan-wipe/FanWipe";
import { ZigzagEdge } from "./zigzag-edge/ZigzagEdge";
import { WaveEdge } from "./wave-edge/WaveEdge";
import { InkSpread } from "./ink-spread/InkSpread";
import { Push } from "./push/Push";
import { Cover } from "./cover/Cover";
import { Uncover } from "./uncover/Uncover";
import { ZoomCut } from "./zoom-cut/ZoomCut";
import { CubeTurn } from "./cube-turn/CubeTurn";
import { TurnOver } from "./turn-over/TurnOver";
import { HingeFold } from "./hinge-fold/HingeFold";
import { PagePeel } from "./page-peel/PagePeel";
import { Crossfade } from "./crossfade/Crossfade";
import { BlurDissolve } from "./blur-dissolve/BlurDissolve";
import { GlitchCut } from "./glitch-cut/GlitchCut";
import { ScanLine } from "./scan-line/ScanLine";
import { SteppedPixels } from "./stepped-pixels/SteppedPixels";
import { ColumnStagger } from "./column-stagger/ColumnStagger";
import { RowStagger } from "./row-stagger/RowStagger";
import { DragToWipe } from "./drag-to-wipe/DragToWipe";
import { ScrubbedWipe } from "./scrubbed-wipe/ScrubbedWipe";
import { TextMask } from "./text-mask/TextMask";
import { ClickReveal } from "./click-reveal/ClickReveal";

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
