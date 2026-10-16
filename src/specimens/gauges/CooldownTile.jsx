import { useEffect, useState } from 'react';
import c from './gauges.module.css';

/* 40 */ export function CooldownTile() {
  const [cd, setCd] = useState(false);
  useEffect(() => {
    if (!cd) return undefined;
    const id = window.setTimeout(() => setCd(false), 4000);
    return () => window.clearTimeout(id);
  }, [cd]);
  return (
    <button type="button" className={c.cool} data-cd={cd} disabled={cd} aria-label={cd ? 'Ability recharging' : 'Ability ready. Click to use it'} onClick={() => setCd(true)}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg>
      {cd && (<><i /><b className={c.num} /></>)}
      <kbd>Q</kbd>
    </button>
  );
}
