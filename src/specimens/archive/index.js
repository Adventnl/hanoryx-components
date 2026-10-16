/* ============================================================
   40 · ARCHIVE — files, drawers and index cards.
   The still side is a card drawer: a row of index cards that slides past as
   the scroll advances, the one in front turning to face you. The forty-two
   specimens are the furniture of a records room. Most of them open, pull out or
   turn over with a click; every one is a button or a field, so the keyboard
   reaches them all.
   ============================================================ */

import { Visual } from './Visual';
import { IndexCard } from './IndexCard';
import { CardDrawer } from './CardDrawer';
import { FileFolder } from './FileFolder';
import { HangingFiles } from './HangingFiles';
import { FilingCabinet } from './FilingCabinet';
import { DrawerStack } from './DrawerStack';
import { BoxFile } from './BoxFile';
import { BinderRings } from './BinderRings';
import { CardRotary } from './CardRotary';
import { IndexFan } from './IndexFan';
import { PaperPile } from './PaperPile';
import { ClipPile } from './ClipPile';
import { DividerTabs } from './DividerTabs';
import { ArchiveBox } from './ArchiveBox';
import { BookSpines } from './BookSpines';
import { CallNumber } from './CallNumber';
import { Microfiche } from './Microfiche';
import { NegativeStrip } from './NegativeStrip';
import { SlideTray } from './SlideTray';
import { RecordSleeve } from './RecordSleeve';
import { AlbumCorners } from './AlbumCorners';
import { PhotoShuffle } from './PhotoShuffle';
import { EnvelopeFlap } from './EnvelopeFlap';
import { LetterBundle } from './LetterBundle';
import { TraySorter } from './TraySorter';
import { LedgerPage } from './LedgerPage';
import { LetterTabs } from './LetterTabs';
import { YearLabels } from './YearLabels';
import { BatesStamp } from './BatesStamp';
import { EvidenceBag } from './EvidenceBag';
import { EvidenceTag } from './EvidenceTag';
import { DocketBoard } from './DocketBoard';
import { PocketCard } from './PocketCard';
import { CallSlip } from './CallSlip';
import { RecordSearch } from './RecordSearch';
import { RetentionBar } from './RetentionBar';
import { CombinationLock } from './CombinationLock';
import { BoxStack } from './BoxStack';
import { AisleMap } from './AisleMap';
import { ScanBed } from './ScanBed';
import { DrawerPull } from './DrawerPull';
import { FolderLift } from './FolderLift';

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
