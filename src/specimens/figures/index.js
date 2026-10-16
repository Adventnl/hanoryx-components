/* ============================================================
   09 · FIGURES — numerals that roll, flip and settle.
   One specimen fills the right of the screen at a time, cut in by a moving edge.
   On the left, two odometers read the scroll itself: the big one counts which
   specimen you are on, the small one how far down the page you are. They are
   rolling reels of digits moved by CSS (round / mod on the scroll number), with
   the carry behaving like a real odometer: a digit only turns over while the
   one beside it is passing nine.
   ============================================================ */

import { Visual } from './Visual';
import { FlipClock } from './FlipClock';
import { MileageReel } from './MileageReel';
import { EasedCount } from './EasedCount';
import { CountdownRing } from './CountdownRing';
import { Stopwatch } from './Stopwatch';
import { SevenSegment } from './SevenSegment';
import { NixieTubes } from './NixieTubes';
import { SlotReels } from './SlotReels';
import { NumberScramble } from './NumberScramble';
import { RomanNumerals } from './RomanNumerals';
import { BinaryClock } from './BinaryClock';
import { TallyMarks } from './TallyMarks';
import { Abacus } from './Abacus';
import { CurrencyCounter } from './CurrencyCounter';
import { RollToNumber } from './RollToNumber';
import { AnalogClock } from './AnalogClock';
import { WorldClocks } from './WorldClocks';
import { TearOffDay } from './TearOffDay';
import { DeltaStat } from './DeltaStat';
import { FractionPie } from './FractionPie';
import { DiceRoll } from './DiceRoll';
import { Scoreboard } from './Scoreboard';
import { HexClock } from './HexClock';
import { NumberLine } from './NumberLine';
import { BadgeCount } from './BadgeCount';
import { FloorDisplay } from './FloorDisplay';
import { TicketQueue } from './TicketQueue';
import { NumberWords } from './NumberWords';
import { BaseSwitch } from './BaseSwitch';
import { ModClock } from './ModClock';
import { PrimeSieve } from './PrimeSieve';
import { CollatzTrail } from './CollatzTrail';
import { FibonacciTiles } from './FibonacciTiles';
import { TimesWheel } from './TimesWheel';
import { PiDigits } from './PiDigits';
import { UlamSpiral } from './UlamSpiral';
import { OutlineDigits } from './OutlineDigits';
import { LiquidNumber } from './LiquidNumber';
import { BeatCounter } from './BeatCounter';
import { RatioSplit } from './RatioSplit';
import { NotationSwitch } from './NotationSwitch';
import { PrimeFactors } from './PrimeFactors';

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
