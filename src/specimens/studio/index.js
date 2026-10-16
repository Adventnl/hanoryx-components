/* ============================================================
   37 · STUDIO — meters, reels and faders for sound.
   Nothing here makes a sound: these are the faces of studio gear. The still
   side is a VU meter whose needle follows a swinging signal that the scroll
   scrubs — a loud passage, a quiet one, a peak. Specimens that would be moving
   in a studio move by themselves while on screen (never under reduced motion),
   and the ones you operate are real controls with values you can read.
   ============================================================ */

import { Visual } from './Visual';
import { VUMeter } from './VUMeter';
import { PeakLEDs } from './PeakLEDs';
import { ReelToReel } from './ReelToReel';
import { CassetteDeck } from './CassetteDeck';
import { RecordDeck } from './RecordDeck';
import { ChannelFader } from './ChannelFader';
import { PanPot } from './PanPot';
import { MuteSoloArm } from './MuteSoloArm';
import { MixerStrip } from './MixerStrip';
import { DJCrossfade } from './DJCrossfade';
import { WaveScrub } from './WaveScrub';
import { WaveformZoom } from './WaveformZoom';
import { LoopRegion } from './LoopRegion';
import { SpectrumBars } from './SpectrumBars';
import { Spectrogram } from './Spectrogram';
import { Oscilloscope } from './Oscilloscope';
import { PhaseScope } from './PhaseScope';
import { EQCurve } from './EQCurve';
import { CompressorCurve } from './CompressorCurve';
import { GateLight } from './GateLight';
import { LimiterMeter } from './LimiterMeter';
import { EnvelopeShaper } from './EnvelopeShaper';
import { LFOShapes } from './LFOShapes';
import { WavePicker } from './WavePicker';
import { FilterSweep } from './FilterSweep';
import { ReverbRings } from './ReverbRings';
import { DelayTaps } from './DelayTaps';
import { StepSequencer } from './StepSequencer';
import { DrumPads } from './DrumPads';
import { PianoKeys } from './PianoKeys';
import { TapTempo } from './TapTempo';
import { BeatPendulum } from './BeatPendulum';
import { TunerNeedle } from './TunerNeedle';
import { Timecode } from './Timecode';
import { LoudnessBar } from './LoudnessBar';
import { GainStaging } from './GainStaging';
import { PatchBay } from './PatchBay';
import { HeadphoneKnob } from './HeadphoneKnob';
import { MicRing } from './MicRing';
import { RecordArm } from './RecordArm';
import { TransportKeys } from './TransportKeys';
import { MarkerTimeline } from './MarkerTimeline';

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
