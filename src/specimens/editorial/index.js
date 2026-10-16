/* ============================================================
   15 · EDITORIAL — quotes, captions and footnotes.
   The still side is a magazine page that sets itself as you scroll: a kicker,
   a headline that rises line by line, a standfirst that wipes in, two columns of
   text filling line by line, a pull quote, a figure, a footnote. Each part has a
   window of the scroll and CSS reads it from the page's --pin.
   What flies past is the furniture of a page of editorial.
   ============================================================ */

import { Visual } from './Visual';
import { PullQuote } from './PullQuote';
import { QuoteBar } from './QuoteBar';
import { Epigraph } from './Epigraph';
import { QuoteCarousel } from './QuoteCarousel';
import { InlineQuote } from './InlineQuote';
import { PullStat } from './PullStat';
import { Testimonial } from './Testimonial';
import { QuoteMarks } from './QuoteMarks';
import { WordReveal } from './WordReveal';
import { FigureCaption } from './FigureCaption';
import { Cutline } from './Cutline';
import { ImageZoom } from './ImageZoom';
import { GalleryCaptions } from './GalleryCaptions';
import { Compare } from './Compare';
import { CaptionTyping } from './CaptionTyping';
import { CreditTag } from './CreditTag';
import { FigureNumber } from './FigureNumber';
import { FootnotePopover } from './FootnotePopover';
import { Sidenote } from './Sidenote';
import { Endnotes } from './Endnotes';
import { CitationChip } from './CitationChip';
import { GlossaryTerm } from './GlossaryTerm';
import { ReferenceList } from './ReferenceList';
import { BibliographySort } from './BibliographySort';
import { CrossReference } from './CrossReference';
import { Masthead } from './Masthead';
import { HeadlineStack } from './HeadlineStack';
import { Byline } from './Byline';
import { ColumnCount } from './ColumnCount';
import { TableOfContents } from './TableOfContents';
import { RunningHead } from './RunningHead';
import { SectionBreak } from './SectionBreak';
import { JumpLine } from './JumpLine';
import { ReadingProgress } from './ReadingProgress';
import { TagChips } from './TagChips';
import { ReadingTime } from './ReadingTime';
import { CorrectionNotice } from './CorrectionNotice';
import { UpdatedStamp } from './UpdatedStamp';
import { ShareRow } from './ShareRow';
import { NewsletterBox } from './NewsletterBox';
import { CrosswordMini } from './CrosswordMini';
import { Sparkword } from './Sparkword';

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
