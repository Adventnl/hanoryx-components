/* ============================================================
   27 · TOASTS — alerts, banners and notices.
   The still side is a stack of five notices that arrive one by one as the page
   scrolls: each slides in on its --f and the ones before it shrink back, as
   a real stack does. Specimens use a small queue (auto-dismiss that pauses
   under the pointer or focus) and announce themselves politely to a screen reader.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { QuietToast } from "./quiet-toast/QuietToast";
import { SuccessToast } from "./success-toast/SuccessToast";
import { FailureToast } from "./failure-toast/FailureToast";
import { WarningBanner } from "./warning-banner/WarningBanner";
import { InfoBanner } from "./info-banner/InfoBanner";
import { UndoToast } from "./undo-toast/UndoToast";
import { UploadToast } from "./upload-toast/UploadToast";
import { StackedNotices } from "./stacked-notices/StackedNotices";
import { SwipeAway } from "./swipe-away/SwipeAway";
import { Snackbar } from "./snackbar/Snackbar";
import { PreferenceBar } from "./preference-bar/PreferenceBar";
import { InlineAlert } from "./inline-alert/InlineAlert";
import { Callout } from "./callout/Callout";
import { AnnouncementMarquee } from "./announcement-marquee/AnnouncementMarquee";
import { DismissibleBanner } from "./dismissible-banner/DismissibleBanner";
import { TimerRingToast } from "./timer-ring-toast/TimerRingToast";
import { BellShake } from "./bell-shake/BellShake";
import { CornerPop } from "./corner-pop/CornerPop";
import { AvatarToast } from "./avatar-toast/AvatarToast";
import { ImageToast } from "./image-toast/ImageToast";
import { ActionToast } from "./action-toast/ActionToast";
import { SystemBar } from "./system-bar/SystemBar";
import { NotificationPanel } from "./notification-panel/NotificationPanel";
import { FlashMessage } from "./flash-message/FlashMessage";
import { ConfettiToast } from "./confetti-toast/ConfettiToast";
import { ToastSequence } from "./toast-sequence/ToastSequence";
import { PositionPicker } from "./position-picker/PositionPicker";
import { DurationSlider } from "./duration-slider/DurationSlider";
import { OfflineBar } from "./offline-bar/OfflineBar";
import { NetworkPill } from "./network-pill/NetworkPill";
import { UpdatePrompt } from "./update-prompt/UpdatePrompt";
import { CopyConfirm } from "./copy-confirm/CopyConfirm";
import { ErrorSummary } from "./error-summary/ErrorSummary";
import { FieldHint } from "./field-hint/FieldHint";
import { AutosaveLine } from "./autosave-line/AutosaveLine";
import { BagToast } from "./bag-toast/BagToast";
import { ReactionPrompt } from "./reaction-prompt/ReactionPrompt";
import { TimedToast } from "./timed-toast/TimedToast";
import { HoverToHold } from "./hover-to-hold/HoverToHold";
import { FannedNotices } from "./fanned-notices/FannedNotices";
import { SaleCountdown } from "./sale-countdown/SaleCountdown";
import { LiveStatusLine } from "./live-status-line/LiveStatusLine";

export { Visual };
export { QuietToast, SuccessToast, FailureToast, WarningBanner, InfoBanner, UndoToast, UploadToast, StackedNotices, SwipeAway, Snackbar, PreferenceBar, InlineAlert, Callout, AnnouncementMarquee, DismissibleBanner, TimerRingToast, BellShake, CornerPop, AvatarToast, ImageToast, ActionToast, SystemBar, NotificationPanel, FlashMessage, ConfettiToast, ToastSequence, PositionPicker, DurationSlider, OfflineBar, NetworkPill, UpdatePrompt, CopyConfirm, ErrorSummary, FieldHint, AutosaveLine, BagToast, ReactionPrompt, TimedToast, HoverToHold, FannedNotices, SaleCountdown, LiveStatusLine };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Quiet toast", QuietToast, "click"],
  ["Success toast", SuccessToast, "click"],
  ["Failure toast", FailureToast, "click"],
  ["Warning banner", WarningBanner, "click"],
  ["Info banner", InfoBanner, "static"],
  ["Undo toast", UndoToast, "click"],
  ["Upload toast", UploadToast, "click"],
  ["Stacked notices", StackedNotices, "click"],
  ["Swipe away", SwipeAway, "drag"],
  ["Snackbar", Snackbar, "click"],
  ["Preference bar", PreferenceBar, "click"],
  ["Inline alert", InlineAlert, "click"],
  ["Callout", Callout, "click"],
  ["Announcement marquee", AnnouncementMarquee, "auto"],
  ["Dismissible banner", DismissibleBanner, "click"],
  ["Timer ring toast", TimerRingToast, "click"],
  ["Bell shake", BellShake, "click"],
  ["Corner pop", CornerPop, "click"],
  ["Avatar toast", AvatarToast, "click"],
  ["Image toast", ImageToast, "click"],
  ["Action toast", ActionToast, "click"],
  ["System bar", SystemBar, "auto"],
  ["Notification panel", NotificationPanel, "click"],
  ["Flash message", FlashMessage, "click"],
  ["Confetti toast", ConfettiToast, "click"],
  ["Toast sequence", ToastSequence, "click"],
  ["Position picker", PositionPicker, "click"],
  ["Duration slider", DurationSlider, "drag"],
  ["Offline bar", OfflineBar, "click"],
  ["Network pill", NetworkPill, "click"],
  ["Update prompt", UpdatePrompt, "click"],
  ["Copy confirm", CopyConfirm, "click"],
  ["Error summary", ErrorSummary, "click"],
  ["Field hint", FieldHint, "type"],
  ["Autosave line", AutosaveLine, "auto"],
  ["Bag toast", BagToast, "click"],
  ["Reaction prompt", ReactionPrompt, "click"],
  ["Timed toast", TimedToast, "click"],
  ["Hover to hold", HoverToHold, "hover"],
  ["Fanned notices", FannedNotices, "hover"],
  ["Sale countdown", SaleCountdown, "auto"],
  ["Live status line", LiveStatusLine, "auto"],
];

export default { Visual, items };
