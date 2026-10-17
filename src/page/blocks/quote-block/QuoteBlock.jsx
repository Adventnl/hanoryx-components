import { Shell } from "../shell/Shell";
import { SectionHeader } from "../../../ui/section-header/SectionHeader";
import Quote from "../../../kit/content/quote/Quote";
import { Reveal } from "../../../reveal/Reveal";
import { fx } from "../../../core/utils/fx";
import styles from "../generic.module.css";

/**
 * A pull quote with its source. Only words someone really said, with their say-so
 * — this site quotes its own principles, not testimonials.
 *
 *   { type: 'quote', quote, cite, context?, eyebrow? }
 */
export function QuoteBlock({ block, accent }) {
  return (
    <Shell block={block} accent={accent} className={styles.slim}>
      {block.eyebrow && <SectionHeader eyebrow={block.eyebrow} size="h2" />}
      <Reveal profile="zoomThrough" className={styles.quoteWrap} {...fx('quote.pull')}>
        <Quote cite={block.cite}>{block.quote}</Quote>
        {block.context && <p className={styles.context}>{block.context}</p>}
      </Reveal>
    </Shell>
  );
}

export default QuoteBlock;
