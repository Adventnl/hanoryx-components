import { usePoint } from '../../stage/chartKit';
import c from './passes.module.css';

/* 26 */
export function EmbossedCard() {
  const [p, bind] = usePoint();
  const x = p ? p.x : 30;
  const y = p ? p.y : 26;
  return (
    <div className={c.fig}>
      <div className={c.em} {...bind} aria-label="Embossed card: move the pointer to move the light across the raised digits" style={{ ...bind.style, '--lx': x.toFixed(1), '--ly': y.toFixed(1) }}>
        <span className={c.emTop}><span>Member</span><i /></span>
        <b className={c.emNum}>4096 0042 1717 0099</b>
        <span className={c.emRow}><span>A. LEDGER</span><span>09/29</span></span>
      </div>
    </div>
  );
}
