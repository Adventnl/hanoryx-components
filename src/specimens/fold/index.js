/* ============================================================
   18 · FOLD — cards that flip, fold and peel.
   The still side is a leaflet of four panels. Each panel hangs from the one
   before it, and each hinge turns by the same --fold (times 1, -2, 2: that is what
   makes it an accordion). The scroll opens it flat, holds it, and folds it the
   other way. The turning ring on the right holds forty-two things to flip, fold,
   peel and tear.
   ============================================================ */

import { Visual } from './Visual';
import { FlipOver } from './FlipOver';
import { FlipUp } from './FlipUp';
import { DiagonalFlip } from './DiagonalFlip';
import { TwinFlip } from './TwinFlip';
import { FlipDeck } from './FlipDeck';
import { FlipTiles } from './FlipTiles';
import { AccordionFold } from './AccordionFold';
import { LetterFold } from './LetterFold';
import { TriFold } from './TriFold';
import { AdventDoors } from './AdventDoors';
import { PeelCorner } from './PeelCorner';
import { Envelope } from './Envelope';
import { NotebookSpread } from './NotebookSpread';
import { PageTurn } from './PageTurn';
import { Shutters } from './Shutters';
import { Blinds } from './Blinds';
import { Curtain } from './Curtain';
import { GarageDoor } from './GarageDoor';
import { FoldDown } from './FoldDown';
import { Bellows } from './Bellows';
import { HandFan } from './HandFan';
import { PeelLabel } from './PeelLabel';
import { StickerSheet } from './StickerSheet';
import { TearOff } from './TearOff';
import { FaceRoll } from './FaceRoll';
import { SplitOpen } from './SplitOpen';
import { DiagonalFold } from './DiagonalFold';
import { LayerPeel } from './LayerPeel';
import { ScrollRoll } from './ScrollRoll';
import { SpiralPad } from './SpiralPad';
import { LeafCycle } from './LeafCycle';
import { PageFlipper } from './PageFlipper';
import { WaveFold } from './WaveFold';
import { TwistRibbon } from './TwistRibbon';
import { Pleats } from './Pleats';
import { PaperSteps } from './PaperSteps';
import { FoldAngle } from './FoldAngle';
import { BookEdge } from './BookEdge';
import { CardWallet } from './CardWallet';
import { PocketReveal } from './PocketReveal';
import { Perforation } from './Perforation';
import { Clamshell } from './Clamshell';

export { Visual };
export { FlipOver, FlipUp, DiagonalFlip, TwinFlip, FlipDeck, FlipTiles, AccordionFold, LetterFold, TriFold, AdventDoors, PeelCorner, Envelope, NotebookSpread, PageTurn, Shutters, Blinds, Curtain, GarageDoor, FoldDown, Bellows, HandFan, PeelLabel, StickerSheet, TearOff, FaceRoll, SplitOpen, DiagonalFold, LayerPeel, ScrollRoll, SpiralPad, LeafCycle, PageFlipper, WaveFold, TwistRibbon, Pleats, PaperSteps, FoldAngle, BookEdge, CardWallet, PocketReveal, Perforation, Clamshell };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Flip over", FlipOver, "hover"],
  ["Flip up", FlipUp, "hover"],
  ["Diagonal flip", DiagonalFlip, "click"],
  ["Twin flip", TwinFlip, "hover"],
  ["Flip deck", FlipDeck, "click"],
  ["Flip tiles", FlipTiles, "hover"],
  ["Accordion fold", AccordionFold, "click"],
  ["Letter fold", LetterFold, "click"],
  ["Tri-fold", TriFold, "click"],
  ["Advent doors", AdventDoors, "click"],
  ["Peel corner", PeelCorner, "hover"],
  ["Envelope", Envelope, "click"],
  ["Notebook spread", NotebookSpread, "click"],
  ["Page turn", PageTurn, "click"],
  ["Shutters", Shutters, "hover"],
  ["Blinds", Blinds, "hover"],
  ["Curtain", Curtain, "click"],
  ["Garage door", GarageDoor, "click"],
  ["Fold-down", FoldDown, "click"],
  ["Bellows", Bellows, "drag"],
  ["Hand fan", HandFan, "click"],
  ["Peel label", PeelLabel, "hover"],
  ["Sticker sheet", StickerSheet, "click"],
  ["Tear off", TearOff, "click"],
  ["Face roll", FaceRoll, "click"],
  ["Split open", SplitOpen, "hover"],
  ["Diagonal fold", DiagonalFold, "click"],
  ["Layer peel", LayerPeel, "hover"],
  ["Scroll roll", ScrollRoll, "click"],
  ["Spiral pad", SpiralPad, "click"],
  ["Leaf cycle", LeafCycle, "auto"],
  ["Page flipper", PageFlipper, "auto"],
  ["Wave fold", WaveFold, "auto"],
  ["Twist ribbon", TwistRibbon, "auto"],
  ["Pleats", Pleats, "auto"],
  ["Paper steps", PaperSteps, "click"],
  ["Fold angle", FoldAngle, "drag"],
  ["Book edge", BookEdge, "hover"],
  ["Card wallet", CardWallet, "click"],
  ["Pocket reveal", PocketReveal, "hover"],
  ["Perforation", Perforation, "click"],
  ["Clamshell", Clamshell, "click"],
];

export default { Visual, items };
