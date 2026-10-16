/* ============================================================
   25 · WAYPOINTS — outlines, contents and wayfinding.
   The still side is a compass: a needle that turns twice over the journey and
   eight waypoints around the dial that light as it passes. Specimens are the
   other ways a page tells you where you are and where to go next.
   ============================================================ */

import { Visual } from './Visual';
import { ContentsList } from './ContentsList';
import { OutlineRail } from './OutlineRail';
import { PageThumbnail } from './PageThumbnail';
import { BackToTopRing } from './BackToTopRing';
import { SectionDots } from './SectionDots';
import { AnchorChips } from './AnchorChips';
import { CompassRose } from './CompassRose';
import { Signpost } from './Signpost';
import { YouAreHere } from './YouAreHere';
import { FloorPlan } from './FloorPlan';
import { SubwayLine } from './SubwayLine';
import { TrailBlazes } from './TrailBlazes';
import { MileMarkers } from './MileMarkers';
import { RouteTrace } from './RouteTrace';
import { ReadingMarks } from './ReadingMarks';
import { NumberedSections } from './NumberedSections';
import { NextAndPrevious } from './NextAndPrevious';
import { StickyChapter } from './StickyChapter';
import { ScrollCue } from './ScrollCue';
import { SkipLink } from './SkipLink';
import { ContentsTree } from './ContentsTree';
import { DotIndex } from './DotIndex';
import { GateSigns } from './GateSigns';
import { DeparturesBoard } from './DeparturesBoard';
import { WaypointRadar } from './WaypointRadar';
import { CoordinateGrid } from './CoordinateGrid';
import { RouteLegs } from './RouteLegs';
import { ElevationProfile } from './ElevationProfile';
import { BookmarkStrip } from './BookmarkStrip';
import { PageFlags } from './PageFlags';
import { DepthMarker } from './DepthMarker';
import { ZoomLevels } from './ZoomLevels';
import { TreasureMap } from './TreasureMap';
import { LighthouseBeam } from './LighthouseBeam';
import { SnapDots } from './SnapDots';
import { JumpSelect } from './JumpSelect';
import { AnnotationPins } from './AnnotationPins';
import { LandmarkIndex } from './LandmarkIndex';
import { OrientationCube } from './OrientationCube';
import { StationMap } from './StationMap';
import { Elevator } from './Elevator';
import { BearingDial } from './BearingDial';

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
