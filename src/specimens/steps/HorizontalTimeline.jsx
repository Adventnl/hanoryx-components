import c from './steps.module.css';
import { useStep } from './shared';

/* 16 */ export function HorizontalTimeline() {
  const [i, set] = useStep(4, 1);
  return (
    <ol className={c.time} aria-label="Horizontal timeline" style={{ '--i': i }}>
      {[['Draft', 'Mon'], ['Review', 'Tue'], ['Revise', 'Thu'], ['Ship', 'Fri']].map(([t, d], k) => <li key={t} data-s={k < i ? 'done' : k === i ? 'now' : 'next'}><button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}><i /><b>{t}</b><small>{d}</small></button></li>)}
    </ol>
  );
}
