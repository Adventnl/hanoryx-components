/* ============================================================
   37 · STUDIO — meters, reels and faders for sound.
   Nothing here makes a sound: these are the faces of studio gear. The still
   side is a VU meter whose needle follows a swinging signal that the scroll
   scrubs — a loud passage, a quiet one, a peak. Specimens that would be moving
   in a studio move by themselves while on screen (never under reduced motion),
   and the ones you operate are real controls with values you can read.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { VUMeter } from "./vumeter/VUMeter";
import { PeakLEDs } from "./peak-leds/PeakLEDs";
import { ReelToReel } from "./reel-to-reel/ReelToReel";
import { CassetteDeck } from "./cassette-deck/CassetteDeck";
import { RecordDeck } from "./record-deck/RecordDeck";
import { ChannelFader } from "./channel-fader/ChannelFader";
import { PanPot } from "./pan-pot/PanPot";
import { MuteSoloArm } from "./mute-solo-arm/MuteSoloArm";
import { MixerStrip } from "./mixer-strip/MixerStrip";
import { DJCrossfade } from "./djcrossfade/DJCrossfade";
import { WaveScrub } from "./wave-scrub/WaveScrub";
import { WaveformZoom } from "./waveform-zoom/WaveformZoom";
import { LoopRegion } from "./loop-region/LoopRegion";
import { SpectrumBars } from "./spectrum-bars/SpectrumBars";
import { Spectrogram } from "./spectrogram/Spectrogram";
import { Oscilloscope } from "./oscilloscope/Oscilloscope";
import { PhaseScope } from "./phase-scope/PhaseScope";
import { EQCurve } from "./eqcurve/EQCurve";
import { CompressorCurve } from "./compressor-curve/CompressorCurve";
import { GateLight } from "./gate-light/GateLight";
import { LimiterMeter } from "./limiter-meter/LimiterMeter";
import { EnvelopeShaper } from "./envelope-shaper/EnvelopeShaper";
import { LFOShapes } from "./lfoshapes/LFOShapes";
import { WavePicker } from "./wave-picker/WavePicker";
import { FilterSweep } from "./filter-sweep/FilterSweep";
import { ReverbRings } from "./reverb-rings/ReverbRings";
import { DelayTaps } from "./delay-taps/DelayTaps";
import { StepSequencer } from "./step-sequencer/StepSequencer";
import { DrumPads } from "./drum-pads/DrumPads";
import { PianoKeys } from "./piano-keys/PianoKeys";
import { TapTempo } from "./tap-tempo/TapTempo";
import { BeatPendulum } from "./beat-pendulum/BeatPendulum";
import { TunerNeedle } from "./tuner-needle/TunerNeedle";
import { Timecode } from "./timecode/Timecode";
import { LoudnessBar } from "./loudness-bar/LoudnessBar";
import { GainStaging } from "./gain-staging/GainStaging";
import { PatchBay } from "./patch-bay/PatchBay";
import { HeadphoneKnob } from "./headphone-knob/HeadphoneKnob";
import { MicRing } from "./mic-ring/MicRing";
import { RecordArm } from "./record-arm/RecordArm";
import { TransportKeys } from "./transport-keys/TransportKeys";
import { MarkerTimeline } from "./marker-timeline/MarkerTimeline";

export { Visual };
export { VUMeter, PeakLEDs, ReelToReel, CassetteDeck, RecordDeck, ChannelFader, PanPot, MuteSoloArm, MixerStrip, DJCrossfade, WaveScrub, WaveformZoom, LoopRegion, SpectrumBars, Spectrogram, Oscilloscope, PhaseScope, EQCurve, CompressorCurve, GateLight, LimiterMeter, EnvelopeShaper, LFOShapes, WavePicker, FilterSweep, ReverbRings, DelayTaps, StepSequencer, DrumPads, PianoKeys, TapTempo, BeatPendulum, TunerNeedle, Timecode, LoudnessBar, GainStaging, PatchBay, HeadphoneKnob, MicRing, RecordArm, TransportKeys, MarkerTimeline };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["VU meter", VUMeter, "click"],
  ["Peak LEDs", PeakLEDs, "auto"],
  ["Reel-to-reel", ReelToReel, "click"],
  ["Cassette deck", CassetteDeck, "click"],
  ["Record deck", RecordDeck, "click"],
  ["Channel fader", ChannelFader, "drag"],
  ["Pan pot", PanPot, "drag"],
  ["Mute solo arm", MuteSoloArm, "click"],
  ["Mixer strip", MixerStrip, "drag"],
  ["DJ crossfade", DJCrossfade, "drag"],
  ["Wave scrub", WaveScrub, "drag"],
  ["Waveform zoom", WaveformZoom, "drag"],
  ["Loop region", LoopRegion, "drag"],
  ["Spectrum bars", SpectrumBars, "auto"],
  ["Spectrogram", Spectrogram, "auto"],
  ["Oscilloscope", Oscilloscope, "auto"],
  ["Phase scope", PhaseScope, "auto"],
  ["EQ curve", EQCurve, "drag"],
  ["Compressor curve", CompressorCurve, "drag"],
  ["Gate light", GateLight, "drag"],
  ["Limiter meter", LimiterMeter, "auto"],
  ["Envelope shaper", EnvelopeShaper, "drag"],
  ["LFO shapes", LFOShapes, "click"],
  ["Wave picker", WavePicker, "click"],
  ["Filter sweep", FilterSweep, "drag"],
  ["Reverb rings", ReverbRings, "drag"],
  ["Delay taps", DelayTaps, "auto"],
  ["Step sequencer", StepSequencer, "click"],
  ["Drum pads", DrumPads, "press"],
  ["Piano keys", PianoKeys, "press"],
  ["Tap tempo", TapTempo, "click"],
  ["Beat pendulum", BeatPendulum, "auto"],
  ["Tuner needle", TunerNeedle, "auto"],
  ["Timecode", Timecode, "auto"],
  ["Loudness bar", LoudnessBar, "auto"],
  ["Gain staging", GainStaging, "drag"],
  ["Patch bay", PatchBay, "click"],
  ["Headphone knob", HeadphoneKnob, "click"],
  ["Mic ring", MicRing, "auto"],
  ["Record arm", RecordArm, "click"],
  ["Transport keys", TransportKeys, "click"],
  ["Marker timeline", MarkerTimeline, "click"],
];

export default { Visual, items };
