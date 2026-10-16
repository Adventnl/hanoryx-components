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

import { Visual } from './Visual';
import { DotCursor } from './DotCursor';
import { RingFollower } from './RingFollower';
import { DotAndRing } from './DotAndRing';
import { PulledButton } from './PulledButton';
import { TrailingDots } from './TrailingDots';
import { CometTail } from './CometTail';
import { Spotlight } from './Spotlight';
import { FlashlightReveal } from './FlashlightReveal';
import { Crosshair } from './Crosshair';
import { CoordinateFollower } from './CoordinateFollower';
import { GlowingGrid } from './GlowingGrid';
import { TiltingPlate } from './TiltingPlate';
import { PointerLayers } from './PointerLayers';
import { WatchingEyes } from './WatchingEyes';
import { Needle } from './Needle';
import { Arrow } from './Arrow';
import { GooeyBlob } from './GooeyBlob';
import { ClickRipples } from './ClickRipples';
import { DotPainter } from './DotPainter';
import { NamedCaret } from './NamedCaret';
import { SharedCursors } from './SharedCursors';
import { CursorStyles } from './CursorStyles';
import { ViewLabel } from './ViewLabel';
import { RepellingDots } from './RepellingDots';
import { AttractedDots } from './AttractedDots';
import { Strings } from './Strings';
import { ElasticString } from './ElasticString';
import { Bulge } from './Bulge';
import { DifferenceHalo } from './DifferenceHalo';
import { TurningGear } from './TurningGear';
import { PointerEdge } from './PointerEdge';
import { ButtonGradient } from './ButtonGradient';
import { SlidingUnderline } from './SlidingUnderline';
import { SpeedMeter } from './SpeedMeter';
import { AngleDial } from './AngleDial';
import { Stamps } from './Stamps';
import { Zones } from './Zones';
import { TargetPractice } from './TargetPractice';
import { FollowingWave } from './FollowingWave';
import { Orbiters } from './Orbiters';
import { Smear } from './Smear';
import { MirrorCursors } from './MirrorCursors';

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
