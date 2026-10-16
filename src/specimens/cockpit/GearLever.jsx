import { useEffect, useState } from 'react';
import { useToggle } from '../../stage/hooks';
import c from './cockpit.module.css';

/* 29 */ export function GearLever() {
  const [down, flip] = useToggle(true);
  const [moving, setMoving] = useState(false);
  useEffect(() => {
    if (!moving) return undefined;
    const id = setTimeout(() => setMoving(false), 1500);
    return () => clearTimeout(id);
  }, [moving]);
  return (
    <div className={c.gear}>
      <button type="button" aria-pressed={down} aria-label={down ? 'Gear down. Press to raise' : 'Gear up. Press to lower'} onClick={() => { flip(); setMoving(true); }} data-down={down}><i /></button>
      <div role="img" aria-label={moving ? 'Gear in transit' : down ? 'Three green: down and locked' : 'Lights out: up'}>{[0, 1, 2].map((k) => <u key={k} data-s={moving ? 'transit' : down ? 'down' : 'up'} />)}</div>
    </div>
  );
}
