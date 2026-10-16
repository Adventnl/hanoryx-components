/* ============================================================
   31 · POPOVERS — tooltips, hover cards and callouts.
   The still side is a reference square with one popover that walks round it:
   the scroll sets its angle, so over the page it takes up every placement in
   turn, its arrow turning to keep pointing home. Specimens use a tiny open /
   close hook (Escape and an outside press close one) and every tooltip opens on
   keyboard focus as well as on hover.
   ============================================================ */

import { Visual } from './Visual';
import { TopTooltip } from './TopTooltip';
import { SidePicker } from './SidePicker';
import { RichTooltip } from './RichTooltip';
import { HoverCard } from './HoverCard';
import { ClickPopover } from './ClickPopover';
import { ConfirmPopover } from './ConfirmPopover';
import { FollowingTip } from './FollowingTip';
import { SpeechBubble } from './SpeechBubble';
import { Coachmark } from './Coachmark';
import { ProductHotspots } from './ProductHotspots';
import { FootnoteBubble } from './FootnoteBubble';
import { TermTooltip } from './TermTooltip';
import { ColourPopover } from './ColourPopover';
import { DatePopover } from './DatePopover';
import { ReactionPopover } from './ReactionPopover';
import { LinkPreview } from './LinkPreview';
import { EditInPlace } from './EditInPlace';
import { SharePopover } from './SharePopover';
import { InfoPopover } from './InfoPopover';
import { FieldErrorTip } from './FieldErrorTip';
import { KeyHintTip } from './KeyHintTip';
import { DelayedTip } from './DelayedTip';
import { PinnedTip } from './PinnedTip';
import { TourPopover } from './TourPopover';
import { ChartTip } from './ChartTip';
import { AvatarTips } from './AvatarTips';
import { WhyDisabled } from './WhyDisabled';
import { TruncatedName } from './TruncatedName';
import { ThumbnailPreview } from './ThumbnailPreview';
import { MapPinPopover } from './MapPinPopover';
import { CalendarDayTip } from './CalendarDayTip';
import { DefinitionCard } from './DefinitionCard';
import { DropDownNotice } from './DropDownNotice';
import { AssistantBubble } from './AssistantBubble';
import { RowActions } from './RowActions';
import { NotificationPopover } from './NotificationPopover';
import { SettingsPopover } from './SettingsPopover';
import { StepPopover } from './StepPopover';
import { ThemedTip } from './ThemedTip';
import { PlacementPicker } from './PlacementPicker';
import { NestedPopover } from './NestedPopover';
import { FlippingPopover } from './FlippingPopover';

export { Visual };
export { TopTooltip, SidePicker, RichTooltip, HoverCard, ClickPopover, ConfirmPopover, FollowingTip, SpeechBubble, Coachmark, ProductHotspots, FootnoteBubble, TermTooltip, ColourPopover, DatePopover, ReactionPopover, LinkPreview, EditInPlace, SharePopover, InfoPopover, FieldErrorTip, KeyHintTip, DelayedTip, PinnedTip, TourPopover, ChartTip, AvatarTips, WhyDisabled, TruncatedName, ThumbnailPreview, MapPinPopover, CalendarDayTip, DefinitionCard, DropDownNotice, AssistantBubble, RowActions, NotificationPopover, SettingsPopover, StepPopover, ThemedTip, PlacementPicker, NestedPopover, FlippingPopover };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Top tooltip", TopTooltip, "hover"],
  ["Side picker", SidePicker, "click"],
  ["Rich tooltip", RichTooltip, "hover"],
  ["Hover card", HoverCard, "hover"],
  ["Click popover", ClickPopover, "click"],
  ["Confirm popover", ConfirmPopover, "click"],
  ["Following tip", FollowingTip, "hover"],
  ["Speech bubble", SpeechBubble, "click"],
  ["Coachmark", Coachmark, "click"],
  ["Product hotspots", ProductHotspots, "hover"],
  ["Footnote bubble", FootnoteBubble, "click"],
  ["Term tooltip", TermTooltip, "hover"],
  ["Colour popover", ColourPopover, "click"],
  ["Date popover", DatePopover, "click"],
  ["Reaction popover", ReactionPopover, "click"],
  ["Link preview", LinkPreview, "hover"],
  ["Edit in place", EditInPlace, "click"],
  ["Share popover", SharePopover, "click"],
  ["Info popover", InfoPopover, "click"],
  ["Field error tip", FieldErrorTip, "type"],
  ["Key hint tip", KeyHintTip, "hover"],
  ["Delayed tip", DelayedTip, "hover"],
  ["Pinned tip", PinnedTip, "click"],
  ["Tour popover", TourPopover, "click"],
  ["Chart tip", ChartTip, "hover"],
  ["Avatar tips", AvatarTips, "hover"],
  ["Why disabled", WhyDisabled, "hover"],
  ["Truncated name", TruncatedName, "hover"],
  ["Thumbnail preview", ThumbnailPreview, "hover"],
  ["Map pin popover", MapPinPopover, "click"],
  ["Calendar day tip", CalendarDayTip, "hover"],
  ["Definition card", DefinitionCard, "hover"],
  ["Drop-down notice", DropDownNotice, "click"],
  ["Assistant bubble", AssistantBubble, "click"],
  ["Row actions", RowActions, "hover"],
  ["Notification popover", NotificationPopover, "click"],
  ["Settings popover", SettingsPopover, "click"],
  ["Step popover", StepPopover, "click"],
  ["Themed tip", ThemedTip, "click"],
  ["Placement picker", PlacementPicker, "click"],
  ["Nested popover", NestedPopover, "click"],
  ["Flipping popover", FlippingPopover, "drag"],
];

export default { Visual, items };
