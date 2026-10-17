import { SectionHeader } from "../../ui/section-header/SectionHeader";
import { Accordion } from "../../fx/accordion/Accordion";
import { fx } from "../../core/utils/fx";
import styles from "./AccordionList.module.css";

/**
 * A titled list of disclosures (eased height, a scrambling code on hover, a plus
 * that turns). Plain-text bodies are wrapped in a paragraph here so page data
 * stays plain JSON.
 *
 *   items: [{ id, title, meta?, body: string | string[] }]
 */
export default function AccordionList({ eyebrow, title, intro, items, defaultOpen, single = true, variant = 'left', note, marker = 'list.accordion' }) {
  const prepared = items.map((it) => ({
    ...it,
    body: (
      <div className={styles.body}>
        {(Array.isArray(it.body) ? it.body : [it.body]).map((t) => <p key={t}>{t}</p>)}
      </div>
    ),
  }));
  return (
    <div>
      <SectionHeader eyebrow={eyebrow} title={title} intro={intro} size="h1" variant={variant} />
      <div className={styles.wrap} {...fx(marker)}>
        <Accordion items={prepared} single={single} defaultOpen={defaultOpen} />
      </div>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
