/* ============================================================
   39 · STAMPS — marks pressed onto paper: labels, seals, stickers and tape.
   The still side is a large APPROVED stamp coming down onto paper as the
   scroll advances (it lands at the middle of the page and the ink spreads
   after). The forty-two specimens are the things you would find on a desk:
   most can be pressed, peeled or torn with a click, and every one is a button
   or a field you can reach with the keyboard.
   ============================================================ */

import { Visual } from './Visual';
import { ApprovedStamp } from './ApprovedStamp';
import { DateStamp } from './DateStamp';
import { PressedSeal } from './PressedSeal';
import { RingSeal } from './RingSeal';
import { FoilPlate } from './FoilPlate';
import { CancelMark } from './CancelMark';
import { AirmailEdge } from './AirmailEdge';
import { CornerPeel } from './CornerPeel';
import { PeelSheet } from './PeelSheet';
import { DieCutSticker } from './DieCutSticker';
import { HoloSticker } from './HoloSticker';
import { WashiStrip } from './WashiStrip';
import { MaskingLabel } from './MaskingLabel';
import { TapeCross } from './TapeCross';
import { HazardStrip } from './HazardStrip';
import { PriceTag } from './PriceTag';
import { BaggageTag } from './BaggageTag';
import { NameBadge } from './NameBadge';
import { BarcodeLabel } from './BarcodeLabel';
import { MosaicCode } from './MosaicCode';
import { CourierLabel } from './CourierLabel';
import { FragileBand } from './FragileBand';
import { TicketStub } from './TicketStub';
import { CouponCut } from './CouponCut';
import { DueSlip } from './DueSlip';
import { VisaPage } from './VisaPage';
import { QualityBadge } from './QualityBadge';
import { PrizeRosette } from './PrizeRosette';
import { BannerRibbon } from './BannerRibbon';
import { CornerFlag } from './CornerFlag';
import { Starburst } from './Starburst';
import { PinnedLabel } from './PinnedLabel';
import { CrateStencil } from './CrateStencil';
import { RedactionBars } from './RedactionBars';
import { ClassifiedMark } from './ClassifiedMark';
import { WornInk } from './WornInk';
import { InkPad } from './InkPad';
import { Thumbprint } from './Thumbprint';
import { SignatureDraw } from './SignatureDraw';
import { MonogramSeal } from './MonogramSeal';
import { LabelMaker } from './LabelMaker';
import { MarginFlags } from './MarginFlags';

export { Visual };
export { ApprovedStamp, DateStamp, PressedSeal, RingSeal, FoilPlate, CancelMark, AirmailEdge, CornerPeel, PeelSheet, DieCutSticker, HoloSticker, WashiStrip, MaskingLabel, TapeCross, HazardStrip, PriceTag, BaggageTag, NameBadge, BarcodeLabel, MosaicCode, CourierLabel, FragileBand, TicketStub, CouponCut, DueSlip, VisaPage, QualityBadge, PrizeRosette, BannerRibbon, CornerFlag, Starburst, PinnedLabel, CrateStencil, RedactionBars, ClassifiedMark, WornInk, InkPad, Thumbprint, SignatureDraw, MonogramSeal, LabelMaker, MarginFlags };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Approved stamp", ApprovedStamp, "click"],
  ["Date stamp", DateStamp, "click"],
  ["Pressed seal", PressedSeal, "click"],
  ["Ring seal", RingSeal, "auto"],
  ["Foil plate", FoilPlate, "hover"],
  ["Cancel mark", CancelMark, "click"],
  ["Airmail edge", AirmailEdge, "auto"],
  ["Corner peel", CornerPeel, "click"],
  ["Peel sheet", PeelSheet, "click"],
  ["Die-cut sticker", DieCutSticker, "hover"],
  ["Holo sticker", HoloSticker, "hover"],
  ["Washi strip", WashiStrip, "click"],
  ["Masking label", MaskingLabel, "type"],
  ["Tape cross", TapeCross, "click"],
  ["Hazard strip", HazardStrip, "auto"],
  ["Price tag", PriceTag, "auto"],
  ["Baggage tag", BaggageTag, "click"],
  ["Name badge", NameBadge, "type"],
  ["Barcode label", BarcodeLabel, "hover"],
  ["Mosaic code", MosaicCode, "click"],
  ["Courier label", CourierLabel, "click"],
  ["Fragile band", FragileBand, "auto"],
  ["Ticket stub", TicketStub, "click"],
  ["Coupon cut", CouponCut, "click"],
  ["Due slip", DueSlip, "click"],
  ["Visa page", VisaPage, "click"],
  ["Quality badge", QualityBadge, "hover"],
  ["Prize rosette", PrizeRosette, "hover"],
  ["Banner ribbon", BannerRibbon, "hover"],
  ["Corner flag", CornerFlag, "hover"],
  ["Starburst", Starburst, "auto"],
  ["Pinned label", PinnedLabel, "hover"],
  ["Crate stencil", CrateStencil, "hover"],
  ["Redaction bars", RedactionBars, "click"],
  ["Classified mark", ClassifiedMark, "click"],
  ["Worn ink", WornInk, "drag"],
  ["Ink pad", InkPad, "click"],
  ["Thumbprint", Thumbprint, "click"],
  ["Signature draw", SignatureDraw, "auto"],
  ["Monogram seal", MonogramSeal, "click"],
  ["Label maker", LabelMaker, "type"],
  ["Margin flags", MarginFlags, "click"],
];

export default { Visual, items };
