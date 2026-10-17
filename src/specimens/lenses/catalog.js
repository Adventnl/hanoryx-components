/* ============================================================
   35 · LENSES — magnifiers, compare and focus.
   A lens shows the same thing twice, once as it is and once changed, and lets
   the pointer decide where. Most specimens publish the pointer as --x / --y
   (pointerVars.js) and draw a second, changed copy of the picture clipped to
   a shape that sits on it; a wandering virtual pointer keeps them moving until
   you take over. The still side is one lens that the scroll carries across a
   page of small type, enlarging whatever it passes.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { Magnifier } from "./magnifier/Magnifier";
import { SquareLoupe } from "./square-loupe/SquareLoupe";
import { ZoomSidePane } from "./zoom-side-pane/ZoomSidePane";
import { BeforeAndAfter } from "./before-and-after/BeforeAndAfter";
import { TopAndBottom } from "./top-and-bottom/TopAndBottom";
import { ClearPatch } from "./clear-patch/ClearPatch";
import { DimmedFocus } from "./dimmed-focus/DimmedFocus";
import { DepthOfField } from "./depth-of-field/DepthOfField";
import { FisheyeBars } from "./fisheye-bars/FisheyeBars";
import { LetterLens } from "./letter-lens/LetterLens";
import { Peephole } from "./peephole/Peephole";
import { XRay } from "./xray/XRay";
import { InvertingLens } from "./inverting-lens/InvertingLens";
import { ColourPatch } from "./colour-patch/ColourPatch";
import { ZoomSteps } from "./zoom-steps/ZoomSteps";
import { ZoomSlider } from "./zoom-slider/ZoomSlider";
import { ViewfinderMap } from "./viewfinder-map/ViewfinderMap";
import { DiagonalCompare } from "./diagonal-compare/DiagonalCompare";
import { OnionSkin } from "./onion-skin/OnionSkin";
import { DifferenceBlend } from "./difference-blend/DifferenceBlend";
import { HoldForBefore } from "./hold-for-before/HoldForBefore";
import { SunFlare } from "./sun-flare/SunFlare";
import { AutofocusBox } from "./autofocus-box/AutofocusBox";
import { CameraFrame } from "./camera-frame/CameraFrame";
import { RackFocus } from "./rack-focus/RackFocus";
import { Aperture } from "./aperture/Aperture";
import { Binoculars } from "./binoculars/Binoculars";
import { Keyhole } from "./keyhole/Keyhole";
import { GuideBand } from "./guide-band/GuideBand";
import { LineFocus } from "./line-focus/LineFocus";
import { WordSwell } from "./word-swell/WordSwell";
import { SoapBubble } from "./soap-bubble/SoapBubble";
import { GlassLens } from "./glass-lens/GlassLens";
import { PrismSplit } from "./prism-split/PrismSplit";
import { ChromaticEdge } from "./chromatic-edge/ChromaticEdge";
import { Scope } from "./scope/Scope";
import { PixelLoupe } from "./pixel-loupe/PixelLoupe";
import { ClickZoom } from "./click-zoom/ClickZoom";
import { PanWindow } from "./pan-window/PanWindow";
import { TiltShift } from "./tilt-shift/TiltShift";
import { VignetteSlider } from "./vignette-slider/VignetteSlider";
import { FrostedWindow } from "./frosted-window/FrostedWindow";

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
