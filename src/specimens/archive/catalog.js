/* ============================================================
   40 · ARCHIVE — files, drawers and index cards.
   The still side is a card drawer: a row of index cards that slides past as
   the scroll advances, the one in front turning to face you. The forty-two
   specimens are the furniture of a records room. Most of them open, pull out or
   turn over with a click; every one is a button or a field, so the keyboard
   reaches them all.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { IndexCard } from "./index-card/IndexCard";
import { CardDrawer } from "./card-drawer/CardDrawer";
import { FileFolder } from "./file-folder/FileFolder";
import { HangingFiles } from "./hanging-files/HangingFiles";
import { FilingCabinet } from "./filing-cabinet/FilingCabinet";
import { DrawerStack } from "./drawer-stack/DrawerStack";
import { BoxFile } from "./box-file/BoxFile";
import { BinderRings } from "./binder-rings/BinderRings";
import { CardRotary } from "./card-rotary/CardRotary";
import { IndexFan } from "./index-fan/IndexFan";
import { PaperPile } from "./paper-pile/PaperPile";
import { ClipPile } from "./clip-pile/ClipPile";
import { DividerTabs } from "./divider-tabs/DividerTabs";
import { ArchiveBox } from "./archive-box/ArchiveBox";
import { BookSpines } from "./book-spines/BookSpines";
import { CallNumber } from "./call-number/CallNumber";
import { Microfiche } from "./microfiche/Microfiche";
import { NegativeStrip } from "./negative-strip/NegativeStrip";
import { SlideTray } from "./slide-tray/SlideTray";
import { RecordSleeve } from "./record-sleeve/RecordSleeve";
import { AlbumCorners } from "./album-corners/AlbumCorners";
import { PhotoShuffle } from "./photo-shuffle/PhotoShuffle";
import { EnvelopeFlap } from "./envelope-flap/EnvelopeFlap";
import { LetterBundle } from "./letter-bundle/LetterBundle";
import { TraySorter } from "./tray-sorter/TraySorter";
import { LedgerPage } from "./ledger-page/LedgerPage";
import { LetterTabs } from "./letter-tabs/LetterTabs";
import { YearLabels } from "./year-labels/YearLabels";
import { BatesStamp } from "./bates-stamp/BatesStamp";
import { EvidenceBag } from "./evidence-bag/EvidenceBag";
import { EvidenceTag } from "./evidence-tag/EvidenceTag";
import { DocketBoard } from "./docket-board/DocketBoard";
import { PocketCard } from "./pocket-card/PocketCard";
import { CallSlip } from "./call-slip/CallSlip";
import { RecordSearch } from "./record-search/RecordSearch";
import { RetentionBar } from "./retention-bar/RetentionBar";
import { CombinationLock } from "./combination-lock/CombinationLock";
import { BoxStack } from "./box-stack/BoxStack";
import { AisleMap } from "./aisle-map/AisleMap";
import { ScanBed } from "./scan-bed/ScanBed";
import { DrawerPull } from "./drawer-pull/DrawerPull";
import { FolderLift } from "./folder-lift/FolderLift";

export { Visual };
export { IndexCard, CardDrawer, FileFolder, HangingFiles, FilingCabinet, DrawerStack, BoxFile, BinderRings, CardRotary, IndexFan, PaperPile, ClipPile, DividerTabs, ArchiveBox, BookSpines, CallNumber, Microfiche, NegativeStrip, SlideTray, RecordSleeve, AlbumCorners, PhotoShuffle, EnvelopeFlap, LetterBundle, TraySorter, LedgerPage, LetterTabs, YearLabels, BatesStamp, EvidenceBag, EvidenceTag, DocketBoard, PocketCard, CallSlip, RecordSearch, RetentionBar, CombinationLock, BoxStack, AisleMap, ScanBed, DrawerPull, FolderLift };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Index card", IndexCard, "click"],
  ["Card drawer", CardDrawer, "click"],
  ["File folder", FileFolder, "click"],
  ["Hanging files", HangingFiles, "click"],
  ["Filing cabinet", FilingCabinet, "click"],
  ["Drawer stack", DrawerStack, "click"],
  ["Box file", BoxFile, "click"],
  ["Binder rings", BinderRings, "click"],
  ["Card rotary", CardRotary, "click"],
  ["Index fan", IndexFan, "hover"],
  ["Paper pile", PaperPile, "click"],
  ["Clip pile", ClipPile, "click"],
  ["Divider tabs", DividerTabs, "click"],
  ["Archive box", ArchiveBox, "click"],
  ["Book spines", BookSpines, "click"],
  ["Call number", CallNumber, "type"],
  ["Microfiche", Microfiche, "hover"],
  ["Negative strip", NegativeStrip, "auto"],
  ["Slide tray", SlideTray, "click"],
  ["Record sleeve", RecordSleeve, "click"],
  ["Album corners", AlbumCorners, "click"],
  ["Photo shuffle", PhotoShuffle, "click"],
  ["Envelope flap", EnvelopeFlap, "click"],
  ["Letter bundle", LetterBundle, "click"],
  ["Tray sorter", TraySorter, "click"],
  ["Ledger page", LedgerPage, "click"],
  ["Letter tabs", LetterTabs, "click"],
  ["Year labels", YearLabels, "click"],
  ["Bates stamp", BatesStamp, "auto"],
  ["Evidence bag", EvidenceBag, "click"],
  ["Evidence tag", EvidenceTag, "type"],
  ["Docket board", DocketBoard, "click"],
  ["Pocket card", PocketCard, "click"],
  ["Call slip", CallSlip, "type"],
  ["Record search", RecordSearch, "type"],
  ["Retention bar", RetentionBar, "auto"],
  ["Combination lock", CombinationLock, "click"],
  ["Box stack", BoxStack, "click"],
  ["Aisle map", AisleMap, "click"],
  ["Scan bed", ScanBed, "auto"],
  ["Drawer pull", DrawerPull, "click"],
  ["Folder lift", FolderLift, "hover"],
];

export default { Visual, items };
