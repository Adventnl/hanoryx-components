/* ============================================================
   46 · HANDSET — mobile screens, from first run to settings.
   The still side is a phone whose screen slides through five states as the
   scroll advances: welcome, sign in, a feed, a chat and settings. Each of the
   forty-two specimens is a small screen of the same kind, drawn at phone
   proportions: the ones you would tap are real buttons, fields and switches
   that work, and the ones that would run on their own do so while on screen.
   ============================================================ */

import { Visual } from './Visual';
import { WelcomeSplash } from './WelcomeSplash';
import { IntroSlides } from './IntroSlides';
import { PermissionAsk } from './PermissionAsk';
import { SignInForm } from './SignInForm';
import { SetupSteps } from './SetupSteps';
import { CodeEntry } from './CodeEntry';
import { FaceIDPrompt } from './FaceIDPrompt';
import { AvatarPick } from './AvatarPick';
import { InterestChips } from './InterestChips';
import { ReminderOptIn } from './ReminderOptIn';
import { FeedCards } from './FeedCards';
import { StoryRail } from './StoryRail';
import { SearchScreen } from './SearchScreen';
import { TabBar } from './TabBar';
import { PeekSheet } from './PeekSheet';
import { PullRefresh } from './PullRefresh';
import { SwipeRow } from './SwipeRow';
import { SegmentSwitch } from './SegmentSwitch';
import { ShareGrid } from './ShareGrid';
import { TopBanner } from './TopBanner';
import { ProductPage } from './ProductPage';
import { ChatThread } from './ChatThread';
import { DialPad } from './DialPad';
import { MapPin } from './MapPin';
import { MusicPlayer } from './MusicPlayer';
import { CameraShutter } from './CameraShutter';
import { DayAgenda } from './DayAgenda';
import { WalletStack } from './WalletStack';
import { SlideToPay } from './SlideToPay';
import { SettingsList } from './SettingsList';
import { ProfileTop } from './ProfileTop';
import { ThemeChoice } from './ThemeChoice';
import { LanguageList } from './LanguageList';
import { PrivacySwitches } from './PrivacySwitches';
import { StorageBar } from './StorageBar';
import { DeleteGuard } from './DeleteGuard';
import { SignOutAsk } from './SignOutAsk';
import { BuildTap } from './BuildTap';
import { EmptyState } from './EmptyState';
import { OfflineRetry } from './OfflineRetry';
import { LoadToContent } from './LoadToContent';
import { DoneCheck } from './DoneCheck';

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
