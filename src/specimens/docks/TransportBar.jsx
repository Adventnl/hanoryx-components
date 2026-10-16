import { useEffect, useState } from 'react';
import { useToggle } from '../../stage/hooks';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 8 */ export function TransportBar() {
  const [on, flip] = useToggle();
  const [t, setT] = useState(0.35);
  useEffect(() => {
    if (!on) return undefined;
    const id = setInterval(() => setT((v) => (v >= 1 ? 0 : v + 0.02)), 120);
    return () => clearInterval(id);
  }, [on]);
  return (
    <div className={c.transport}>
      <div role="toolbar" aria-label="Transport bar">
        <button type="button" aria-label="Previous" onClick={() => setT(0)}><Ico n="prev" /></button>
        <button type="button" aria-label={on ? 'Pause' : 'Play'} aria-pressed={on} onClick={flip}><Ico n={on ? 'pause' : 'play'} /></button>
        <button type="button" aria-label="Next" onClick={() => setT(1)}><Ico n="next" /></button>
      </div>
      <i style={{ '--t': t }} aria-hidden="true" />
    </div>
  );
}
