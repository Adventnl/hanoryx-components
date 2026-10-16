/* ============================================================
   43 · DRIFT — particles, stars and rain.
   The still side is a spiral of dots that winds up as the scroll advances.
   Each of the forty-two specimens is a small particle system drawn on its own
   canvas. A system only runs while it is on screen, and under reduced motion it
   draws one settled frame and stops. Where the pointer matters it is the
   pointer (or the arrow keys, with Enter to act), so a keyboard reaches them all.
   ============================================================ */

import { Visual } from './Visual';
import { StarDrift } from './StarDrift';
import { WarpSpeed } from './WarpSpeed';
import { TwinkleSky } from './TwinkleSky';
import { GalaxySwirl } from './GalaxySwirl';
import { MeteorShower } from './MeteorShower';
import { OrbitingDust } from './OrbitingDust';
import { StarLinks } from './StarLinks';
import { NebulaPuffs } from './NebulaPuffs';
import { Rain } from './Rain';
import { WindowRain } from './WindowRain';
import { SplashRain } from './SplashRain';
import { Snowfall } from './Snowfall';
import { Blizzard } from './Blizzard';
import { MistDrift } from './MistDrift';
import { Lightning } from './Lightning';
import { Embers } from './Embers';
import { SparkBurst } from './SparkBurst';
import { Fireworks } from './Fireworks';
import { Sparkler } from './Sparkler';
import { Fireflies } from './Fireflies';
import { PlasmaMotes } from './PlasmaMotes';
import { Bubbles } from './Bubbles';
import { BokehDiscs } from './BokehDiscs';
import { DustMotes } from './DustMotes';
import { Pollen } from './Pollen';
import { PetalFall } from './PetalFall';
import { Confetti } from './Confetti';
import { AshFall } from './AshFall';
import { CodeRain } from './CodeRain';
import { DataStream } from './DataStream';
import { Flocking } from './Flocking';
import { SwarmChase } from './SwarmChase';
import { Vortex } from './Vortex';
import { GravityWells } from './GravityWells';
import { BouncingBalls } from './BouncingBalls';
import { SpringGrid } from './SpringGrid';
import { IronFilings } from './IronFilings';
import { FlowField } from './FlowField';
import { SmokeWisps } from './SmokeWisps';
import { SandStream } from './SandStream';
import { Glitter } from './Glitter';
import { PondRipples } from './PondRipples';

export { Visual };
export { StarDrift, WarpSpeed, TwinkleSky, GalaxySwirl, MeteorShower, OrbitingDust, StarLinks, NebulaPuffs, Rain, WindowRain, SplashRain, Snowfall, Blizzard, MistDrift, Lightning, Embers, SparkBurst, Fireworks, Sparkler, Fireflies, PlasmaMotes, Bubbles, BokehDiscs, DustMotes, Pollen, PetalFall, Confetti, AshFall, CodeRain, DataStream, Flocking, SwarmChase, Vortex, GravityWells, BouncingBalls, SpringGrid, IronFilings, FlowField, SmokeWisps, SandStream, Glitter, PondRipples };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Star drift", StarDrift, "auto"],
  ["Warp speed", WarpSpeed, "hover"],
  ["Twinkle sky", TwinkleSky, "auto"],
  ["Galaxy swirl", GalaxySwirl, "auto"],
  ["Meteor shower", MeteorShower, "click"],
  ["Orbiting dust", OrbitingDust, "hover"],
  ["Star links", StarLinks, "hover"],
  ["Nebula puffs", NebulaPuffs, "auto"],
  ["Rain", Rain, "auto"],
  ["Window rain", WindowRain, "click"],
  ["Splash rain", SplashRain, "auto"],
  ["Snowfall", Snowfall, "auto"],
  ["Blizzard", Blizzard, "hover"],
  ["Mist drift", MistDrift, "auto"],
  ["Lightning", Lightning, "click"],
  ["Embers", Embers, "auto"],
  ["Spark burst", SparkBurst, "click"],
  ["Fireworks", Fireworks, "click"],
  ["Sparkler", Sparkler, "hover"],
  ["Fireflies", Fireflies, "auto"],
  ["Plasma motes", PlasmaMotes, "hover"],
  ["Bubbles", Bubbles, "auto"],
  ["Bokeh discs", BokehDiscs, "auto"],
  ["Dust motes", DustMotes, "auto"],
  ["Pollen", Pollen, "auto"],
  ["Petal fall", PetalFall, "auto"],
  ["Confetti", Confetti, "click"],
  ["Ash fall", AshFall, "auto"],
  ["Code rain", CodeRain, "auto"],
  ["Data stream", DataStream, "auto"],
  ["Flocking", Flocking, "hover"],
  ["Swarm chase", SwarmChase, "hover"],
  ["Vortex", Vortex, "hover"],
  ["Gravity wells", GravityWells, "click"],
  ["Bouncing balls", BouncingBalls, "click"],
  ["Spring grid", SpringGrid, "hover"],
  ["Iron filings", IronFilings, "hover"],
  ["Flow field", FlowField, "auto"],
  ["Smoke wisps", SmokeWisps, "auto"],
  ["Sand stream", SandStream, "auto"],
  ["Glitter", Glitter, "hover"],
  ["Pond ripples", PondRipples, "auto"],
];

export default { Visual, items };
