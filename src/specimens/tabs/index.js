/* ============================================================
   21 · TABS — strips, pills and segments that glide.
   The still side is a strip of five tabs whose underline is driven by the
   scroll alone: it slides along the strip, the label it reaches lights, and a
   panel title below it follows. Specimens share one small tablist (roving
   tabindex, arrow keys, Home and End), so every one of them works from a keyboard.
   ============================================================ */

import { Visual } from './Visual';
import { Underline } from './Underline';
import { PillSlide } from './PillSlide';
import { Segmented } from './Segmented';
import { ManilaTabs } from './ManilaTabs';
import { SideTabs } from './SideTabs';
import { CountedTabs } from './CountedTabs';
import { Closable } from './Closable';
import { SortableTabs } from './SortableTabs';
import { ScrollingTabs } from './ScrollingTabs';
import { IconTabs } from './IconTabs';
import { ChevronSteps } from './ChevronSteps';
import { InkStretch } from './InkStretch';
import { MagicLine } from './MagicLine';
import { RollingCount } from './RollingCount';
import { RomanTabs } from './RomanTabs';
import { PlanCards } from './PlanCards';
import { StyleToggles } from './StyleToggles';
import { GrowingDots } from './GrowingDots';
import { AutoAdvance } from './AutoAdvance';
import { PanelCrossfade } from './PanelCrossfade';
import { DayDrum } from './DayDrum';
import { FanOfTabs } from './FanOfTabs';
import { IndexDividers } from './IndexDividers';
import { KnobTabs } from './KnobTabs';
import { BottomBar } from './BottomBar';
import { RaisedLabel } from './RaisedLabel';
import { HistoryTabs } from './HistoryTabs';
import { GooeyTabs } from './GooeyTabs';
import { CompassTabs } from './CompassTabs';
import { MonthStrip } from './MonthStrip';
import { WeekStrip } from './WeekStrip';
import { HexTabs } from './HexTabs';
import { LetterRolodex } from './LetterRolodex';
import { OverflowMenu } from './OverflowMenu';
import { TwoLineTabs } from './TwoLineTabs';
import { PagerTabs } from './PagerTabs';
import { LampTabs } from './LampTabs';
import { ArrowKeyTabs } from './ArrowKeyTabs';
import { OverlappingTabs } from './OverlappingTabs';
import { ZoomTabs } from './ZoomTabs';
import { HighlightTicker } from './HighlightTicker';
import { ColourSwatches } from './ColourSwatches';

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
