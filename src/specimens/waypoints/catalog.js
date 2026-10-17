/* ============================================================
   25 · WAYPOINTS — outlines, contents and wayfinding.
   The still side is a compass: a needle that turns twice over the journey and
   eight waypoints around the dial that light as it passes. Specimens are the
   other ways a page tells you where you are and where to go next.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { ContentsList } from "./contents-list/ContentsList";
import { OutlineRail } from "./outline-rail/OutlineRail";
import { PageThumbnail } from "./page-thumbnail/PageThumbnail";
import { BackToTopRing } from "./back-to-top-ring/BackToTopRing";
import { SectionDots } from "./section-dots/SectionDots";
import { AnchorChips } from "./anchor-chips/AnchorChips";
import { CompassRose } from "./compass-rose/CompassRose";
import { Signpost } from "./signpost/Signpost";
import { YouAreHere } from "./you-are-here/YouAreHere";
import { FloorPlan } from "./floor-plan/FloorPlan";
import { SubwayLine } from "./subway-line/SubwayLine";
import { TrailBlazes } from "./trail-blazes/TrailBlazes";
import { MileMarkers } from "./mile-markers/MileMarkers";
import { RouteTrace } from "./route-trace/RouteTrace";
import { ReadingMarks } from "./reading-marks/ReadingMarks";
import { NumberedSections } from "./numbered-sections/NumberedSections";
import { NextAndPrevious } from "./next-and-previous/NextAndPrevious";
import { StickyChapter } from "./sticky-chapter/StickyChapter";
import { ScrollCue } from "./scroll-cue/ScrollCue";
import { SkipLink } from "./skip-link/SkipLink";
import { ContentsTree } from "./contents-tree/ContentsTree";
import { DotIndex } from "./dot-index/DotIndex";
import { GateSigns } from "./gate-signs/GateSigns";
import { DeparturesBoard } from "./departures-board/DeparturesBoard";
import { WaypointRadar } from "./waypoint-radar/WaypointRadar";
import { CoordinateGrid } from "./coordinate-grid/CoordinateGrid";
import { RouteLegs } from "./route-legs/RouteLegs";
import { ElevationProfile } from "./elevation-profile/ElevationProfile";
import { BookmarkStrip } from "./bookmark-strip/BookmarkStrip";
import { PageFlags } from "./page-flags/PageFlags";
import { DepthMarker } from "./depth-marker/DepthMarker";
import { ZoomLevels } from "./zoom-levels/ZoomLevels";
import { TreasureMap } from "./treasure-map/TreasureMap";
import { LighthouseBeam } from "./lighthouse-beam/LighthouseBeam";
import { SnapDots } from "./snap-dots/SnapDots";
import { JumpSelect } from "./jump-select/JumpSelect";
import { AnnotationPins } from "./annotation-pins/AnnotationPins";
import { LandmarkIndex } from "./landmark-index/LandmarkIndex";
import { OrientationCube } from "./orientation-cube/OrientationCube";
import { StationMap } from "./station-map/StationMap";
import { Elevator } from "./elevator/Elevator";
import { BearingDial } from "./bearing-dial/BearingDial";

export { Visual };
export { ContentsList, OutlineRail, PageThumbnail, BackToTopRing, SectionDots, AnchorChips, CompassRose, Signpost, YouAreHere, FloorPlan, SubwayLine, TrailBlazes, MileMarkers, RouteTrace, ReadingMarks, NumberedSections, NextAndPrevious, StickyChapter, ScrollCue, SkipLink, ContentsTree, DotIndex, GateSigns, DeparturesBoard, WaypointRadar, CoordinateGrid, RouteLegs, ElevationProfile, BookmarkStrip, PageFlags, DepthMarker, ZoomLevels, TreasureMap, LighthouseBeam, SnapDots, JumpSelect, AnnotationPins, LandmarkIndex, OrientationCube, StationMap, Elevator, BearingDial };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Contents list", ContentsList, "click"],
  ["Outline rail", OutlineRail, "hover"],
  ["Page thumbnail", PageThumbnail, "drag"],
  ["Back-to-top ring", BackToTopRing, "drag"],
  ["Section dots", SectionDots, "click"],
  ["Anchor chips", AnchorChips, "click"],
  ["Compass rose", CompassRose, "click"],
  ["Signpost", Signpost, "click"],
  ["You are here", YouAreHere, "click"],
  ["Floor plan", FloorPlan, "click"],
  ["Subway line", SubwayLine, "click"],
  ["Trail blazes", TrailBlazes, "click"],
  ["Mile markers", MileMarkers, "drag"],
  ["Route trace", RouteTrace, "click"],
  ["Reading marks", ReadingMarks, "drag"],
  ["Numbered sections", NumberedSections, "click"],
  ["Next and previous", NextAndPrevious, "click"],
  ["Sticky chapter", StickyChapter, "scroll"],
  ["Scroll cue", ScrollCue, "auto"],
  ["Skip link", SkipLink, "keys"],
  ["Contents tree", ContentsTree, "click"],
  ["Dot index", DotIndex, "click"],
  ["Gate signs", GateSigns, "click"],
  ["Departures board", DeparturesBoard, "auto"],
  ["Waypoint radar", WaypointRadar, "auto"],
  ["Coordinate grid", CoordinateGrid, "hover"],
  ["Route legs", RouteLegs, "click"],
  ["Elevation profile", ElevationProfile, "hover"],
  ["Bookmark strip", BookmarkStrip, "click"],
  ["Page flags", PageFlags, "click"],
  ["Depth marker", DepthMarker, "drag"],
  ["Zoom levels", ZoomLevels, "click"],
  ["Treasure map", TreasureMap, "click"],
  ["Lighthouse beam", LighthouseBeam, "auto"],
  ["Snap dots", SnapDots, "scroll"],
  ["Jump select", JumpSelect, "click"],
  ["Annotation pins", AnnotationPins, "hover"],
  ["Landmark index", LandmarkIndex, "click"],
  ["Orientation cube", OrientationCube, "click"],
  ["Station map", StationMap, "click"],
  ["Elevator", Elevator, "click"],
  ["Bearing dial", BearingDial, "drag"],
];

export default { Visual, items };
