/* ============================================================
   41 · BEAMS — lines and traces of light.
   The still side is a circuit trace that runs the length of the page: a pulse
   of light travels along it as the scroll advances and the pads it passes light
   up behind it. The forty-two specimens are swatches of light on a dark ground:
   traces, tubes, rays and sweeps. The ones that would be moving are, while on
   screen (never under reduced motion); the rest answer to the pointer, a drag
   or a click, and all of them can be reached from the keyboard.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { SignalTrace } from "./signal-trace/SignalTrace";
import { BusLines } from "./bus-lines/BusLines";
import { ChipPads } from "./chip-pads/ChipPads";
import { BranchTrace } from "./branch-trace/BranchTrace";
import { ViaHop } from "./via-hop/ViaHop";
import { FibreStrands } from "./fibre-strands/FibreStrands";
import { NeonTube } from "./neon-tube/NeonTube";
import { LightPipe } from "./light-pipe/LightPipe";
import { GridSweep } from "./grid-sweep/GridSweep";
import { Tripwire } from "./tripwire/Tripwire";
import { SweepDish } from "./sweep-dish/SweepDish";
import { ScanBar } from "./scan-bar/ScanBar";
import { SunRays } from "./sun-rays/SunRays";
import { SearchLight } from "./search-light/SearchLight";
import { SpotCone } from "./spot-cone/SpotCone";
import { RunningBorder } from "./running-border/RunningBorder";
import { EdgeShine } from "./edge-shine/EdgeShine";
import { LightLeaks } from "./light-leaks/LightLeaks";
import { AuroraLines } from "./aurora-lines/AuroraLines";
import { ShootingStars } from "./shooting-stars/ShootingStars";
import { CometLoop } from "./comet-loop/CometLoop";
import { OrbitTrace } from "./orbit-trace/OrbitTrace";
import { Lissajous } from "./lissajous/Lissajous";
import { SinePair } from "./sine-pair/SinePair";
import { HeartTrace } from "./heart-trace/HeartTrace";
import { Plexus } from "./plexus/Plexus";
import { LightRibbon } from "./light-ribbon/LightRibbon";
import { SpiralBeam } from "./spiral-beam/SpiralBeam";
import { WhiteSplit } from "./white-split/WhiteSplit";
import { LensStreak } from "./lens-streak/LensStreak";
import { RunwayLights } from "./runway-lights/RunwayLights";
import { RailTicks } from "./rail-ticks/RailTicks";
import { LongExposure } from "./long-exposure/LongExposure";
import { LaserHarp } from "./laser-harp/LaserHarp";
import { BeamSplitter } from "./beam-splitter/BeamSplitter";
import { MirrorBounce } from "./mirror-bounce/MirrorBounce";
import { FibreBundle } from "./fibre-bundle/FibreBundle";
import { StrobeBars } from "./strobe-bars/StrobeBars";
import { CausticNet } from "./caustic-net/CausticNet";
import { PathDraw } from "./path-draw/PathDraw";
import { SlackCable } from "./slack-cable/SlackCable";
import { PulseRings } from "./pulse-rings/PulseRings";

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
