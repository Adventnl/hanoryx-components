import { useCycle } from '../../stage/hooks';
import c from './signals.module.css';

/* 19 */ export function WalkSignal() {
  const k = useCycle(2, 2200);
  return <div className={c.walk} data-k={k} role="img" aria-label={k ? 'Walk' : "Don't walk"}><svg viewBox="0 0 24 40" aria-hidden="true">{k ? <path d="M12 6a2.4 2.4 0 1 0 0 .01M12 11l-3 8 3 4v10M12 11l4 6M9 19l-3 7M12 23l5 3" /> : <path d="M5 8h14v18H5zM9 12h6M9 17h6M9 22h6" />}</svg></div>;
}
