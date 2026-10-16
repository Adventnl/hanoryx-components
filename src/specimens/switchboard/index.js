/* ============================================================
   01 · SWITCHBOARD — forty ways to flip a state.
   The still side is the board itself: forty lamps, one per specimen, that
   light as the page passes them while a scan line sweeps the grid.
   ============================================================ */

import { Visual } from './Visual';
import { Rocker } from './Rocker';
import { Pill } from './Pill';
import { GuardCover } from './GuardCover';
import { SlideLock } from './SlideLock';
import { TwoKey } from './TwoKey';
import { PullChain } from './PullChain';
import { KnifeSwitch } from './KnifeSwitch';
import { DIPBank } from './DIPBank';
import { PushLatch } from './PushLatch';
import { Breaker } from './Breaker';
import { Tumbler } from './Tumbler';
import { Lever } from './Lever';
import { Jumper } from './Jumper';
import { Thumbwheel } from './Thumbwheel';
import { Rotary3Way } from './Rotary3Way';
import { KeyLock } from './KeyLock';
import { DoorBolt } from './DoorBolt';
import { MercuryTilt } from './MercuryTilt';
import { LampCheck } from './LampCheck';
import { RadioBank } from './RadioBank';
import { Momentary } from './Momentary';
import { Seesaw } from './Seesaw';
import { ReedRelay } from './ReedRelay';
import { RopePull } from './RopePull';
import { ArmingSwitch } from './ArmingSwitch';
import { FootPedal } from './FootPedal';
import { FlipBit } from './FlipBit';
import { CamLock } from './CamLock';
import { Hasp } from './Hasp';
import { MagneticSnap } from './MagneticSnap';
import { SegmentMode } from './SegmentMode';
import { PulseSwitch } from './PulseSwitch';
import { DimmerStep } from './DimmerStep';
import { Fuse } from './Fuse';
import { PlugAndSocket } from './PlugAndSocket';
import { DeadMans } from './DeadMans';
import { Crossbar } from './Crossbar';
import { PatchCable } from './PatchCable';
import { ValveWheel } from './ValveWheel';
import { MasterChannel } from './MasterChannel';

export { Visual };
export { Rocker, Pill, GuardCover, SlideLock, TwoKey, PullChain, KnifeSwitch, DIPBank, PushLatch, Breaker, Tumbler, Lever, Jumper, Thumbwheel, Rotary3Way, KeyLock, DoorBolt, MercuryTilt, LampCheck, RadioBank, Momentary, Seesaw, ReedRelay, RopePull, ArmingSwitch, FootPedal, FlipBit, CamLock, Hasp, MagneticSnap, SegmentMode, PulseSwitch, DimmerStep, Fuse, PlugAndSocket, DeadMans, Crossbar, PatchCable, ValveWheel, MasterChannel };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Rocker", Rocker, "click"],
  ["Pill", Pill, "click"],
  ["Guard cover", GuardCover, "click"],
  ["Slide lock", SlideLock, "drag"],
  ["Two-key", TwoKey, "click"],
  ["Pull chain", PullChain, "click"],
  ["Knife switch", KnifeSwitch, "click"],
  ["DIP bank", DIPBank, "click"],
  ["Push latch", PushLatch, "click"],
  ["Breaker", Breaker, "click"],
  ["Tumbler", Tumbler, "click"],
  ["Lever", Lever, "click"],
  ["Jumper", Jumper, "click"],
  ["Thumbwheel", Thumbwheel, "click"],
  ["Rotary 3-way", Rotary3Way, "click"],
  ["Key lock", KeyLock, "click"],
  ["Door bolt", DoorBolt, "click"],
  ["Mercury tilt", MercuryTilt, "click"],
  ["Lamp check", LampCheck, "click"],
  ["Radio bank", RadioBank, "click"],
  ["Momentary", Momentary, "hold"],
  ["Seesaw", Seesaw, "click"],
  ["Reed relay", ReedRelay, "drag"],
  ["Rope pull", RopePull, "drag"],
  ["Arming switch", ArmingSwitch, "click"],
  ["Foot pedal", FootPedal, "click"],
  ["Flip bit", FlipBit, "click"],
  ["Cam lock", CamLock, "click"],
  ["Hasp", Hasp, "click"],
  ["Magnetic snap", MagneticSnap, "click"],
  ["Segment mode", SegmentMode, "click"],
  ["Pulse switch", PulseSwitch, "click"],
  ["Dimmer step", DimmerStep, "click"],
  ["Fuse", Fuse, "click"],
  ["Plug and socket", PlugAndSocket, "click"],
  ["Dead man's", DeadMans, "hold"],
  ["Crossbar", Crossbar, "click"],
  ["Patch cable", PatchCable, "click"],
  ["Valve wheel", ValveWheel, "click"],
  ["Master channel", MasterChannel, "click"],
];

export default { Visual, items };
