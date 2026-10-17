/* ============================================================
   48 · FEEDS — lists, chats and notification streams.
   The still side is a chat stream that scrolls past as the scroll advances,
   the message in the middle of the frame lit and the ones leaving it fading
   out. The forty-two specimens are the parts of a stream: list rows you pick,
   reorder or expand, chat bubbles and their small furniture, and the ways a
   notification arrives and goes. Everything that takes input is a real button
   or field, and the streams that would be arriving do so while on screen.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { ContactList } from "./contact-list/ContactList";
import { LetterGroups } from "./letter-groups/LetterGroups";
import { HoverActions } from "./hover-actions/HoverActions";
import { ReorderList } from "./reorder-list/ReorderList";
import { MultiSelect } from "./multi-select/MultiSelect";
import { RowAccordion } from "./row-accordion/RowAccordion";
import { PageMore } from "./page-more/PageMore";
import { SortTable } from "./sort-table/SortTable";
import { FilterFeed } from "./filter-feed/FilterFeed";
import { PinToTop } from "./pin-to-top/PinToTop";
import { UnreadBadges } from "./unread-badges/UnreadBadges";
import { TimelineFeed } from "./timeline-feed/TimelineFeed";
import { ActivityLog } from "./activity-log/ActivityLog";
import { DensitySwitch } from "./density-switch/DensitySwitch";
import { EmptyResults } from "./empty-results/EmptyResults";
import { BubbleThread } from "./bubble-thread/BubbleThread";
import { TypingBubble } from "./typing-bubble/TypingBubble";
import { EmojiReactions } from "./emoji-reactions/EmojiReactions";
import { QuoteReply } from "./quote-reply/QuoteReply";
import { ReadTicks } from "./read-ticks/ReadTicks";
import { VoiceNote } from "./voice-note/VoiceNote";
import { DayDividers } from "./day-dividers/DayDividers";
import { AttachChips } from "./attach-chips/AttachChips";
import { ThreadFold } from "./thread-fold/ThreadFold";
import { ChannelList } from "./channel-list/ChannelList";
import { MentionSuggest } from "./mention-suggest/MentionSuggest";
import { EmojiGrid } from "./emoji-grid/EmojiGrid";
import { ToastPile } from "./toast-pile/ToastPile";
import { AlertGroups } from "./alert-groups/AlertGroups";
import { BellCounter } from "./bell-counter/BellCounter";
import { DigestCard } from "./digest-card/DigestCard";
import { SnoozeChips } from "./snooze-chips/SnoozeChips";
import { QuietHours } from "./quiet-hours/QuietHours";
import { ChannelMatrix } from "./channel-matrix/ChannelMatrix";
import { LiveTicker } from "./live-ticker/LiveTicker";
import { PriorityTabs } from "./priority-tabs/PriorityTabs";
import { PresenceList } from "./presence-list/PresenceList";
import { OnlineCount } from "./online-count/OnlineCount";
import { CommentTree } from "./comment-tree/CommentTree";
import { PollResults } from "./poll-results/PollResults";
import { UnfurlCard } from "./unfurl-card/UnfurlCard";
import { NewPostsPill } from "./new-posts-pill/NewPostsPill";

export { Visual };
export { ContactList, LetterGroups, HoverActions, ReorderList, MultiSelect, RowAccordion, PageMore, SortTable, FilterFeed, PinToTop, UnreadBadges, TimelineFeed, ActivityLog, DensitySwitch, EmptyResults, BubbleThread, TypingBubble, EmojiReactions, QuoteReply, ReadTicks, VoiceNote, DayDividers, AttachChips, ThreadFold, ChannelList, MentionSuggest, EmojiGrid, ToastPile, AlertGroups, BellCounter, DigestCard, SnoozeChips, QuietHours, ChannelMatrix, LiveTicker, PriorityTabs, PresenceList, OnlineCount, CommentTree, PollResults, UnfurlCard, NewPostsPill };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Contact list", ContactList, "click"],
  ["Letter groups", LetterGroups, "still"],
  ["Hover actions", HoverActions, "hover"],
  ["Reorder list", ReorderList, "click"],
  ["Multi-select", MultiSelect, "click"],
  ["Row accordion", RowAccordion, "click"],
  ["Page more", PageMore, "click"],
  ["Sort table", SortTable, "click"],
  ["Filter feed", FilterFeed, "type"],
  ["Pin to top", PinToTop, "click"],
  ["Unread badges", UnreadBadges, "click"],
  ["Timeline feed", TimelineFeed, "still"],
  ["Activity log", ActivityLog, "still"],
  ["Density switch", DensitySwitch, "click"],
  ["Empty results", EmptyResults, "type"],
  ["Bubble thread", BubbleThread, "type"],
  ["Typing bubble", TypingBubble, "auto"],
  ["Emoji reactions", EmojiReactions, "click"],
  ["Quote reply", QuoteReply, "click"],
  ["Read ticks", ReadTicks, "click"],
  ["Voice note", VoiceNote, "click"],
  ["Day dividers", DayDividers, "still"],
  ["Attach chips", AttachChips, "click"],
  ["Thread fold", ThreadFold, "click"],
  ["Channel list", ChannelList, "click"],
  ["Mention suggest", MentionSuggest, "type"],
  ["Emoji grid", EmojiGrid, "click"],
  ["Toast pile", ToastPile, "click"],
  ["Alert groups", AlertGroups, "click"],
  ["Bell counter", BellCounter, "click"],
  ["Digest card", DigestCard, "click"],
  ["Snooze chips", SnoozeChips, "click"],
  ["Quiet hours", QuietHours, "click"],
  ["Channel matrix", ChannelMatrix, "click"],
  ["Live ticker", LiveTicker, "auto"],
  ["Priority tabs", PriorityTabs, "click"],
  ["Presence list", PresenceList, "click"],
  ["Online count", OnlineCount, "auto"],
  ["Comment tree", CommentTree, "click"],
  ["Poll results", PollResults, "click"],
  ["Unfurl card", UnfurlCard, "click"],
  ["New posts pill", NewPostsPill, "auto"],
];

export default { Visual, items };
