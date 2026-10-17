/* ============================================================
   12 · TICKERS — flaps, boards and marquees.
   The still side is a split-flap board. Every flap is a scroll-driven counter:
   CSS reads the page's --pin, turns it into "which letter, and how far through
   the flip", prints the letters with counters (upper-alpha, decimal) and tilts
   the two moving halves by that fraction. Nothing is animated by script.
   Everything on the right is a belt, a board or a sign.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { FlapWord } from "./flap-word/FlapWord";
import { FlapClock } from "./flap-clock/FlapClock";
import { DepartureRow } from "./departure-row/DepartureRow";
import { Letterboard } from "./letterboard/Letterboard";
import { ScoreTicker } from "./score-ticker/ScoreTicker";
import { PageADay } from "./page-aday/PageADay";
import { PumpPrice } from "./pump-price/PumpPrice";
import { FloorIndicator } from "./floor-indicator/FloorIndicator";
import { SegmentClock } from "./segment-clock/SegmentClock";
import { LaunchCountdown } from "./launch-countdown/LaunchCountdown";
import { PlatformSign } from "./platform-sign/PlatformSign";
import { BadgeRoll } from "./badge-roll/BadgeRoll";
import { Marquee } from "./marquee/Marquee";
import { CounterBelts } from "./counter-belts/CounterBelts";
import { StockTape } from "./stock-tape/StockTape";
import { NewsCrawl } from "./news-crawl/NewsCrawl";
import { LEDScroller } from "./ledscroller/LEDScroller";
import { CautionTape } from "./caution-tape/CautionTape";
import { WaveMarquee } from "./wave-marquee/WaveMarquee";
import { PauseChips } from "./pause-chips/PauseChips";
import { HoldToFreeze } from "./hold-to-freeze/HoldToFreeze";
import { ScrubTape } from "./scrub-tape/ScrubTape";
import { ScrollTape } from "./scroll-tape/ScrollTape";
import { SparklineTape } from "./sparkline-tape/SparklineTape";
import { GiantBelt } from "./giant-belt/GiantBelt";
import { VerticalRoll } from "./vertical-roll/VerticalRoll";
import { HeadlineSwap } from "./headline-swap/HeadlineSwap";
import { ChatScroll } from "./chat-scroll/ChatScroll";
import { CaptionBar } from "./caption-bar/CaptionBar";
import { WordDrum } from "./word-drum/WordDrum";
import { SlotReel } from "./slot-reel/SlotReel";
import { Leaderboard } from "./leaderboard/Leaderboard";
import { HeartbeatTape } from "./heartbeat-tape/HeartbeatTape";
import { CinemaBulbs } from "./cinema-bulbs/CinemaBulbs";
import { TubeSign } from "./tube-sign/TubeSign";
import { RadioDial } from "./radio-dial/RadioDial";
import { LineMap } from "./line-map/LineMap";
import { ParcelTracker } from "./parcel-tracker/ParcelTracker";
import { FlashPrice } from "./flash-price/FlashPrice";
import { TypingTape } from "./typing-tape/TypingTape";
import { ShimmerStatus } from "./shimmer-status/ShimmerStatus";
import { StopwatchReel } from "./stopwatch-reel/StopwatchReel";

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
