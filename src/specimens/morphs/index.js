/* ============================================================
   45 · MORPHS — shapes that become other shapes.
   The still side is one shape that is a circle at the top of the page, a star in
   the middle and a square at the end, with every point of its outline sliding
   between them as the scroll advances. The forty-two specimens change shape
   too: by sliding the points of a clipped outline (the same trick), by CSS
   radii and transforms, by tweening the numbers of an SVG, or by melting
   together through a blur-and-threshold filter. Each one changes when you click,
   hover or slide it, or by itself while on screen.
   ============================================================ */

import { Visual } from './Visual';
import { RoundToSquare } from './RoundToSquare';
import { SideLadder } from './SideLadder';
import { PointCount } from './PointCount';
import { GearTeeth } from './GearTeeth';
import { PetalCount } from './PetalCount';
import { WobbleBlob } from './WobbleBlob';
import { HeartBeat } from './HeartBeat';
import { CrossTurn } from './CrossTurn';
import { DiamondCut } from './DiamondCut';
import { FlatAndFlower } from './FlatAndFlower';
import { CornerSlider } from './CornerSlider';
import { BlobRadius } from './BlobRadius';
import { PillToDisc } from './PillToDisc';
import { MenuToCross } from './MenuToCross';
import { PlayAndPause } from './PlayAndPause';
import { PlusToMinus } from './PlusToMinus';
import { CaretFlip } from './CaretFlip';
import { SunToMoon } from './SunToMoon';
import { EyeAndLid } from './EyeAndLid';
import { CheckToCross } from './CheckToCross';
import { WaveToFlat } from './WaveToFlat';
import { DataShuffle } from './DataShuffle';
import { PointTween } from './PointTween';
import { Metaballs } from './Metaballs';
import { GooMenu } from './GooMenu';
import { GooDrops } from './GooDrops';
import { InkSplit } from './InkSplit';
import { CardToAvatar } from './CardToAvatar';
import { ButtonToLoader } from './ButtonToLoader';
import { SearchGrow } from './SearchGrow';
import { ButtonToPanel } from './ButtonToPanel';
import { SquashSwitch } from './SquashSwitch';
import { CheckDraw } from './CheckDraw';
import { DotsToBar } from './DotsToBar';
import { StackToGrid } from './StackToGrid';
import { ListToCards } from './ListToCards';
import { NounBlur } from './NounBlur';
import { PointerLean } from './PointerLean';
import { PopShapes } from './PopShapes';
import { IrisCut } from './IrisCut';
import { BreathingShape } from './BreathingShape';
import { SideCounter } from './SideCounter';

export { Visual };
export { RoundToSquare, SideLadder, PointCount, GearTeeth, PetalCount, WobbleBlob, HeartBeat, CrossTurn, DiamondCut, FlatAndFlower, CornerSlider, BlobRadius, PillToDisc, MenuToCross, PlayAndPause, PlusToMinus, CaretFlip, SunToMoon, EyeAndLid, CheckToCross, WaveToFlat, DataShuffle, PointTween, Metaballs, GooMenu, GooDrops, InkSplit, CardToAvatar, ButtonToLoader, SearchGrow, ButtonToPanel, SquashSwitch, CheckDraw, DotsToBar, StackToGrid, ListToCards, NounBlur, PointerLean, PopShapes, IrisCut, BreathingShape, SideCounter };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Round to square", RoundToSquare, "click"],
  ["Side ladder", SideLadder, "auto"],
  ["Point count", PointCount, "click"],
  ["Gear teeth", GearTeeth, "click"],
  ["Petal count", PetalCount, "auto"],
  ["Wobble blob", WobbleBlob, "auto"],
  ["Heart beat", HeartBeat, "click"],
  ["Cross turn", CrossTurn, "click"],
  ["Diamond cut", DiamondCut, "click"],
  ["Flat and flower", FlatAndFlower, "auto"],
  ["Corner slider", CornerSlider, "drag"],
  ["Blob radius", BlobRadius, "auto"],
  ["Pill to disc", PillToDisc, "click"],
  ["Menu to cross", MenuToCross, "click"],
  ["Play and pause", PlayAndPause, "click"],
  ["Plus to minus", PlusToMinus, "click"],
  ["Caret flip", CaretFlip, "click"],
  ["Sun to moon", SunToMoon, "click"],
  ["Eye and lid", EyeAndLid, "click"],
  ["Check to cross", CheckToCross, "click"],
  ["Wave to flat", WaveToFlat, "click"],
  ["Data shuffle", DataShuffle, "click"],
  ["Point tween", PointTween, "click"],
  ["Metaballs", Metaballs, "hover"],
  ["Goo menu", GooMenu, "click"],
  ["Goo drops", GooDrops, "auto"],
  ["Ink split", InkSplit, "click"],
  ["Card to avatar", CardToAvatar, "click"],
  ["Button to loader", ButtonToLoader, "click"],
  ["Search grow", SearchGrow, "click"],
  ["Button to panel", ButtonToPanel, "click"],
  ["Squash switch", SquashSwitch, "click"],
  ["Check draw", CheckDraw, "click"],
  ["Dots to bar", DotsToBar, "click"],
  ["Stack to grid", StackToGrid, "click"],
  ["List to cards", ListToCards, "click"],
  ["Noun blur", NounBlur, "auto"],
  ["Pointer lean", PointerLean, "hover"],
  ["Pop shapes", PopShapes, "click"],
  ["Iris cut", IrisCut, "click"],
  ["Breathing shape", BreathingShape, "auto"],
  ["Side counter", SideCounter, "auto"],
];

export default { Visual, items };
