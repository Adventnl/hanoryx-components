/* ============================================================
   26 · LOADERS — forty ways to wait.
   Nearly everything here runs by itself, and only while it is on screen (the
   specimen frame pauses every animation that is off-screen). The still side is
   a core with five rings that the scroll turns at five speeds, so the page
   itself is the thing being waited on.
   ============================================================ */

import { Visual } from './Visual';
import { RingSpinner } from './RingSpinner';
import { TwinRing } from './TwinRing';
import { BouncingDots } from './BouncingDots';
import { DotWave } from './DotWave';
import { EqualiserBars } from './EqualiserBars';
import { RipplePulse } from './RipplePulse';
import { OrbitingDots } from './OrbitingDots';
import { ClockHands } from './ClockHands';
import { SandTimer } from './SandTimer';
import { ChasingArc } from './ChasingArc';
import { SquareSwap } from './SquareSwap';
import { SpinningCube } from './SpinningCube';
import { FlipLoader } from './FlipLoader';
import { TypingDots } from './TypingDots';
import { HeartbeatLine } from './HeartbeatLine';
import { HelixDots } from './HelixDots';
import { NewtonCradle } from './NewtonCradle';
import { MeshingGears } from './MeshingGears';
import { ChargingCell } from './ChargingCell';
import { LoadingWord } from './LoadingWord';
import { LetterWave } from './LetterWave';
import { DotChase } from './DotChase';
import { RollingBar } from './RollingBar';
import { BouncingBall } from './BouncingBall';
import { Windmill } from './Windmill';
import { LittlePlanet } from './LittlePlanet';
import { NineGrid } from './NineGrid';
import { HexSpin } from './HexSpin';
import { Lemniscate } from './Lemniscate';
import { DotSpiral } from './DotSpiral';
import { InkDrops } from './InkDrops';
import { RisingLiquid } from './RisingLiquid';
import { BurningFuse } from './BurningFuse';
import { ElasticBar } from './ElasticBar';
import { SegmentRingSpin } from './SegmentRingSpin';
import { PlusMorph } from './PlusMorph';
import { Pendulum } from './Pendulum';
import { TapeReels } from './TapeReels';
import { DotRace } from './DotRace';
import { CountingUp } from './CountingUp';
import { ButtonLoader } from './ButtonLoader';
import { PullToRefresh } from './PullToRefresh';

export { Visual };
export { RingSpinner, TwinRing, BouncingDots, DotWave, EqualiserBars, RipplePulse, OrbitingDots, ClockHands, SandTimer, ChasingArc, SquareSwap, SpinningCube, FlipLoader, TypingDots, HeartbeatLine, HelixDots, NewtonCradle, MeshingGears, ChargingCell, LoadingWord, LetterWave, DotChase, RollingBar, BouncingBall, Windmill, LittlePlanet, NineGrid, HexSpin, Lemniscate, DotSpiral, InkDrops, RisingLiquid, BurningFuse, ElasticBar, SegmentRingSpin, PlusMorph, Pendulum, TapeReels, DotRace, CountingUp, ButtonLoader, PullToRefresh };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Ring spinner", RingSpinner, "auto"],
  ["Twin ring", TwinRing, "auto"],
  ["Bouncing dots", BouncingDots, "auto"],
  ["Dot wave", DotWave, "auto"],
  ["Equaliser bars", EqualiserBars, "auto"],
  ["Ripple pulse", RipplePulse, "auto"],
  ["Orbiting dots", OrbitingDots, "auto"],
  ["Clock hands", ClockHands, "auto"],
  ["Sand timer", SandTimer, "auto"],
  ["Chasing arc", ChasingArc, "auto"],
  ["Square swap", SquareSwap, "auto"],
  ["Spinning cube", SpinningCube, "auto"],
  ["Flip loader", FlipLoader, "auto"],
  ["Typing dots", TypingDots, "auto"],
  ["Heartbeat line", HeartbeatLine, "auto"],
  ["Helix dots", HelixDots, "auto"],
  ["Newton cradle", NewtonCradle, "auto"],
  ["Meshing gears", MeshingGears, "auto"],
  ["Charging cell", ChargingCell, "auto"],
  ["Loading word", LoadingWord, "auto"],
  ["Letter wave", LetterWave, "auto"],
  ["Dot chase", DotChase, "auto"],
  ["Rolling bar", RollingBar, "auto"],
  ["Bouncing ball", BouncingBall, "auto"],
  ["Windmill", Windmill, "auto"],
  ["Little planet", LittlePlanet, "auto"],
  ["Nine grid", NineGrid, "auto"],
  ["Hex spin", HexSpin, "auto"],
  ["Lemniscate", Lemniscate, "auto"],
  ["Dot spiral", DotSpiral, "auto"],
  ["Ink drops", InkDrops, "auto"],
  ["Rising liquid", RisingLiquid, "auto"],
  ["Burning fuse", BurningFuse, "auto"],
  ["Elastic bar", ElasticBar, "auto"],
  ["Segment ring spin", SegmentRingSpin, "auto"],
  ["Plus morph", PlusMorph, "auto"],
  ["Pendulum", Pendulum, "auto"],
  ["Tape reels", TapeReels, "auto"],
  ["Dot race", DotRace, "auto"],
  ["Counting up", CountingUp, "auto"],
  ["Button loader", ButtonLoader, "click"],
  ["Pull to refresh", PullToRefresh, "drag"],
];

export default { Visual, items };
