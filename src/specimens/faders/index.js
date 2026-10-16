/* ============================================================
   03 · FADERS — sliders on a rail that slides.
   The still side is an eight-channel desk whose caps ride the scroll.
   ============================================================ */

import { Visual } from './Visual';
import { ConsoleFader } from './ConsoleFader';
import { DualRange } from './DualRange';
import { SteppedSlider } from './SteppedSlider';
import { VUFader } from './VUFader';
import { Crossfader } from './Crossfader';
import { LogFrequency } from './LogFrequency';
import { ValueBubble } from './ValueBubble';
import { HeatTrack } from './HeatTrack';
import { BalanceBar } from './BalanceBar';
import { CentreDetent } from './CentreDetent';
import { TapeMeasure } from './TapeMeasure';
import { BlockMeter } from './BlockMeter';
import { SegmentBar } from './SegmentBar';
import { HistogramRange } from './HistogramRange';
import { Thermometer } from './Thermometer';
import { RungLadder } from './RungLadder';
import { SlideRule } from './SlideRule';
import { Zipper } from './Zipper';
import { RibbonPull } from './RibbonPull';
import { MagnetSnap } from './MagnetSnap';
import { RubberBand } from './RubberBand';
import { VideoScrub } from './VideoScrub';
import { WaveformScrub } from './WaveformScrub';
import { MonthRange } from './MonthRange';
import { PriceRange } from './PriceRange';
import { PitchBend } from './PitchBend';
import { BlindsPull } from './BlindsPull';
import { SunSlider } from './SunSlider';
import { PlateLoader } from './PlateLoader';
import { SpeedRuler } from './SpeedRuler';
import { AlphaSlider } from './AlphaSlider';
import { TintSlider } from './TintSlider';
import { SizeMarks } from './SizeMarks';
import { TripleThumb } from './TripleThumb';
import { FanSpeed } from './FanSpeed';
import { ChargeSlider } from './ChargeSlider';
import { RopeTension } from './RopeTension';
import { ChapterSeek } from './ChapterSeek';
import { EQTrio } from './EQTrio';
import { LockableSlider } from './LockableSlider';

export { Visual };
export { ConsoleFader, DualRange, SteppedSlider, VUFader, Crossfader, LogFrequency, ValueBubble, HeatTrack, BalanceBar, CentreDetent, TapeMeasure, BlockMeter, SegmentBar, HistogramRange, Thermometer, RungLadder, SlideRule, Zipper, RibbonPull, MagnetSnap, RubberBand, VideoScrub, WaveformScrub, MonthRange, PriceRange, PitchBend, BlindsPull, SunSlider, PlateLoader, SpeedRuler, AlphaSlider, TintSlider, SizeMarks, TripleThumb, FanSpeed, ChargeSlider, RopeTension, ChapterSeek, EQTrio, LockableSlider };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Console fader", ConsoleFader, "drag"],
  ["Dual range", DualRange, "drag"],
  ["Stepped slider", SteppedSlider, "drag"],
  ["VU fader", VUFader, "drag"],
  ["Crossfader", Crossfader, "drag"],
  ["Log frequency", LogFrequency, "drag"],
  ["Value bubble", ValueBubble, "drag"],
  ["Heat track", HeatTrack, "drag"],
  ["Balance bar", BalanceBar, "drag"],
  ["Centre detent", CentreDetent, "drag"],
  ["Tape measure", TapeMeasure, "drag"],
  ["Block meter", BlockMeter, "click"],
  ["Segment bar", SegmentBar, "drag"],
  ["Histogram range", HistogramRange, "drag"],
  ["Thermometer", Thermometer, "drag"],
  ["Rung ladder", RungLadder, "click"],
  ["Slide rule", SlideRule, "drag"],
  ["Zipper", Zipper, "drag"],
  ["Ribbon pull", RibbonPull, "drag"],
  ["Magnet snap", MagnetSnap, "drag"],
  ["Rubber band", RubberBand, "drag"],
  ["Video scrub", VideoScrub, "drag"],
  ["Waveform scrub", WaveformScrub, "drag"],
  ["Month range", MonthRange, "click"],
  ["Price range", PriceRange, "type"],
  ["Pitch bend", PitchBend, "drag"],
  ["Blinds pull", BlindsPull, "drag"],
  ["Sun slider", SunSlider, "drag"],
  ["Plate loader", PlateLoader, "drag"],
  ["Speed ruler", SpeedRuler, "drag"],
  ["Alpha slider", AlphaSlider, "drag"],
  ["Tint slider", TintSlider, "drag"],
  ["Size marks", SizeMarks, "drag"],
  ["Triple thumb", TripleThumb, "drag"],
  ["Fan speed", FanSpeed, "drag"],
  ["Charge slider", ChargeSlider, "drag"],
  ["Rope tension", RopeTension, "drag"],
  ["Chapter seek", ChapterSeek, "drag"],
  ["EQ trio", EQTrio, "drag"],
  ["Lockable slider", LockableSlider, "drag"],
];

export default { Visual, items };
