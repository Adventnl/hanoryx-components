/* ============================================================
   19 · BENTO — tiles that tessellate.
   The still side is one board of eight tiles that settles into three different
   arrangements as you scroll. Each tile has a rectangle in each arrangement, and
   its box is a blend of the three, weighted by two eased numbers taken from --pin:
   plain calc(), no script. On the right, forty-two dashboard tiles drift in two
   columns, each one a small working thing.
   ============================================================ */

import { Visual } from './Visual';
import { StatTile } from './StatTile';
import { SparkTile } from './SparkTile';
import { RingTile } from './RingTile';
import { CalendarTile } from './CalendarTile';
import { BarTile } from './BarTile';
import { DonutTile } from './DonutTile';
import { GaugeTile } from './GaugeTile';
import { ClockTile } from './ClockTile';
import { TimerTile } from './TimerTile';
import { ToggleTile } from './ToggleTile';
import { ChecklistTile } from './ChecklistTile';
import { StepsTile } from './StepsTile';
import { PlayerTile } from './PlayerTile';
import { ChatTile } from './ChatTile';
import { BatteryTile } from './BatteryTile';
import { SignalTile } from './SignalTile';
import { StorageTile } from './StorageTile';
import { KnobTile } from './KnobTile';
import { VolumeTile } from './VolumeTile';
import { NotesTile } from './NotesTile';
import { SwatchTile } from './SwatchTile';
import { TagsTile } from './TagsTile';
import { AvatarsTile } from './AvatarsTile';
import { PriceTile } from './PriceTile';
import { MapTile } from './MapTile';
import { QuoteTile } from './QuoteTile';
import { ImageTile } from './ImageTile';
import { CodeTile } from './CodeTile';
import { CommandTile } from './CommandTile';
import { CardTile } from './CardTile';
import { InvoiceTile } from './InvoiceTile';
import { SearchTile } from './SearchTile';
import { KeysTile } from './KeysTile';
import { CounterTile } from './CounterTile';
import { RatingTile } from './RatingTile';
import { LoadBarsTile } from './LoadBarsTile';
import { BoardTile } from './BoardTile';
import { CountdownTile } from './CountdownTile';
import { WeatherTile } from './WeatherTile';
import { RingsTile } from './RingsTile';
import { HeatTile } from './HeatTile';
import { CycleTile } from './CycleTile';

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
