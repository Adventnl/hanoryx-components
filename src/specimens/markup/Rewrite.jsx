import { useCycle } from '../../stage/hooks';
import c from './markup.module.css';

/* ---------- 03 edits and secrets ---------- */

const REWRITES = [['keeps', 'kept'], ['nobody', 'someone'], ['tea', 'coffee']];

export function Rewrite() {
  const i = useCycle(REWRITES.length, 2800);
  const [was, now] = REWRITES[i];
  return (
    <div className={c.fig} role="img" aria-label={`A word struck out and rewritten: ${was} becomes ${now}`}>
      <p className={c.para}>The word <span key={i} className={c.rewrite}><s>{was}</s><em>{now}</em></span> was changed.</p>
    </div>
  );
}
