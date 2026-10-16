/* ============================================================
   28 · PROGRESS — bars, rings and vessels that fill.
   Most specimens are pure CSS: one registered number, --prog-v (0 to 1), is run by a
   keyframe animation and every bar, ring and counter below reads it, so they
   all fill in step with their own clock. The ones that answer to you are the
   sliders, the uploads and the buttons. The still side is a ring and three bars
   that the scroll itself fills, with the figure written by CSS counters.
   ============================================================ */

import { Visual } from './Visual';
import { LinearBar } from './LinearBar';
import { StripedBar } from './StripedBar';
import { Hairline } from './Hairline';
import { TenSteps } from './TenSteps';
import { LabelledSteps } from './LabelledSteps';
import { RingPercent } from './RingPercent';
import { HalfRing } from './HalfRing';
import { DonutRings } from './DonutRings';
import { Vessel } from './Vessel';
import { CellCharge } from './CellCharge';
import { MercuryColumn } from './MercuryColumn';
import { TestTube } from './TestTube';
import { DottedFill } from './DottedFill';
import { PixelFill } from './PixelFill';
import { TickRing } from './TickRing';
import { RangeFill } from './RangeFill';
import { PlayerScrub } from './PlayerScrub';
import { UploadList } from './UploadList';
import { StackedBar } from './StackedBar';
import { BulletChart } from './BulletChart';
import { GradientBar } from './GradientBar';
import { NeonBar } from './NeonBar';
import { PercentRider } from './PercentRider';
import { Indeterminate } from './Indeterminate';
import { BufferBar } from './BufferBar';
import { DrainingBar } from './DrainingBar';
import { SkillBars } from './SkillBars';
import { SpiralTrace } from './SpiralTrace';
import { WaveBar } from './WaveBar';
import { PieFill } from './PieFill';
import { LevelMeter } from './LevelMeter';
import { RocketBar } from './RocketBar';
import { StaircaseFill } from './StaircaseFill';
import { HexFill } from './HexFill';
import { TwelveDots } from './TwelveDots';
import { MilestoneBar } from './MilestoneBar';
import { ArcSteps } from './ArcSteps';
import { DownloadButton } from './DownloadButton';
import { RingToCheck } from './RingToCheck';
import { NineBars } from './NineBars';
import { SineTrace } from './SineTrace';
import { OdometerFill } from './OdometerFill';

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
