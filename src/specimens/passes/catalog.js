/* ============================================================
   20 · PASSES — tickets, receipts and badges.
   A line runs down the middle of the page and a pass hangs from either side of it.
   The medallion that rides the line is a pass of its own: a code prints itself row
   by row as you scroll, a ring of forty-two punch holes fills one for each pass
   you have passed, and the counter in the middle is written by CSS. Everything
   below is something you could be handed at a door — boarding passes to tear,
   stamps to land, codes to scan, badges to swing.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { BoardingPass } from "./boarding-pass/BoardingPass";
import { TearOffStub } from "./tear-off-stub/TearOffStub";
import { ScratchPanel } from "./scratch-panel/ScratchPanel";
import { ThermalPrintout } from "./thermal-printout/ThermalPrintout";
import { LanyardBadge } from "./lanyard-badge/LanyardBadge";
import { LaserScan } from "./laser-scan/LaserScan";
import { PassportPage } from "./passport-page/PassportPage";
import { TapCard } from "./tap-card/TapCard";
import { CutHere } from "./cut-here/CutHere";
import { RollingCode } from "./rolling-code/RollingCode";
import { PostageStamp } from "./postage-stamp/PostageStamp";
import { NameSticker } from "./name-sticker/NameSticker";
import { SeatChooser } from "./seat-chooser/SeatChooser";
import { ParkingStub } from "./parking-stub/ParkingStub";
import { HologramSeal } from "./hologram-seal/HologramSeal";
import { WaxSeal } from "./wax-seal/WaxSeal";
import { NumberDispenser } from "./number-dispenser/NumberDispenser";
import { LuggageTag } from "./luggage-tag/LuggageTag";
import { KeyCardSwipe } from "./key-card-swipe/KeyCardSwipe";
import { SplitTheBill } from "./split-the-bill/SplitTheBill";
import { RaffleDraw } from "./raffle-draw/RaffleDraw";
import { Postmark } from "./postmark/Postmark";
import { HangTag } from "./hang-tag/HangTag";
import { FortuneSlip } from "./fortune-slip/FortuneSlip";
import { TicketRoll } from "./ticket-roll/TicketRoll";
import { EmbossedCard } from "./embossed-card/EmbossedCard";
import { VisitorLog } from "./visitor-log/VisitorLog";
import { Rosette } from "./rosette/Rosette";
import { ConductorPunch } from "./conductor-punch/ConductorPunch";
import { ParcelLabel } from "./parcel-label/ParcelLabel";
import { ExpiringPass } from "./expiring-pass/ExpiringPass";
import { StickerPage } from "./sticker-page/StickerPage";
import { StubPile } from "./stub-pile/StubPile";
import { RSVPSlip } from "./rsvpslip/RSVPSlip";
import { GateReader } from "./gate-reader/GateReader";
import { DueDateSlip } from "./due-date-slip/DueDateSlip";
import { EdgeStyles } from "./edge-styles/EdgeStyles";
import { LaminateSlider } from "./laminate-slider/LaminateSlider";
import { LiftPass } from "./lift-pass/LiftPass";
import { Wristband } from "./wristband/Wristband";
import { PerforationLens } from "./perforation-lens/PerforationLens";
import { EntrySlot } from "./entry-slot/EntrySlot";

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
