/* ============================================================
   50 · HEROES — opening screens, bands and endings.
   The still side is one hero that re-lays itself out as the scroll advances:
   the headline slides left while a shape grows in on the right and the button
   settles beneath. The forty-two specimens are layouts of the same kind, drawn
   small: openings of every shape, the bands that sit between sections, and the
   endings that close a page. Each has one thing you can do to it (press,
   type, hover, switch) or does something by itself while on screen.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { CentredOpening } from "./centred-opening/CentredOpening";
import { TextAndShape } from "./text-and-shape/TextAndShape";
import { HalfAndHalf } from "./half-and-half/HalfAndHalf";
import { FullBleed } from "./full-bleed/FullBleed";
import { FilmOpening } from "./film-opening/FilmOpening";
import { CardStackHero } from "./card-stack-hero/CardStackHero";
import { EmailOpening } from "./email-opening/EmailOpening";
import { TwoPaths } from "./two-paths/TwoPaths";
import { LogoStrip } from "./logo-strip/LogoStrip";
import { StatsBand } from "./stats-band/StatsBand";
import { MarqueeWords } from "./marquee-words/MarqueeWords";
import { TypedOpening } from "./typed-opening/TypedOpening";
import { WordRotator } from "./word-rotator/WordRotator";
import { ColourMesh } from "./colour-mesh/ColourMesh";
import { SpotlightOpening } from "./spotlight-opening/SpotlightOpening";
import { ParallaxOpening } from "./parallax-opening/ParallaxOpening";
import { ProductCallouts } from "./product-callouts/ProductCallouts";
import { PhoneOpening } from "./phone-opening/PhoneOpening";
import { BrowserOpening } from "./browser-opening/BrowserOpening";
import { FloatingCards } from "./floating-cards/FloatingCards";
import { TabbedOpening } from "./tabbed-opening/TabbedOpening";
import { SlideOpening } from "./slide-opening/SlideOpening";
import { AnnouncementBar } from "./announcement-bar/AnnouncementBar";
import { BadgeOpening } from "./badge-opening/BadgeOpening";
import { BigNumber } from "./big-number/BigNumber";
import { OutlineType } from "./outline-type/OutlineType";
import { ScrollNudge } from "./scroll-nudge/ScrollNudge";
import { LaunchClock } from "./launch-clock/LaunchClock";
import { SearchOpening } from "./search-opening/SearchOpening";
import { WaitlistForm } from "./waitlist-form/WaitlistForm";
import { PricingBand } from "./pricing-band/PricingBand";
import { QuoteBand } from "./quote-band/QuoteBand";
import { ClosingBand } from "./closing-band/ClosingBand";
import { FooterCall } from "./footer-call/FooterCall";
import { NewsletterEnding } from "./newsletter-ending/NewsletterEnding";
import { DeadEnd } from "./dead-end/DeadEnd";
import { ThankYouEnding } from "./thank-you-ending/ThankYouEnding";
import { ContactEnding } from "./contact-ending/ContactEnding";
import { ReturnToTop } from "./return-to-top/ReturnToTop";
import { SignOff } from "./sign-off/SignOff";
import { ThemeOpening } from "./theme-opening/ThemeOpening";
import { LanguageOpening } from "./language-opening/LanguageOpening";

export { Visual };
export { CentredOpening, TextAndShape, HalfAndHalf, FullBleed, FilmOpening, CardStackHero, EmailOpening, TwoPaths, LogoStrip, StatsBand, MarqueeWords, TypedOpening, WordRotator, ColourMesh, SpotlightOpening, ParallaxOpening, ProductCallouts, PhoneOpening, BrowserOpening, FloatingCards, TabbedOpening, SlideOpening, AnnouncementBar, BadgeOpening, BigNumber, OutlineType, ScrollNudge, LaunchClock, SearchOpening, WaitlistForm, PricingBand, QuoteBand, ClosingBand, FooterCall, NewsletterEnding, DeadEnd, ThankYouEnding, ContactEnding, ReturnToTop, SignOff, ThemeOpening, LanguageOpening };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Centred opening", CentredOpening, "click"],
  ["Text and shape", TextAndShape, "still"],
  ["Half and half", HalfAndHalf, "still"],
  ["Full-bleed", FullBleed, "still"],
  ["Film opening", FilmOpening, "click"],
  ["Card stack hero", CardStackHero, "click"],
  ["Email opening", EmailOpening, "type"],
  ["Two paths", TwoPaths, "click"],
  ["Logo strip", LogoStrip, "hover"],
  ["Stats band", StatsBand, "auto"],
  ["Marquee words", MarqueeWords, "auto"],
  ["Typed opening", TypedOpening, "auto"],
  ["Word rotator", WordRotator, "auto"],
  ["Colour mesh", ColourMesh, "auto"],
  ["Spotlight opening", SpotlightOpening, "hover"],
  ["Parallax opening", ParallaxOpening, "hover"],
  ["Product callouts", ProductCallouts, "click"],
  ["Phone opening", PhoneOpening, "click"],
  ["Browser opening", BrowserOpening, "click"],
  ["Floating cards", FloatingCards, "auto"],
  ["Tabbed opening", TabbedOpening, "click"],
  ["Slide opening", SlideOpening, "click"],
  ["Announcement bar", AnnouncementBar, "click"],
  ["Badge opening", BadgeOpening, "hover"],
  ["Big number", BigNumber, "click"],
  ["Outline type", OutlineType, "hover"],
  ["Scroll nudge", ScrollNudge, "auto"],
  ["Launch clock", LaunchClock, "auto"],
  ["Search opening", SearchOpening, "type"],
  ["Waitlist form", WaitlistForm, "type"],
  ["Pricing band", PricingBand, "click"],
  ["Quote band", QuoteBand, "click"],
  ["Closing band", ClosingBand, "still"],
  ["Footer call", FooterCall, "still"],
  ["Newsletter ending", NewsletterEnding, "type"],
  ["Dead end", DeadEnd, "still"],
  ["Thank-you ending", ThankYouEnding, "click"],
  ["Contact ending", ContactEnding, "click"],
  ["Return to top", ReturnToTop, "click"],
  ["Sign-off", SignOff, "auto"],
  ["Theme opening", ThemeOpening, "click"],
  ["Language opening", LanguageOpening, "click"],
];

export default { Visual, items };
