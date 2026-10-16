import c from './steps.module.css';
import { useStep } from './shared';

/* 22 */ export function Stairs() {
  const [i, set] = useStep(5, 2);
  return (
    <ol className={c.stairs} aria-label="Stairs">
      {[0, 1, 2, 3, 4].map((k) => <li key={k}><button type="button" aria-label={`Level ${k + 1}`} aria-current={k === i ? 'step' : undefined} data-on={k <= i} style={{ '--h': k + 1 }} onClick={() => set(k)} /></li>)}
    </ol>
  );
}
