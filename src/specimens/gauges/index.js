/* ============================================================
   06 · GAUGES — meters that read the room.
   The pinned side is a dial stack that the scroll alone drives: three arcs fill
   at different rates, a ring of dashes turns, a needle trembles toward 100, and
   the number in the middle is written by CSS counters — no script per frame.
   Angles throughout run clockwise from twelve o'clock.
   ============================================================ */

import { Visual } from './Visual';
import { SweepDial } from './SweepDial';
import { ArcMeter } from './ArcMeter';
import { TripleRings } from './TripleRings';
import { Speedometer } from './Speedometer';
import { Tachometer } from './Tachometer';
import { PeakHold } from './PeakHold';
import { BatteryCell } from './BatteryCell';
import { SignalBars } from './SignalBars';
import { Hourglass } from './Hourglass';
import { Odometer } from './Odometer';
import { BulletGauge } from './BulletGauge';
import { WaffleGauge } from './WaffleGauge';
import { Seismograph } from './Seismograph';
import { FuelGauge } from './FuelGauge';
import { PressureGauge } from './PressureGauge';
import { Barometer } from './Barometer';
import { DropletLevel } from './DropletLevel';
import { ThermalStrip } from './ThermalStrip';
import { RadialBars } from './RadialBars';
import { DotArc } from './DotArc';
import { SpiritLevel } from './SpiritLevel';
import { Attitude } from './Attitude';
import { Altimeter } from './Altimeter';
import { HeadingTape } from './HeadingTape';
import { Voltmeter } from './Voltmeter';
import { StereoLadder } from './StereoLadder';
import { PieTimer } from './PieTimer';
import { TwinNeedle } from './TwinNeedle';
import { PulseTrace } from './PulseTrace';
import { OrbitMeter } from './OrbitMeter';
import { SegmentRing } from './SegmentRing';
import { RankBars } from './RankBars';
import { DiskUsage } from './DiskUsage';
import { MeterBridge } from './MeterBridge';
import { WindRose } from './WindRose';
import { RadarSweep } from './RadarSweep';
import { TankLevel } from './TankLevel';
import { RiskMeter } from './RiskMeter';
import { SonarPing } from './SonarPing';
import { CooldownTile } from './CooldownTile';
import { MoonPhase } from './MoonPhase';
import { TickSweep } from './TickSweep';

export { Visual };
export { SweepDial, ArcMeter, TripleRings, Speedometer, Tachometer, PeakHold, BatteryCell, SignalBars, Hourglass, Odometer, BulletGauge, WaffleGauge, Seismograph, FuelGauge, PressureGauge, Barometer, DropletLevel, ThermalStrip, RadialBars, DotArc, SpiritLevel, Attitude, Altimeter, HeadingTape, Voltmeter, StereoLadder, PieTimer, TwinNeedle, PulseTrace, OrbitMeter, SegmentRing, RankBars, DiskUsage, MeterBridge, WindRose, RadarSweep, TankLevel, RiskMeter, SonarPing, CooldownTile, MoonPhase, TickSweep };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Sweep dial", SweepDial, "click"],
  ["Arc meter", ArcMeter, "auto"],
  ["Triple rings", TripleRings, "hover"],
  ["Speedometer", Speedometer, "hold"],
  ["Tachometer", Tachometer, "click"],
  ["Peak hold", PeakHold, "auto"],
  ["Battery cell", BatteryCell, "click"],
  ["Signal bars", SignalBars, "click"],
  ["Hourglass", Hourglass, "click"],
  ["Odometer", Odometer, "auto"],
  ["Bullet gauge", BulletGauge, "hover"],
  ["Waffle gauge", WaffleGauge, "drag"],
  ["Seismograph", Seismograph, "auto"],
  ["Fuel gauge", FuelGauge, "click"],
  ["Pressure gauge", PressureGauge, "hover"],
  ["Barometer", Barometer, "drag"],
  ["Droplet level", DropletLevel, "auto"],
  ["Thermal strip", ThermalStrip, "hover"],
  ["Radial bars", RadialBars, "auto"],
  ["Dot arc", DotArc, "auto"],
  ["Spirit level", SpiritLevel, "drag"],
  ["Attitude", Attitude, "drag"],
  ["Altimeter", Altimeter, "auto"],
  ["Heading tape", HeadingTape, "auto"],
  ["Voltmeter", Voltmeter, "click"],
  ["Stereo ladder", StereoLadder, "auto"],
  ["Pie timer", PieTimer, "auto"],
  ["Twin needle", TwinNeedle, "hover"],
  ["Pulse trace", PulseTrace, "auto"],
  ["Orbit meter", OrbitMeter, "auto"],
  ["Segment ring", SegmentRing, "click"],
  ["Rank bars", RankBars, "click"],
  ["Disk usage", DiskUsage, "hover"],
  ["Meter bridge", MeterBridge, "auto"],
  ["Wind rose", WindRose, "hover"],
  ["Radar sweep", RadarSweep, "auto"],
  ["Tank level", TankLevel, "click"],
  ["Risk meter", RiskMeter, "click"],
  ["Sonar ping", SonarPing, "click"],
  ["Cooldown tile", CooldownTile, "click"],
  ["Moon phase", MoonPhase, "click"],
  ["Tick sweep", TickSweep, "auto"],
];

export default { Visual, items };
