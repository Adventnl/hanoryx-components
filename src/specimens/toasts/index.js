/* ============================================================
   27 · TOASTS — alerts, banners and notices.
   The still side is a stack of five notices that arrive one by one as the page
   scrolls: each slides in on its --f and the ones before it shrink back, as
   a real stack does. Specimens use a small queue (auto-dismiss that pauses
   under the pointer or focus) and announce themselves politely to a screen reader.
   ============================================================ */

import { Visual } from './Visual';
import { QuietToast } from './QuietToast';
import { SuccessToast } from './SuccessToast';
import { FailureToast } from './FailureToast';
import { WarningBanner } from './WarningBanner';
import { InfoBanner } from './InfoBanner';
import { UndoToast } from './UndoToast';
import { UploadToast } from './UploadToast';
import { StackedNotices } from './StackedNotices';
import { SwipeAway } from './SwipeAway';
import { Snackbar } from './Snackbar';
import { PreferenceBar } from './PreferenceBar';
import { InlineAlert } from './InlineAlert';
import { Callout } from './Callout';
import { AnnouncementMarquee } from './AnnouncementMarquee';
import { DismissibleBanner } from './DismissibleBanner';
import { TimerRingToast } from './TimerRingToast';
import { BellShake } from './BellShake';
import { CornerPop } from './CornerPop';
import { AvatarToast } from './AvatarToast';
import { ImageToast } from './ImageToast';
import { ActionToast } from './ActionToast';
import { SystemBar } from './SystemBar';
import { NotificationPanel } from './NotificationPanel';
import { FlashMessage } from './FlashMessage';
import { ConfettiToast } from './ConfettiToast';
import { ToastSequence } from './ToastSequence';
import { PositionPicker } from './PositionPicker';
import { DurationSlider } from './DurationSlider';
import { OfflineBar } from './OfflineBar';
import { NetworkPill } from './NetworkPill';
import { UpdatePrompt } from './UpdatePrompt';
import { CopyConfirm } from './CopyConfirm';
import { ErrorSummary } from './ErrorSummary';
import { FieldHint } from './FieldHint';
import { AutosaveLine } from './AutosaveLine';
import { BagToast } from './BagToast';
import { ReactionPrompt } from './ReactionPrompt';
import { TimedToast } from './TimedToast';
import { HoverToHold } from './HoverToHold';
import { FannedNotices } from './FannedNotices';
import { SaleCountdown } from './SaleCountdown';
import { LiveStatusLine } from './LiveStatusLine';

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
