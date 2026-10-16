/* ============================================================
   50 · HEROES — opening screens, bands and endings.
   The still side is one hero that re-lays itself out as the scroll advances:
   the headline slides left while a shape grows in on the right and the button
   settles beneath. The forty-two specimens are layouts of the same kind, drawn
   small: openings of every shape, the bands that sit between sections, and the
   endings that close a page. Each has one thing you can do to it (press,
   type, hover, switch) or does something by itself while on screen.
   ============================================================ */

import { Visual } from './Visual';
import { CentredOpening } from './CentredOpening';
import { TextAndShape } from './TextAndShape';
import { HalfAndHalf } from './HalfAndHalf';
import { FullBleed } from './FullBleed';
import { FilmOpening } from './FilmOpening';
import { CardStackHero } from './CardStackHero';
import { EmailOpening } from './EmailOpening';
import { TwoPaths } from './TwoPaths';
import { LogoStrip } from './LogoStrip';
import { StatsBand } from './StatsBand';
import { MarqueeWords } from './MarqueeWords';
import { TypedOpening } from './TypedOpening';
import { WordRotator } from './WordRotator';
import { ColourMesh } from './ColourMesh';
import { SpotlightOpening } from './SpotlightOpening';
import { ParallaxOpening } from './ParallaxOpening';
import { ProductCallouts } from './ProductCallouts';
import { PhoneOpening } from './PhoneOpening';
import { BrowserOpening } from './BrowserOpening';
import { FloatingCards } from './FloatingCards';
import { TabbedOpening } from './TabbedOpening';
import { SlideOpening } from './SlideOpening';
import { AnnouncementBar } from './AnnouncementBar';
import { BadgeOpening } from './BadgeOpening';
import { BigNumber } from './BigNumber';
import { OutlineType } from './OutlineType';
import { ScrollNudge } from './ScrollNudge';
import { LaunchClock } from './LaunchClock';
import { SearchOpening } from './SearchOpening';
import { WaitlistForm } from './WaitlistForm';
import { PricingBand } from './PricingBand';
import { QuoteBand } from './QuoteBand';
import { ClosingBand } from './ClosingBand';
import { FooterCall } from './FooterCall';
import { NewsletterEnding } from './NewsletterEnding';
import { DeadEnd } from './DeadEnd';
import { ThankYouEnding } from './ThankYouEnding';
import { ContactEnding } from './ContactEnding';
import { ReturnToTop } from './ReturnToTop';
import { SignOff } from './SignOff';
import { ThemeOpening } from './ThemeOpening';
import { LanguageOpening } from './LanguageOpening';

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
