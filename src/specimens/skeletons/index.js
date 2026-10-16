/* ============================================================
   29 · SKELETONS — placeholders and empty states.
   The still side is one card that resolves as you scroll: grey bars sharpen
   into a heading, a line of text and a figure at the scroll's own pace (every
   step is a CSS number, so nothing re-renders). Specimens are the waiting
   shapes — and what a page says when there is nothing to wait for.
   ============================================================ */

import { Visual } from './Visual';
import { TextLines } from './TextLines';
import { CardPlaceholder } from './CardPlaceholder';
import { ListRow } from './ListRow';
import { TableRows } from './TableRows';
import { ThreeShimmers } from './ThreeShimmers';
import { ChartPlaceholder } from './ChartPlaceholder';
import { ProfileHeader } from './ProfileHeader';
import { PictureFrame } from './PictureFrame';
import { GalleryGrid } from './GalleryGrid';
import { ReplyThread } from './ReplyThread';
import { ActionButtons } from './ActionButtons';
import { FormFields } from './FormFields';
import { SkeletonToContent } from './SkeletonToContent';
import { LineStagger } from './LineStagger';
import { BlurUp } from './BlurUp';
import { FetchingDots } from './FetchingDots';
import { NoResults } from './NoResults';
import { InboxZero } from './InboxZero';
import { EmptyBag } from './EmptyBag';
import { LostPage } from './LostPage';
import { OfflineFeed } from './OfflineFeed';
import { FirstProject } from './FirstProject';
import { FlatChart } from './FlatChart';
import { EmptyTable } from './EmptyTable';
import { SearchSuggestions } from './SearchSuggestions';
import { MembersOnly } from './MembersOnly';
import { RetryState } from './RetryState';
import { SoonCounter } from './SoonCounter';
import { EmptyMonth } from './EmptyMonth';
import { DropTarget } from './DropTarget';
import { GhostList } from './GhostList';
import { LineCount } from './LineCount';
import { ShapeLibrary } from './ShapeLibrary';
import { GaugePlaceholder } from './GaugePlaceholder';
import { MapPlaceholder } from './MapPlaceholder';
import { VideoPlaceholder } from './VideoPlaceholder';
import { ProductPlaceholder } from './ProductPlaceholder';
import { ChatPlaceholder } from './ChatPlaceholder';
import { AlertPlaceholder } from './AlertPlaceholder';
import { PlanPlaceholder } from './PlanPlaceholder';
import { SidebarPlaceholder } from './SidebarPlaceholder';
import { WireframeToggle } from './WireframeToggle';

export { Visual };
export { TextLines, CardPlaceholder, ListRow, TableRows, ThreeShimmers, ChartPlaceholder, ProfileHeader, PictureFrame, GalleryGrid, ReplyThread, ActionButtons, FormFields, SkeletonToContent, LineStagger, BlurUp, FetchingDots, NoResults, InboxZero, EmptyBag, LostPage, OfflineFeed, FirstProject, FlatChart, EmptyTable, SearchSuggestions, MembersOnly, RetryState, SoonCounter, EmptyMonth, DropTarget, GhostList, LineCount, ShapeLibrary, GaugePlaceholder, MapPlaceholder, VideoPlaceholder, ProductPlaceholder, ChatPlaceholder, AlertPlaceholder, PlanPlaceholder, SidebarPlaceholder, WireframeToggle };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Text lines", TextLines, "auto"],
  ["Card placeholder", CardPlaceholder, "auto"],
  ["List row", ListRow, "auto"],
  ["Table rows", TableRows, "auto"],
  ["Three shimmers", ThreeShimmers, "click"],
  ["Chart placeholder", ChartPlaceholder, "auto"],
  ["Profile header", ProfileHeader, "auto"],
  ["Picture frame", PictureFrame, "auto"],
  ["Gallery grid", GalleryGrid, "auto"],
  ["Reply thread", ReplyThread, "auto"],
  ["Action buttons", ActionButtons, "auto"],
  ["Form fields", FormFields, "auto"],
  ["Skeleton to content", SkeletonToContent, "click"],
  ["Line stagger", LineStagger, "auto"],
  ["Blur up", BlurUp, "click"],
  ["Fetching dots", FetchingDots, "auto"],
  ["No results", NoResults, "click"],
  ["Inbox zero", InboxZero, "static"],
  ["Empty bag", EmptyBag, "click"],
  ["Lost page", LostPage, "static"],
  ["Offline feed", OfflineFeed, "static"],
  ["First project", FirstProject, "click"],
  ["Flat chart", FlatChart, "static"],
  ["Empty table", EmptyTable, "static"],
  ["Search suggestions", SearchSuggestions, "type"],
  ["Members only", MembersOnly, "static"],
  ["Retry state", RetryState, "click"],
  ["Soon counter", SoonCounter, "auto"],
  ["Empty month", EmptyMonth, "static"],
  ["Drop target", DropTarget, "drop"],
  ["Ghost list", GhostList, "static"],
  ["Line count", LineCount, "drag"],
  ["Shape library", ShapeLibrary, "auto"],
  ["Gauge placeholder", GaugePlaceholder, "auto"],
  ["Map placeholder", MapPlaceholder, "auto"],
  ["Video placeholder", VideoPlaceholder, "auto"],
  ["Product placeholder", ProductPlaceholder, "auto"],
  ["Chat placeholder", ChatPlaceholder, "auto"],
  ["Alert placeholder", AlertPlaceholder, "auto"],
  ["Plan placeholder", PlanPlaceholder, "auto"],
  ["Sidebar placeholder", SidebarPlaceholder, "auto"],
  ["Wireframe toggle", WireframeToggle, "click"],
];

export default { Visual, items };
