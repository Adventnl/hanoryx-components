/* ============================================================
   31 · POPOVERS — tooltips, hover cards and callouts.
   The still side is a reference square with one popover that walks round it:
   the scroll sets its angle, so over the page it takes up every placement in
   turn, its arrow turning to keep pointing home. Specimens use a tiny open /
   close hook (Escape and an outside press close one) and every tooltip opens on
   keyboard focus as well as on hover.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { TopTooltip } from "./top-tooltip/TopTooltip";
import { SidePicker } from "./side-picker/SidePicker";
import { RichTooltip } from "./rich-tooltip/RichTooltip";
import { HoverCard } from "./hover-card/HoverCard";
import { ClickPopover } from "./click-popover/ClickPopover";
import { ConfirmPopover } from "./confirm-popover/ConfirmPopover";
import { FollowingTip } from "./following-tip/FollowingTip";
import { SpeechBubble } from "./speech-bubble/SpeechBubble";
import { Coachmark } from "./coachmark/Coachmark";
import { ProductHotspots } from "./product-hotspots/ProductHotspots";
import { FootnoteBubble } from "./footnote-bubble/FootnoteBubble";
import { TermTooltip } from "./term-tooltip/TermTooltip";
import { ColourPopover } from "./colour-popover/ColourPopover";
import { DatePopover } from "./date-popover/DatePopover";
import { ReactionPopover } from "./reaction-popover/ReactionPopover";
import { LinkPreview } from "./link-preview/LinkPreview";
import { EditInPlace } from "./edit-in-place/EditInPlace";
import { SharePopover } from "./share-popover/SharePopover";
import { InfoPopover } from "./info-popover/InfoPopover";
import { FieldErrorTip } from "./field-error-tip/FieldErrorTip";
import { KeyHintTip } from "./key-hint-tip/KeyHintTip";
import { DelayedTip } from "./delayed-tip/DelayedTip";
import { PinnedTip } from "./pinned-tip/PinnedTip";
import { TourPopover } from "./tour-popover/TourPopover";
import { ChartTip } from "./chart-tip/ChartTip";
import { AvatarTips } from "./avatar-tips/AvatarTips";
import { WhyDisabled } from "./why-disabled/WhyDisabled";
import { TruncatedName } from "./truncated-name/TruncatedName";
import { ThumbnailPreview } from "./thumbnail-preview/ThumbnailPreview";
import { MapPinPopover } from "./map-pin-popover/MapPinPopover";
import { CalendarDayTip } from "./calendar-day-tip/CalendarDayTip";
import { DefinitionCard } from "./definition-card/DefinitionCard";
import { DropDownNotice } from "./drop-down-notice/DropDownNotice";
import { AssistantBubble } from "./assistant-bubble/AssistantBubble";
import { RowActions } from "./row-actions/RowActions";
import { NotificationPopover } from "./notification-popover/NotificationPopover";
import { SettingsPopover } from "./settings-popover/SettingsPopover";
import { StepPopover } from "./step-popover/StepPopover";
import { ThemedTip } from "./themed-tip/ThemedTip";
import { PlacementPicker } from "./placement-picker/PlacementPicker";
import { NestedPopover } from "./nested-popover/NestedPopover";
import { FlippingPopover } from "./flipping-popover/FlippingPopover";

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
