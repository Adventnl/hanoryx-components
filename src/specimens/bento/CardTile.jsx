import { usePoint } from '../../stage/chartKit';
import c from './bento.module.css';

export function CardTile() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={c.pay} aria-label="A payment card with a shine that follows the pointer" style={{ ...bind.style, '--lx': `${p ? p.x : 30}%`, '--ly': `${p ? p.y : 20}%` }}>
        <b>H</b><span>•••• •••• •••• 4242</span><em>A. WRITER</em>
      </div>
    </div>
  );
}
