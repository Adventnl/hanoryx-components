/* ============================================================
   12 · TICKERS — flaps, boards and marquees.
   The still side is a split-flap board. Every flap is a scroll-driven counter:
   CSS reads the page's --pin, turns it into "which letter, and how far through
   the flip", prints the letters with counters (upper-alpha, decimal) and tilts
   the two moving halves by that fraction. Nothing is animated by script.
   Everything on the right is a belt, a board or a sign.
   ============================================================ */

import { Visual } from './Visual';
import { FlapWord } from './FlapWord';
import { FlapClock } from './FlapClock';
import { DepartureRow } from './DepartureRow';
import { Letterboard } from './Letterboard';
import { ScoreTicker } from './ScoreTicker';
import { PageADay } from './PageADay';
import { PumpPrice } from './PumpPrice';
import { FloorIndicator } from './FloorIndicator';
import { SegmentClock } from './SegmentClock';
import { LaunchCountdown } from './LaunchCountdown';
import { PlatformSign } from './PlatformSign';
import { BadgeRoll } from './BadgeRoll';
import { Marquee } from './Marquee';
import { CounterBelts } from './CounterBelts';
import { StockTape } from './StockTape';
import { NewsCrawl } from './NewsCrawl';
import { LEDScroller } from './LEDScroller';
import { CautionTape } from './CautionTape';
import { WaveMarquee } from './WaveMarquee';
import { PauseChips } from './PauseChips';
import { HoldToFreeze } from './HoldToFreeze';
import { ScrubTape } from './ScrubTape';
import { ScrollTape } from './ScrollTape';
import { SparklineTape } from './SparklineTape';
import { GiantBelt } from './GiantBelt';
import { VerticalRoll } from './VerticalRoll';
import { HeadlineSwap } from './HeadlineSwap';
import { ChatScroll } from './ChatScroll';
import { CaptionBar } from './CaptionBar';
import { WordDrum } from './WordDrum';
import { SlotReel } from './SlotReel';
import { Leaderboard } from './Leaderboard';
import { HeartbeatTape } from './HeartbeatTape';
import { CinemaBulbs } from './CinemaBulbs';
import { TubeSign } from './TubeSign';
import { RadioDial } from './RadioDial';
import { LineMap } from './LineMap';
import { ParcelTracker } from './ParcelTracker';
import { FlashPrice } from './FlashPrice';
import { TypingTape } from './TypingTape';
import { ShimmerStatus } from './ShimmerStatus';
import { StopwatchReel } from './StopwatchReel';

export { Visual };
export { FlapWord, FlapClock, DepartureRow, Letterboard, ScoreTicker, PageADay, PumpPrice, FloorIndicator, SegmentClock, LaunchCountdown, PlatformSign, BadgeRoll, Marquee, CounterBelts, StockTape, NewsCrawl, LEDScroller, CautionTape, WaveMarquee, PauseChips, HoldToFreeze, ScrubTape, ScrollTape, SparklineTape, GiantBelt, VerticalRoll, HeadlineSwap, ChatScroll, CaptionBar, WordDrum, SlotReel, Leaderboard, HeartbeatTape, CinemaBulbs, TubeSign, RadioDial, LineMap, ParcelTracker, FlashPrice, TypingTape, ShimmerStatus, StopwatchReel };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Flap word", FlapWord, "click"],
  ["Flap clock", FlapClock, "auto"],
  ["Departure row", DepartureRow, "auto"],
  ["Letterboard", Letterboard, "type"],
  ["Score ticker", ScoreTicker, "click"],
  ["Page-a-day", PageADay, "click"],
  ["Pump price", PumpPrice, "click"],
  ["Floor indicator", FloorIndicator, "auto"],
  ["Segment clock", SegmentClock, "auto"],
  ["Launch countdown", LaunchCountdown, "auto"],
  ["Platform sign", PlatformSign, "auto"],
  ["Badge roll", BadgeRoll, "click"],
  ["Marquee", Marquee, "auto"],
  ["Counter belts", CounterBelts, "auto"],
  ["Stock tape", StockTape, "auto"],
  ["News crawl", NewsCrawl, "auto"],
  ["LED scroller", LEDScroller, "auto"],
  ["Caution tape", CautionTape, "auto"],
  ["Wave marquee", WaveMarquee, "auto"],
  ["Pause chips", PauseChips, "hover"],
  ["Hold to freeze", HoldToFreeze, "press"],
  ["Scrub tape", ScrubTape, "drag"],
  ["Scroll tape", ScrollTape, "scroll"],
  ["Sparkline tape", SparklineTape, "auto"],
  ["Giant belt", GiantBelt, "auto"],
  ["Vertical roll", VerticalRoll, "auto"],
  ["Headline swap", HeadlineSwap, "auto"],
  ["Chat scroll", ChatScroll, "auto"],
  ["Caption bar", CaptionBar, "auto"],
  ["Word drum", WordDrum, "auto"],
  ["Slot reel", SlotReel, "click"],
  ["Leaderboard", Leaderboard, "auto"],
  ["Heartbeat tape", HeartbeatTape, "auto"],
  ["Cinema bulbs", CinemaBulbs, "auto"],
  ["Tube sign", TubeSign, "auto"],
  ["Radio dial", RadioDial, "drag"],
  ["Line map", LineMap, "auto"],
  ["Parcel tracker", ParcelTracker, "click"],
  ["Flash price", FlashPrice, "auto"],
  ["Typing tape", TypingTape, "auto"],
  ["Shimmer status", ShimmerStatus, "auto"],
  ["Stopwatch reel", StopwatchReel, "auto"],
];

export default { Visual, items };
