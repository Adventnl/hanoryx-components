/* ============================================================
   06 · GAUGES — meters that read the room.
   The pinned side is a dial stack that the scroll alone drives: three arcs fill
   at different rates, a ring of dashes turns, a needle trembles toward 100, and
   the number in the middle is written by CSS counters — no script per frame.
   Angles throughout run clockwise from twelve o'clock.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { SweepDial } from "./sweep-dial/SweepDial";
import { ArcMeter } from "./arc-meter/ArcMeter";
import { TripleRings } from "./triple-rings/TripleRings";
import { Speedometer } from "./speedometer/Speedometer";
import { Tachometer } from "./tachometer/Tachometer";
import { PeakHold } from "./peak-hold/PeakHold";
import { BatteryCell } from "./battery-cell/BatteryCell";
import { SignalBars } from "./signal-bars/SignalBars";
import { Hourglass } from "./hourglass/Hourglass";
import { Odometer } from "./odometer/Odometer";
import { BulletGauge } from "./bullet-gauge/BulletGauge";
import { WaffleGauge } from "./waffle-gauge/WaffleGauge";
import { Seismograph } from "./seismograph/Seismograph";
import { FuelGauge } from "./fuel-gauge/FuelGauge";
import { PressureGauge } from "./pressure-gauge/PressureGauge";
import { Barometer } from "./barometer/Barometer";
import { DropletLevel } from "./droplet-level/DropletLevel";
import { ThermalStrip } from "./thermal-strip/ThermalStrip";
import { RadialBars } from "./radial-bars/RadialBars";
import { DotArc } from "./dot-arc/DotArc";
import { SpiritLevel } from "./spirit-level/SpiritLevel";
import { Attitude } from "./attitude/Attitude";
import { Altimeter } from "./altimeter/Altimeter";
import { HeadingTape } from "./heading-tape/HeadingTape";
import { Voltmeter } from "./voltmeter/Voltmeter";
import { StereoLadder } from "./stereo-ladder/StereoLadder";
import { PieTimer } from "./pie-timer/PieTimer";
import { TwinNeedle } from "./twin-needle/TwinNeedle";
import { PulseTrace } from "./pulse-trace/PulseTrace";
import { OrbitMeter } from "./orbit-meter/OrbitMeter";
import { SegmentRing } from "./segment-ring/SegmentRing";
import { RankBars } from "./rank-bars/RankBars";
import { DiskUsage } from "./disk-usage/DiskUsage";
import { MeterBridge } from "./meter-bridge/MeterBridge";
import { WindRose } from "./wind-rose/WindRose";
import { RadarSweep } from "./radar-sweep/RadarSweep";
import { TankLevel } from "./tank-level/TankLevel";
import { RiskMeter } from "./risk-meter/RiskMeter";
import { SonarPing } from "./sonar-ping/SonarPing";
import { CooldownTile } from "./cooldown-tile/CooldownTile";
import { MoonPhase } from "./moon-phase/MoonPhase";
import { TickSweep } from "./tick-sweep/TickSweep";

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
