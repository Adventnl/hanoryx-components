/* ============================================================
   20 · PASSES — tickets, receipts and badges.
   A line runs down the middle of the page and a pass hangs from either side of it.
   The medallion that rides the line is a pass of its own: a code prints itself row
   by row as you scroll, a ring of forty-two punch holes fills one for each pass
   you have passed, and the counter in the middle is written by CSS. Everything
   below is something you could be handed at a door — boarding passes to tear,
   stamps to land, codes to scan, badges to swing.
   ============================================================ */

import { Visual } from './Visual';
import { BoardingPass } from './BoardingPass';
import { TearOffStub } from './TearOffStub';
import { ScratchPanel } from './ScratchPanel';
import { ThermalPrintout } from './ThermalPrintout';
import { LanyardBadge } from './LanyardBadge';
import { LaserScan } from './LaserScan';
import { PassportPage } from './PassportPage';
import { TapCard } from './TapCard';
import { CutHere } from './CutHere';
import { RollingCode } from './RollingCode';
import { PostageStamp } from './PostageStamp';
import { NameSticker } from './NameSticker';
import { SeatChooser } from './SeatChooser';
import { ParkingStub } from './ParkingStub';
import { HologramSeal } from './HologramSeal';
import { WaxSeal } from './WaxSeal';
import { NumberDispenser } from './NumberDispenser';
import { LuggageTag } from './LuggageTag';
import { KeyCardSwipe } from './KeyCardSwipe';
import { SplitTheBill } from './SplitTheBill';
import { RaffleDraw } from './RaffleDraw';
import { Postmark } from './Postmark';
import { HangTag } from './HangTag';
import { FortuneSlip } from './FortuneSlip';
import { TicketRoll } from './TicketRoll';
import { EmbossedCard } from './EmbossedCard';
import { VisitorLog } from './VisitorLog';
import { Rosette } from './Rosette';
import { ConductorPunch } from './ConductorPunch';
import { ParcelLabel } from './ParcelLabel';
import { ExpiringPass } from './ExpiringPass';
import { StickerPage } from './StickerPage';
import { StubPile } from './StubPile';
import { RSVPSlip } from './RSVPSlip';
import { GateReader } from './GateReader';
import { DueDateSlip } from './DueDateSlip';
import { EdgeStyles } from './EdgeStyles';
import { LaminateSlider } from './LaminateSlider';
import { LiftPass } from './LiftPass';
import { Wristband } from './Wristband';
import { PerforationLens } from './PerforationLens';
import { EntrySlot } from './EntrySlot';

export { Visual };
export { BoardingPass, TearOffStub, ScratchPanel, ThermalPrintout, LanyardBadge, LaserScan, PassportPage, TapCard, CutHere, RollingCode, PostageStamp, NameSticker, SeatChooser, ParkingStub, HologramSeal, WaxSeal, NumberDispenser, LuggageTag, KeyCardSwipe, SplitTheBill, RaffleDraw, Postmark, HangTag, FortuneSlip, TicketRoll, EmbossedCard, VisitorLog, Rosette, ConductorPunch, ParcelLabel, ExpiringPass, StickerPage, StubPile, RSVPSlip, GateReader, DueDateSlip, EdgeStyles, LaminateSlider, LiftPass, Wristband, PerforationLens, EntrySlot };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Boarding pass", BoardingPass, "hover"],
  ["Tear-off stub", TearOffStub, "drag"],
  ["Scratch panel", ScratchPanel, "drag"],
  ["Thermal printout", ThermalPrintout, "auto"],
  ["Lanyard badge", LanyardBadge, "drag"],
  ["Laser scan", LaserScan, "auto"],
  ["Passport page", PassportPage, "click"],
  ["Tap card", TapCard, "click"],
  ["Cut here", CutHere, "auto"],
  ["Rolling code", RollingCode, "auto"],
  ["Postage stamp", PostageStamp, "hover"],
  ["Name sticker", NameSticker, "type"],
  ["Seat chooser", SeatChooser, "click"],
  ["Parking stub", ParkingStub, "drag"],
  ["Hologram seal", HologramSeal, "hover"],
  ["Wax seal", WaxSeal, "click"],
  ["Number dispenser", NumberDispenser, "click"],
  ["Luggage tag", LuggageTag, "hover"],
  ["Key card swipe", KeyCardSwipe, "drag"],
  ["Split the bill", SplitTheBill, "click"],
  ["Raffle draw", RaffleDraw, "click"],
  ["Postmark", Postmark, "auto"],
  ["Hang tag", HangTag, "hover"],
  ["Fortune slip", FortuneSlip, "click"],
  ["Ticket roll", TicketRoll, "drag"],
  ["Embossed card", EmbossedCard, "hover"],
  ["Visitor log", VisitorLog, "type"],
  ["Rosette", Rosette, "hover"],
  ["Conductor punch", ConductorPunch, "click"],
  ["Parcel label", ParcelLabel, "click"],
  ["Expiring pass", ExpiringPass, "auto"],
  ["Sticker page", StickerPage, "click"],
  ["Stub pile", StubPile, "hover"],
  ["RSVP slip", RSVPSlip, "click"],
  ["Gate reader", GateReader, "press"],
  ["Due-date slip", DueDateSlip, "click"],
  ["Edge styles", EdgeStyles, "click"],
  ["Laminate slider", LaminateSlider, "drag"],
  ["Lift pass", LiftPass, "click"],
  ["Wristband", Wristband, "click"],
  ["Perforation lens", PerforationLens, "hover"],
  ["Entry slot", EntrySlot, "click"],
];

export default { Visual, items };
