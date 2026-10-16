/* ============================================================
   35 · LENSES — magnifiers, compare and focus.
   A lens shows the same thing twice, once as it is and once changed, and lets
   the pointer decide where. Most specimens publish the pointer as --x / --y
   (pointerVars.js) and draw a second, changed copy of the picture clipped to
   a shape that sits on it; a wandering virtual pointer keeps them moving until
   you take over. The still side is one lens that the scroll carries across a
   page of small type, enlarging whatever it passes.
   ============================================================ */

import { Visual } from './Visual';
import { Magnifier } from './Magnifier';
import { SquareLoupe } from './SquareLoupe';
import { ZoomSidePane } from './ZoomSidePane';
import { BeforeAndAfter } from './BeforeAndAfter';
import { TopAndBottom } from './TopAndBottom';
import { ClearPatch } from './ClearPatch';
import { DimmedFocus } from './DimmedFocus';
import { DepthOfField } from './DepthOfField';
import { FisheyeBars } from './FisheyeBars';
import { LetterLens } from './LetterLens';
import { Peephole } from './Peephole';
import { XRay } from './XRay';
import { InvertingLens } from './InvertingLens';
import { ColourPatch } from './ColourPatch';
import { ZoomSteps } from './ZoomSteps';
import { ZoomSlider } from './ZoomSlider';
import { ViewfinderMap } from './ViewfinderMap';
import { DiagonalCompare } from './DiagonalCompare';
import { OnionSkin } from './OnionSkin';
import { DifferenceBlend } from './DifferenceBlend';
import { HoldForBefore } from './HoldForBefore';
import { SunFlare } from './SunFlare';
import { AutofocusBox } from './AutofocusBox';
import { CameraFrame } from './CameraFrame';
import { RackFocus } from './RackFocus';
import { Aperture } from './Aperture';
import { Binoculars } from './Binoculars';
import { Keyhole } from './Keyhole';
import { GuideBand } from './GuideBand';
import { LineFocus } from './LineFocus';
import { WordSwell } from './WordSwell';
import { SoapBubble } from './SoapBubble';
import { GlassLens } from './GlassLens';
import { PrismSplit } from './PrismSplit';
import { ChromaticEdge } from './ChromaticEdge';
import { Scope } from './Scope';
import { PixelLoupe } from './PixelLoupe';
import { ClickZoom } from './ClickZoom';
import { PanWindow } from './PanWindow';
import { TiltShift } from './TiltShift';
import { VignetteSlider } from './VignetteSlider';
import { FrostedWindow } from './FrostedWindow';

export { Visual };
export { Magnifier, SquareLoupe, ZoomSidePane, BeforeAndAfter, TopAndBottom, ClearPatch, DimmedFocus, DepthOfField, FisheyeBars, LetterLens, Peephole, XRay, InvertingLens, ColourPatch, ZoomSteps, ZoomSlider, ViewfinderMap, DiagonalCompare, OnionSkin, DifferenceBlend, HoldForBefore, SunFlare, AutofocusBox, CameraFrame, RackFocus, Aperture, Binoculars, Keyhole, GuideBand, LineFocus, WordSwell, SoapBubble, GlassLens, PrismSplit, ChromaticEdge, Scope, PixelLoupe, ClickZoom, PanWindow, TiltShift, VignetteSlider, FrostedWindow };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Magnifier", Magnifier, "hover"],
  ["Square loupe", SquareLoupe, "hover"],
  ["Zoom side pane", ZoomSidePane, "hover"],
  ["Before and after", BeforeAndAfter, "drag"],
  ["Top and bottom", TopAndBottom, "drag"],
  ["Clear patch", ClearPatch, "hover"],
  ["Dimmed focus", DimmedFocus, "hover"],
  ["Depth of field", DepthOfField, "hover"],
  ["Fisheye bars", FisheyeBars, "hover"],
  ["Letter lens", LetterLens, "hover"],
  ["Peephole", Peephole, "hover"],
  ["X-ray", XRay, "hover"],
  ["Inverting lens", InvertingLens, "hover"],
  ["Colour patch", ColourPatch, "hover"],
  ["Zoom steps", ZoomSteps, "click"],
  ["Zoom slider", ZoomSlider, "drag"],
  ["Viewfinder map", ViewfinderMap, "hover"],
  ["Diagonal compare", DiagonalCompare, "drag"],
  ["Onion skin", OnionSkin, "drag"],
  ["Difference blend", DifferenceBlend, "click"],
  ["Hold for before", HoldForBefore, "hold"],
  ["Sun flare", SunFlare, "hover"],
  ["Autofocus box", AutofocusBox, "auto"],
  ["Camera frame", CameraFrame, "auto"],
  ["Rack focus", RackFocus, "click"],
  ["Aperture", Aperture, "drag"],
  ["Binoculars", Binoculars, "hover"],
  ["Keyhole", Keyhole, "hover"],
  ["Guide band", GuideBand, "hover"],
  ["Line focus", LineFocus, "hover"],
  ["Word swell", WordSwell, "hover"],
  ["Soap bubble", SoapBubble, "hover"],
  ["Glass lens", GlassLens, "hover"],
  ["Prism split", PrismSplit, "hover"],
  ["Chromatic edge", ChromaticEdge, "hover"],
  ["Scope", Scope, "hover"],
  ["Pixel loupe", PixelLoupe, "hover"],
  ["Click zoom", ClickZoom, "click"],
  ["Pan window", PanWindow, "drag"],
  ["Tilt shift", TiltShift, "drag"],
  ["Vignette slider", VignetteSlider, "drag"],
  ["Frosted window", FrostedWindow, "hover"],
];

export default { Visual, items };
