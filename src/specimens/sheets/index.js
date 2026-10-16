/* ============================================================
   32 · SHEETS — drawers, modals and layered panes.
   The still side is a stack of five panes in depth: the scroll slides them
   apart along the view axis, each lifting out of the pile in turn, the way
   layers come apart in a design tool. Every specimen lives in a small stage of
   its own (so a "full screen" sheet only fills its box), traps nothing,
   and closes with its own button or Escape.
   ============================================================ */

import { Visual } from './Visual';
import { BottomSheet } from './BottomSheet';
import { SideDrawer } from './SideDrawer';
import { NavDrawer } from './NavDrawer';
import { CentredModal } from './CentredModal';
import { DiscardDialog } from './DiscardDialog';
import { FullTakeover } from './FullTakeover';
import { PushedPanes } from './PushedPanes';
import { SnappingSheet } from './SnappingSheet';
import { PeekingSheet } from './PeekingSheet';
import { DroppingBanner } from './DroppingBanner';
import { SplitPane } from './SplitPane';
import { SlideOverDetail } from './SlideOverDetail';
import { CommandModal } from './CommandModal';
import { Lightbox } from './Lightbox';
import { PreferencesSheet } from './PreferencesSheet';
import { ShareSheet } from './ShareSheet';
import { TourModal } from './TourModal';
import { FormModal } from './FormModal';
import { PickerSheet } from './PickerSheet';
import { NestedSheets } from './NestedSheets';
import { CardToModal } from './CardToModal';
import { AccordionDrawer } from './AccordionDrawer';
import { MenuOverlay } from './MenuOverlay';
import { FiltersSheet } from './FiltersSheet';
import { CornerChat } from './CornerChat';
import { FoldOutPanel } from './FoldOutPanel';
import { CurtainDoors } from './CurtainDoors';
import { LayeredDeck } from './LayeredDeck';
import { ParallaxSheets } from './ParallaxSheets';
import { PileOfPapers } from './PileOfPapers';
import { MiniWindow } from './MiniWindow';
import { TabbedPanes } from './TabbedPanes';
import { ResizableSheet } from './ResizableSheet';
import { BlurredBackdrop } from './BlurredBackdrop';
import { SwipeToDismiss } from './SwipeToDismiss';
import { GlassPane } from './GlassPane';
import { RaiseALayer } from './RaiseALayer';
import { ExpandingPlayer } from './ExpandingPlayer';
import { DialogSequence } from './DialogSequence';
import { SidePeek } from './SidePeek';
import { SheetWithUndo } from './SheetWithUndo';
import { LayerStack } from './LayerStack';

export { Visual };
export { BottomSheet, SideDrawer, NavDrawer, CentredModal, DiscardDialog, FullTakeover, PushedPanes, SnappingSheet, PeekingSheet, DroppingBanner, SplitPane, SlideOverDetail, CommandModal, Lightbox, PreferencesSheet, ShareSheet, TourModal, FormModal, PickerSheet, NestedSheets, CardToModal, AccordionDrawer, MenuOverlay, FiltersSheet, CornerChat, FoldOutPanel, CurtainDoors, LayeredDeck, ParallaxSheets, PileOfPapers, MiniWindow, TabbedPanes, ResizableSheet, BlurredBackdrop, SwipeToDismiss, GlassPane, RaiseALayer, ExpandingPlayer, DialogSequence, SidePeek, SheetWithUndo, LayerStack };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Bottom sheet", BottomSheet, "click"],
  ["Side drawer", SideDrawer, "click"],
  ["Nav drawer", NavDrawer, "click"],
  ["Centred modal", CentredModal, "click"],
  ["Discard dialog", DiscardDialog, "click"],
  ["Full takeover", FullTakeover, "click"],
  ["Pushed panes", PushedPanes, "click"],
  ["Snapping sheet", SnappingSheet, "drag"],
  ["Peeking sheet", PeekingSheet, "click"],
  ["Dropping banner", DroppingBanner, "click"],
  ["Split pane", SplitPane, "drag"],
  ["Slide-over detail", SlideOverDetail, "click"],
  ["Command modal", CommandModal, "click"],
  ["Lightbox", Lightbox, "click"],
  ["Preferences sheet", PreferencesSheet, "click"],
  ["Share sheet", ShareSheet, "click"],
  ["Tour modal", TourModal, "click"],
  ["Form modal", FormModal, "click"],
  ["Picker sheet", PickerSheet, "click"],
  ["Nested sheets", NestedSheets, "click"],
  ["Card to modal", CardToModal, "click"],
  ["Accordion drawer", AccordionDrawer, "click"],
  ["Menu overlay", MenuOverlay, "click"],
  ["Filters sheet", FiltersSheet, "click"],
  ["Corner chat", CornerChat, "click"],
  ["Fold-out panel", FoldOutPanel, "click"],
  ["Curtain doors", CurtainDoors, "click"],
  ["Layered deck", LayeredDeck, "click"],
  ["Parallax sheets", ParallaxSheets, "hover"],
  ["Pile of papers", PileOfPapers, "click"],
  ["Mini window", MiniWindow, "click"],
  ["Tabbed panes", TabbedPanes, "click"],
  ["Resizable sheet", ResizableSheet, "drag"],
  ["Blurred backdrop", BlurredBackdrop, "click"],
  ["Swipe to dismiss", SwipeToDismiss, "drag"],
  ["Glass pane", GlassPane, "click"],
  ["Raise a layer", RaiseALayer, "click"],
  ["Expanding player", ExpandingPlayer, "click"],
  ["Dialog sequence", DialogSequence, "click"],
  ["Side peek", SidePeek, "drag"],
  ["Sheet with undo", SheetWithUndo, "click"],
  ["Layer stack", LayerStack, "click"],
];

export default { Visual, items };
