/* ============================================================
   47 · BOARDS — kanban, calendars and agendas on one sheet.
   The still side is a three-lane board whose cards move across it as the scroll
   advances: from To do, through Doing, to Done. The forty-two specimens are
   planning surfaces of the same kind, small enough to sit on one sheet and
   working: cards move when you click them, days and slots select, and the
   boards that would be ticking over (a countdown, a focus timer) do so while
   they are on screen.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { SingleLane } from "./single-lane/SingleLane";
import { ThreeLanes } from "./three-lanes/ThreeLanes";
import { KeyboardMove } from "./keyboard-move/KeyboardMove";
import { LaneLimit } from "./lane-limit/LaneLimit";
import { Swimlanes } from "./swimlanes/Swimlanes";
import { CardPeek } from "./card-peek/CardPeek";
import { LabelFilter } from "./label-filter/LabelFilter";
import { ChecklistRing } from "./checklist-ring/ChecklistRing";
import { DueBadges } from "./due-badges/DueBadges";
import { Assignees } from "./assignees/Assignees";
import { LaneFold } from "./lane-fold/LaneFold";
import { CalendarMonth } from "./calendar-month/CalendarMonth";
import { DayChooser } from "./day-chooser/DayChooser";
import { HourSlots } from "./hour-slots/HourSlots";
import { OverlapColumns } from "./overlap-columns/OverlapColumns";
import { RangePick } from "./range-pick/RangePick";
import { EventDots } from "./event-dots/EventDots";
import { YearHeat } from "./year-heat/YearHeat";
import { AgendaList } from "./agenda-list/AgendaList";
import { GanttBars } from "./gantt-bars/GanttBars";
import { TaskLinks } from "./task-links/TaskLinks";
import { AvailabilityGrid } from "./availability-grid/AvailabilityGrid";
import { ZoneStrip } from "./zone-strip/ZoneStrip";
import { BookingSlots } from "./booking-slots/BookingSlots";
import { CountdownCard } from "./countdown-card/CountdownCard";
import { RepeatRule } from "./repeat-rule/RepeatRule";
import { MonthAgenda } from "./month-agenda/MonthAgenda";
import { Burndown } from "./burndown/Burndown";
import { RoadmapBars } from "./roadmap-bars/RoadmapBars";
import { UrgencyQuadrants } from "./urgency-quadrants/UrgencyQuadrants";
import { EstimateCards } from "./estimate-cards/EstimateCards";
import { RetroNotes } from "./retro-notes/RetroNotes";
import { OnCallRota } from "./on-call-rota/OnCallRota";
import { HabitWeek } from "./habit-week/HabitWeek";
import { ToDoList } from "./to-do-list/ToDoList";
import { FocusBlocks } from "./focus-blocks/FocusBlocks";
import { MilestoneLadder } from "./milestone-ladder/MilestoneLadder";
import { CapacityBars } from "./capacity-bars/CapacityBars";
import { ServiceStatus } from "./service-status/ServiceStatus";
import { ReleaseTrain } from "./release-train/ReleaseTrain";
import { ShiftRoster } from "./shift-roster/ShiftRoster";
import { MeetingPoll } from "./meeting-poll/MeetingPoll";

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
