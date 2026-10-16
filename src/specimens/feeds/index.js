/* ============================================================
   48 · FEEDS — lists, chats and notification streams.
   The still side is a chat stream that scrolls past as the scroll advances,
   the message in the middle of the frame lit and the ones leaving it fading
   out. The forty-two specimens are the parts of a stream: list rows you pick,
   reorder or expand, chat bubbles and their small furniture, and the ways a
   notification arrives and goes. Everything that takes input is a real button
   or field, and the streams that would be arriving do so while on screen.
   ============================================================ */

import { Visual } from './Visual';
import { ContactList } from './ContactList';
import { LetterGroups } from './LetterGroups';
import { HoverActions } from './HoverActions';
import { ReorderList } from './ReorderList';
import { MultiSelect } from './MultiSelect';
import { RowAccordion } from './RowAccordion';
import { PageMore } from './PageMore';
import { SortTable } from './SortTable';
import { FilterFeed } from './FilterFeed';
import { PinToTop } from './PinToTop';
import { UnreadBadges } from './UnreadBadges';
import { TimelineFeed } from './TimelineFeed';
import { ActivityLog } from './ActivityLog';
import { DensitySwitch } from './DensitySwitch';
import { EmptyResults } from './EmptyResults';
import { BubbleThread } from './BubbleThread';
import { TypingBubble } from './TypingBubble';
import { EmojiReactions } from './EmojiReactions';
import { QuoteReply } from './QuoteReply';
import { ReadTicks } from './ReadTicks';
import { VoiceNote } from './VoiceNote';
import { DayDividers } from './DayDividers';
import { AttachChips } from './AttachChips';
import { ThreadFold } from './ThreadFold';
import { ChannelList } from './ChannelList';
import { MentionSuggest } from './MentionSuggest';
import { EmojiGrid } from './EmojiGrid';
import { ToastPile } from './ToastPile';
import { AlertGroups } from './AlertGroups';
import { BellCounter } from './BellCounter';
import { DigestCard } from './DigestCard';
import { SnoozeChips } from './SnoozeChips';
import { QuietHours } from './QuietHours';
import { ChannelMatrix } from './ChannelMatrix';
import { LiveTicker } from './LiveTicker';
import { PriorityTabs } from './PriorityTabs';
import { PresenceList } from './PresenceList';
import { OnlineCount } from './OnlineCount';
import { CommentTree } from './CommentTree';
import { PollResults } from './PollResults';
import { UnfurlCard } from './UnfurlCard';
import { NewPostsPill } from './NewPostsPill';

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
