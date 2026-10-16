import { useCycle } from '../../stage/hooks';
import c from './skeletons.module.css';

/* 14 */ export function LineStagger() {
  const k = useCycle(6, 800);
  return (
    <div className={c.stag} role="img" aria-label="Lines appearing in turn">
      {[100, 84, 92, 60, 76].map((w, i) => <i key={i} className={c.sk} style={{ width: `${w}%`, opacity: i <= k ? 1 : 0.15, transform: i <= k ? 'none' : 'translateX(-8px)' }} />)}
    </div>
  );
}
