/* ============================================================
   46 · HANDSET — mobile screens, from first run to settings.
   The still side is a phone whose screen slides through five states as the
   scroll advances: welcome, sign in, a feed, a chat and settings. Each of the
   forty-two specimens is a small screen of the same kind, drawn at phone
   proportions: the ones you would tap are real buttons, fields and switches
   that work, and the ones that would run on their own do so while on screen.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { WelcomeSplash } from "./welcome-splash/WelcomeSplash";
import { IntroSlides } from "./intro-slides/IntroSlides";
import { PermissionAsk } from "./permission-ask/PermissionAsk";
import { SignInForm } from "./sign-in-form/SignInForm";
import { SetupSteps } from "./setup-steps/SetupSteps";
import { CodeEntry } from "./code-entry/CodeEntry";
import { FaceIDPrompt } from "./face-idprompt/FaceIDPrompt";
import { AvatarPick } from "./avatar-pick/AvatarPick";
import { InterestChips } from "./interest-chips/InterestChips";
import { ReminderOptIn } from "./reminder-opt-in/ReminderOptIn";
import { FeedCards } from "./feed-cards/FeedCards";
import { StoryRail } from "./story-rail/StoryRail";
import { SearchScreen } from "./search-screen/SearchScreen";
import { TabBar } from "./tab-bar/TabBar";
import { PeekSheet } from "./peek-sheet/PeekSheet";
import { PullRefresh } from "./pull-refresh/PullRefresh";
import { SwipeRow } from "./swipe-row/SwipeRow";
import { SegmentSwitch } from "./segment-switch/SegmentSwitch";
import { ShareGrid } from "./share-grid/ShareGrid";
import { TopBanner } from "./top-banner/TopBanner";
import { ProductPage } from "./product-page/ProductPage";
import { ChatThread } from "./chat-thread/ChatThread";
import { DialPad } from "./dial-pad/DialPad";
import { MapPin } from "./map-pin/MapPin";
import { MusicPlayer } from "./music-player/MusicPlayer";
import { CameraShutter } from "./camera-shutter/CameraShutter";
import { DayAgenda } from "./day-agenda/DayAgenda";
import { WalletStack } from "./wallet-stack/WalletStack";
import { SlideToPay } from "./slide-to-pay/SlideToPay";
import { SettingsList } from "./settings-list/SettingsList";
import { ProfileTop } from "./profile-top/ProfileTop";
import { ThemeChoice } from "./theme-choice/ThemeChoice";
import { LanguageList } from "./language-list/LanguageList";
import { PrivacySwitches } from "./privacy-switches/PrivacySwitches";
import { StorageBar } from "./storage-bar/StorageBar";
import { DeleteGuard } from "./delete-guard/DeleteGuard";
import { SignOutAsk } from "./sign-out-ask/SignOutAsk";
import { BuildTap } from "./build-tap/BuildTap";
import { EmptyState } from "./empty-state/EmptyState";
import { OfflineRetry } from "./offline-retry/OfflineRetry";
import { LoadToContent } from "./load-to-content/LoadToContent";
import { DoneCheck } from "./done-check/DoneCheck";

export { Visual };
export { WelcomeSplash, IntroSlides, PermissionAsk, SignInForm, SetupSteps, CodeEntry, FaceIDPrompt, AvatarPick, InterestChips, ReminderOptIn, FeedCards, StoryRail, SearchScreen, TabBar, PeekSheet, PullRefresh, SwipeRow, SegmentSwitch, ShareGrid, TopBanner, ProductPage, ChatThread, DialPad, MapPin, MusicPlayer, CameraShutter, DayAgenda, WalletStack, SlideToPay, SettingsList, ProfileTop, ThemeChoice, LanguageList, PrivacySwitches, StorageBar, DeleteGuard, SignOutAsk, BuildTap, EmptyState, OfflineRetry, LoadToContent, DoneCheck };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Welcome splash", WelcomeSplash, "click"],
  ["Intro slides", IntroSlides, "click"],
  ["Permission ask", PermissionAsk, "click"],
  ["Sign-in form", SignInForm, "type"],
  ["Setup steps", SetupSteps, "click"],
  ["Code entry", CodeEntry, "type"],
  ["Face ID prompt", FaceIDPrompt, "click"],
  ["Avatar pick", AvatarPick, "click"],
  ["Interest chips", InterestChips, "click"],
  ["Reminder opt-in", ReminderOptIn, "click"],
  ["Feed cards", FeedCards, "click"],
  ["Story rail", StoryRail, "click"],
  ["Search screen", SearchScreen, "type"],
  ["Tab bar", TabBar, "click"],
  ["Peek sheet", PeekSheet, "click"],
  ["Pull refresh", PullRefresh, "click"],
  ["Swipe row", SwipeRow, "click"],
  ["Segment switch", SegmentSwitch, "click"],
  ["Share grid", ShareGrid, "click"],
  ["Top banner", TopBanner, "click"],
  ["Product page", ProductPage, "click"],
  ["Chat thread", ChatThread, "type"],
  ["Dial pad", DialPad, "press"],
  ["Map pin", MapPin, "click"],
  ["Music player", MusicPlayer, "click"],
  ["Camera shutter", CameraShutter, "click"],
  ["Day agenda", DayAgenda, "click"],
  ["Wallet stack", WalletStack, "click"],
  ["Slide to pay", SlideToPay, "drag"],
  ["Settings list", SettingsList, "click"],
  ["Profile top", ProfileTop, "click"],
  ["Theme choice", ThemeChoice, "click"],
  ["Language list", LanguageList, "click"],
  ["Privacy switches", PrivacySwitches, "click"],
  ["Storage bar", StorageBar, "click"],
  ["Delete guard", DeleteGuard, "type"],
  ["Sign-out ask", SignOutAsk, "click"],
  ["Build tap", BuildTap, "click"],
  ["Empty state", EmptyState, "click"],
  ["Offline retry", OfflineRetry, "click"],
  ["Load to content", LoadToContent, "auto"],
  ["Done check", DoneCheck, "click"],
];

export default { Visual, items };
