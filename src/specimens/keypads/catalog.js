/* ============================================================
   04 · KEYPADS — keys, triggers and buttons with a feel.
   The still side is a backlit key matrix; a wave of light and a press travels
   across it as the page scrolls.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { MechanicalKey } from "./mechanical-key/MechanicalKey";
import { ChicletKey } from "./chiclet-key/ChicletKey";
import { PianoPair } from "./piano-pair/PianoPair";
import { ArcadeButton } from "./arcade-button/ArcadeButton";
import { HoldRing } from "./hold-ring/HoldRing";
import { Trigger } from "./trigger/Trigger";
import { CalculatorKeys } from "./calculator-keys/CalculatorKeys";
import { NumberPad } from "./number-pad/NumberPad";
import { TypewriterKey } from "./typewriter-key/TypewriterKey";
import { SpaceBar } from "./space-bar/SpaceBar";
import { ChordDetect } from "./chord-detect/ChordDetect";
import { RubberDome } from "./rubber-dome/RubberDome";
import { TouchPad } from "./touch-pad/TouchPad";
import { SoftKeys } from "./soft-keys/SoftKeys";
import { LiquidFill } from "./liquid-fill/LiquidFill";
import { OffsetBlock } from "./offset-block/OffsetBlock";
import { StrokeDraw } from "./stroke-draw/StrokeDraw";
import { MagnetButton } from "./magnet-button/MagnetButton";
import { Shimmer } from "./shimmer/Shimmer";
import { OrbitBorder } from "./orbit-border/OrbitBorder";
import { RippleKey } from "./ripple-key/RippleKey";
import { PulseCTA } from "./pulse-cta/PulseCTA";
import { AsyncButton } from "./async-button/AsyncButton";
import { DoubleConfirm } from "./double-confirm/DoubleConfirm";
import { SplitButton } from "./split-button/SplitButton";
import { StyleGroup } from "./style-group/StyleGroup";
import { PlayPause } from "./play-pause/PlayPause";
import { LabelSwap } from "./label-swap/LabelSwap";
import { ArrowThrough } from "./arrow-through/ArrowThrough";
import { UploadRing } from "./upload-ring/UploadRing";
import { HeartBurst } from "./heart-burst/HeartBurst";
import { CountUp } from "./count-up/CountUp";
import { UndoRedo } from "./undo-redo/UndoRedo";
import { Reactions } from "./reactions/Reactions";
import { RadialFAB } from "./radial-fab/RadialFAB";
import { Pager } from "./pager/Pager";
import { HoldRepeat } from "./hold-repeat/HoldRepeat";
import { ShiftLegends } from "./shift-legends/ShiftLegends";
import { DPad } from "./dpad/DPad";
import { PINPad } from "./pinpad/PINPad";

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
