/* ============================================================
   05 · FIELDS — inputs, pickers and steppers, reimagined.
   The still side is a form that fills itself in, row by row, as you read.
   ============================================================ */

import { Visual } from './Visual';
import { FloatingLabel } from './FloatingLabel';
import { UnderlineGrow } from './UnderlineGrow';
import { OneTimeCode } from './OneTimeCode';
import { PhoneMask } from './PhoneMask';
import { CardNumber } from './CardNumber';
import { PasswordMeter } from './PasswordMeter';
import { TagInput } from './TagInput';
import { Typeahead } from './Typeahead';
import { SearchSuggest } from './SearchSuggest';
import { DatePicker } from './DatePicker';
import { TimeDrum } from './TimeDrum';
import { SwatchInput } from './SwatchInput';
import { DropZone } from './DropZone';
import { AutoGrowArea } from './AutoGrowArea';
import { MentionBox } from './MentionBox';
import { InlineEdit } from './InlineEdit';
import { QuantityStepper } from './QuantityStepper';
import { CurrencyField } from './CurrencyField';
import { SelectList } from './SelectList';
import { MultiSelect } from './MultiSelect';
import { RadioCards } from './RadioCards';
import { CheckTree } from './CheckTree';
import { SettingRows } from './SettingRows';
import { SegmentedSize } from './SegmentedSize';
import { PromptLine } from './PromptLine';
import { DotPin } from './DotPin';
import { SlugMaker } from './SlugMaker';
import { URLField } from './URLField';
import { EmailDomain } from './EmailDomain';
import { AddressCard } from './AddressCard';
import { FilterChips } from './FilterChips';
import { StarRating } from './StarRating';
import { SymbolPicker } from './SymbolPicker';
import { VoiceField } from './VoiceField';
import { FormatBar } from './FormatBar';
import { SecretReveal } from './SecretReveal';
import { RotatingPrompt } from './RotatingPrompt';
import { FindReplace } from './FindReplace';
import { StateRows } from './StateRows';
import { CounterRing } from './CounterRing';

export { Visual };
export { FloatingLabel, UnderlineGrow, OneTimeCode, PhoneMask, CardNumber, PasswordMeter, TagInput, Typeahead, SearchSuggest, DatePicker, TimeDrum, SwatchInput, DropZone, AutoGrowArea, MentionBox, InlineEdit, QuantityStepper, CurrencyField, SelectList, MultiSelect, RadioCards, CheckTree, SettingRows, SegmentedSize, PromptLine, DotPin, SlugMaker, URLField, EmailDomain, AddressCard, FilterChips, StarRating, SymbolPicker, VoiceField, FormatBar, SecretReveal, RotatingPrompt, FindReplace, StateRows, CounterRing };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Floating label", FloatingLabel, "type"],
  ["Underline grow", UnderlineGrow, "type"],
  ["One-time code", OneTimeCode, "type"],
  ["Phone mask", PhoneMask, "type"],
  ["Card number", CardNumber, "type"],
  ["Password meter", PasswordMeter, "type"],
  ["Tag input", TagInput, "type"],
  ["Typeahead", Typeahead, "type"],
  ["Search suggest", SearchSuggest, "type"],
  ["Date picker", DatePicker, "click"],
  ["Time drum", TimeDrum, "scroll"],
  ["Swatch input", SwatchInput, "click"],
  ["Drop zone", DropZone, "click"],
  ["Auto-grow area", AutoGrowArea, "type"],
  ["Mention box", MentionBox, "type"],
  ["Inline edit", InlineEdit, "click"],
  ["Quantity stepper", QuantityStepper, "click"],
  ["Currency field", CurrencyField, "type"],
  ["Select list", SelectList, "click"],
  ["Multi select", MultiSelect, "click"],
  ["Radio cards", RadioCards, "click"],
  ["Check tree", CheckTree, "click"],
  ["Setting rows", SettingRows, "click"],
  ["Segmented size", SegmentedSize, "click"],
  ["Prompt line", PromptLine, "type"],
  ["Dot pin", DotPin, "type"],
  ["Slug maker", SlugMaker, "type"],
  ["URL field", URLField, "type"],
  ["Email domain", EmailDomain, "type"],
  ["Address card", AddressCard, "type"],
  ["Filter chips", FilterChips, "click"],
  ["Star rating", StarRating, "click"],
  ["Symbol picker", SymbolPicker, "click"],
  ["Voice field", VoiceField, "click"],
  ["Format bar", FormatBar, "click"],
  ["Secret reveal", SecretReveal, "click"],
  ["Rotating prompt", RotatingPrompt, "type"],
  ["Find replace", FindReplace, "type"],
  ["State rows", StateRows, "type"],
  ["Counter ring", CounterRing, "type"],
];

export default { Visual, items };
