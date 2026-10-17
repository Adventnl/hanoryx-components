/* ============================================================
   15 · EDITORIAL — quotes, captions and footnotes.
   The still side is a magazine page that sets itself as you scroll: a kicker,
   a headline that rises line by line, a standfirst that wipes in, two columns of
   text filling line by line, a pull quote, a figure, a footnote. Each part has a
   window of the scroll and CSS reads it from the page's --pin.
   What flies past is the furniture of a page of editorial.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { PullQuote } from "./pull-quote/PullQuote";
import { QuoteBar } from "./quote-bar/QuoteBar";
import { Epigraph } from "./epigraph/Epigraph";
import { QuoteCarousel } from "./quote-carousel/QuoteCarousel";
import { InlineQuote } from "./inline-quote/InlineQuote";
import { PullStat } from "./pull-stat/PullStat";
import { Testimonial } from "./testimonial/Testimonial";
import { QuoteMarks } from "./quote-marks/QuoteMarks";
import { WordReveal } from "./word-reveal/WordReveal";
import { FigureCaption } from "./figure-caption/FigureCaption";
import { Cutline } from "./cutline/Cutline";
import { ImageZoom } from "./image-zoom/ImageZoom";
import { GalleryCaptions } from "./gallery-captions/GalleryCaptions";
import { Compare } from "./compare/Compare";
import { CaptionTyping } from "./caption-typing/CaptionTyping";
import { CreditTag } from "./credit-tag/CreditTag";
import { FigureNumber } from "./figure-number/FigureNumber";
import { FootnotePopover } from "./footnote-popover/FootnotePopover";
import { Sidenote } from "./sidenote/Sidenote";
import { Endnotes } from "./endnotes/Endnotes";
import { CitationChip } from "./citation-chip/CitationChip";
import { GlossaryTerm } from "./glossary-term/GlossaryTerm";
import { ReferenceList } from "./reference-list/ReferenceList";
import { BibliographySort } from "./bibliography-sort/BibliographySort";
import { CrossReference } from "./cross-reference/CrossReference";
import { Masthead } from "./masthead/Masthead";
import { HeadlineStack } from "./headline-stack/HeadlineStack";
import { Byline } from "./byline/Byline";
import { ColumnCount } from "./column-count/ColumnCount";
import { TableOfContents } from "./table-of-contents/TableOfContents";
import { RunningHead } from "./running-head/RunningHead";
import { SectionBreak } from "./section-break/SectionBreak";
import { JumpLine } from "./jump-line/JumpLine";
import { ReadingProgress } from "./reading-progress/ReadingProgress";
import { TagChips } from "./tag-chips/TagChips";
import { ReadingTime } from "./reading-time/ReadingTime";
import { CorrectionNotice } from "./correction-notice/CorrectionNotice";
import { UpdatedStamp } from "./updated-stamp/UpdatedStamp";
import { ShareRow } from "./share-row/ShareRow";
import { NewsletterBox } from "./newsletter-box/NewsletterBox";
import { CrosswordMini } from "./crossword-mini/CrosswordMini";
import { Sparkword } from "./sparkword/Sparkword";

export { Visual };
export { PullQuote, QuoteBar, Epigraph, QuoteCarousel, InlineQuote, PullStat, Testimonial, QuoteMarks, WordReveal, FigureCaption, Cutline, ImageZoom, GalleryCaptions, Compare, CaptionTyping, CreditTag, FigureNumber, FootnotePopover, Sidenote, Endnotes, CitationChip, GlossaryTerm, ReferenceList, BibliographySort, CrossReference, Masthead, HeadlineStack, Byline, ColumnCount, TableOfContents, RunningHead, SectionBreak, JumpLine, ReadingProgress, TagChips, ReadingTime, CorrectionNotice, UpdatedStamp, ShareRow, NewsletterBox, CrosswordMini, Sparkword };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Pull quote", PullQuote, "hover"],
  ["Quote bar", QuoteBar, "auto"],
  ["Epigraph", Epigraph, "click"],
  ["Quote carousel", QuoteCarousel, "auto"],
  ["Inline quote", InlineQuote, "hover"],
  ["Pull stat", PullStat, "auto"],
  ["Testimonial", Testimonial, "click"],
  ["Quote marks", QuoteMarks, "click"],
  ["Word reveal", WordReveal, "auto"],
  ["Figure caption", FigureCaption, "hover"],
  ["Cutline", Cutline, "auto"],
  ["Image zoom", ImageZoom, "click"],
  ["Gallery captions", GalleryCaptions, "click"],
  ["Compare", Compare, "drag"],
  ["Caption typing", CaptionTyping, "auto"],
  ["Credit tag", CreditTag, "hover"],
  ["Figure number", FigureNumber, "auto"],
  ["Footnote popover", FootnotePopover, "click"],
  ["Sidenote", Sidenote, "click"],
  ["Endnotes", Endnotes, "click"],
  ["Citation chip", CitationChip, "hover"],
  ["Glossary term", GlossaryTerm, "hover"],
  ["Reference list", ReferenceList, "hover"],
  ["Bibliography sort", BibliographySort, "click"],
  ["Cross-reference", CrossReference, "click"],
  ["Masthead", Masthead, "auto"],
  ["Headline stack", HeadlineStack, "hover"],
  ["Byline", Byline, "click"],
  ["Column count", ColumnCount, "drag"],
  ["Table of contents", TableOfContents, "click"],
  ["Running head", RunningHead, "auto"],
  ["Section break", SectionBreak, "auto"],
  ["Jump line", JumpLine, "hover"],
  ["Reading progress", ReadingProgress, "scroll"],
  ["Tag chips", TagChips, "click"],
  ["Reading time", ReadingTime, "type"],
  ["Correction notice", CorrectionNotice, "click"],
  ["Updated stamp", UpdatedStamp, "auto"],
  ["Share row", ShareRow, "click"],
  ["Newsletter box", NewsletterBox, "type"],
  ["Crossword mini", CrosswordMini, "type"],
  ["Sparkword", Sparkword, "hover"],
];

export default { Visual, items };
