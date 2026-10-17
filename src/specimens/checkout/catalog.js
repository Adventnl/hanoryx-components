/* ============================================================
   49 · CHECKOUT — pricing, carts and order flows.
   The still side is a receipt that prints as the scroll advances: a line
   appears for each item, then the total underlines itself. The forty-two
   specimens are the parts of buying something: plan cards and toggles, cart
   lines and shipping, the steps of paying, and what comes after. The prices are
   made up, but every control does its sum: change a quantity, a plan or a tip
   and the totals follow. Nothing is sent anywhere.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { PriceCards } from "./price-cards/PriceCards";
import { BillingToggle } from "./billing-toggle/BillingToggle";
import { SeatStepper } from "./seat-stepper/SeatStepper";
import { UsageSlider } from "./usage-slider/UsageSlider";
import { FeatureTable } from "./feature-table/FeatureTable";
import { DifferencesOnly } from "./differences-only/DifferencesOnly";
import { VolumeTiers } from "./volume-tiers/VolumeTiers";
import { AddOnBoxes } from "./add-on-boxes/AddOnBoxes";
import { CouponCode } from "./coupon-code/CouponCode";
import { CurrencySwitch } from "./currency-switch/CurrencySwitch";
import { PriceDrop } from "./price-drop/PriceDrop";
import { TrialBar } from "./trial-bar/TrialBar";
import { GuaranteeSeal } from "./guarantee-seal/GuaranteeSeal";
import { PricingQuestions } from "./pricing-questions/PricingQuestions";
import { CartLines } from "./cart-lines/CartLines";
import { MiniCart } from "./mini-cart/MiniCart";
import { FreeShippingBar } from "./free-shipping-bar/FreeShippingBar";
import { OrderSummary } from "./order-summary/OrderSummary";
import { PromoChip } from "./promo-chip/PromoChip";
import { SavedForLater } from "./saved-for-later/SavedForLater";
import { UpsellStrip } from "./upsell-strip/UpsellStrip";
import { GiftWrap } from "./gift-wrap/GiftWrap";
import { DeliveryChoice } from "./delivery-choice/DeliveryChoice";
import { EmptyCart } from "./empty-cart/EmptyCart";
import { CheckoutSteps } from "./checkout-steps/CheckoutSteps";
import { AddressForm } from "./address-form/AddressForm";
import { CardDigits } from "./card-digits/CardDigits";
import { CardBrand } from "./card-brand/CardBrand";
import { ExpiryAndCode } from "./expiry-and-code/ExpiryAndCode";
import { PaymentMethods } from "./payment-methods/PaymentMethods";
import { TermsGate } from "./terms-gate/TermsGate";
import { PayButton } from "./pay-button/PayButton";
import { OrderConfirmed } from "./order-confirmed/OrderConfirmed";
import { ReceiptPrinting } from "./receipt-printing/ReceiptPrinting";
import { InvoiceRows } from "./invoice-rows/InvoiceRows";
import { RefundReason } from "./refund-reason/RefundReason";
import { OrderTracker } from "./order-tracker/OrderTracker";
import { DeliverySlots } from "./delivery-slots/DeliverySlots";
import { TipChips } from "./tip-chips/TipChips";
import { BillShare } from "./bill-share/BillShare";
import { ManagePlan } from "./manage-plan/ManagePlan";
import { PlanChange } from "./plan-change/PlanChange";

export { Visual };
export { PriceCards, BillingToggle, SeatStepper, UsageSlider, FeatureTable, DifferencesOnly, VolumeTiers, AddOnBoxes, CouponCode, CurrencySwitch, PriceDrop, TrialBar, GuaranteeSeal, PricingQuestions, CartLines, MiniCart, FreeShippingBar, OrderSummary, PromoChip, SavedForLater, UpsellStrip, GiftWrap, DeliveryChoice, EmptyCart, CheckoutSteps, AddressForm, CardDigits, CardBrand, ExpiryAndCode, PaymentMethods, TermsGate, PayButton, OrderConfirmed, ReceiptPrinting, InvoiceRows, RefundReason, OrderTracker, DeliverySlots, TipChips, BillShare, ManagePlan, PlanChange };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Price cards", PriceCards, "click"],
  ["Billing toggle", BillingToggle, "click"],
  ["Seat stepper", SeatStepper, "click"],
  ["Usage slider", UsageSlider, "drag"],
  ["Feature table", FeatureTable, "still"],
  ["Differences only", DifferencesOnly, "click"],
  ["Volume tiers", VolumeTiers, "click"],
  ["Add-on boxes", AddOnBoxes, "click"],
  ["Coupon code", CouponCode, "type"],
  ["Currency switch", CurrencySwitch, "click"],
  ["Price drop", PriceDrop, "click"],
  ["Trial bar", TrialBar, "auto"],
  ["Guarantee seal", GuaranteeSeal, "click"],
  ["Pricing questions", PricingQuestions, "click"],
  ["Cart lines", CartLines, "click"],
  ["Mini cart", MiniCart, "click"],
  ["Free shipping bar", FreeShippingBar, "click"],
  ["Order summary", OrderSummary, "click"],
  ["Promo chip", PromoChip, "click"],
  ["Saved for later", SavedForLater, "click"],
  ["Upsell strip", UpsellStrip, "click"],
  ["Gift wrap", GiftWrap, "click"],
  ["Delivery choice", DeliveryChoice, "click"],
  ["Empty cart", EmptyCart, "click"],
  ["Checkout steps", CheckoutSteps, "click"],
  ["Address form", AddressForm, "type"],
  ["Card digits", CardDigits, "type"],
  ["Card brand", CardBrand, "type"],
  ["Expiry and code", ExpiryAndCode, "type"],
  ["Payment methods", PaymentMethods, "click"],
  ["Terms gate", TermsGate, "click"],
  ["Pay button", PayButton, "click"],
  ["Order confirmed", OrderConfirmed, "click"],
  ["Receipt printing", ReceiptPrinting, "auto"],
  ["Invoice rows", InvoiceRows, "click"],
  ["Refund reason", RefundReason, "click"],
  ["Order tracker", OrderTracker, "click"],
  ["Delivery slots", DeliverySlots, "click"],
  ["Tip chips", TipChips, "click"],
  ["Bill share", BillShare, "click"],
  ["Manage plan", ManagePlan, "click"],
  ["Plan change", PlanChange, "drag"],
];

export default { Visual, items };
