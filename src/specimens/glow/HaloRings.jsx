import { useHot } from '../../stage/chartKit';
import c from './glow.module.css';

/* ---------- 03 pulses, rings and small lights ---------- */

export function HaloRings() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A dot with halo rings" {...bind}>
      <span className={c.halo}><i /><i /><i /><b /></span>
    </button>
  );
}
