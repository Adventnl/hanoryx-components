import clsx from 'clsx';
import { Shell } from "../shell/Shell";
import { ScrollWords } from "../../../fx/scroll-words/ScrollWords";
import { VelocityMarquee } from "../../../fx/velocity-marquee/VelocityMarquee";
import { Reveal } from "../../../reveal/Reveal";
import { fx } from "../../../core/utils/fx";
import styles from "../blocks.module.css";

/** A statement that you read by scrolling: each line lights word by word, and a
 *  marquee below is pushed along (and leaned) by the page's scroll velocity. */
export function ManifestoBlock({ block, accent }) {
  return (
    <Shell block={block} accent={accent} className={styles.manifesto}>
      {block.eyebrow && (
        <Reveal profile="scanX" as="span" className={clsx('eyebrow', styles.manifestoEyebrow)}>
          {block.eyebrow}
        </Reveal>
      )}
      <div className={styles.manifestoLines} {...fx('manifesto.scroll-lines')}>
        {block.lines.map((line, i) => (
          <ScrollWords
            key={line}
            text={line}
            as="p"
            className={clsx(i === 0 ? 'display' : 'heading-1 font-serif', i === 0 ? styles.manifestoLead : styles.manifestoLine)}
          />
        ))}
      </div>
      {block.marquee?.length > 0 && (
        <div className={styles.manifestoRail} {...fx('manifesto.velocity-marquee')}>
          <VelocityMarquee items={block.marquee} />
        </div>
      )}
    </Shell>
  );
}

export default ManifestoBlock;
