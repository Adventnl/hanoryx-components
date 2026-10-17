/* ============================================================
   13 · MARKUP — highlights, strikes and redactions.
   The still side is a page of notes. As you scroll, a pen goes through it: a
   phrase is highlighted, another crossed out, a word circled, a few lines blacked
   out. Each mark has a progress of its own (--m, from the page's --pin and the
   mark's order) and CSS draws it; nothing is animated by script.
   Everything in the deck is something you can do to a line of text.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { MarkerSweep } from "./marker-sweep/MarkerSweep";
import { DoubleMarker } from "./double-marker/DoubleMarker";
import { StrikeDraw } from "./strike-draw/StrikeDraw";
import { Squiggle } from "./squiggle/Squiggle";
import { HandCircle } from "./hand-circle/HandCircle";
import { RoughRule } from "./rough-rule/RoughRule";
import { CornerBrackets } from "./corner-brackets/CornerBrackets";
import { ScribbleOut } from "./scribble-out/ScribbleOut";
import { CalloutArrow } from "./callout-arrow/CalloutArrow";
import { HighlighterDrag } from "./highlighter-drag/HighlighterDrag";
import { EraserReveal } from "./eraser-reveal/EraserReveal";
import { MarginNote } from "./margin-note/MarginNote";
import { TrackedChanges } from "./tracked-changes/TrackedChanges";
import { LineDiff } from "./line-diff/LineDiff";
import { ProofMarks } from "./proof-marks/ProofMarks";
import { PostIt } from "./post-it/PostIt";
import { Footnote } from "./footnote/Footnote";
import { Spoiler } from "./spoiler/Spoiler";
import { CodeComment } from "./code-comment/CodeComment";
import { PinnedFigure } from "./pinned-figure/PinnedFigure";
import { ReadingRuler } from "./reading-ruler/ReadingRuler";
import { Rewrite } from "./rewrite/Rewrite";
import { Overtype } from "./overtype/Overtype";
import { Whiteout } from "./whiteout/Whiteout";
import { InkBleed } from "./ink-bleed/InkBleed";
import { CommentThread } from "./comment-thread/CommentThread";
import { DogEar } from "./dog-ear/DogEar";
import { Paperclip } from "./paperclip/Paperclip";
import { RuledPaper } from "./ruled-paper/RuledPaper";
import { FolderTabs } from "./folder-tabs/FolderTabs";
import { TornEdge } from "./torn-edge/TornEdge";
import { PaletteMarker } from "./palette-marker/PaletteMarker";
import { ClearanceDial } from "./clearance-dial/ClearanceDial";
import { BlurLens } from "./blur-lens/BlurLens";
import { TaskStrike } from "./task-strike/TaskStrike";
import { TypoSquiggle } from "./typo-squiggle/TypoSquiggle";
import { SelectionStyle } from "./selection-style/SelectionStyle";
import { BarRedaction } from "./bar-redaction/BarRedaction";
import { TickMargin } from "./tick-margin/TickMargin";
import { UnderlineStyles } from "./underline-styles/UnderlineStyles";
import { FindInText } from "./find-in-text/FindInText";
import { SwapPreview } from "./swap-preview/SwapPreview";

export { Visual };
export { MarkerSweep, DoubleMarker, StrikeDraw, Squiggle, HandCircle, RoughRule, CornerBrackets, ScribbleOut, CalloutArrow, HighlighterDrag, EraserReveal, MarginNote, TrackedChanges, LineDiff, ProofMarks, PostIt, Footnote, Spoiler, CodeComment, PinnedFigure, ReadingRuler, Rewrite, Overtype, Whiteout, InkBleed, CommentThread, DogEar, Paperclip, RuledPaper, FolderTabs, TornEdge, PaletteMarker, ClearanceDial, BlurLens, TaskStrike, TypoSquiggle, SelectionStyle, BarRedaction, TickMargin, UnderlineStyles, FindInText, SwapPreview };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Marker sweep", MarkerSweep, "hover"],
  ["Double marker", DoubleMarker, "auto"],
  ["Strike draw", StrikeDraw, "click"],
  ["Squiggle", Squiggle, "auto"],
  ["Hand circle", HandCircle, "click"],
  ["Rough rule", RoughRule, "auto"],
  ["Corner brackets", CornerBrackets, "hover"],
  ["Scribble out", ScribbleOut, "click"],
  ["Callout arrow", CalloutArrow, "auto"],
  ["Highlighter drag", HighlighterDrag, "drag"],
  ["Eraser reveal", EraserReveal, "drag"],
  ["Margin note", MarginNote, "click"],
  ["Tracked changes", TrackedChanges, "click"],
  ["Line diff", LineDiff, "hover"],
  ["Proof marks", ProofMarks, "auto"],
  ["Post-it", PostIt, "hover"],
  ["Footnote", Footnote, "click"],
  ["Spoiler", Spoiler, "click"],
  ["Code comment", CodeComment, "click"],
  ["Pinned figure", PinnedFigure, "click"],
  ["Reading ruler", ReadingRuler, "hover"],
  ["Rewrite", Rewrite, "auto"],
  ["Overtype", Overtype, "click"],
  ["Whiteout", Whiteout, "click"],
  ["Ink bleed", InkBleed, "auto"],
  ["Comment thread", CommentThread, "auto"],
  ["Dog-ear", DogEar, "hover"],
  ["Paperclip", Paperclip, "click"],
  ["Ruled paper", RuledPaper, "auto"],
  ["Folder tabs", FolderTabs, "keys"],
  ["Torn edge", TornEdge, "click"],
  ["Palette marker", PaletteMarker, "click"],
  ["Clearance dial", ClearanceDial, "drag"],
  ["Blur lens", BlurLens, "hover"],
  ["Task strike", TaskStrike, "click"],
  ["Typo squiggle", TypoSquiggle, "click"],
  ["Selection style", SelectionStyle, "auto"],
  ["Bar redaction", BarRedaction, "press"],
  ["Tick margin", TickMargin, "auto"],
  ["Underline styles", UnderlineStyles, "click"],
  ["Find in text", FindInText, "type"],
  ["Swap preview", SwapPreview, "type"],
];

export default { Visual, items };
