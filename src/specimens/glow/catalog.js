/* ============================================================
   17 · GLOW — spotlights, beams and borders of light.
   The still side is a pendant lamp that swings over a row of tiles. Where the
   cone falls a tile lights up: border, fill, glow and lift. Both the swing and the
   cone are one number — the beam's position, sin(pin × 4π) — and CSS does the
   rest (atan2 for the lamp's angle, a clip-path for the cone, clamp for how lit
   each tile is). Forty-two cards on the left are each lit in their own way.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { SpotlightCard } from "./spotlight-card/SpotlightCard";
import { BorderBeam } from "./border-beam/BorderBeam";
import { GradientBorder } from "./gradient-border/GradientBorder";
import { SpinBorder } from "./spin-border/SpinBorder";
import { OutlineGlow } from "./outline-glow/OutlineGlow";
import { InnerGlow } from "./inner-glow/InnerGlow";
import { RimLight } from "./rim-light/RimLight";
import { FlashlightText } from "./flashlight-text/FlashlightText";
import { SharedLight } from "./shared-light/SharedLight";
import { PrismEdge } from "./prism-edge/PrismEdge";
import { AuroraCard } from "./aurora-card/AuroraCard";
import { PressFlash } from "./press-flash/PressFlash";
import { BreathingGlow } from "./breathing-glow/BreathingGlow";
import { ShineBorder } from "./shine-border/ShineBorder";
import { Meteors } from "./meteors/Meteors";
import { TopBeam } from "./top-beam/TopBeam";
import { LensFlare } from "./lens-flare/LensFlare";
import { Backlight } from "./backlight/Backlight";
import { BloomText } from "./bloom-text/BloomText";
import { LightSwitch } from "./light-switch/LightSwitch";
import { Dimmer } from "./dimmer/Dimmer";
import { LaserGrid } from "./laser-grid/LaserGrid";
import { ScanSweep } from "./scan-sweep/ScanSweep";
import { XRayLens } from "./xray-lens/XRayLens";
import { HeatTrail } from "./heat-trail/HeatTrail";
import { FocusGlow } from "./focus-glow/FocusGlow";
import { HaloRings } from "./halo-rings/HaloRings";
import { PulseRadar } from "./pulse-radar/PulseRadar";
import { Ripple } from "./ripple/Ripple";
import { EdgeLight } from "./edge-light/EdgeLight";
import { GlowButton } from "./glow-button/GlowButton";
import { GlowField } from "./glow-field/GlowField";
import { GlowToggle } from "./glow-toggle/GlowToggle";
import { GlowBar } from "./glow-bar/GlowBar";
import { GlowLine } from "./glow-line/GlowLine";
import { DotTrail } from "./dot-trail/DotTrail";
import { MagicCard } from "./magic-card/MagicCard";
import { MeshGradient } from "./mesh-gradient/MeshGradient";
import { Starfield } from "./starfield/Starfield";
import { Candle } from "./candle/Candle";
import { LightLeak } from "./light-leak/LightLeak";
import { Bokeh } from "./bokeh/Bokeh";

export { Visual };
export { SpotlightCard, BorderBeam, GradientBorder, SpinBorder, OutlineGlow, InnerGlow, RimLight, FlashlightText, SharedLight, PrismEdge, AuroraCard, PressFlash, BreathingGlow, ShineBorder, Meteors, TopBeam, LensFlare, Backlight, BloomText, LightSwitch, Dimmer, LaserGrid, ScanSweep, XRayLens, HeatTrail, FocusGlow, HaloRings, PulseRadar, Ripple, EdgeLight, GlowButton, GlowField, GlowToggle, GlowBar, GlowLine, DotTrail, MagicCard, MeshGradient, Starfield, Candle, LightLeak, Bokeh };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Spotlight card", SpotlightCard, "hover"],
  ["Border beam", BorderBeam, "auto"],
  ["Gradient border", GradientBorder, "auto"],
  ["Spin border", SpinBorder, "auto"],
  ["Outline glow", OutlineGlow, "hover"],
  ["Inner glow", InnerGlow, "hover"],
  ["Rim light", RimLight, "hover"],
  ["Flashlight text", FlashlightText, "hover"],
  ["Shared light", SharedLight, "hover"],
  ["Prism edge", PrismEdge, "hover"],
  ["Aurora card", AuroraCard, "auto"],
  ["Press flash", PressFlash, "press"],
  ["Breathing glow", BreathingGlow, "auto"],
  ["Shine border", ShineBorder, "auto"],
  ["Meteors", Meteors, "auto"],
  ["Top beam", TopBeam, "auto"],
  ["Lens flare", LensFlare, "hover"],
  ["Backlight", Backlight, "hover"],
  ["Bloom text", BloomText, "click"],
  ["Light switch", LightSwitch, "click"],
  ["Dimmer", Dimmer, "drag"],
  ["Laser grid", LaserGrid, "auto"],
  ["Scan sweep", ScanSweep, "auto"],
  ["X-ray lens", XRayLens, "hover"],
  ["Heat trail", HeatTrail, "hover"],
  ["Focus glow", FocusGlow, "keys"],
  ["Halo rings", HaloRings, "hover"],
  ["Pulse radar", PulseRadar, "auto"],
  ["Ripple", Ripple, "press"],
  ["Edge light", EdgeLight, "hover"],
  ["Glow button", GlowButton, "hover"],
  ["Glow field", GlowField, "type"],
  ["Glow toggle", GlowToggle, "click"],
  ["Glow bar", GlowBar, "auto"],
  ["Glow line", GlowLine, "auto"],
  ["Dot trail", DotTrail, "hover"],
  ["Magic card", MagicCard, "hover"],
  ["Mesh gradient", MeshGradient, "auto"],
  ["Starfield", Starfield, "auto"],
  ["Candle", Candle, "auto"],
  ["Light leak", LightLeak, "auto"],
  ["Bokeh", Bokeh, "auto"],
];

export default { Visual, items };
