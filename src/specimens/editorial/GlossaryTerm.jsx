import { useHot } from '../../stage/chartKit';
import c from './editorial.module.css';

export function GlossaryTerm() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Glossary term; hover for the definition" {...bind}>
      <span className={c.para}>Every <span className={c.anchor}><span className={c.term}>folio</span><span className={c.ref} data-on={hot}><span>The page number of a page.</span></span></span> sits at the foot.</span>
    </button>
  );
}
