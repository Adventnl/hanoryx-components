/* ============================================================
   39 · STAMPS — marks pressed onto paper: labels, seals, stickers and tape.
   The still side is a large APPROVED stamp coming down onto paper as the
   scroll advances (it lands at the middle of the page and the ink spreads
   after). The forty-two specimens are the things you would find on a desk:
   most can be pressed, peeled or torn with a click, and every one is a button
   or a field you can reach with the keyboard.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { ApprovedStamp } from "./approved-stamp/ApprovedStamp";
import { DateStamp } from "./date-stamp/DateStamp";
import { PressedSeal } from "./pressed-seal/PressedSeal";
import { RingSeal } from "./ring-seal/RingSeal";
import { FoilPlate } from "./foil-plate/FoilPlate";
import { CancelMark } from "./cancel-mark/CancelMark";
import { AirmailEdge } from "./airmail-edge/AirmailEdge";
import { CornerPeel } from "./corner-peel/CornerPeel";
import { PeelSheet } from "./peel-sheet/PeelSheet";
import { DieCutSticker } from "./die-cut-sticker/DieCutSticker";
import { HoloSticker } from "./holo-sticker/HoloSticker";
import { WashiStrip } from "./washi-strip/WashiStrip";
import { MaskingLabel } from "./masking-label/MaskingLabel";
import { TapeCross } from "./tape-cross/TapeCross";
import { HazardStrip } from "./hazard-strip/HazardStrip";
import { PriceTag } from "./price-tag/PriceTag";
import { BaggageTag } from "./baggage-tag/BaggageTag";
import { NameBadge } from "./name-badge/NameBadge";
import { BarcodeLabel } from "./barcode-label/BarcodeLabel";
import { MosaicCode } from "./mosaic-code/MosaicCode";
import { CourierLabel } from "./courier-label/CourierLabel";
import { FragileBand } from "./fragile-band/FragileBand";
import { TicketStub } from "./ticket-stub/TicketStub";
import { CouponCut } from "./coupon-cut/CouponCut";
import { DueSlip } from "./due-slip/DueSlip";
import { VisaPage } from "./visa-page/VisaPage";
import { QualityBadge } from "./quality-badge/QualityBadge";
import { PrizeRosette } from "./prize-rosette/PrizeRosette";
import { BannerRibbon } from "./banner-ribbon/BannerRibbon";
import { CornerFlag } from "./corner-flag/CornerFlag";
import { Starburst } from "./starburst/Starburst";
import { PinnedLabel } from "./pinned-label/PinnedLabel";
import { CrateStencil } from "./crate-stencil/CrateStencil";
import { RedactionBars } from "./redaction-bars/RedactionBars";
import { ClassifiedMark } from "./classified-mark/ClassifiedMark";
import { WornInk } from "./worn-ink/WornInk";
import { InkPad } from "./ink-pad/InkPad";
import { Thumbprint } from "./thumbprint/Thumbprint";
import { SignatureDraw } from "./signature-draw/SignatureDraw";
import { MonogramSeal } from "./monogram-seal/MonogramSeal";
import { LabelMaker } from "./label-maker/LabelMaker";
import { MarginFlags } from "./margin-flags/MarginFlags";

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
