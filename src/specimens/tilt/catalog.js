/* ============================================================
   16 · TILT — cards with depth and weight.
   The still side is an exploded module in isometric view. Its six layers pull
   apart along the vertical axis and close again as you scroll, and the whole
   thing turns a quarter: the gap is sin(pin × π), the turn is pin, both in CSS.
   Forty-two cards ride the fly-through, each doing something with perspective.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { PointerTilt } from "./pointer-tilt/PointerTilt";
import { LayerParallax } from "./layer-parallax/LayerParallax";
import { Lift } from "./lift/Lift";
import { IdleSway } from "./idle-sway/IdleSway";
import { CardFan } from "./card-fan/CardFan";
import { PeekCard } from "./peek-card/PeekCard";
import { MagneticCard } from "./magnetic-card/MagneticCard";
import { CubeDrag } from "./cube-drag/CubeDrag";
import { IsoBlock } from "./iso-block/IsoBlock";
import { DragTilt } from "./drag-tilt/DragTilt";
import { PressDown } from "./press-down/PressDown";
import { FloatCard } from "./float-card/FloatCard";
import { DepthText } from "./depth-text/DepthText";
import { FoilCard } from "./foil-card/FoilCard";
import { GlossSweep } from "./gloss-sweep/GlossSweep";
import { CardFlip } from "./card-flip/CardFlip";
import { StackShuffle } from "./stack-shuffle/StackShuffle";
import { HingeCover } from "./hinge-cover/HingeCover";
import { DoorCard } from "./door-card/DoorCard";
import { DrawerCard } from "./drawer-card/DrawerCard";
import { Wobble } from "./wobble/Wobble";
import { CoverFlow } from "./cover-flow/CoverFlow";
import { StackAccordion } from "./stack-accordion/StackAccordion";
import { SlabEdge } from "./slab-edge/SlabEdge";
import { ElevationSlider } from "./elevation-slider/ElevationSlider";
import { ElevationLadder } from "./elevation-ladder/ElevationLadder";
import { GlassSlab } from "./glass-slab/GlassSlab";
import { PerspectiveFloor } from "./perspective-floor/PerspectiveFloor";
import { OrbitCards } from "./orbit-cards/OrbitCards";
import { Rolodex } from "./rolodex/Rolodex";
import { TiltedPair } from "./tilted-pair/TiltedPair";
import { ElasticDrag } from "./elastic-drag/ElasticDrag";
import { HopCard } from "./hop-card/HopCard";
import { PageCurl } from "./page-curl/PageCurl";
import { PopUpCard } from "./pop-up-card/PopUpCard";
import { CoinFlip } from "./coin-flip/CoinFlip";
import { SlabStack } from "./slab-stack/SlabStack";
import { DollyZoom } from "./dolly-zoom/DollyZoom";
import { ShadowCaster } from "./shadow-caster/ShadowCaster";
import { Turntable } from "./turntable/Turntable";
import { FanScan } from "./fan-scan/FanScan";
import { DealCards } from "./deal-cards/DealCards";

export { Visual };
export { PointerTilt, LayerParallax, Lift, IdleSway, CardFan, PeekCard, MagneticCard, CubeDrag, IsoBlock, DragTilt, PressDown, FloatCard, DepthText, FoilCard, GlossSweep, CardFlip, StackShuffle, HingeCover, DoorCard, DrawerCard, Wobble, CoverFlow, StackAccordion, SlabEdge, ElevationSlider, ElevationLadder, GlassSlab, PerspectiveFloor, OrbitCards, Rolodex, TiltedPair, ElasticDrag, HopCard, PageCurl, PopUpCard, CoinFlip, SlabStack, DollyZoom, ShadowCaster, Turntable, FanScan, DealCards };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Pointer tilt", PointerTilt, "hover"],
  ["Layer parallax", LayerParallax, "hover"],
  ["Lift", Lift, "hover"],
  ["Idle sway", IdleSway, "auto"],
  ["Card fan", CardFan, "hover"],
  ["Peek card", PeekCard, "hover"],
  ["Magnetic card", MagneticCard, "hover"],
  ["Cube drag", CubeDrag, "drag"],
  ["Iso block", IsoBlock, "hover"],
  ["Drag tilt", DragTilt, "drag"],
  ["Press down", PressDown, "press"],
  ["Float card", FloatCard, "auto"],
  ["Depth text", DepthText, "hover"],
  ["Foil card", FoilCard, "hover"],
  ["Gloss sweep", GlossSweep, "auto"],
  ["Card flip", CardFlip, "click"],
  ["Stack shuffle", StackShuffle, "click"],
  ["Hinge cover", HingeCover, "click"],
  ["Door card", DoorCard, "hover"],
  ["Drawer card", DrawerCard, "click"],
  ["Wobble", Wobble, "click"],
  ["Cover flow", CoverFlow, "drag"],
  ["Stack accordion", StackAccordion, "click"],
  ["Slab edge", SlabEdge, "hover"],
  ["Elevation slider", ElevationSlider, "drag"],
  ["Elevation ladder", ElevationLadder, "hover"],
  ["Glass slab", GlassSlab, "hover"],
  ["Perspective floor", PerspectiveFloor, "auto"],
  ["Orbit cards", OrbitCards, "auto"],
  ["Rolodex", Rolodex, "auto"],
  ["Tilted pair", TiltedPair, "hover"],
  ["Elastic drag", ElasticDrag, "drag"],
  ["Hop card", HopCard, "click"],
  ["Page curl", PageCurl, "hover"],
  ["Pop-up card", PopUpCard, "click"],
  ["Coin flip", CoinFlip, "click"],
  ["Slab stack", SlabStack, "hover"],
  ["Dolly zoom", DollyZoom, "hover"],
  ["Shadow caster", ShadowCaster, "hover"],
  ["Turntable", Turntable, "auto"],
  ["Fan scan", FanScan, "hover"],
  ["Deal cards", DealCards, "click"],
];

export default { Visual, items };
