import { useEffect } from 'react';
import { useDrag, useToggle } from '../../stage/hooks';
import { Ico } from '../../stage/icons';
import c from './progress.module.css';

/* 17 */ export function PlayerScrub() {
  const [v, bind, set] = useDrag({ init: 0.3 });
  const [on, flip] = useToggle();
  useEffect(() => {
    if (!on) return undefined;
    const id = setTimeout(() => set(v >= 0.999 ? 0 : v + 0.012), 250);
    return () => clearTimeout(id);
  }, [on, v, set]);
  const t = Math.round(v * 214);
  return (
    <div className={c.scrub}>
      <button type="button" aria-label={on ? 'Pause' : 'Play'} aria-pressed={on} onClick={flip}><Ico n={on ? 'pause' : 'play'} /></button>
      <div {...bind} aria-label="Scrub" aria-valuetext={`${Math.floor(t / 60)} minutes ${t % 60} seconds`} style={{ ...bind.style, '--prog-v': v }}><i /><b /></div>
      <output>{Math.floor(t / 60)}:{String(t % 60).padStart(2, '0')}</output>
    </div>
  );
}
