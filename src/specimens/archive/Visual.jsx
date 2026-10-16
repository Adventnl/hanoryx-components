import { pad2 } from '../../stage/hooks';
import c from './archive.module.css';
import { CARDS } from './shared';

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visRow}>
        {CARDS.map((t, k) => <i key={t} style={{ '--k': k }}><b>{t}</b><u>{pad2(k + 1)}</u></i>)}
      </div>
      <div className={c.visDrawer}><span>A — L</span><em /></div>
      <small>12 CARDS · 1 DRAWER</small>
    </div>
  );
}
