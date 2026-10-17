/* ============================================================
   33 · CURSORS — pointers, followers and magnets.
   Every specimen is an area that publishes two numbers, --x and --y (0 to 1,
   where the pointer is), and CSS does the rest — a follower is a transition
   with a lag, a trail is the same dot with longer lags, a magnet is a
   translate. Nothing re-renders as the pointer moves. When nobody is pointing,
   a virtual pointer wanders on a slow curve (while the specimen is on screen,
   never under reduced motion) so the effect is always visible; the arrow keys
   move it by hand.
   The still side is the same idea driven by the page: a cursor rides a figure
   of eight, trailing ghosts, as the scroll moves.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { DotCursor } from "./dot-cursor/DotCursor";
import { RingFollower } from "./ring-follower/RingFollower";
import { DotAndRing } from "./dot-and-ring/DotAndRing";
import { PulledButton } from "./pulled-button/PulledButton";
import { TrailingDots } from "./trailing-dots/TrailingDots";
import { CometTail } from "./comet-tail/CometTail";
import { Spotlight } from "./spotlight/Spotlight";
import { FlashlightReveal } from "./flashlight-reveal/FlashlightReveal";
import { Crosshair } from "./crosshair/Crosshair";
import { CoordinateFollower } from "./coordinate-follower/CoordinateFollower";
import { GlowingGrid } from "./glowing-grid/GlowingGrid";
import { TiltingPlate } from "./tilting-plate/TiltingPlate";
import { PointerLayers } from "./pointer-layers/PointerLayers";
import { WatchingEyes } from "./watching-eyes/WatchingEyes";
import { Needle } from "./needle/Needle";
import { Arrow } from "./arrow/Arrow";
import { GooeyBlob } from "./gooey-blob/GooeyBlob";
import { ClickRipples } from "./click-ripples/ClickRipples";
import { DotPainter } from "./dot-painter/DotPainter";
import { NamedCaret } from "./named-caret/NamedCaret";
import { SharedCursors } from "./shared-cursors/SharedCursors";
import { CursorStyles } from "./cursor-styles/CursorStyles";
import { ViewLabel } from "./view-label/ViewLabel";
import { RepellingDots } from "./repelling-dots/RepellingDots";
import { AttractedDots } from "./attracted-dots/AttractedDots";
import { Strings } from "./strings/Strings";
import { ElasticString } from "./elastic-string/ElasticString";
import { Bulge } from "./bulge/Bulge";
import { DifferenceHalo } from "./difference-halo/DifferenceHalo";
import { TurningGear } from "./turning-gear/TurningGear";
import { PointerEdge } from "./pointer-edge/PointerEdge";
import { ButtonGradient } from "./button-gradient/ButtonGradient";
import { SlidingUnderline } from "./sliding-underline/SlidingUnderline";
import { SpeedMeter } from "./speed-meter/SpeedMeter";
import { AngleDial } from "./angle-dial/AngleDial";
import { Stamps } from "./stamps/Stamps";
import { Zones } from "./zones/Zones";
import { TargetPractice } from "./target-practice/TargetPractice";
import { FollowingWave } from "./following-wave/FollowingWave";
import { Orbiters } from "./orbiters/Orbiters";
import { Smear } from "./smear/Smear";
import { MirrorCursors } from "./mirror-cursors/MirrorCursors";

export { Visual };
export { DotCursor, RingFollower, DotAndRing, PulledButton, TrailingDots, CometTail, Spotlight, FlashlightReveal, Crosshair, CoordinateFollower, GlowingGrid, TiltingPlate, PointerLayers, WatchingEyes, Needle, Arrow, GooeyBlob, ClickRipples, DotPainter, NamedCaret, SharedCursors, CursorStyles, ViewLabel, RepellingDots, AttractedDots, Strings, ElasticString, Bulge, DifferenceHalo, TurningGear, PointerEdge, ButtonGradient, SlidingUnderline, SpeedMeter, AngleDial, Stamps, Zones, TargetPractice, FollowingWave, Orbiters, Smear, MirrorCursors };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Dot cursor", DotCursor, "hover"],
  ["Ring follower", RingFollower, "hover"],
  ["Dot and ring", DotAndRing, "hover"],
  ["Pulled button", PulledButton, "hover"],
  ["Trailing dots", TrailingDots, "hover"],
  ["Comet tail", CometTail, "hover"],
  ["Spotlight", Spotlight, "hover"],
  ["Flashlight reveal", FlashlightReveal, "hover"],
  ["Crosshair", Crosshair, "hover"],
  ["Coordinate follower", CoordinateFollower, "hover"],
  ["Glowing grid", GlowingGrid, "hover"],
  ["Tilting plate", TiltingPlate, "hover"],
  ["Pointer layers", PointerLayers, "hover"],
  ["Watching eyes", WatchingEyes, "hover"],
  ["Needle", Needle, "hover"],
  ["Arrow", Arrow, "hover"],
  ["Gooey blob", GooeyBlob, "hover"],
  ["Click ripples", ClickRipples, "click"],
  ["Dot painter", DotPainter, "drag"],
  ["Named caret", NamedCaret, "hover"],
  ["Shared cursors", SharedCursors, "hover"],
  ["Cursor styles", CursorStyles, "hover"],
  ["View label", ViewLabel, "hover"],
  ["Repelling dots", RepellingDots, "hover"],
  ["Attracted dots", AttractedDots, "hover"],
  ["Strings", Strings, "hover"],
  ["Elastic string", ElasticString, "hover"],
  ["Bulge", Bulge, "hover"],
  ["Difference halo", DifferenceHalo, "hover"],
  ["Turning gear", TurningGear, "hover"],
  ["Pointer edge", PointerEdge, "hover"],
  ["Button gradient", ButtonGradient, "hover"],
  ["Sliding underline", SlidingUnderline, "hover"],
  ["Speed meter", SpeedMeter, "hover"],
  ["Angle dial", AngleDial, "hover"],
  ["Stamps", Stamps, "click"],
  ["Zones", Zones, "hover"],
  ["Target practice", TargetPractice, "click"],
  ["Following wave", FollowingWave, "hover"],
  ["Orbiters", Orbiters, "hover"],
  ["Smear", Smear, "hover"],
  ["Mirror cursors", MirrorCursors, "hover"],
];

export default { Visual, items };
