/* ============================================================
   24 · STEPS — steppers, breadcrumbs and pagination.
   The still side is a winding path: a line that draws itself as the page
   scrolls, a marker that rides it, and five waypoints that light as it passes.
   Specimens share nothing but good manners: every stepper can be moved from
   the keyboard and says where it is in words.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { DotStepper } from "./dot-stepper/DotStepper";
import { NumberedStepper } from "./numbered-stepper/NumberedStepper";
import { VerticalStepper } from "./vertical-stepper/VerticalStepper";
import { SegmentProgress } from "./segment-progress/SegmentProgress";
import { IconStepper } from "./icon-stepper/IconStepper";
import { SlashCrumbs } from "./slash-crumbs/SlashCrumbs";
import { ChevronCrumbs } from "./chevron-crumbs/ChevronCrumbs";
import { CollapsingCrumbs } from "./collapsing-crumbs/CollapsingCrumbs";
import { PillTrail } from "./pill-trail/PillTrail";
import { PageNumbers } from "./page-numbers/PageNumbers";
import { PageOf } from "./page-of/PageOf";
import { LoadMore } from "./load-more/LoadMore";
import { JumpToPage } from "./jump-to-page/JumpToPage";
import { CarouselDots } from "./carousel-dots/CarouselDots";
import { WizardFooter } from "./wizard-footer/WizardFooter";
import { HorizontalTimeline } from "./horizontal-timeline/HorizontalTimeline";
import { SetupChecklist } from "./setup-checklist/SetupChecklist";
import { CountStepper } from "./count-stepper/CountStepper";
import { HoldToSpin } from "./hold-to-spin/HoldToSpin";
import { SteppedRange } from "./stepped-range/SteppedRange";
import { StepCards } from "./step-cards/StepCards";
import { Stairs } from "./stairs/Stairs";
import { PathFlag } from "./path-flag/PathFlag";
import { Onboarding } from "./onboarding/Onboarding";
import { GuidedTour } from "./guided-tour/GuidedTour";
import { Countdown } from "./countdown/Countdown";
import { Ladder } from "./ladder/Ladder";
import { SubSteps } from "./sub-steps/SubSteps";
import { ChapterList } from "./chapter-list/ChapterList";
import { RingSteps } from "./ring-steps/RingSteps";
import { PathBar } from "./path-bar/PathBar";
import { ErrorStep } from "./error-step/ErrorStep";
import { OptionalStep } from "./optional-step/OptionalStep";
import { HourDial } from "./hour-dial/HourDial";
import { DateSteps } from "./date-steps/DateSteps";
import { CardStackSteps } from "./card-stack-steps/CardStackSteps";
import { ZigzagPath } from "./zigzag-path/ZigzagPath";
import { BeadString } from "./bead-string/BeadString";
import { GatedSteps } from "./gated-steps/GatedSteps";
import { SkipSteps } from "./skip-steps/SkipSteps";
import { StarSteps } from "./star-steps/StarSteps";
import { LevelGauge } from "./level-gauge/LevelGauge";

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
