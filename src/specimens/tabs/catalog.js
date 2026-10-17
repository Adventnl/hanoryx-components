/* ============================================================
   21 · TABS — strips, pills and segments that glide.
   The still side is a strip of five tabs whose underline is driven by the
   scroll alone: it slides along the strip, the label it reaches lights, and a
   panel title below it follows. Specimens share one small tablist (roving
   tabindex, arrow keys, Home and End), so every one of them works from a keyboard.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { Underline } from "./underline/Underline";
import { PillSlide } from "./pill-slide/PillSlide";
import { Segmented } from "./segmented/Segmented";
import { ManilaTabs } from "./manila-tabs/ManilaTabs";
import { SideTabs } from "./side-tabs/SideTabs";
import { CountedTabs } from "./counted-tabs/CountedTabs";
import { Closable } from "./closable/Closable";
import { SortableTabs } from "./sortable-tabs/SortableTabs";
import { ScrollingTabs } from "./scrolling-tabs/ScrollingTabs";
import { IconTabs } from "./icon-tabs/IconTabs";
import { ChevronSteps } from "./chevron-steps/ChevronSteps";
import { InkStretch } from "./ink-stretch/InkStretch";
import { MagicLine } from "./magic-line/MagicLine";
import { RollingCount } from "./rolling-count/RollingCount";
import { RomanTabs } from "./roman-tabs/RomanTabs";
import { PlanCards } from "./plan-cards/PlanCards";
import { StyleToggles } from "./style-toggles/StyleToggles";
import { GrowingDots } from "./growing-dots/GrowingDots";
import { AutoAdvance } from "./auto-advance/AutoAdvance";
import { PanelCrossfade } from "./panel-crossfade/PanelCrossfade";
import { DayDrum } from "./day-drum/DayDrum";
import { FanOfTabs } from "./fan-of-tabs/FanOfTabs";
import { IndexDividers } from "./index-dividers/IndexDividers";
import { KnobTabs } from "./knob-tabs/KnobTabs";
import { BottomBar } from "./bottom-bar/BottomBar";
import { RaisedLabel } from "./raised-label/RaisedLabel";
import { HistoryTabs } from "./history-tabs/HistoryTabs";
import { GooeyTabs } from "./gooey-tabs/GooeyTabs";
import { CompassTabs } from "./compass-tabs/CompassTabs";
import { MonthStrip } from "./month-strip/MonthStrip";
import { WeekStrip } from "./week-strip/WeekStrip";
import { HexTabs } from "./hex-tabs/HexTabs";
import { LetterRolodex } from "./letter-rolodex/LetterRolodex";
import { OverflowMenu } from "./overflow-menu/OverflowMenu";
import { TwoLineTabs } from "./two-line-tabs/TwoLineTabs";
import { PagerTabs } from "./pager-tabs/PagerTabs";
import { LampTabs } from "./lamp-tabs/LampTabs";
import { ArrowKeyTabs } from "./arrow-key-tabs/ArrowKeyTabs";
import { OverlappingTabs } from "./overlapping-tabs/OverlappingTabs";
import { ZoomTabs } from "./zoom-tabs/ZoomTabs";
import { HighlightTicker } from "./highlight-ticker/HighlightTicker";
import { ColourSwatches } from "./colour-swatches/ColourSwatches";

export { Visual };
export { Underline, PillSlide, Segmented, ManilaTabs, SideTabs, CountedTabs, Closable, SortableTabs, ScrollingTabs, IconTabs, ChevronSteps, InkStretch, MagicLine, RollingCount, RomanTabs, PlanCards, StyleToggles, GrowingDots, AutoAdvance, PanelCrossfade, DayDrum, FanOfTabs, IndexDividers, KnobTabs, BottomBar, RaisedLabel, HistoryTabs, GooeyTabs, CompassTabs, MonthStrip, WeekStrip, HexTabs, LetterRolodex, OverflowMenu, TwoLineTabs, PagerTabs, LampTabs, ArrowKeyTabs, OverlappingTabs, ZoomTabs, HighlightTicker, ColourSwatches };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Underline", Underline, "click"],
  ["Pill slide", PillSlide, "click"],
  ["Segmented", Segmented, "click"],
  ["Manila tabs", ManilaTabs, "click"],
  ["Side tabs", SideTabs, "click"],
  ["Counted tabs", CountedTabs, "click"],
  ["Closable", Closable, "click · del"],
  ["Sortable tabs", SortableTabs, "click"],
  ["Scrolling tabs", ScrollingTabs, "click"],
  ["Icon tabs", IconTabs, "click"],
  ["Chevron steps", ChevronSteps, "click"],
  ["Ink stretch", InkStretch, "click"],
  ["Magic line", MagicLine, "hover"],
  ["Rolling count", RollingCount, "click"],
  ["Roman tabs", RomanTabs, "click"],
  ["Plan cards", PlanCards, "click"],
  ["Style toggles", StyleToggles, "click"],
  ["Growing dots", GrowingDots, "click"],
  ["Auto-advance", AutoAdvance, "auto"],
  ["Panel crossfade", PanelCrossfade, "click"],
  ["Day drum", DayDrum, "drag"],
  ["Fan of tabs", FanOfTabs, "click"],
  ["Index dividers", IndexDividers, "click"],
  ["Knob tabs", KnobTabs, "click"],
  ["Bottom bar", BottomBar, "click"],
  ["Raised label", RaisedLabel, "click"],
  ["History tabs", HistoryTabs, "click"],
  ["Gooey tabs", GooeyTabs, "click"],
  ["Compass tabs", CompassTabs, "click"],
  ["Month strip", MonthStrip, "click"],
  ["Week strip", WeekStrip, "click"],
  ["Hex tabs", HexTabs, "click"],
  ["Letter rolodex", LetterRolodex, "hover"],
  ["Overflow menu", OverflowMenu, "click"],
  ["Two-line tabs", TwoLineTabs, "click"],
  ["Pager tabs", PagerTabs, "click"],
  ["Lamp tabs", LampTabs, "click"],
  ["Arrow-key tabs", ArrowKeyTabs, "keys"],
  ["Overlapping tabs", OverlappingTabs, "click"],
  ["Zoom tabs", ZoomTabs, "click"],
  ["Highlight ticker", HighlightTicker, "auto"],
  ["Colour swatches", ColourSwatches, "click"],
];

export default { Visual, items };
