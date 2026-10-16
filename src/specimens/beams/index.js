/* ============================================================
   41 · BEAMS — lines and traces of light.
   The still side is a circuit trace that runs the length of the page: a pulse
   of light travels along it as the scroll advances and the pads it passes light
   up behind it. The forty-two specimens are swatches of light on a dark ground:
   traces, tubes, rays and sweeps. The ones that would be moving are, while on
   screen (never under reduced motion); the rest answer to the pointer, a drag
   or a click, and all of them can be reached from the keyboard.
   ============================================================ */

import { Visual } from './Visual';
import { SignalTrace } from './SignalTrace';
import { BusLines } from './BusLines';
import { ChipPads } from './ChipPads';
import { BranchTrace } from './BranchTrace';
import { ViaHop } from './ViaHop';
import { FibreStrands } from './FibreStrands';
import { NeonTube } from './NeonTube';
import { LightPipe } from './LightPipe';
import { GridSweep } from './GridSweep';
import { Tripwire } from './Tripwire';
import { SweepDish } from './SweepDish';
import { ScanBar } from './ScanBar';
import { SunRays } from './SunRays';
import { SearchLight } from './SearchLight';
import { SpotCone } from './SpotCone';
import { RunningBorder } from './RunningBorder';
import { EdgeShine } from './EdgeShine';
import { LightLeaks } from './LightLeaks';
import { AuroraLines } from './AuroraLines';
import { ShootingStars } from './ShootingStars';
import { CometLoop } from './CometLoop';
import { OrbitTrace } from './OrbitTrace';
import { Lissajous } from './Lissajous';
import { SinePair } from './SinePair';
import { HeartTrace } from './HeartTrace';
import { Plexus } from './Plexus';
import { LightRibbon } from './LightRibbon';
import { SpiralBeam } from './SpiralBeam';
import { WhiteSplit } from './WhiteSplit';
import { LensStreak } from './LensStreak';
import { RunwayLights } from './RunwayLights';
import { RailTicks } from './RailTicks';
import { LongExposure } from './LongExposure';
import { LaserHarp } from './LaserHarp';
import { BeamSplitter } from './BeamSplitter';
import { MirrorBounce } from './MirrorBounce';
import { FibreBundle } from './FibreBundle';
import { StrobeBars } from './StrobeBars';
import { CausticNet } from './CausticNet';
import { PathDraw } from './PathDraw';
import { SlackCable } from './SlackCable';
import { PulseRings } from './PulseRings';

export { Visual };
export { SignalTrace, BusLines, ChipPads, BranchTrace, ViaHop, FibreStrands, NeonTube, LightPipe, GridSweep, Tripwire, SweepDish, ScanBar, SunRays, SearchLight, SpotCone, RunningBorder, EdgeShine, LightLeaks, AuroraLines, ShootingStars, CometLoop, OrbitTrace, Lissajous, SinePair, HeartTrace, Plexus, LightRibbon, SpiralBeam, WhiteSplit, LensStreak, RunwayLights, RailTicks, LongExposure, LaserHarp, BeamSplitter, MirrorBounce, FibreBundle, StrobeBars, CausticNet, PathDraw, SlackCable, PulseRings };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Signal trace", SignalTrace, "auto"],
  ["Bus lines", BusLines, "auto"],
  ["Chip pads", ChipPads, "auto"],
  ["Branch trace", BranchTrace, "auto"],
  ["Via hop", ViaHop, "auto"],
  ["Fibre strands", FibreStrands, "auto"],
  ["Neon tube", NeonTube, "click"],
  ["Light pipe", LightPipe, "auto"],
  ["Grid sweep", GridSweep, "auto"],
  ["Tripwire", Tripwire, "click"],
  ["Sweep dish", SweepDish, "auto"],
  ["Scan bar", ScanBar, "auto"],
  ["Sun rays", SunRays, "auto"],
  ["Search light", SearchLight, "hover"],
  ["Spot cone", SpotCone, "drag"],
  ["Running border", RunningBorder, "auto"],
  ["Edge shine", EdgeShine, "hover"],
  ["Light leaks", LightLeaks, "auto"],
  ["Aurora lines", AuroraLines, "auto"],
  ["Shooting stars", ShootingStars, "auto"],
  ["Comet loop", CometLoop, "auto"],
  ["Orbit trace", OrbitTrace, "auto"],
  ["Lissajous", Lissajous, "auto"],
  ["Sine pair", SinePair, "auto"],
  ["Heart trace", HeartTrace, "auto"],
  ["Plexus", Plexus, "hover"],
  ["Light ribbon", LightRibbon, "auto"],
  ["Spiral beam", SpiralBeam, "auto"],
  ["White split", WhiteSplit, "hover"],
  ["Lens streak", LensStreak, "click"],
  ["Runway lights", RunwayLights, "auto"],
  ["Rail ticks", RailTicks, "auto"],
  ["Long exposure", LongExposure, "auto"],
  ["Laser harp", LaserHarp, "click"],
  ["Beam splitter", BeamSplitter, "click"],
  ["Mirror bounce", MirrorBounce, "drag"],
  ["Fibre bundle", FibreBundle, "auto"],
  ["Strobe bars", StrobeBars, "click"],
  ["Caustic net", CausticNet, "auto"],
  ["Path draw", PathDraw, "click"],
  ["Slack cable", SlackCable, "drag"],
  ["Pulse rings", PulseRings, "click"],
];

export default { Visual, items };
