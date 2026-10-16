/* ============================================================
   30 · SIGNALS — lights, pills and health.
   The still side is a beacon whose colour is the scroll's progress: it goes
   from green to amber to red as the page is read, its rings widen and the word
   under it changes with it. Specimens are the other ways a thing can say how
   it is — and each one says it in words as well as in light.
   ============================================================ */

import { Visual } from './Visual';
import { LEDLamp } from './LEDLamp';
import { BlinkingLight } from './BlinkingLight';
import { LevelLEDs } from './LevelLEDs';
import { TrafficLight } from './TrafficLight';
import { StatusPill } from './StatusPill';
import { ServiceList } from './ServiceList';
import { UptimeStrip } from './UptimeStrip';
import { HealthRing } from './HealthRing';
import { PulseDot } from './PulseDot';
import { CellBars } from './CellBars';
import { WiFiArcs } from './WiFiArcs';
import { ChargeGauge } from './ChargeGauge';
import { PresenceDot } from './PresenceDot';
import { RotatingBeacon } from './RotatingBeacon';
import { StateBanner } from './StateBanner';
import { SeverityScale } from './SeverityScale';
import { AnnunciatorPanel } from './AnnunciatorPanel';
import { LampTest } from './LampTest';
import { WalkSignal } from './WalkSignal';
import { LockLight } from './LockLight';
import { RecordLight } from './RecordLight';
import { LiveBadge } from './LiveBadge';
import { TypingSignal } from './TypingSignal';
import { SyncState } from './SyncState';
import { LatencyBars } from './LatencyBars';
import { DiskWarning } from './DiskWarning';
import { HeatLadder } from './HeatLadder';
import { RingSwitch } from './RingSwitch';
import { MorseLamp } from './MorseLamp';
import { MetronomeLamp } from './MetronomeLamp';
import { Semaphore } from './Semaphore';
import { RadioMast } from './RadioMast';
import { PingRing } from './PingRing';
import { HealthDots } from './HealthDots';
import { StatusChip } from './StatusChip';
import { IncidentDots } from './IncidentDots';
import { StatusGrid } from './StatusGrid';
import { AvailabilityRing } from './AvailabilityRing';
import { AlertThreshold } from './AlertThreshold';
import { AlertLevels } from './AlertLevels';
import { FaultCode } from './FaultCode';
import { PagerBuzz } from './PagerBuzz';

export { Visual };
export { LEDLamp, BlinkingLight, LevelLEDs, TrafficLight, StatusPill, ServiceList, UptimeStrip, HealthRing, PulseDot, CellBars, WiFiArcs, ChargeGauge, PresenceDot, RotatingBeacon, StateBanner, SeverityScale, AnnunciatorPanel, LampTest, WalkSignal, LockLight, RecordLight, LiveBadge, TypingSignal, SyncState, LatencyBars, DiskWarning, HeatLadder, RingSwitch, MorseLamp, MetronomeLamp, Semaphore, RadioMast, PingRing, HealthDots, StatusChip, IncidentDots, StatusGrid, AvailabilityRing, AlertThreshold, AlertLevels, FaultCode, PagerBuzz };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["LED lamp", LEDLamp, "click"],
  ["Blinking light", BlinkingLight, "auto"],
  ["Level LEDs", LevelLEDs, "drag"],
  ["Traffic light", TrafficLight, "auto"],
  ["Status pill", StatusPill, "click"],
  ["Service list", ServiceList, "static"],
  ["Uptime strip", UptimeStrip, "hover"],
  ["Health ring", HealthRing, "drag"],
  ["Pulse dot", PulseDot, "auto"],
  ["Cell bars", CellBars, "click"],
  ["Wi-Fi arcs", WiFiArcs, "click"],
  ["Charge gauge", ChargeGauge, "drag"],
  ["Presence dot", PresenceDot, "click"],
  ["Rotating beacon", RotatingBeacon, "auto"],
  ["State banner", StateBanner, "click"],
  ["Severity scale", SeverityScale, "click"],
  ["Annunciator panel", AnnunciatorPanel, "click"],
  ["Lamp test", LampTest, "hold"],
  ["Walk signal", WalkSignal, "auto"],
  ["Lock light", LockLight, "click"],
  ["Record light", RecordLight, "auto"],
  ["Live badge", LiveBadge, "auto"],
  ["Typing signal", TypingSignal, "auto"],
  ["Sync state", SyncState, "click"],
  ["Latency bars", LatencyBars, "auto"],
  ["Disk warning", DiskWarning, "drag"],
  ["Heat ladder", HeatLadder, "drag"],
  ["Ring switch", RingSwitch, "click"],
  ["Morse lamp", MorseLamp, "auto"],
  ["Metronome lamp", MetronomeLamp, "auto"],
  ["Semaphore", Semaphore, "click"],
  ["Radio mast", RadioMast, "auto"],
  ["Ping ring", PingRing, "click"],
  ["Health dots", HealthDots, "click"],
  ["Status chip", StatusChip, "hover"],
  ["Incident dots", IncidentDots, "click"],
  ["Status grid", StatusGrid, "static"],
  ["Availability ring", AvailabilityRing, "drag"],
  ["Alert threshold", AlertThreshold, "drag"],
  ["Alert levels", AlertLevels, "click"],
  ["Fault code", FaultCode, "click"],
  ["Pager buzz", PagerBuzz, "click"],
];

export default { Visual, items };
