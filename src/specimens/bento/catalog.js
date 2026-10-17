/* ============================================================
   19 · BENTO — tiles that tessellate.
   The still side is one board of eight tiles that settles into three different
   arrangements as you scroll. Each tile has a rectangle in each arrangement, and
   its box is a blend of the three, weighted by two eased numbers taken from --pin:
   plain calc(), no script. On the right, forty-two dashboard tiles drift in two
   columns, each one a small working thing.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { StatTile } from "./stat-tile/StatTile";
import { SparkTile } from "./spark-tile/SparkTile";
import { RingTile } from "./ring-tile/RingTile";
import { CalendarTile } from "./calendar-tile/CalendarTile";
import { BarTile } from "./bar-tile/BarTile";
import { DonutTile } from "./donut-tile/DonutTile";
import { GaugeTile } from "./gauge-tile/GaugeTile";
import { ClockTile } from "./clock-tile/ClockTile";
import { TimerTile } from "./timer-tile/TimerTile";
import { ToggleTile } from "./toggle-tile/ToggleTile";
import { ChecklistTile } from "./checklist-tile/ChecklistTile";
import { StepsTile } from "./steps-tile/StepsTile";
import { PlayerTile } from "./player-tile/PlayerTile";
import { ChatTile } from "./chat-tile/ChatTile";
import { BatteryTile } from "./battery-tile/BatteryTile";
import { SignalTile } from "./signal-tile/SignalTile";
import { StorageTile } from "./storage-tile/StorageTile";
import { KnobTile } from "./knob-tile/KnobTile";
import { VolumeTile } from "./volume-tile/VolumeTile";
import { NotesTile } from "./notes-tile/NotesTile";
import { SwatchTile } from "./swatch-tile/SwatchTile";
import { TagsTile } from "./tags-tile/TagsTile";
import { AvatarsTile } from "./avatars-tile/AvatarsTile";
import { PriceTile } from "./price-tile/PriceTile";
import { MapTile } from "./map-tile/MapTile";
import { QuoteTile } from "./quote-tile/QuoteTile";
import { ImageTile } from "./image-tile/ImageTile";
import { CodeTile } from "./code-tile/CodeTile";
import { CommandTile } from "./command-tile/CommandTile";
import { CardTile } from "./card-tile/CardTile";
import { InvoiceTile } from "./invoice-tile/InvoiceTile";
import { SearchTile } from "./search-tile/SearchTile";
import { KeysTile } from "./keys-tile/KeysTile";
import { CounterTile } from "./counter-tile/CounterTile";
import { RatingTile } from "./rating-tile/RatingTile";
import { LoadBarsTile } from "./load-bars-tile/LoadBarsTile";
import { BoardTile } from "./board-tile/BoardTile";
import { CountdownTile } from "./countdown-tile/CountdownTile";
import { WeatherTile } from "./weather-tile/WeatherTile";
import { RingsTile } from "./rings-tile/RingsTile";
import { HeatTile } from "./heat-tile/HeatTile";
import { CycleTile } from "./cycle-tile/CycleTile";

export { Visual };
export { StatTile, SparkTile, RingTile, CalendarTile, BarTile, DonutTile, GaugeTile, ClockTile, TimerTile, ToggleTile, ChecklistTile, StepsTile, PlayerTile, ChatTile, BatteryTile, SignalTile, StorageTile, KnobTile, VolumeTile, NotesTile, SwatchTile, TagsTile, AvatarsTile, PriceTile, MapTile, QuoteTile, ImageTile, CodeTile, CommandTile, CardTile, InvoiceTile, SearchTile, KeysTile, CounterTile, RatingTile, LoadBarsTile, BoardTile, CountdownTile, WeatherTile, RingsTile, HeatTile, CycleTile };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Stat tile", StatTile, "hover"],
  ["Spark tile", SparkTile, "auto"],
  ["Ring tile", RingTile, "hover"],
  ["Calendar tile", CalendarTile, "click"],
  ["Bar tile", BarTile, "hover"],
  ["Donut tile", DonutTile, "auto"],
  ["Gauge tile", GaugeTile, "drag"],
  ["Clock tile", ClockTile, "auto"],
  ["Timer tile", TimerTile, "click"],
  ["Toggle tile", ToggleTile, "click"],
  ["Checklist tile", ChecklistTile, "click"],
  ["Steps tile", StepsTile, "click"],
  ["Player tile", PlayerTile, "click"],
  ["Chat tile", ChatTile, "auto"],
  ["Battery tile", BatteryTile, "click"],
  ["Signal tile", SignalTile, "click"],
  ["Storage tile", StorageTile, "hover"],
  ["Knob tile", KnobTile, "drag"],
  ["Volume tile", VolumeTile, "drag"],
  ["Notes tile", NotesTile, "type"],
  ["Swatch tile", SwatchTile, "click"],
  ["Tags tile", TagsTile, "click"],
  ["Avatars tile", AvatarsTile, "hover"],
  ["Price tile", PriceTile, "auto"],
  ["Map tile", MapTile, "hover"],
  ["Quote tile", QuoteTile, "click"],
  ["Image tile", ImageTile, "hover"],
  ["Code tile", CodeTile, "auto"],
  ["Command tile", CommandTile, "auto"],
  ["Card tile", CardTile, "hover"],
  ["Invoice tile", InvoiceTile, "click"],
  ["Search tile", SearchTile, "type"],
  ["Keys tile", KeysTile, "keys"],
  ["Counter tile", CounterTile, "click"],
  ["Rating tile", RatingTile, "hover"],
  ["Load bars tile", LoadBarsTile, "auto"],
  ["Board tile", BoardTile, "click"],
  ["Countdown tile", CountdownTile, "auto"],
  ["Weather tile", WeatherTile, "hover"],
  ["Rings tile", RingsTile, "auto"],
  ["Heat tile", HeatTile, "hover"],
  ["Cycle tile", CycleTile, "auto"],
];

export default { Visual, items };
