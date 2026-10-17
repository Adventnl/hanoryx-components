/* ============================================================
   18 · FOLD — cards that flip, fold and peel.
   The still side is a leaflet of four panels. Each panel hangs from the one
   before it, and each hinge turns by the same --fold (times 1, -2, 2: that is what
   makes it an accordion). The scroll opens it flat, holds it, and folds it the
   other way. The turning ring on the right holds forty-two things to flip, fold,
   peel and tear.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { FlipOver } from "./flip-over/FlipOver";
import { FlipUp } from "./flip-up/FlipUp";
import { DiagonalFlip } from "./diagonal-flip/DiagonalFlip";
import { TwinFlip } from "./twin-flip/TwinFlip";
import { FlipDeck } from "./flip-deck/FlipDeck";
import { FlipTiles } from "./flip-tiles/FlipTiles";
import { AccordionFold } from "./accordion-fold/AccordionFold";
import { LetterFold } from "./letter-fold/LetterFold";
import { TriFold } from "./tri-fold/TriFold";
import { AdventDoors } from "./advent-doors/AdventDoors";
import { PeelCorner } from "./peel-corner/PeelCorner";
import { Envelope } from "./envelope/Envelope";
import { NotebookSpread } from "./notebook-spread/NotebookSpread";
import { PageTurn } from "./page-turn/PageTurn";
import { Shutters } from "./shutters/Shutters";
import { Blinds } from "./blinds/Blinds";
import { Curtain } from "./curtain/Curtain";
import { GarageDoor } from "./garage-door/GarageDoor";
import { FoldDown } from "./fold-down/FoldDown";
import { Bellows } from "./bellows/Bellows";
import { HandFan } from "./hand-fan/HandFan";
import { PeelLabel } from "./peel-label/PeelLabel";
import { StickerSheet } from "./sticker-sheet/StickerSheet";
import { TearOff } from "./tear-off/TearOff";
import { FaceRoll } from "./face-roll/FaceRoll";
import { SplitOpen } from "./split-open/SplitOpen";
import { DiagonalFold } from "./diagonal-fold/DiagonalFold";
import { LayerPeel } from "./layer-peel/LayerPeel";
import { ScrollRoll } from "./scroll-roll/ScrollRoll";
import { SpiralPad } from "./spiral-pad/SpiralPad";
import { LeafCycle } from "./leaf-cycle/LeafCycle";
import { PageFlipper } from "./page-flipper/PageFlipper";
import { WaveFold } from "./wave-fold/WaveFold";
import { TwistRibbon } from "./twist-ribbon/TwistRibbon";
import { Pleats } from "./pleats/Pleats";
import { PaperSteps } from "./paper-steps/PaperSteps";
import { FoldAngle } from "./fold-angle/FoldAngle";
import { BookEdge } from "./book-edge/BookEdge";
import { CardWallet } from "./card-wallet/CardWallet";
import { PocketReveal } from "./pocket-reveal/PocketReveal";
import { Perforation } from "./perforation/Perforation";
import { Clamshell } from "./clamshell/Clamshell";

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
