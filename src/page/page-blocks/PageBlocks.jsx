import { Suspense, lazy } from 'react';
import { SplitBlock } from "../blocks/split-block/SplitBlock";
import { CardsBlock } from "../blocks/cards-block/CardsBlock";
import { ProcessBlock } from "../blocks/process-block/ProcessBlock";
import { ModulesBlock } from "../blocks/modules-block/ModulesBlock";
import { StatsBlock } from "../blocks/stats-block/StatsBlock";
import { ManifestoBlock } from "../blocks/manifesto-block/ManifestoBlock";
import { SignatureBlock } from "../blocks/signature-block/SignatureBlock";
import { CloserBlock } from "../blocks/closer-block/CloserBlock";

/* The blocks built for this site, each with a motion identity of its own. */
const BLOCKS = {
  split: SplitBlock,
  cards: CardsBlock,
  process: ProcessBlock,
  modules: ModulesBlock,
  stats: StatsBlock,
  manifesto: ManifestoBlock,
  signature: SignatureBlock,
  closer: CloserBlock,
};

/* The data-first blocks, made from the interface kit. Each is its own chunk, so a page
   downloads only the kinds it uses. The full list, with the data each one takes, is
   data/blockTypes.js (and the north/blocks page). */
const DATA_BLOCKS = {
  callout: lazy(() => import("../blocks/callout-block/CalloutBlock")),
  table: lazy(() => import("../blocks/table-block/TableBlock")),
  timeline: lazy(() => import("../blocks/timeline-block/TimelineBlock")),
  faq: lazy(() => import("../blocks/faq-block/FaqBlock")),
  compare: lazy(() => import("../blocks/compare-block/CompareBlock")),
  snippet: lazy(() => import("../blocks/snippet-block/SnippetBlock")),
  tabs: lazy(() => import("../blocks/tabs-block/TabsBlock")),
  quote: lazy(() => import("../blocks/quote-block/QuoteBlock")),
  checklist: lazy(() => import("../blocks/checklist-block/ChecklistBlock")),
  facts: lazy(() => import("../blocks/facts-block/FactsBlock")),
  links: lazy(() => import("../blocks/links-block/LinksBlock")),
  numbers: lazy(() => import("../blocks/numbers-block/NumbersBlock")),
};

/* Block dispatcher. Every block type declares its OWN motion identity; the
   `signature` type hosts a page-specific interactive composition. */
export function PageBlock({ block, accent }) {
  const Block = BLOCKS[block.type];
  if (Block) return <Block block={block} accent={accent} />;
  const DataBlock = DATA_BLOCKS[block.type];
  return DataBlock ? (
    <Suspense fallback={<div style={{ minHeight: 260 }} />}>
      <DataBlock block={block} accent={accent} />
    </Suspense>
  ) : null;
}

export { PageHero as PageHeroBlock } from "../hero/Hero";
export default PageBlock;
