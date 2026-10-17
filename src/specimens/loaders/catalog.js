/* ============================================================
   26 · LOADERS — forty ways to wait.
   Nearly everything here runs by itself, and only while it is on screen (the
   specimen frame pauses every animation that is off-screen). The still side is
   a core with five rings that the scroll turns at five speeds, so the page
   itself is the thing being waited on.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { RingSpinner } from "./ring-spinner/RingSpinner";
import { TwinRing } from "./twin-ring/TwinRing";
import { BouncingDots } from "./bouncing-dots/BouncingDots";
import { DotWave } from "./dot-wave/DotWave";
import { EqualiserBars } from "./equaliser-bars/EqualiserBars";
import { RipplePulse } from "./ripple-pulse/RipplePulse";
import { OrbitingDots } from "./orbiting-dots/OrbitingDots";
import { ClockHands } from "./clock-hands/ClockHands";
import { SandTimer } from "./sand-timer/SandTimer";
import { ChasingArc } from "./chasing-arc/ChasingArc";
import { SquareSwap } from "./square-swap/SquareSwap";
import { SpinningCube } from "./spinning-cube/SpinningCube";
import { FlipLoader } from "./flip-loader/FlipLoader";
import { TypingDots } from "./typing-dots/TypingDots";
import { HeartbeatLine } from "./heartbeat-line/HeartbeatLine";
import { HelixDots } from "./helix-dots/HelixDots";
import { NewtonCradle } from "./newton-cradle/NewtonCradle";
import { MeshingGears } from "./meshing-gears/MeshingGears";
import { ChargingCell } from "./charging-cell/ChargingCell";
import { LoadingWord } from "./loading-word/LoadingWord";
import { LetterWave } from "./letter-wave/LetterWave";
import { DotChase } from "./dot-chase/DotChase";
import { RollingBar } from "./rolling-bar/RollingBar";
import { BouncingBall } from "./bouncing-ball/BouncingBall";
import { Windmill } from "./windmill/Windmill";
import { LittlePlanet } from "./little-planet/LittlePlanet";
import { NineGrid } from "./nine-grid/NineGrid";
import { HexSpin } from "./hex-spin/HexSpin";
import { Lemniscate } from "./lemniscate/Lemniscate";
import { DotSpiral } from "./dot-spiral/DotSpiral";
import { InkDrops } from "./ink-drops/InkDrops";
import { RisingLiquid } from "./rising-liquid/RisingLiquid";
import { BurningFuse } from "./burning-fuse/BurningFuse";
import { ElasticBar } from "./elastic-bar/ElasticBar";
import { SegmentRingSpin } from "./segment-ring-spin/SegmentRingSpin";
import { PlusMorph } from "./plus-morph/PlusMorph";
import { Pendulum } from "./pendulum/Pendulum";
import { TapeReels } from "./tape-reels/TapeReels";
import { DotRace } from "./dot-race/DotRace";
import { CountingUp } from "./counting-up/CountingUp";
import { ButtonLoader } from "./button-loader/ButtonLoader";
import { PullToRefresh } from "./pull-to-refresh/PullToRefresh";

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
