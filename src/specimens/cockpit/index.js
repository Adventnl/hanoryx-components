/* ============================================================
   36 · COCKPIT — instruments with presence.
   Sixteen of the forty-two are one dial component given sixteen faces (a
   range, a sweep, coloured bands, a redline): every needle can be dragged, and
   until you do, each wanders between readings by itself while it is on screen.
   The rest are the instruments a dial cannot be — a horizon, a compass card, a
   lever, a tape. The still side is a heading card that the scroll turns twice.
   ============================================================ */

import { Visual } from './Visual';
import { AirspeedDial } from './AirspeedDial';
import { PressureAltimeter } from './PressureAltimeter';
import { EngineRevs } from './EngineRevs';
import { OilPressure } from './OilPressure';
import { OilTemperature } from './OilTemperature';
import { ExhaustTemperature } from './ExhaustTemperature';
import { FuelQuantity } from './FuelQuantity';
import { ManifoldPressure } from './ManifoldPressure';
import { ChargeAmmeter } from './ChargeAmmeter';
import { BusVoltage } from './BusVoltage';
import { ClimbRate } from './ClimbRate';
import { GLoadMeter } from './GLoadMeter';
import { CabinPressure } from './CabinPressure';
import { HydraulicPressure } from './HydraulicPressure';
import { OutsideAir } from './OutsideAir';
import { HeadTemperature } from './HeadTemperature';
import { ArtificialHorizon } from './ArtificialHorizon';
import { HeadingCard } from './HeadingCard';
import { TurnCoordinator } from './TurnCoordinator';
import { CourseDeviation } from './CourseDeviation';
import { GlidePath } from './GlidePath';
import { DirectionFinder } from './DirectionFinder';
import { RadioTuner } from './RadioTuner';
import { SquawkCode } from './SquawkCode';
import { FlightClock } from './FlightClock';
import { PressureSetting } from './PressureSetting';
import { ThrottleLever } from './ThrottleLever';
import { FlapLever } from './FlapLever';
import { GearLever } from './GearLever';
import { TrimWheel } from './TrimWheel';
import { SwitchPanel } from './SwitchPanel';
import { WarningLamps } from './WarningLamps';
import { TerrainWarning } from './TerrainWarning';
import { AutopilotModes } from './AutopilotModes';
import { SpeedTape } from './SpeedTape';
import { AltitudeTape } from './AltitudeTape';
import { HydraulicBars } from './HydraulicBars';
import { BatteryMaster } from './BatteryMaster';
import { FuelSelector } from './FuelSelector';
import { ControlColumn } from './ControlColumn';
import { RudderPedals } from './RudderPedals';
import { StallWarning } from './StallWarning';

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
