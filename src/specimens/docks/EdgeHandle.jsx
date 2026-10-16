import { useDrag } from '../../stage/hooks';
import c from './docks.module.css';

/* 42 */ export function EdgeHandle() {
  const [v, bind] = useDrag({ init: 0.15 });
  return (
    <div className={c.edge} style={{ '--v': v }}>
      <div className={c.drawer} aria-hidden="true"><span>Drawer</span></div>
      <div className={c.handle} {...bind} style={{ ...bind.style, '--v': v }} aria-label="Edge handle, drag to open the drawer"><i /></div>
    </div>
  );
}
