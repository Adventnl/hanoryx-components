/* ============================================================
   02 · DIALS — turn, wind, spin and detent.
   The still centre is a dial of its own: a bezel that turns two full revolutions
   against a needle that sweeps the other way, with an arc that draws as you go.
   ============================================================ */

import { Visual } from './Visual';
import { DetentKnob } from './DetentKnob';
import { ChickenHead } from './ChickenHead';
import { ConcentricPair } from './ConcentricPair';
import { JogWheel } from './JogWheel';
import { ClickWheel } from './ClickWheel';
import { LEDRing } from './LEDRing';
import { TuningDial } from './TuningDial';
import { CombinationDial } from './CombinationDial';
import { PadlockRollers } from './PadlockRollers';
import { AmpGain } from './AmpGain';
import { KnurledKnob } from './KnurledKnob';
import { ArcSlider } from './ArcSlider';
import { PieMenu } from './PieMenu';
import { NeedleSetter } from './NeedleSetter';
import { PanKnob } from './PanKnob';
import { RotaryPhone } from './RotaryPhone';
import { CompassBezel } from './CompassBezel';
import { SteeringWheel } from './SteeringWheel';
import { CrankHandle } from './CrankHandle';
import { GearPair } from './GearPair';
import { AlarmHands } from './AlarmHands';
import { ThermostatRing } from './ThermostatRing';
import { HeatRing } from './HeatRing';
import { Stepped6Way } from './Stepped6Way';
import { Potentiometer } from './Potentiometer';
import { Joystick } from './Joystick';
import { Trackball } from './Trackball';
import { ScrollWheel } from './ScrollWheel';
import { ThrottlePair } from './ThrottlePair';
import { Roulette } from './Roulette';
import { DrumPicker } from './DrumPicker';
import { GyroRings } from './GyroRings';
import { KitchenTimer } from './KitchenTimer';
import { Metronome } from './Metronome';
import { Sundial } from './Sundial';
import { Orbiter } from './Orbiter';
import { Flywheel } from './Flywheel';
import { Thumbscrew } from './Thumbscrew';
import { Ratchet } from './Ratchet';
import { Inclinometer } from './Inclinometer';

export { Visual };
export { DetentKnob, ChickenHead, ConcentricPair, JogWheel, ClickWheel, LEDRing, TuningDial, CombinationDial, PadlockRollers, AmpGain, KnurledKnob, ArcSlider, PieMenu, NeedleSetter, PanKnob, RotaryPhone, CompassBezel, SteeringWheel, CrankHandle, GearPair, AlarmHands, ThermostatRing, HeatRing, Stepped6Way, Potentiometer, Joystick, Trackball, ScrollWheel, ThrottlePair, Roulette, DrumPicker, GyroRings, KitchenTimer, Metronome, Sundial, Orbiter, Flywheel, Thumbscrew, Ratchet, Inclinometer };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Detent knob", DetentKnob, "drag"],
  ["Chicken head", ChickenHead, "drag"],
  ["Concentric pair", ConcentricPair, "drag"],
  ["Jog wheel", JogWheel, "drag"],
  ["Click wheel", ClickWheel, "drag"],
  ["LED ring", LEDRing, "drag"],
  ["Tuning dial", TuningDial, "drag"],
  ["Combination dial", CombinationDial, "drag"],
  ["Padlock rollers", PadlockRollers, "click"],
  ["Amp gain", AmpGain, "drag"],
  ["Knurled knob", KnurledKnob, "drag"],
  ["Arc slider", ArcSlider, "drag"],
  ["Pie menu", PieMenu, "click"],
  ["Needle setter", NeedleSetter, "drag"],
  ["Pan knob", PanKnob, "drag"],
  ["Rotary phone", RotaryPhone, "click"],
  ["Compass bezel", CompassBezel, "drag"],
  ["Steering wheel", SteeringWheel, "drag"],
  ["Crank handle", CrankHandle, "drag"],
  ["Gear pair", GearPair, "click"],
  ["Alarm hands", AlarmHands, "drag"],
  ["Thermostat ring", ThermostatRing, "drag"],
  ["Heat ring", HeatRing, "drag"],
  ["Stepped 6-way", Stepped6Way, "click"],
  ["Potentiometer", Potentiometer, "drag"],
  ["Joystick", Joystick, "drag"],
  ["Trackball", Trackball, "drag"],
  ["Scroll wheel", ScrollWheel, "click"],
  ["Throttle pair", ThrottlePair, "drag"],
  ["Roulette", Roulette, "click"],
  ["Drum picker", DrumPicker, "drag"],
  ["Gyro rings", GyroRings, "auto"],
  ["Kitchen timer", KitchenTimer, "drag"],
  ["Metronome", Metronome, "drag"],
  ["Sundial", Sundial, "drag"],
  ["Orbiter", Orbiter, "drag"],
  ["Flywheel", Flywheel, "click"],
  ["Thumbscrew", Thumbscrew, "click"],
  ["Ratchet", Ratchet, "click"],
  ["Inclinometer", Inclinometer, "drag"],
];

export default { Visual, items };
