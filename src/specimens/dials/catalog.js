/* ============================================================
   02 · DIALS — turn, wind, spin and detent.
   The still centre is a dial of its own: a bezel that turns two full revolutions
   against a needle that sweeps the other way, with an arc that draws as you go.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { DetentKnob } from "./detent-knob/DetentKnob";
import { ChickenHead } from "./chicken-head/ChickenHead";
import { ConcentricPair } from "./concentric-pair/ConcentricPair";
import { JogWheel } from "./jog-wheel/JogWheel";
import { ClickWheel } from "./click-wheel/ClickWheel";
import { LEDRing } from "./ledring/LEDRing";
import { TuningDial } from "./tuning-dial/TuningDial";
import { CombinationDial } from "./combination-dial/CombinationDial";
import { PadlockRollers } from "./padlock-rollers/PadlockRollers";
import { AmpGain } from "./amp-gain/AmpGain";
import { KnurledKnob } from "./knurled-knob/KnurledKnob";
import { ArcSlider } from "./arc-slider/ArcSlider";
import { PieMenu } from "./pie-menu/PieMenu";
import { NeedleSetter } from "./needle-setter/NeedleSetter";
import { PanKnob } from "./pan-knob/PanKnob";
import { RotaryPhone } from "./rotary-phone/RotaryPhone";
import { CompassBezel } from "./compass-bezel/CompassBezel";
import { SteeringWheel } from "./steering-wheel/SteeringWheel";
import { CrankHandle } from "./crank-handle/CrankHandle";
import { GearPair } from "./gear-pair/GearPair";
import { AlarmHands } from "./alarm-hands/AlarmHands";
import { ThermostatRing } from "./thermostat-ring/ThermostatRing";
import { HeatRing } from "./heat-ring/HeatRing";
import { Stepped6Way } from "./stepped6-way/Stepped6Way";
import { Potentiometer } from "./potentiometer/Potentiometer";
import { Joystick } from "./joystick/Joystick";
import { Trackball } from "./trackball/Trackball";
import { ScrollWheel } from "./scroll-wheel/ScrollWheel";
import { ThrottlePair } from "./throttle-pair/ThrottlePair";
import { Roulette } from "./roulette/Roulette";
import { DrumPicker } from "./drum-picker/DrumPicker";
import { GyroRings } from "./gyro-rings/GyroRings";
import { KitchenTimer } from "./kitchen-timer/KitchenTimer";
import { Metronome } from "./metronome/Metronome";
import { Sundial } from "./sundial/Sundial";
import { Orbiter } from "./orbiter/Orbiter";
import { Flywheel } from "./flywheel/Flywheel";
import { Thumbscrew } from "./thumbscrew/Thumbscrew";
import { Ratchet } from "./ratchet/Ratchet";
import { Inclinometer } from "./inclinometer/Inclinometer";

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
