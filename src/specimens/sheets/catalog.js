/* ============================================================
   32 · SHEETS — drawers, modals and layered panes.
   The still side is a stack of five panes in depth: the scroll slides them
   apart along the view axis, each lifting out of the pile in turn, the way
   layers come apart in a design tool. Every specimen lives in a small stage of
   its own (so a "full screen" sheet only fills its box), traps nothing,
   and closes with its own button or Escape.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { BottomSheet } from "./bottom-sheet/BottomSheet";
import { SideDrawer } from "./side-drawer/SideDrawer";
import { NavDrawer } from "./nav-drawer/NavDrawer";
import { CentredModal } from "./centred-modal/CentredModal";
import { DiscardDialog } from "./discard-dialog/DiscardDialog";
import { FullTakeover } from "./full-takeover/FullTakeover";
import { PushedPanes } from "./pushed-panes/PushedPanes";
import { SnappingSheet } from "./snapping-sheet/SnappingSheet";
import { PeekingSheet } from "./peeking-sheet/PeekingSheet";
import { DroppingBanner } from "./dropping-banner/DroppingBanner";
import { SplitPane } from "./split-pane/SplitPane";
import { SlideOverDetail } from "./slide-over-detail/SlideOverDetail";
import { CommandModal } from "./command-modal/CommandModal";
import { Lightbox } from "./lightbox/Lightbox";
import { PreferencesSheet } from "./preferences-sheet/PreferencesSheet";
import { ShareSheet } from "./share-sheet/ShareSheet";
import { TourModal } from "./tour-modal/TourModal";
import { FormModal } from "./form-modal/FormModal";
import { PickerSheet } from "./picker-sheet/PickerSheet";
import { NestedSheets } from "./nested-sheets/NestedSheets";
import { CardToModal } from "./card-to-modal/CardToModal";
import { AccordionDrawer } from "./accordion-drawer/AccordionDrawer";
import { MenuOverlay } from "./menu-overlay/MenuOverlay";
import { FiltersSheet } from "./filters-sheet/FiltersSheet";
import { CornerChat } from "./corner-chat/CornerChat";
import { FoldOutPanel } from "./fold-out-panel/FoldOutPanel";
import { CurtainDoors } from "./curtain-doors/CurtainDoors";
import { LayeredDeck } from "./layered-deck/LayeredDeck";
import { ParallaxSheets } from "./parallax-sheets/ParallaxSheets";
import { PileOfPapers } from "./pile-of-papers/PileOfPapers";
import { MiniWindow } from "./mini-window/MiniWindow";
import { TabbedPanes } from "./tabbed-panes/TabbedPanes";
import { ResizableSheet } from "./resizable-sheet/ResizableSheet";
import { BlurredBackdrop } from "./blurred-backdrop/BlurredBackdrop";
import { SwipeToDismiss } from "./swipe-to-dismiss/SwipeToDismiss";
import { GlassPane } from "./glass-pane/GlassPane";
import { RaiseALayer } from "./raise-alayer/RaiseALayer";
import { ExpandingPlayer } from "./expanding-player/ExpandingPlayer";
import { DialogSequence } from "./dialog-sequence/DialogSequence";
import { SidePeek } from "./side-peek/SidePeek";
import { SheetWithUndo } from "./sheet-with-undo/SheetWithUndo";
import { LayerStack } from "./layer-stack/LayerStack";

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
