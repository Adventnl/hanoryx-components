/* ============================================================
   05 · FIELDS — inputs, pickers and steppers, reimagined.
   The still side is a form that fills itself in, row by row, as you read.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { FloatingLabel } from "./floating-label/FloatingLabel";
import { UnderlineGrow } from "./underline-grow/UnderlineGrow";
import { OneTimeCode } from "./one-time-code/OneTimeCode";
import { PhoneMask } from "./phone-mask/PhoneMask";
import { CardNumber } from "./card-number/CardNumber";
import { PasswordMeter } from "./password-meter/PasswordMeter";
import { TagInput } from "./tag-input/TagInput";
import { Typeahead } from "./typeahead/Typeahead";
import { SearchSuggest } from "./search-suggest/SearchSuggest";
import { DatePicker } from "./date-picker/DatePicker";
import { TimeDrum } from "./time-drum/TimeDrum";
import { SwatchInput } from "./swatch-input/SwatchInput";
import { DropZone } from "./drop-zone/DropZone";
import { AutoGrowArea } from "./auto-grow-area/AutoGrowArea";
import { MentionBox } from "./mention-box/MentionBox";
import { InlineEdit } from "./inline-edit/InlineEdit";
import { QuantityStepper } from "./quantity-stepper/QuantityStepper";
import { CurrencyField } from "./currency-field/CurrencyField";
import { SelectList } from "./select-list/SelectList";
import { MultiSelect } from "./multi-select/MultiSelect";
import { RadioCards } from "./radio-cards/RadioCards";
import { CheckTree } from "./check-tree/CheckTree";
import { SettingRows } from "./setting-rows/SettingRows";
import { SegmentedSize } from "./segmented-size/SegmentedSize";
import { PromptLine } from "./prompt-line/PromptLine";
import { DotPin } from "./dot-pin/DotPin";
import { SlugMaker } from "./slug-maker/SlugMaker";
import { URLField } from "./urlfield/URLField";
import { EmailDomain } from "./email-domain/EmailDomain";
import { AddressCard } from "./address-card/AddressCard";
import { FilterChips } from "./filter-chips/FilterChips";
import { StarRating } from "./star-rating/StarRating";
import { SymbolPicker } from "./symbol-picker/SymbolPicker";
import { VoiceField } from "./voice-field/VoiceField";
import { FormatBar } from "./format-bar/FormatBar";
import { SecretReveal } from "./secret-reveal/SecretReveal";
import { RotatingPrompt } from "./rotating-prompt/RotatingPrompt";
import { FindReplace } from "./find-replace/FindReplace";
import { StateRows } from "./state-rows/StateRows";
import { CounterRing } from "./counter-ring/CounterRing";

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
