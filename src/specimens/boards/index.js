/* ============================================================
   47 · BOARDS — kanban, calendars and agendas on one sheet.
   The still side is a three-lane board whose cards move across it as the scroll
   advances: from To do, through Doing, to Done. The forty-two specimens are
   planning surfaces of the same kind, small enough to sit on one sheet and
   working: cards move when you click them, days and slots select, and the
   boards that would be ticking over (a countdown, a focus timer) do so while
   they are on screen.
   ============================================================ */

import { Visual } from './Visual';
import { SingleLane } from './SingleLane';
import { ThreeLanes } from './ThreeLanes';
import { KeyboardMove } from './KeyboardMove';
import { LaneLimit } from './LaneLimit';
import { Swimlanes } from './Swimlanes';
import { CardPeek } from './CardPeek';
import { LabelFilter } from './LabelFilter';
import { ChecklistRing } from './ChecklistRing';
import { DueBadges } from './DueBadges';
import { Assignees } from './Assignees';
import { LaneFold } from './LaneFold';
import { CalendarMonth } from './CalendarMonth';
import { DayChooser } from './DayChooser';
import { HourSlots } from './HourSlots';
import { OverlapColumns } from './OverlapColumns';
import { RangePick } from './RangePick';
import { EventDots } from './EventDots';
import { YearHeat } from './YearHeat';
import { AgendaList } from './AgendaList';
import { GanttBars } from './GanttBars';
import { TaskLinks } from './TaskLinks';
import { AvailabilityGrid } from './AvailabilityGrid';
import { ZoneStrip } from './ZoneStrip';
import { BookingSlots } from './BookingSlots';
import { CountdownCard } from './CountdownCard';
import { RepeatRule } from './RepeatRule';
import { MonthAgenda } from './MonthAgenda';
import { Burndown } from './Burndown';
import { RoadmapBars } from './RoadmapBars';
import { UrgencyQuadrants } from './UrgencyQuadrants';
import { EstimateCards } from './EstimateCards';
import { RetroNotes } from './RetroNotes';
import { OnCallRota } from './OnCallRota';
import { HabitWeek } from './HabitWeek';
import { ToDoList } from './ToDoList';
import { FocusBlocks } from './FocusBlocks';
import { MilestoneLadder } from './MilestoneLadder';
import { CapacityBars } from './CapacityBars';
import { ServiceStatus } from './ServiceStatus';
import { ReleaseTrain } from './ReleaseTrain';
import { ShiftRoster } from './ShiftRoster';
import { MeetingPoll } from './MeetingPoll';

export { Visual };
export { SingleLane, ThreeLanes, KeyboardMove, LaneLimit, Swimlanes, CardPeek, LabelFilter, ChecklistRing, DueBadges, Assignees, LaneFold, CalendarMonth, DayChooser, HourSlots, OverlapColumns, RangePick, EventDots, YearHeat, AgendaList, GanttBars, TaskLinks, AvailabilityGrid, ZoneStrip, BookingSlots, CountdownCard, RepeatRule, MonthAgenda, Burndown, RoadmapBars, UrgencyQuadrants, EstimateCards, RetroNotes, OnCallRota, HabitWeek, ToDoList, FocusBlocks, MilestoneLadder, CapacityBars, ServiceStatus, ReleaseTrain, ShiftRoster, MeetingPoll };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Single lane", SingleLane, "click"],
  ["Three lanes", ThreeLanes, "click"],
  ["Keyboard move", KeyboardMove, "key"],
  ["Lane limit", LaneLimit, "click"],
  ["Swimlanes", Swimlanes, "click"],
  ["Card peek", CardPeek, "click"],
  ["Label filter", LabelFilter, "click"],
  ["Checklist ring", ChecklistRing, "click"],
  ["Due badges", DueBadges, "click"],
  ["Assignees", Assignees, "click"],
  ["Lane fold", LaneFold, "click"],
  ["Calendar month", CalendarMonth, "click"],
  ["Day chooser", DayChooser, "click"],
  ["Hour slots", HourSlots, "click"],
  ["Overlap columns", OverlapColumns, "click"],
  ["Range pick", RangePick, "click"],
  ["Event dots", EventDots, "click"],
  ["Year heat", YearHeat, "click"],
  ["Agenda list", AgendaList, "click"],
  ["Gantt bars", GanttBars, "click"],
  ["Task links", TaskLinks, "click"],
  ["Availability grid", AvailabilityGrid, "click"],
  ["Zone strip", ZoneStrip, "drag"],
  ["Booking slots", BookingSlots, "click"],
  ["Countdown card", CountdownCard, "auto"],
  ["Repeat rule", RepeatRule, "click"],
  ["Month agenda", MonthAgenda, "click"],
  ["Burndown", Burndown, "click"],
  ["Roadmap bars", RoadmapBars, "click"],
  ["Urgency quadrants", UrgencyQuadrants, "click"],
  ["Estimate cards", EstimateCards, "click"],
  ["Retro notes", RetroNotes, "click"],
  ["On-call rota", OnCallRota, "click"],
  ["Habit week", HabitWeek, "click"],
  ["To-do list", ToDoList, "type"],
  ["Focus blocks", FocusBlocks, "auto"],
  ["Milestone ladder", MilestoneLadder, "click"],
  ["Capacity bars", CapacityBars, "click"],
  ["Service status", ServiceStatus, "click"],
  ["Release train", ReleaseTrain, "click"],
  ["Shift roster", ShiftRoster, "click"],
  ["Meeting poll", MeetingPoll, "click"],
];

export default { Visual, items };
