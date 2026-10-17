/* ============================================================
   44 · WAVES — ripples, interference and noise.
   The still side is two sets of rings that spread apart as the scroll advances,
   so the pattern where they overlap shifts. Each of the forty-two specimens is
   a wave drawn on its own canvas through the shared Sim engine (Sim.jsx): it
   runs only while on screen, draws one settled frame under reduced motion, and
   where the pointer matters it is the pointer, or the arrow keys with Enter.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { SineLine } from "./sine-line/SineLine";
import { WaveStack } from "./wave-stack/WaveStack";
import { LayeredSwells } from "./layered-swells/LayeredSwells";
import { TwoSources } from "./two-sources/TwoSources";
import { PointerRipples } from "./pointer-ripples/PointerRipples";
import { WaterSurface } from "./water-surface/WaterSurface";
import { StandingWave } from "./standing-wave/StandingWave";
import { BeatPattern } from "./beat-pattern/BeatPattern";
import { PhaseShift } from "./phase-shift/PhaseShift";
import { Amplitude } from "./amplitude/Amplitude";
import { Frequency } from "./frequency/Frequency";
import { HarmonicSum } from "./harmonic-sum/HarmonicSum";
import { SawtoothBuild } from "./sawtooth-build/SawtoothBuild";
import { ValueNoise } from "./value-noise/ValueNoise";
import { NoiseRidges } from "./noise-ridges/NoiseRidges";
import { NoiseCloud } from "./noise-cloud/NoiseCloud";
import { Static } from "./static/Static";
import { SeaHorizon } from "./sea-horizon/SeaHorizon";
import { RippleBars } from "./ripple-bars/RippleBars";
import { DotSwell } from "./dot-swell/DotSwell";
import { DotRipple } from "./dot-ripple/DotRipple";
import { MoireLines } from "./moire-lines/MoireLines";
import { SpiralWave } from "./spiral-wave/SpiralWave";
import { RingPulse } from "./ring-pulse/RingPulse";
import { DopplerRings } from "./doppler-rings/DopplerRings";
import { MachCone } from "./mach-cone/MachCone";
import { QuakeTrace } from "./quake-trace/QuakeTrace";
import { TideChart } from "./tide-chart/TideChart";
import { RopeWave } from "./rope-wave/RopeWave";
import { PendulumWave } from "./pendulum-wave/PendulumWave";
import { WavePacket } from "./wave-packet/WavePacket";
import { ChladniPlate } from "./chladni-plate/ChladniPlate";
import { Cymatics } from "./cymatics/Cymatics";
import { FrequencyDial } from "./frequency-dial/FrequencyDial";
import { Chirp } from "./chirp/Chirp";
import { DampedSpring } from "./damped-spring/DampedSpring";
import { MeshSurface } from "./mesh-surface/MeshSurface";
import { ContourBands } from "./contour-bands/ContourBands";
import { BoatWake } from "./boat-wake/BoatWake";
import { PressureWave } from "./pressure-wave/PressureWave";
import { SlitTank } from "./slit-tank/SlitTank";
import { PhasorTrace } from "./phasor-trace/PhasorTrace";

export { Visual };
export { SineLine, WaveStack, LayeredSwells, TwoSources, PointerRipples, WaterSurface, StandingWave, BeatPattern, PhaseShift, Amplitude, Frequency, HarmonicSum, SawtoothBuild, ValueNoise, NoiseRidges, NoiseCloud, Static, SeaHorizon, RippleBars, DotSwell, DotRipple, MoireLines, SpiralWave, RingPulse, DopplerRings, MachCone, QuakeTrace, TideChart, RopeWave, PendulumWave, WavePacket, ChladniPlate, Cymatics, FrequencyDial, Chirp, DampedSpring, MeshSurface, ContourBands, BoatWake, PressureWave, SlitTank, PhasorTrace };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Sine line", SineLine, "auto"],
  ["Wave stack", WaveStack, "auto"],
  ["Layered swells", LayeredSwells, "auto"],
  ["Two sources", TwoSources, "auto"],
  ["Pointer ripples", PointerRipples, "hover"],
  ["Water surface", WaterSurface, "click"],
  ["Standing wave", StandingWave, "auto"],
  ["Beat pattern", BeatPattern, "auto"],
  ["Phase shift", PhaseShift, "hover"],
  ["Amplitude", Amplitude, "hover"],
  ["Frequency", Frequency, "hover"],
  ["Harmonic sum", HarmonicSum, "hover"],
  ["Sawtooth build", SawtoothBuild, "auto"],
  ["Value noise", ValueNoise, "auto"],
  ["Noise ridges", NoiseRidges, "auto"],
  ["Noise cloud", NoiseCloud, "auto"],
  ["Static", Static, "auto"],
  ["Sea horizon", SeaHorizon, "auto"],
  ["Ripple bars", RippleBars, "auto"],
  ["Dot swell", DotSwell, "auto"],
  ["Dot ripple", DotRipple, "auto"],
  ["Moire lines", MoireLines, "auto"],
  ["Spiral wave", SpiralWave, "auto"],
  ["Ring pulse", RingPulse, "auto"],
  ["Doppler rings", DopplerRings, "auto"],
  ["Mach cone", MachCone, "auto"],
  ["Quake trace", QuakeTrace, "auto"],
  ["Tide chart", TideChart, "auto"],
  ["Rope wave", RopeWave, "hover"],
  ["Pendulum wave", PendulumWave, "auto"],
  ["Wave packet", WavePacket, "auto"],
  ["Chladni plate", ChladniPlate, "click"],
  ["Cymatics", Cymatics, "auto"],
  ["Frequency dial", FrequencyDial, "hover"],
  ["Chirp", Chirp, "auto"],
  ["Damped spring", DampedSpring, "click"],
  ["Mesh surface", MeshSurface, "auto"],
  ["Contour bands", ContourBands, "auto"],
  ["Boat wake", BoatWake, "auto"],
  ["Pressure wave", PressureWave, "auto"],
  ["Slit tank", SlitTank, "click"],
  ["Phasor trace", PhasorTrace, "auto"],
];

export default { Visual, items };
