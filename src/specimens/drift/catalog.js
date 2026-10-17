/* ============================================================
   43 · DRIFT — particles, stars and rain.
   The still side is a spiral of dots that winds up as the scroll advances.
   Each of the forty-two specimens is a small particle system drawn on its own
   canvas. A system only runs while it is on screen, and under reduced motion it
   draws one settled frame and stops. Where the pointer matters it is the
   pointer (or the arrow keys, with Enter to act), so a keyboard reaches them all.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { StarDrift } from "./star-drift/StarDrift";
import { WarpSpeed } from "./warp-speed/WarpSpeed";
import { TwinkleSky } from "./twinkle-sky/TwinkleSky";
import { GalaxySwirl } from "./galaxy-swirl/GalaxySwirl";
import { MeteorShower } from "./meteor-shower/MeteorShower";
import { OrbitingDust } from "./orbiting-dust/OrbitingDust";
import { StarLinks } from "./star-links/StarLinks";
import { NebulaPuffs } from "./nebula-puffs/NebulaPuffs";
import { Rain } from "./rain/Rain";
import { WindowRain } from "./window-rain/WindowRain";
import { SplashRain } from "./splash-rain/SplashRain";
import { Snowfall } from "./snowfall/Snowfall";
import { Blizzard } from "./blizzard/Blizzard";
import { MistDrift } from "./mist-drift/MistDrift";
import { Lightning } from "./lightning/Lightning";
import { Embers } from "./embers/Embers";
import { SparkBurst } from "./spark-burst/SparkBurst";
import { Fireworks } from "./fireworks/Fireworks";
import { Sparkler } from "./sparkler/Sparkler";
import { Fireflies } from "./fireflies/Fireflies";
import { PlasmaMotes } from "./plasma-motes/PlasmaMotes";
import { Bubbles } from "./bubbles/Bubbles";
import { BokehDiscs } from "./bokeh-discs/BokehDiscs";
import { DustMotes } from "./dust-motes/DustMotes";
import { Pollen } from "./pollen/Pollen";
import { PetalFall } from "./petal-fall/PetalFall";
import { Confetti } from "./confetti/Confetti";
import { AshFall } from "./ash-fall/AshFall";
import { CodeRain } from "./code-rain/CodeRain";
import { DataStream } from "./data-stream/DataStream";
import { Flocking } from "./flocking/Flocking";
import { SwarmChase } from "./swarm-chase/SwarmChase";
import { Vortex } from "./vortex/Vortex";
import { GravityWells } from "./gravity-wells/GravityWells";
import { BouncingBalls } from "./bouncing-balls/BouncingBalls";
import { SpringGrid } from "./spring-grid/SpringGrid";
import { IronFilings } from "./iron-filings/IronFilings";
import { FlowField } from "./flow-field/FlowField";
import { SmokeWisps } from "./smoke-wisps/SmokeWisps";
import { SandStream } from "./sand-stream/SandStream";
import { Glitter } from "./glitter/Glitter";
import { PondRipples } from "./pond-ripples/PondRipples";

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
