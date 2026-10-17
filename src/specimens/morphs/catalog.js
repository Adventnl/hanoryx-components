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

import { Visual } from "./visual/Visual";
import { RoundToSquare } from "./round-to-square/RoundToSquare";
import { SideLadder } from "./side-ladder/SideLadder";
import { PointCount } from "./point-count/PointCount";
import { GearTeeth } from "./gear-teeth/GearTeeth";
import { PetalCount } from "./petal-count/PetalCount";
import { WobbleBlob } from "./wobble-blob/WobbleBlob";
import { HeartBeat } from "./heart-beat/HeartBeat";
import { CrossTurn } from "./cross-turn/CrossTurn";
import { DiamondCut } from "./diamond-cut/DiamondCut";
import { FlatAndFlower } from "./flat-and-flower/FlatAndFlower";
import { CornerSlider } from "./corner-slider/CornerSlider";
import { BlobRadius } from "./blob-radius/BlobRadius";
import { PillToDisc } from "./pill-to-disc/PillToDisc";
import { MenuToCross } from "./menu-to-cross/MenuToCross";
import { PlayAndPause } from "./play-and-pause/PlayAndPause";
import { PlusToMinus } from "./plus-to-minus/PlusToMinus";
import { CaretFlip } from "./caret-flip/CaretFlip";
import { SunToMoon } from "./sun-to-moon/SunToMoon";
import { EyeAndLid } from "./eye-and-lid/EyeAndLid";
import { CheckToCross } from "./check-to-cross/CheckToCross";
import { WaveToFlat } from "./wave-to-flat/WaveToFlat";
import { DataShuffle } from "./data-shuffle/DataShuffle";
import { PointTween } from "./point-tween/PointTween";
import { Metaballs } from "./metaballs/Metaballs";
import { GooMenu } from "./goo-menu/GooMenu";
import { GooDrops } from "./goo-drops/GooDrops";
import { InkSplit } from "./ink-split/InkSplit";
import { CardToAvatar } from "./card-to-avatar/CardToAvatar";
import { ButtonToLoader } from "./button-to-loader/ButtonToLoader";
import { SearchGrow } from "./search-grow/SearchGrow";
import { ButtonToPanel } from "./button-to-panel/ButtonToPanel";
import { SquashSwitch } from "./squash-switch/SquashSwitch";
import { CheckDraw } from "./check-draw/CheckDraw";
import { DotsToBar } from "./dots-to-bar/DotsToBar";
import { StackToGrid } from "./stack-to-grid/StackToGrid";
import { ListToCards } from "./list-to-cards/ListToCards";
import { NounBlur } from "./noun-blur/NounBlur";
import { PointerLean } from "./pointer-lean/PointerLean";
import { PopShapes } from "./pop-shapes/PopShapes";
import { IrisCut } from "./iris-cut/IrisCut";
import { BreathingShape } from "./breathing-shape/BreathingShape";
import { SideCounter } from "./side-counter/SideCounter";

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
