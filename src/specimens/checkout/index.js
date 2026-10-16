/* ============================================================
   49 · CHECKOUT — pricing, carts and order flows.
   The still side is a receipt that prints as the scroll advances: a line
   appears for each item, then the total underlines itself. The forty-two
   specimens are the parts of buying something: plan cards and toggles, cart
   lines and shipping, the steps of paying, and what comes after. The prices are
   made up, but every control does its sum: change a quantity, a plan or a tip
   and the totals follow. Nothing is sent anywhere.
   ============================================================ */

import { Visual } from './Visual';
import { PriceCards } from './PriceCards';
import { BillingToggle } from './BillingToggle';
import { SeatStepper } from './SeatStepper';
import { UsageSlider } from './UsageSlider';
import { FeatureTable } from './FeatureTable';
import { DifferencesOnly } from './DifferencesOnly';
import { VolumeTiers } from './VolumeTiers';
import { AddOnBoxes } from './AddOnBoxes';
import { CouponCode } from './CouponCode';
import { CurrencySwitch } from './CurrencySwitch';
import { PriceDrop } from './PriceDrop';
import { TrialBar } from './TrialBar';
import { GuaranteeSeal } from './GuaranteeSeal';
import { PricingQuestions } from './PricingQuestions';
import { CartLines } from './CartLines';
import { MiniCart } from './MiniCart';
import { FreeShippingBar } from './FreeShippingBar';
import { OrderSummary } from './OrderSummary';
import { PromoChip } from './PromoChip';
import { SavedForLater } from './SavedForLater';
import { UpsellStrip } from './UpsellStrip';
import { GiftWrap } from './GiftWrap';
import { DeliveryChoice } from './DeliveryChoice';
import { EmptyCart } from './EmptyCart';
import { CheckoutSteps } from './CheckoutSteps';
import { AddressForm } from './AddressForm';
import { CardDigits } from './CardDigits';
import { CardBrand } from './CardBrand';
import { ExpiryAndCode } from './ExpiryAndCode';
import { PaymentMethods } from './PaymentMethods';
import { TermsGate } from './TermsGate';
import { PayButton } from './PayButton';
import { OrderConfirmed } from './OrderConfirmed';
import { ReceiptPrinting } from './ReceiptPrinting';
import { InvoiceRows } from './InvoiceRows';
import { RefundReason } from './RefundReason';
import { OrderTracker } from './OrderTracker';
import { DeliverySlots } from './DeliverySlots';
import { TipChips } from './TipChips';
import { BillShare } from './BillShare';
import { ManagePlan } from './ManagePlan';
import { PlanChange } from './PlanChange';

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
