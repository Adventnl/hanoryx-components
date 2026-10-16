/* ============================================================
   17 · GLOW — spotlights, beams and borders of light.
   The still side is a pendant lamp that swings over a row of tiles. Where the
   cone falls a tile lights up: border, fill, glow and lift. Both the swing and the
   cone are one number — the beam's position, sin(pin × 4π) — and CSS does the
   rest (atan2 for the lamp's angle, a clip-path for the cone, clamp for how lit
   each tile is). Forty-two cards on the left are each lit in their own way.
   ============================================================ */

import { Visual } from './Visual';
import { SpotlightCard } from './SpotlightCard';
import { BorderBeam } from './BorderBeam';
import { GradientBorder } from './GradientBorder';
import { SpinBorder } from './SpinBorder';
import { OutlineGlow } from './OutlineGlow';
import { InnerGlow } from './InnerGlow';
import { RimLight } from './RimLight';
import { FlashlightText } from './FlashlightText';
import { SharedLight } from './SharedLight';
import { PrismEdge } from './PrismEdge';
import { AuroraCard } from './AuroraCard';
import { PressFlash } from './PressFlash';
import { BreathingGlow } from './BreathingGlow';
import { ShineBorder } from './ShineBorder';
import { Meteors } from './Meteors';
import { TopBeam } from './TopBeam';
import { LensFlare } from './LensFlare';
import { Backlight } from './Backlight';
import { BloomText } from './BloomText';
import { LightSwitch } from './LightSwitch';
import { Dimmer } from './Dimmer';
import { LaserGrid } from './LaserGrid';
import { ScanSweep } from './ScanSweep';
import { XRayLens } from './XRayLens';
import { HeatTrail } from './HeatTrail';
import { FocusGlow } from './FocusGlow';
import { HaloRings } from './HaloRings';
import { PulseRadar } from './PulseRadar';
import { Ripple } from './Ripple';
import { EdgeLight } from './EdgeLight';
import { GlowButton } from './GlowButton';
import { GlowField } from './GlowField';
import { GlowToggle } from './GlowToggle';
import { GlowBar } from './GlowBar';
import { GlowLine } from './GlowLine';
import { DotTrail } from './DotTrail';
import { MagicCard } from './MagicCard';
import { MeshGradient } from './MeshGradient';
import { Starfield } from './Starfield';
import { Candle } from './Candle';
import { LightLeak } from './LightLeak';
import { Bokeh } from './Bokeh';

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
