import { usePoint } from '../../stage/chartKit';
import c from './glow.module.css';
import { light } from './shared';

export function SharedLight() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={c.trio} aria-label="Three cards lit by one light" style={{ ...bind.style, ...light(p, [50, 50]) }}>
        {['One', 'Two', 'Three'].map((n, k) => <i key={n} className={c.mini} style={{ '--k': k }}><b>{n}</b></i>)}
      </div>
    </div>
  );
}
