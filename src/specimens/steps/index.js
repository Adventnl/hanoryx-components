/* ============================================================
   24 · STEPS — steppers, breadcrumbs and pagination.
   The still side is a winding path: a line that draws itself as the page
   scrolls, a marker that rides it, and five waypoints that light as it passes.
   Specimens share nothing but good manners: every stepper can be moved from
   the keyboard and says where it is in words.
   ============================================================ */

import { Visual } from './Visual';
import { DotStepper } from './DotStepper';
import { NumberedStepper } from './NumberedStepper';
import { VerticalStepper } from './VerticalStepper';
import { SegmentProgress } from './SegmentProgress';
import { IconStepper } from './IconStepper';
import { SlashCrumbs } from './SlashCrumbs';
import { ChevronCrumbs } from './ChevronCrumbs';
import { CollapsingCrumbs } from './CollapsingCrumbs';
import { PillTrail } from './PillTrail';
import { PageNumbers } from './PageNumbers';
import { PageOf } from './PageOf';
import { LoadMore } from './LoadMore';
import { JumpToPage } from './JumpToPage';
import { CarouselDots } from './CarouselDots';
import { WizardFooter } from './WizardFooter';
import { HorizontalTimeline } from './HorizontalTimeline';
import { SetupChecklist } from './SetupChecklist';
import { CountStepper } from './CountStepper';
import { HoldToSpin } from './HoldToSpin';
import { SteppedRange } from './SteppedRange';
import { StepCards } from './StepCards';
import { Stairs } from './Stairs';
import { PathFlag } from './PathFlag';
import { Onboarding } from './Onboarding';
import { GuidedTour } from './GuidedTour';
import { Countdown } from './Countdown';
import { Ladder } from './Ladder';
import { SubSteps } from './SubSteps';
import { ChapterList } from './ChapterList';
import { RingSteps } from './RingSteps';
import { PathBar } from './PathBar';
import { ErrorStep } from './ErrorStep';
import { OptionalStep } from './OptionalStep';
import { HourDial } from './HourDial';
import { DateSteps } from './DateSteps';
import { CardStackSteps } from './CardStackSteps';
import { ZigzagPath } from './ZigzagPath';
import { BeadString } from './BeadString';
import { GatedSteps } from './GatedSteps';
import { SkipSteps } from './SkipSteps';
import { StarSteps } from './StarSteps';
import { LevelGauge } from './LevelGauge';

export { Visual };
export { DotStepper, NumberedStepper, VerticalStepper, SegmentProgress, IconStepper, SlashCrumbs, ChevronCrumbs, CollapsingCrumbs, PillTrail, PageNumbers, PageOf, LoadMore, JumpToPage, CarouselDots, WizardFooter, HorizontalTimeline, SetupChecklist, CountStepper, HoldToSpin, SteppedRange, StepCards, Stairs, PathFlag, Onboarding, GuidedTour, Countdown, Ladder, SubSteps, ChapterList, RingSteps, PathBar, ErrorStep, OptionalStep, HourDial, DateSteps, CardStackSteps, ZigzagPath, BeadString, GatedSteps, SkipSteps, StarSteps, LevelGauge };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Dot stepper", DotStepper, "click"],
  ["Numbered stepper", NumberedStepper, "click"],
  ["Vertical stepper", VerticalStepper, "click"],
  ["Segment progress", SegmentProgress, "click"],
  ["Icon stepper", IconStepper, "click"],
  ["Slash crumbs", SlashCrumbs, "click"],
  ["Chevron crumbs", ChevronCrumbs, "click"],
  ["Collapsing crumbs", CollapsingCrumbs, "click"],
  ["Pill trail", PillTrail, "click"],
  ["Page numbers", PageNumbers, "click"],
  ["Page of", PageOf, "click"],
  ["Load more", LoadMore, "click"],
  ["Jump to page", JumpToPage, "type"],
  ["Carousel dots", CarouselDots, "auto"],
  ["Wizard footer", WizardFooter, "click"],
  ["Horizontal timeline", HorizontalTimeline, "click"],
  ["Setup checklist", SetupChecklist, "click"],
  ["Count stepper", CountStepper, "click"],
  ["Hold to spin", HoldToSpin, "hold"],
  ["Stepped range", SteppedRange, "drag"],
  ["Step cards", StepCards, "click"],
  ["Stairs", Stairs, "click"],
  ["Path flag", PathFlag, "drag"],
  ["Onboarding", Onboarding, "click"],
  ["Guided tour", GuidedTour, "click"],
  ["Countdown", Countdown, "auto"],
  ["Ladder", Ladder, "click"],
  ["Sub-steps", SubSteps, "click"],
  ["Chapter list", ChapterList, "click"],
  ["Ring steps", RingSteps, "click"],
  ["Path bar", PathBar, "click"],
  ["Error step", ErrorStep, "click"],
  ["Optional step", OptionalStep, "click"],
  ["Hour dial", HourDial, "click"],
  ["Date steps", DateSteps, "click"],
  ["Card stack steps", CardStackSteps, "click"],
  ["Zigzag path", ZigzagPath, "click"],
  ["Bead string", BeadString, "click"],
  ["Gated steps", GatedSteps, "click"],
  ["Skip steps", SkipSteps, "click"],
  ["Star steps", StarSteps, "hover"],
  ["Level gauge", LevelGauge, "click"],
];

export default { Visual, items };
