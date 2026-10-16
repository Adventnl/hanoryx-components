/* ============================================================
   44 · WAVES — ripples, interference and noise.
   The still side is two sets of rings that spread apart as the scroll advances,
   so the pattern where they overlap shifts. Each of the forty-two specimens is
   a wave drawn on its own canvas through the shared Sim engine (Sim.jsx): it
   runs only while on screen, draws one settled frame under reduced motion, and
   where the pointer matters it is the pointer, or the arrow keys with Enter.
   ============================================================ */

import { Visual } from './Visual';
import { SineLine } from './SineLine';
import { WaveStack } from './WaveStack';
import { LayeredSwells } from './LayeredSwells';
import { TwoSources } from './TwoSources';
import { PointerRipples } from './PointerRipples';
import { WaterSurface } from './WaterSurface';
import { StandingWave } from './StandingWave';
import { BeatPattern } from './BeatPattern';
import { PhaseShift } from './PhaseShift';
import { Amplitude } from './Amplitude';
import { Frequency } from './Frequency';
import { HarmonicSum } from './HarmonicSum';
import { SawtoothBuild } from './SawtoothBuild';
import { ValueNoise } from './ValueNoise';
import { NoiseRidges } from './NoiseRidges';
import { NoiseCloud } from './NoiseCloud';
import { Static } from './Static';
import { SeaHorizon } from './SeaHorizon';
import { RippleBars } from './RippleBars';
import { DotSwell } from './DotSwell';
import { DotRipple } from './DotRipple';
import { MoireLines } from './MoireLines';
import { SpiralWave } from './SpiralWave';
import { RingPulse } from './RingPulse';
import { DopplerRings } from './DopplerRings';
import { MachCone } from './MachCone';
import { QuakeTrace } from './QuakeTrace';
import { TideChart } from './TideChart';
import { RopeWave } from './RopeWave';
import { PendulumWave } from './PendulumWave';
import { WavePacket } from './WavePacket';
import { ChladniPlate } from './ChladniPlate';
import { Cymatics } from './Cymatics';
import { FrequencyDial } from './FrequencyDial';
import { Chirp } from './Chirp';
import { DampedSpring } from './DampedSpring';
import { MeshSurface } from './MeshSurface';
import { ContourBands } from './ContourBands';
import { BoatWake } from './BoatWake';
import { PressureWave } from './PressureWave';
import { SlitTank } from './SlitTank';
import { PhasorTrace } from './PhasorTrace';

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
