/* ============================================================
   22 · DOCKS — floating bars, rails and toolbars.
   The still side is a dock of seven discs with the classic magnification, but
   driven by the scroll: a swell travels along the row as the page moves, so
   the disc under the "cursor" rises and its neighbours follow.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { MagnifyDock } from "./magnify-dock/MagnifyDock";
import { IconRail } from "./icon-rail/IconRail";
import { GroupedToolbar } from "./grouped-toolbar/GroupedToolbar";
import { TypeBar } from "./type-bar/TypeBar";
import { CommandBar } from "./command-bar/CommandBar";
import { DotDock } from "./dot-dock/DotDock";
import { ExpandingRail } from "./expanding-rail/ExpandingRail";
import { TransportBar } from "./transport-bar/TransportBar";
import { ZoomBar } from "./zoom-bar/ZoomBar";
import { ReactionBar } from "./reaction-bar/ReactionBar";
import { SelectionBubble } from "./selection-bubble/SelectionBubble";
import { SpeedDial } from "./speed-dial/SpeedDial";
import { ArcDock } from "./arc-dock/ArcDock";
import { StatusStrip } from "./status-strip/StatusStrip";
import { SectionRail } from "./section-rail/SectionRail";
import { RearrangingDock } from "./rearranging-dock/RearrangingDock";
import { TooltipDock } from "./tooltip-dock/TooltipDock";
import { ToolPalette } from "./tool-palette/ToolPalette";
import { SlideOutBar } from "./slide-out-bar/SlideOutBar";
import { SnapDock } from "./snap-dock/SnapDock";
import { MiniPlayer } from "./mini-player/MiniPlayer";
import { CartDock } from "./cart-dock/CartDock";
import { GlowDock } from "./glow-dock/GlowDock";
import { SaveSplit } from "./save-split/SaveSplit";
import { SearchDock } from "./search-dock/SearchDock";
import { FilterBar } from "./filter-bar/FilterBar";
import { TextSizeBar } from "./text-size-bar/TextSizeBar";
import { Ribbon } from "./ribbon/Ribbon";
import { HideOnScroll } from "./hide-on-scroll/HideOnScroll";
import { Island } from "./island/Island";
import { AvatarDock } from "./avatar-dock/AvatarDock";
import { ScrubBar } from "./scrub-bar/ScrubBar";
import { ChatDock } from "./chat-dock/ChatDock";
import { PagingBar } from "./paging-bar/PagingBar";
import { StickyBuyBar } from "./sticky-buy-bar/StickyBuyBar";
import { SelectionBar } from "./selection-bar/SelectionBar";
import { RingDock } from "./ring-dock/RingDock";
import { ShortcutBar } from "./shortcut-bar/ShortcutBar";
import { JumpList } from "./jump-list/JumpList";
import { CornerStack } from "./corner-stack/CornerStack";
import { NotchDock } from "./notch-dock/NotchDock";
import { EdgeHandle } from "./edge-handle/EdgeHandle";

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
