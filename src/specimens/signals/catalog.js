/* ============================================================
   30 · SIGNALS — lights, pills and health.
   The still side is a beacon whose colour is the scroll's progress: it goes
   from green to amber to red as the page is read, its rings widen and the word
   under it changes with it. Specimens are the other ways a thing can say how
   it is — and each one says it in words as well as in light.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { LEDLamp } from "./ledlamp/LEDLamp";
import { BlinkingLight } from "./blinking-light/BlinkingLight";
import { LevelLEDs } from "./level-leds/LevelLEDs";
import { TrafficLight } from "./traffic-light/TrafficLight";
import { StatusPill } from "./status-pill/StatusPill";
import { ServiceList } from "./service-list/ServiceList";
import { UptimeStrip } from "./uptime-strip/UptimeStrip";
import { HealthRing } from "./health-ring/HealthRing";
import { PulseDot } from "./pulse-dot/PulseDot";
import { CellBars } from "./cell-bars/CellBars";
import { WiFiArcs } from "./wi-fi-arcs/WiFiArcs";
import { ChargeGauge } from "./charge-gauge/ChargeGauge";
import { PresenceDot } from "./presence-dot/PresenceDot";
import { RotatingBeacon } from "./rotating-beacon/RotatingBeacon";
import { StateBanner } from "./state-banner/StateBanner";
import { SeverityScale } from "./severity-scale/SeverityScale";
import { AnnunciatorPanel } from "./annunciator-panel/AnnunciatorPanel";
import { LampTest } from "./lamp-test/LampTest";
import { WalkSignal } from "./walk-signal/WalkSignal";
import { LockLight } from "./lock-light/LockLight";
import { RecordLight } from "./record-light/RecordLight";
import { LiveBadge } from "./live-badge/LiveBadge";
import { TypingSignal } from "./typing-signal/TypingSignal";
import { SyncState } from "./sync-state/SyncState";
import { LatencyBars } from "./latency-bars/LatencyBars";
import { DiskWarning } from "./disk-warning/DiskWarning";
import { HeatLadder } from "./heat-ladder/HeatLadder";
import { RingSwitch } from "./ring-switch/RingSwitch";
import { MorseLamp } from "./morse-lamp/MorseLamp";
import { MetronomeLamp } from "./metronome-lamp/MetronomeLamp";
import { Semaphore } from "./semaphore/Semaphore";
import { RadioMast } from "./radio-mast/RadioMast";
import { PingRing } from "./ping-ring/PingRing";
import { HealthDots } from "./health-dots/HealthDots";
import { StatusChip } from "./status-chip/StatusChip";
import { IncidentDots } from "./incident-dots/IncidentDots";
import { StatusGrid } from "./status-grid/StatusGrid";
import { AvailabilityRing } from "./availability-ring/AvailabilityRing";
import { AlertThreshold } from "./alert-threshold/AlertThreshold";
import { AlertLevels } from "./alert-levels/AlertLevels";
import { FaultCode } from "./fault-code/FaultCode";
import { PagerBuzz } from "./pager-buzz/PagerBuzz";

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
