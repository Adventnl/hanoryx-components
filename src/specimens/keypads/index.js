/* ============================================================
   04 · KEYPADS — keys, triggers and buttons with a feel.
   The still side is a backlit key matrix; a wave of light and a press travels
   across it as the page scrolls.
   ============================================================ */

import { Visual } from './Visual';
import { MechanicalKey } from './MechanicalKey';
import { ChicletKey } from './ChicletKey';
import { PianoPair } from './PianoPair';
import { ArcadeButton } from './ArcadeButton';
import { HoldRing } from './HoldRing';
import { Trigger } from './Trigger';
import { CalculatorKeys } from './CalculatorKeys';
import { NumberPad } from './NumberPad';
import { TypewriterKey } from './TypewriterKey';
import { SpaceBar } from './SpaceBar';
import { ChordDetect } from './ChordDetect';
import { RubberDome } from './RubberDome';
import { TouchPad } from './TouchPad';
import { SoftKeys } from './SoftKeys';
import { LiquidFill } from './LiquidFill';
import { OffsetBlock } from './OffsetBlock';
import { StrokeDraw } from './StrokeDraw';
import { MagnetButton } from './MagnetButton';
import { Shimmer } from './Shimmer';
import { OrbitBorder } from './OrbitBorder';
import { RippleKey } from './RippleKey';
import { PulseCTA } from './PulseCTA';
import { AsyncButton } from './AsyncButton';
import { DoubleConfirm } from './DoubleConfirm';
import { SplitButton } from './SplitButton';
import { StyleGroup } from './StyleGroup';
import { PlayPause } from './PlayPause';
import { LabelSwap } from './LabelSwap';
import { ArrowThrough } from './ArrowThrough';
import { UploadRing } from './UploadRing';
import { HeartBurst } from './HeartBurst';
import { CountUp } from './CountUp';
import { UndoRedo } from './UndoRedo';
import { Reactions } from './Reactions';
import { RadialFAB } from './RadialFAB';
import { Pager } from './Pager';
import { HoldRepeat } from './HoldRepeat';
import { ShiftLegends } from './ShiftLegends';
import { DPad } from './DPad';
import { PINPad } from './PINPad';

export { Visual };
export { MechanicalKey, ChicletKey, PianoPair, ArcadeButton, HoldRing, Trigger, CalculatorKeys, NumberPad, TypewriterKey, SpaceBar, ChordDetect, RubberDome, TouchPad, SoftKeys, LiquidFill, OffsetBlock, StrokeDraw, MagnetButton, Shimmer, OrbitBorder, RippleKey, PulseCTA, AsyncButton, DoubleConfirm, SplitButton, StyleGroup, PlayPause, LabelSwap, ArrowThrough, UploadRing, HeartBurst, CountUp, UndoRedo, Reactions, RadialFAB, Pager, HoldRepeat, ShiftLegends, DPad, PINPad };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Mechanical key", MechanicalKey, "press"],
  ["Chiclet key", ChicletKey, "click"],
  ["Piano pair", PianoPair, "press"],
  ["Arcade button", ArcadeButton, "press"],
  ["Hold ring", HoldRing, "hold"],
  ["Trigger", Trigger, "press"],
  ["Calculator keys", CalculatorKeys, "click"],
  ["Number pad", NumberPad, "click"],
  ["Typewriter key", TypewriterKey, "press"],
  ["Space bar", SpaceBar, "press"],
  ["Chord detect", ChordDetect, "hold"],
  ["Rubber dome", RubberDome, "click"],
  ["Touch pad", TouchPad, "hover"],
  ["Soft keys", SoftKeys, "click"],
  ["Liquid fill", LiquidFill, "hover"],
  ["Offset block", OffsetBlock, "press"],
  ["Stroke draw", StrokeDraw, "hover"],
  ["Magnet button", MagnetButton, "hover"],
  ["Shimmer", Shimmer, "auto"],
  ["Orbit border", OrbitBorder, "auto"],
  ["Ripple key", RippleKey, "click"],
  ["Pulse CTA", PulseCTA, "auto"],
  ["Async button", AsyncButton, "click"],
  ["Double confirm", DoubleConfirm, "click"],
  ["Split button", SplitButton, "click"],
  ["Style group", StyleGroup, "click"],
  ["Play pause", PlayPause, "click"],
  ["Label swap", LabelSwap, "hover"],
  ["Arrow through", ArrowThrough, "hover"],
  ["Upload ring", UploadRing, "click"],
  ["Heart burst", HeartBurst, "click"],
  ["Count up", CountUp, "click"],
  ["Undo redo", UndoRedo, "click"],
  ["Reactions", Reactions, "click"],
  ["Radial FAB", RadialFAB, "click"],
  ["Pager", Pager, "click"],
  ["Hold repeat", HoldRepeat, "hold"],
  ["Shift legends", ShiftLegends, "click"],
  ["D-pad", DPad, "press"],
  ["PIN pad", PINPad, "click"],
];

export default { Visual, items };
