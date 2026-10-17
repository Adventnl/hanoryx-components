/* ============================================================
   36 · COCKPIT — instruments with presence.
   Sixteen of the forty-two are one dial component given sixteen faces (a
   range, a sweep, coloured bands, a redline): every needle can be dragged, and
   until you do, each wanders between readings by itself while it is on screen.
   The rest are the instruments a dial cannot be — a horizon, a compass card, a
   lever, a tape. The still side is a heading card that the scroll turns twice.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { AirspeedDial } from "./airspeed-dial/AirspeedDial";
import { PressureAltimeter } from "./pressure-altimeter/PressureAltimeter";
import { EngineRevs } from "./engine-revs/EngineRevs";
import { OilPressure } from "./oil-pressure/OilPressure";
import { OilTemperature } from "./oil-temperature/OilTemperature";
import { ExhaustTemperature } from "./exhaust-temperature/ExhaustTemperature";
import { FuelQuantity } from "./fuel-quantity/FuelQuantity";
import { ManifoldPressure } from "./manifold-pressure/ManifoldPressure";
import { ChargeAmmeter } from "./charge-ammeter/ChargeAmmeter";
import { BusVoltage } from "./bus-voltage/BusVoltage";
import { ClimbRate } from "./climb-rate/ClimbRate";
import { GLoadMeter } from "./gload-meter/GLoadMeter";
import { CabinPressure } from "./cabin-pressure/CabinPressure";
import { HydraulicPressure } from "./hydraulic-pressure/HydraulicPressure";
import { OutsideAir } from "./outside-air/OutsideAir";
import { HeadTemperature } from "./head-temperature/HeadTemperature";
import { ArtificialHorizon } from "./artificial-horizon/ArtificialHorizon";
import { HeadingCard } from "./heading-card/HeadingCard";
import { TurnCoordinator } from "./turn-coordinator/TurnCoordinator";
import { CourseDeviation } from "./course-deviation/CourseDeviation";
import { GlidePath } from "./glide-path/GlidePath";
import { DirectionFinder } from "./direction-finder/DirectionFinder";
import { RadioTuner } from "./radio-tuner/RadioTuner";
import { SquawkCode } from "./squawk-code/SquawkCode";
import { FlightClock } from "./flight-clock/FlightClock";
import { PressureSetting } from "./pressure-setting/PressureSetting";
import { ThrottleLever } from "./throttle-lever/ThrottleLever";
import { FlapLever } from "./flap-lever/FlapLever";
import { GearLever } from "./gear-lever/GearLever";
import { TrimWheel } from "./trim-wheel/TrimWheel";
import { SwitchPanel } from "./switch-panel/SwitchPanel";
import { WarningLamps } from "./warning-lamps/WarningLamps";
import { TerrainWarning } from "./terrain-warning/TerrainWarning";
import { AutopilotModes } from "./autopilot-modes/AutopilotModes";
import { SpeedTape } from "./speed-tape/SpeedTape";
import { AltitudeTape } from "./altitude-tape/AltitudeTape";
import { HydraulicBars } from "./hydraulic-bars/HydraulicBars";
import { BatteryMaster } from "./battery-master/BatteryMaster";
import { FuelSelector } from "./fuel-selector/FuelSelector";
import { ControlColumn } from "./control-column/ControlColumn";
import { RudderPedals } from "./rudder-pedals/RudderPedals";
import { StallWarning } from "./stall-warning/StallWarning";

export { Visual };
export { AirspeedDial, PressureAltimeter, EngineRevs, OilPressure, OilTemperature, ExhaustTemperature, FuelQuantity, ManifoldPressure, ChargeAmmeter, BusVoltage, ClimbRate, GLoadMeter, CabinPressure, HydraulicPressure, OutsideAir, HeadTemperature, ArtificialHorizon, HeadingCard, TurnCoordinator, CourseDeviation, GlidePath, DirectionFinder, RadioTuner, SquawkCode, FlightClock, PressureSetting, ThrottleLever, FlapLever, GearLever, TrimWheel, SwitchPanel, WarningLamps, TerrainWarning, AutopilotModes, SpeedTape, AltitudeTape, HydraulicBars, BatteryMaster, FuelSelector, ControlColumn, RudderPedals, StallWarning };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Airspeed dial", AirspeedDial, "drag"],
  ["Pressure altimeter", PressureAltimeter, "drag"],
  ["Engine revs", EngineRevs, "drag"],
  ["Oil pressure", OilPressure, "drag"],
  ["Oil temperature", OilTemperature, "drag"],
  ["Exhaust temperature", ExhaustTemperature, "drag"],
  ["Fuel quantity", FuelQuantity, "drag"],
  ["Manifold pressure", ManifoldPressure, "drag"],
  ["Charge ammeter", ChargeAmmeter, "drag"],
  ["Bus voltage", BusVoltage, "drag"],
  ["Climb rate", ClimbRate, "drag"],
  ["G-load meter", GLoadMeter, "drag"],
  ["Cabin pressure", CabinPressure, "drag"],
  ["Hydraulic pressure", HydraulicPressure, "drag"],
  ["Outside air", OutsideAir, "drag"],
  ["Head temperature", HeadTemperature, "drag"],
  ["Artificial horizon", ArtificialHorizon, "hover"],
  ["Heading card", HeadingCard, "drag"],
  ["Turn coordinator", TurnCoordinator, "hover"],
  ["Course deviation", CourseDeviation, "drag"],
  ["Glide path", GlidePath, "hover"],
  ["Direction finder", DirectionFinder, "auto"],
  ["Radio tuner", RadioTuner, "click"],
  ["Squawk code", SquawkCode, "click"],
  ["Flight clock", FlightClock, "auto"],
  ["Pressure setting", PressureSetting, "click"],
  ["Throttle lever", ThrottleLever, "drag"],
  ["Flap lever", FlapLever, "click"],
  ["Gear lever", GearLever, "click"],
  ["Trim wheel", TrimWheel, "drag"],
  ["Switch panel", SwitchPanel, "click"],
  ["Warning lamps", WarningLamps, "click"],
  ["Terrain warning", TerrainWarning, "click"],
  ["Autopilot modes", AutopilotModes, "click"],
  ["Speed tape", SpeedTape, "auto"],
  ["Altitude tape", AltitudeTape, "auto"],
  ["Hydraulic bars", HydraulicBars, "click"],
  ["Battery master", BatteryMaster, "click"],
  ["Fuel selector", FuelSelector, "click"],
  ["Control column", ControlColumn, "hover"],
  ["Rudder pedals", RudderPedals, "drag"],
  ["Stall warning", StallWarning, "drag"],
];

export default { Visual, items };
