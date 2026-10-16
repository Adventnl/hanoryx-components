/* ============================================================
   22 · DOCKS — floating bars, rails and toolbars.
   The still side is a dock of seven discs with the classic magnification, but
   driven by the scroll: a swell travels along the row as the page moves, so
   the disc under the "cursor" rises and its neighbours follow.
   ============================================================ */

import { Visual } from './Visual';
import { MagnifyDock } from './MagnifyDock';
import { IconRail } from './IconRail';
import { GroupedToolbar } from './GroupedToolbar';
import { TypeBar } from './TypeBar';
import { CommandBar } from './CommandBar';
import { DotDock } from './DotDock';
import { ExpandingRail } from './ExpandingRail';
import { TransportBar } from './TransportBar';
import { ZoomBar } from './ZoomBar';
import { ReactionBar } from './ReactionBar';
import { SelectionBubble } from './SelectionBubble';
import { SpeedDial } from './SpeedDial';
import { ArcDock } from './ArcDock';
import { StatusStrip } from './StatusStrip';
import { SectionRail } from './SectionRail';
import { RearrangingDock } from './RearrangingDock';
import { TooltipDock } from './TooltipDock';
import { ToolPalette } from './ToolPalette';
import { SlideOutBar } from './SlideOutBar';
import { SnapDock } from './SnapDock';
import { MiniPlayer } from './MiniPlayer';
import { CartDock } from './CartDock';
import { GlowDock } from './GlowDock';
import { SaveSplit } from './SaveSplit';
import { SearchDock } from './SearchDock';
import { FilterBar } from './FilterBar';
import { TextSizeBar } from './TextSizeBar';
import { Ribbon } from './Ribbon';
import { HideOnScroll } from './HideOnScroll';
import { Island } from './Island';
import { AvatarDock } from './AvatarDock';
import { ScrubBar } from './ScrubBar';
import { ChatDock } from './ChatDock';
import { PagingBar } from './PagingBar';
import { StickyBuyBar } from './StickyBuyBar';
import { SelectionBar } from './SelectionBar';
import { RingDock } from './RingDock';
import { ShortcutBar } from './ShortcutBar';
import { JumpList } from './JumpList';
import { CornerStack } from './CornerStack';
import { NotchDock } from './NotchDock';
import { EdgeHandle } from './EdgeHandle';

export { Visual };
export { MagnifyDock, IconRail, GroupedToolbar, TypeBar, CommandBar, DotDock, ExpandingRail, TransportBar, ZoomBar, ReactionBar, SelectionBubble, SpeedDial, ArcDock, StatusStrip, SectionRail, RearrangingDock, TooltipDock, ToolPalette, SlideOutBar, SnapDock, MiniPlayer, CartDock, GlowDock, SaveSplit, SearchDock, FilterBar, TextSizeBar, Ribbon, HideOnScroll, Island, AvatarDock, ScrubBar, ChatDock, PagingBar, StickyBuyBar, SelectionBar, RingDock, ShortcutBar, JumpList, CornerStack, NotchDock, EdgeHandle };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Magnify dock", MagnifyDock, "hover"],
  ["Icon rail", IconRail, "click"],
  ["Grouped toolbar", GroupedToolbar, "click"],
  ["Type bar", TypeBar, "click"],
  ["Command bar", CommandBar, "click"],
  ["Dot dock", DotDock, "click"],
  ["Expanding rail", ExpandingRail, "click"],
  ["Transport bar", TransportBar, "click"],
  ["Zoom bar", ZoomBar, "click"],
  ["Reaction bar", ReactionBar, "click"],
  ["Selection bubble", SelectionBubble, "click"],
  ["Speed dial", SpeedDial, "click"],
  ["Arc dock", ArcDock, "click"],
  ["Status strip", StatusStrip, "click"],
  ["Section rail", SectionRail, "click"],
  ["Rearranging dock", RearrangingDock, "click"],
  ["Tooltip dock", TooltipDock, "hover"],
  ["Tool palette", ToolPalette, "click"],
  ["Slide-out bar", SlideOutBar, "click"],
  ["Snap dock", SnapDock, "click"],
  ["Mini player", MiniPlayer, "click"],
  ["Cart dock", CartDock, "click"],
  ["Glow dock", GlowDock, "click"],
  ["Save split", SaveSplit, "click"],
  ["Search dock", SearchDock, "click"],
  ["Filter bar", FilterBar, "click"],
  ["Text size bar", TextSizeBar, "click"],
  ["Ribbon", Ribbon, "click"],
  ["Hide on scroll", HideOnScroll, "click"],
  ["Island", Island, "click"],
  ["Avatar dock", AvatarDock, "hover"],
  ["Scrub bar", ScrubBar, "drag"],
  ["Chat dock", ChatDock, "click"],
  ["Paging bar", PagingBar, "click"],
  ["Sticky buy bar", StickyBuyBar, "click"],
  ["Selection bar", SelectionBar, "click"],
  ["Ring dock", RingDock, "auto"],
  ["Shortcut bar", ShortcutBar, "click"],
  ["Jump list", JumpList, "keys"],
  ["Corner stack", CornerStack, "click"],
  ["Notch dock", NotchDock, "click"],
  ["Edge handle", EdgeHandle, "drag"],
];

export default { Visual, items };
