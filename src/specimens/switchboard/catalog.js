/* ============================================================
   01 · SWITCHBOARD — forty ways to flip a state.
   The still side is the board itself: forty lamps, one per specimen, that
   light as the page passes them while a scan line sweeps the grid.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { Rocker } from "./rocker/Rocker";
import { Pill } from "./pill/Pill";
import { GuardCover } from "./guard-cover/GuardCover";
import { SlideLock } from "./slide-lock/SlideLock";
import { TwoKey } from "./two-key/TwoKey";
import { PullChain } from "./pull-chain/PullChain";
import { KnifeSwitch } from "./knife-switch/KnifeSwitch";
import { DIPBank } from "./dipbank/DIPBank";
import { PushLatch } from "./push-latch/PushLatch";
import { Breaker } from "./breaker/Breaker";
import { Tumbler } from "./tumbler/Tumbler";
import { Lever } from "./lever/Lever";
import { Jumper } from "./jumper/Jumper";
import { Thumbwheel } from "./thumbwheel/Thumbwheel";
import { Rotary3Way } from "./rotary3-way/Rotary3Way";
import { KeyLock } from "./key-lock/KeyLock";
import { DoorBolt } from "./door-bolt/DoorBolt";
import { MercuryTilt } from "./mercury-tilt/MercuryTilt";
import { LampCheck } from "./lamp-check/LampCheck";
import { RadioBank } from "./radio-bank/RadioBank";
import { Momentary } from "./momentary/Momentary";
import { Seesaw } from "./seesaw/Seesaw";
import { ReedRelay } from "./reed-relay/ReedRelay";
import { RopePull } from "./rope-pull/RopePull";
import { ArmingSwitch } from "./arming-switch/ArmingSwitch";
import { FootPedal } from "./foot-pedal/FootPedal";
import { FlipBit } from "./flip-bit/FlipBit";
import { CamLock } from "./cam-lock/CamLock";
import { Hasp } from "./hasp/Hasp";
import { MagneticSnap } from "./magnetic-snap/MagneticSnap";
import { SegmentMode } from "./segment-mode/SegmentMode";
import { PulseSwitch } from "./pulse-switch/PulseSwitch";
import { DimmerStep } from "./dimmer-step/DimmerStep";
import { Fuse } from "./fuse/Fuse";
import { PlugAndSocket } from "./plug-and-socket/PlugAndSocket";
import { DeadMans } from "./dead-mans/DeadMans";
import { Crossbar } from "./crossbar/Crossbar";
import { PatchCable } from "./patch-cable/PatchCable";
import { ValveWheel } from "./valve-wheel/ValveWheel";
import { MasterChannel } from "./master-channel/MasterChannel";

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
