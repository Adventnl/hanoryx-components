/* ============================================================
   29 · SKELETONS — placeholders and empty states.
   The still side is one card that resolves as you scroll: grey bars sharpen
   into a heading, a line of text and a figure at the scroll's own pace (every
   step is a CSS number, so nothing re-renders). Specimens are the waiting
   shapes — and what a page says when there is nothing to wait for.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { TextLines } from "./text-lines/TextLines";
import { CardPlaceholder } from "./card-placeholder/CardPlaceholder";
import { ListRow } from "./list-row/ListRow";
import { TableRows } from "./table-rows/TableRows";
import { ThreeShimmers } from "./three-shimmers/ThreeShimmers";
import { ChartPlaceholder } from "./chart-placeholder/ChartPlaceholder";
import { ProfileHeader } from "./profile-header/ProfileHeader";
import { PictureFrame } from "./picture-frame/PictureFrame";
import { GalleryGrid } from "./gallery-grid/GalleryGrid";
import { ReplyThread } from "./reply-thread/ReplyThread";
import { ActionButtons } from "./action-buttons/ActionButtons";
import { FormFields } from "./form-fields/FormFields";
import { SkeletonToContent } from "./skeleton-to-content/SkeletonToContent";
import { LineStagger } from "./line-stagger/LineStagger";
import { BlurUp } from "./blur-up/BlurUp";
import { FetchingDots } from "./fetching-dots/FetchingDots";
import { NoResults } from "./no-results/NoResults";
import { InboxZero } from "./inbox-zero/InboxZero";
import { EmptyBag } from "./empty-bag/EmptyBag";
import { LostPage } from "./lost-page/LostPage";
import { OfflineFeed } from "./offline-feed/OfflineFeed";
import { FirstProject } from "./first-project/FirstProject";
import { FlatChart } from "./flat-chart/FlatChart";
import { EmptyTable } from "./empty-table/EmptyTable";
import { SearchSuggestions } from "./search-suggestions/SearchSuggestions";
import { MembersOnly } from "./members-only/MembersOnly";
import { RetryState } from "./retry-state/RetryState";
import { SoonCounter } from "./soon-counter/SoonCounter";
import { EmptyMonth } from "./empty-month/EmptyMonth";
import { DropTarget } from "./drop-target/DropTarget";
import { GhostList } from "./ghost-list/GhostList";
import { LineCount } from "./line-count/LineCount";
import { ShapeLibrary } from "./shape-library/ShapeLibrary";
import { GaugePlaceholder } from "./gauge-placeholder/GaugePlaceholder";
import { MapPlaceholder } from "./map-placeholder/MapPlaceholder";
import { VideoPlaceholder } from "./video-placeholder/VideoPlaceholder";
import { ProductPlaceholder } from "./product-placeholder/ProductPlaceholder";
import { ChatPlaceholder } from "./chat-placeholder/ChatPlaceholder";
import { AlertPlaceholder } from "./alert-placeholder/AlertPlaceholder";
import { PlanPlaceholder } from "./plan-placeholder/PlanPlaceholder";
import { SidebarPlaceholder } from "./sidebar-placeholder/SidebarPlaceholder";
import { WireframeToggle } from "./wireframe-toggle/WireframeToggle";

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
