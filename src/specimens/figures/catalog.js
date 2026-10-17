/* ============================================================
   09 · FIGURES — numerals that roll, flip and settle.
   One specimen fills the right of the screen at a time, cut in by a moving edge.
   On the left, two odometers read the scroll itself: the big one counts which
   specimen you are on, the small one how far down the page you are. They are
   rolling reels of digits moved by CSS (round / mod on the scroll number), with
   the carry behaving like a real odometer: a digit only turns over while the
   one beside it is passing nine.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { FlipClock } from "./flip-clock/FlipClock";
import { MileageReel } from "./mileage-reel/MileageReel";
import { EasedCount } from "./eased-count/EasedCount";
import { CountdownRing } from "./countdown-ring/CountdownRing";
import { Stopwatch } from "./stopwatch/Stopwatch";
import { SevenSegment } from "./seven-segment/SevenSegment";
import { NixieTubes } from "./nixie-tubes/NixieTubes";
import { SlotReels } from "./slot-reels/SlotReels";
import { NumberScramble } from "./number-scramble/NumberScramble";
import { RomanNumerals } from "./roman-numerals/RomanNumerals";
import { BinaryClock } from "./binary-clock/BinaryClock";
import { TallyMarks } from "./tally-marks/TallyMarks";
import { Abacus } from "./abacus/Abacus";
import { CurrencyCounter } from "./currency-counter/CurrencyCounter";
import { RollToNumber } from "./roll-to-number/RollToNumber";
import { AnalogClock } from "./analog-clock/AnalogClock";
import { WorldClocks } from "./world-clocks/WorldClocks";
import { TearOffDay } from "./tear-off-day/TearOffDay";
import { DeltaStat } from "./delta-stat/DeltaStat";
import { FractionPie } from "./fraction-pie/FractionPie";
import { DiceRoll } from "./dice-roll/DiceRoll";
import { Scoreboard } from "./scoreboard/Scoreboard";
import { HexClock } from "./hex-clock/HexClock";
import { NumberLine } from "./number-line/NumberLine";
import { BadgeCount } from "./badge-count/BadgeCount";
import { FloorDisplay } from "./floor-display/FloorDisplay";
import { TicketQueue } from "./ticket-queue/TicketQueue";
import { NumberWords } from "./number-words/NumberWords";
import { BaseSwitch } from "./base-switch/BaseSwitch";
import { ModClock } from "./mod-clock/ModClock";
import { PrimeSieve } from "./prime-sieve/PrimeSieve";
import { CollatzTrail } from "./collatz-trail/CollatzTrail";
import { FibonacciTiles } from "./fibonacci-tiles/FibonacciTiles";
import { TimesWheel } from "./times-wheel/TimesWheel";
import { PiDigits } from "./pi-digits/PiDigits";
import { UlamSpiral } from "./ulam-spiral/UlamSpiral";
import { OutlineDigits } from "./outline-digits/OutlineDigits";
import { LiquidNumber } from "./liquid-number/LiquidNumber";
import { BeatCounter } from "./beat-counter/BeatCounter";
import { RatioSplit } from "./ratio-split/RatioSplit";
import { NotationSwitch } from "./notation-switch/NotationSwitch";
import { PrimeFactors } from "./prime-factors/PrimeFactors";

export { Visual };
export { FlipClock, MileageReel, EasedCount, CountdownRing, Stopwatch, SevenSegment, NixieTubes, SlotReels, NumberScramble, RomanNumerals, BinaryClock, TallyMarks, Abacus, CurrencyCounter, RollToNumber, AnalogClock, WorldClocks, TearOffDay, DeltaStat, FractionPie, DiceRoll, Scoreboard, HexClock, NumberLine, BadgeCount, FloorDisplay, TicketQueue, NumberWords, BaseSwitch, ModClock, PrimeSieve, CollatzTrail, FibonacciTiles, TimesWheel, PiDigits, UlamSpiral, OutlineDigits, LiquidNumber, BeatCounter, RatioSplit, NotationSwitch, PrimeFactors };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Flip clock", FlipClock, "auto"],
  ["Mileage reel", MileageReel, "auto"],
  ["Eased count", EasedCount, "click"],
  ["Countdown ring", CountdownRing, "click"],
  ["Stopwatch", Stopwatch, "click"],
  ["Seven segment", SevenSegment, "click"],
  ["Nixie tubes", NixieTubes, "auto"],
  ["Slot reels", SlotReels, "click"],
  ["Number scramble", NumberScramble, "hover"],
  ["Roman numerals", RomanNumerals, "click"],
  ["Binary clock", BinaryClock, "auto"],
  ["Tally marks", TallyMarks, "click"],
  ["Abacus", Abacus, "click"],
  ["Currency counter", CurrencyCounter, "auto"],
  ["Roll to number", RollToNumber, "click"],
  ["Analog clock", AnalogClock, "auto"],
  ["World clocks", WorldClocks, "auto"],
  ["Tear-off day", TearOffDay, "click"],
  ["Delta stat", DeltaStat, "hover"],
  ["Fraction pie", FractionPie, "click"],
  ["Dice roll", DiceRoll, "click"],
  ["Scoreboard", Scoreboard, "click"],
  ["Hex clock", HexClock, "auto"],
  ["Number line", NumberLine, "drag"],
  ["Badge count", BadgeCount, "click"],
  ["Floor display", FloorDisplay, "click"],
  ["Ticket queue", TicketQueue, "click"],
  ["Number words", NumberWords, "type"],
  ["Base switch", BaseSwitch, "type"],
  ["Mod clock", ModClock, "click"],
  ["Prime sieve", PrimeSieve, "auto"],
  ["Collatz trail", CollatzTrail, "click"],
  ["Fibonacci tiles", FibonacciTiles, "auto"],
  ["Times wheel", TimesWheel, "drag"],
  ["Pi digits", PiDigits, "auto"],
  ["Ulam spiral", UlamSpiral, "hover"],
  ["Outline digits", OutlineDigits, "auto"],
  ["Liquid number", LiquidNumber, "auto"],
  ["Beat counter", BeatCounter, "auto"],
  ["Ratio split", RatioSplit, "drag"],
  ["Notation switch", NotationSwitch, "type"],
  ["Prime factors", PrimeFactors, "type"],
];

export default { Visual, items };
