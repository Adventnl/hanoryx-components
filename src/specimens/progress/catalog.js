/* ============================================================
   28 · PROGRESS — bars, rings and vessels that fill.
   Most specimens are pure CSS: one registered number, --prog-v (0 to 1), is run by a
   keyframe animation and every bar, ring and counter below reads it, so they
   all fill in step with their own clock. The ones that answer to you are the
   sliders, the uploads and the buttons. The still side is a ring and three bars
   that the scroll itself fills, with the figure written by CSS counters.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { LinearBar } from "./linear-bar/LinearBar";
import { StripedBar } from "./striped-bar/StripedBar";
import { Hairline } from "./hairline/Hairline";
import { TenSteps } from "./ten-steps/TenSteps";
import { LabelledSteps } from "./labelled-steps/LabelledSteps";
import { RingPercent } from "./ring-percent/RingPercent";
import { HalfRing } from "./half-ring/HalfRing";
import { DonutRings } from "./donut-rings/DonutRings";
import { Vessel } from "./vessel/Vessel";
import { CellCharge } from "./cell-charge/CellCharge";
import { MercuryColumn } from "./mercury-column/MercuryColumn";
import { TestTube } from "./test-tube/TestTube";
import { DottedFill } from "./dotted-fill/DottedFill";
import { PixelFill } from "./pixel-fill/PixelFill";
import { TickRing } from "./tick-ring/TickRing";
import { RangeFill } from "./range-fill/RangeFill";
import { PlayerScrub } from "./player-scrub/PlayerScrub";
import { UploadList } from "./upload-list/UploadList";
import { StackedBar } from "./stacked-bar/StackedBar";
import { BulletChart } from "./bullet-chart/BulletChart";
import { GradientBar } from "./gradient-bar/GradientBar";
import { NeonBar } from "./neon-bar/NeonBar";
import { PercentRider } from "./percent-rider/PercentRider";
import { Indeterminate } from "./indeterminate/Indeterminate";
import { BufferBar } from "./buffer-bar/BufferBar";
import { DrainingBar } from "./draining-bar/DrainingBar";
import { SkillBars } from "./skill-bars/SkillBars";
import { SpiralTrace } from "./spiral-trace/SpiralTrace";
import { WaveBar } from "./wave-bar/WaveBar";
import { PieFill } from "./pie-fill/PieFill";
import { LevelMeter } from "./level-meter/LevelMeter";
import { RocketBar } from "./rocket-bar/RocketBar";
import { StaircaseFill } from "./staircase-fill/StaircaseFill";
import { HexFill } from "./hex-fill/HexFill";
import { TwelveDots } from "./twelve-dots/TwelveDots";
import { MilestoneBar } from "./milestone-bar/MilestoneBar";
import { ArcSteps } from "./arc-steps/ArcSteps";
import { DownloadButton } from "./download-button/DownloadButton";
import { RingToCheck } from "./ring-to-check/RingToCheck";
import { NineBars } from "./nine-bars/NineBars";
import { SineTrace } from "./sine-trace/SineTrace";
import { OdometerFill } from "./odometer-fill/OdometerFill";

export { Visual };
export { LinearBar, StripedBar, Hairline, TenSteps, LabelledSteps, RingPercent, HalfRing, DonutRings, Vessel, CellCharge, MercuryColumn, TestTube, DottedFill, PixelFill, TickRing, RangeFill, PlayerScrub, UploadList, StackedBar, BulletChart, GradientBar, NeonBar, PercentRider, Indeterminate, BufferBar, DrainingBar, SkillBars, SpiralTrace, WaveBar, PieFill, LevelMeter, RocketBar, StaircaseFill, HexFill, TwelveDots, MilestoneBar, ArcSteps, DownloadButton, RingToCheck, NineBars, SineTrace, OdometerFill };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Linear bar", LinearBar, "auto"],
  ["Striped bar", StripedBar, "auto"],
  ["Hairline", Hairline, "auto"],
  ["Ten steps", TenSteps, "auto"],
  ["Labelled steps", LabelledSteps, "auto"],
  ["Ring percent", RingPercent, "auto"],
  ["Half ring", HalfRing, "auto"],
  ["Donut rings", DonutRings, "auto"],
  ["Vessel", Vessel, "auto"],
  ["Cell charge", CellCharge, "auto"],
  ["Mercury column", MercuryColumn, "auto"],
  ["Test tube", TestTube, "auto"],
  ["Dotted fill", DottedFill, "auto"],
  ["Pixel fill", PixelFill, "auto"],
  ["Tick ring", TickRing, "auto"],
  ["Range fill", RangeFill, "drag"],
  ["Player scrub", PlayerScrub, "drag"],
  ["Upload list", UploadList, "static"],
  ["Stacked bar", StackedBar, "static"],
  ["Bullet chart", BulletChart, "auto"],
  ["Gradient bar", GradientBar, "auto"],
  ["Neon bar", NeonBar, "auto"],
  ["Percent rider", PercentRider, "auto"],
  ["Indeterminate", Indeterminate, "auto"],
  ["Buffer bar", BufferBar, "auto"],
  ["Draining bar", DrainingBar, "auto"],
  ["Skill bars", SkillBars, "static"],
  ["Spiral trace", SpiralTrace, "auto"],
  ["Wave bar", WaveBar, "auto"],
  ["Pie fill", PieFill, "auto"],
  ["Level meter", LevelMeter, "auto"],
  ["Rocket bar", RocketBar, "auto"],
  ["Staircase fill", StaircaseFill, "auto"],
  ["Hex fill", HexFill, "auto"],
  ["Twelve dots", TwelveDots, "auto"],
  ["Milestone bar", MilestoneBar, "auto"],
  ["Arc steps", ArcSteps, "auto"],
  ["Download button", DownloadButton, "click"],
  ["Ring to check", RingToCheck, "auto"],
  ["Nine bars", NineBars, "auto"],
  ["Sine trace", SineTrace, "auto"],
  ["Odometer fill", OdometerFill, "auto"],
];

export default { Visual, items };
