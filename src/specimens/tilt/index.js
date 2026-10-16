/* ============================================================
   16 · TILT — cards with depth and weight.
   The still side is an exploded module in isometric view. Its six layers pull
   apart along the vertical axis and close again as you scroll, and the whole
   thing turns a quarter: the gap is sin(pin × π), the turn is pin, both in CSS.
   Forty-two cards ride the fly-through, each doing something with perspective.
   ============================================================ */

import { Visual } from './Visual';
import { PointerTilt } from './PointerTilt';
import { LayerParallax } from './LayerParallax';
import { Lift } from './Lift';
import { IdleSway } from './IdleSway';
import { CardFan } from './CardFan';
import { PeekCard } from './PeekCard';
import { MagneticCard } from './MagneticCard';
import { CubeDrag } from './CubeDrag';
import { IsoBlock } from './IsoBlock';
import { DragTilt } from './DragTilt';
import { PressDown } from './PressDown';
import { FloatCard } from './FloatCard';
import { DepthText } from './DepthText';
import { FoilCard } from './FoilCard';
import { GlossSweep } from './GlossSweep';
import { CardFlip } from './CardFlip';
import { StackShuffle } from './StackShuffle';
import { HingeCover } from './HingeCover';
import { DoorCard } from './DoorCard';
import { DrawerCard } from './DrawerCard';
import { Wobble } from './Wobble';
import { CoverFlow } from './CoverFlow';
import { StackAccordion } from './StackAccordion';
import { SlabEdge } from './SlabEdge';
import { ElevationSlider } from './ElevationSlider';
import { ElevationLadder } from './ElevationLadder';
import { GlassSlab } from './GlassSlab';
import { PerspectiveFloor } from './PerspectiveFloor';
import { OrbitCards } from './OrbitCards';
import { Rolodex } from './Rolodex';
import { TiltedPair } from './TiltedPair';
import { ElasticDrag } from './ElasticDrag';
import { HopCard } from './HopCard';
import { PageCurl } from './PageCurl';
import { PopUpCard } from './PopUpCard';
import { CoinFlip } from './CoinFlip';
import { SlabStack } from './SlabStack';
import { DollyZoom } from './DollyZoom';
import { ShadowCaster } from './ShadowCaster';
import { Turntable } from './Turntable';
import { FanScan } from './FanScan';
import { DealCards } from './DealCards';

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
