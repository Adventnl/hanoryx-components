/* ============================================================
   13 · MARKUP — highlights, strikes and redactions.
   The still side is a page of notes. As you scroll, a pen goes through it: a
   phrase is highlighted, another crossed out, a word circled, a few lines blacked
   out. Each mark has a progress of its own (--m, from the page's --pin and the
   mark's order) and CSS draws it; nothing is animated by script.
   Everything in the deck is something you can do to a line of text.
   ============================================================ */

import { Visual } from './Visual';
import { MarkerSweep } from './MarkerSweep';
import { DoubleMarker } from './DoubleMarker';
import { StrikeDraw } from './StrikeDraw';
import { Squiggle } from './Squiggle';
import { HandCircle } from './HandCircle';
import { RoughRule } from './RoughRule';
import { CornerBrackets } from './CornerBrackets';
import { ScribbleOut } from './ScribbleOut';
import { CalloutArrow } from './CalloutArrow';
import { HighlighterDrag } from './HighlighterDrag';
import { EraserReveal } from './EraserReveal';
import { MarginNote } from './MarginNote';
import { TrackedChanges } from './TrackedChanges';
import { LineDiff } from './LineDiff';
import { ProofMarks } from './ProofMarks';
import { PostIt } from './PostIt';
import { Footnote } from './Footnote';
import { Spoiler } from './Spoiler';
import { CodeComment } from './CodeComment';
import { PinnedFigure } from './PinnedFigure';
import { ReadingRuler } from './ReadingRuler';
import { Rewrite } from './Rewrite';
import { Overtype } from './Overtype';
import { Whiteout } from './Whiteout';
import { InkBleed } from './InkBleed';
import { CommentThread } from './CommentThread';
import { DogEar } from './DogEar';
import { Paperclip } from './Paperclip';
import { RuledPaper } from './RuledPaper';
import { FolderTabs } from './FolderTabs';
import { TornEdge } from './TornEdge';
import { PaletteMarker } from './PaletteMarker';
import { ClearanceDial } from './ClearanceDial';
import { BlurLens } from './BlurLens';
import { TaskStrike } from './TaskStrike';
import { TypoSquiggle } from './TypoSquiggle';
import { SelectionStyle } from './SelectionStyle';
import { BarRedaction } from './BarRedaction';
import { TickMargin } from './TickMargin';
import { UnderlineStyles } from './UnderlineStyles';
import { FindInText } from './FindInText';
import { SwapPreview } from './SwapPreview';

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
