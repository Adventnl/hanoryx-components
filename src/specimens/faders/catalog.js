/* ============================================================
   03 · FADERS — sliders on a rail that slides.
   The still side is an eight-channel desk whose caps ride the scroll.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { ConsoleFader } from "./console-fader/ConsoleFader";
import { DualRange } from "./dual-range/DualRange";
import { SteppedSlider } from "./stepped-slider/SteppedSlider";
import { VUFader } from "./vufader/VUFader";
import { Crossfader } from "./crossfader/Crossfader";
import { LogFrequency } from "./log-frequency/LogFrequency";
import { ValueBubble } from "./value-bubble/ValueBubble";
import { HeatTrack } from "./heat-track/HeatTrack";
import { BalanceBar } from "./balance-bar/BalanceBar";
import { CentreDetent } from "./centre-detent/CentreDetent";
import { TapeMeasure } from "./tape-measure/TapeMeasure";
import { BlockMeter } from "./block-meter/BlockMeter";
import { SegmentBar } from "./segment-bar/SegmentBar";
import { HistogramRange } from "./histogram-range/HistogramRange";
import { Thermometer } from "./thermometer/Thermometer";
import { RungLadder } from "./rung-ladder/RungLadder";
import { SlideRule } from "./slide-rule/SlideRule";
import { Zipper } from "./zipper/Zipper";
import { RibbonPull } from "./ribbon-pull/RibbonPull";
import { MagnetSnap } from "./magnet-snap/MagnetSnap";
import { RubberBand } from "./rubber-band/RubberBand";
import { VideoScrub } from "./video-scrub/VideoScrub";
import { WaveformScrub } from "./waveform-scrub/WaveformScrub";
import { MonthRange } from "./month-range/MonthRange";
import { PriceRange } from "./price-range/PriceRange";
import { PitchBend } from "./pitch-bend/PitchBend";
import { BlindsPull } from "./blinds-pull/BlindsPull";
import { SunSlider } from "./sun-slider/SunSlider";
import { PlateLoader } from "./plate-loader/PlateLoader";
import { SpeedRuler } from "./speed-ruler/SpeedRuler";
import { AlphaSlider } from "./alpha-slider/AlphaSlider";
import { TintSlider } from "./tint-slider/TintSlider";
import { SizeMarks } from "./size-marks/SizeMarks";
import { TripleThumb } from "./triple-thumb/TripleThumb";
import { FanSpeed } from "./fan-speed/FanSpeed";
import { ChargeSlider } from "./charge-slider/ChargeSlider";
import { RopeTension } from "./rope-tension/RopeTension";
import { ChapterSeek } from "./chapter-seek/ChapterSeek";
import { EQTrio } from "./eqtrio/EQTrio";
import { LockableSlider } from "./lockable-slider/LockableSlider";

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
