import { useState } from 'react';
import { useDrag } from '../../stage/hooks';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 35 */ export function SwipeToDismiss() {
  const [v, bind, set] = useDrag({ mode: 'y', init: 1 });
  const [gone, setGone] = useState(false);
  return <Stage label="Swipe down to dismiss">{gone ? <button type="button" className={c.open} onClick={() => { setGone(false); set(1); }}>Bring back</button> : <div className={c.swipeSheet} {...bind} style={{ ...bind.style, '--v': v }} aria-label="Sheet, drag down to dismiss" onPointerUp={() => { if (v < 0.45) setGone(true); else set(1); }} onKeyUp={(e) => { if (e.key === 'ArrowDown' && v < 0.45) setGone(true); }}><u /><b>Drag me down</b></div>}</Stage>;
}
