import { useTick } from '../../stage/hooks';
import c from './tabs.module.css';

/* 41 */ export function HighlightTicker() {
  const n = useTick(1800);
  const names = ['Live', 'Queue', 'Alerts', 'Logs'];
  return (
    <div className={c.ticker} role="tablist" aria-label="Rotating highlight">
      {names.map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === n % 4} tabIndex={-1} data-on={i === n % 4}>{t}</button>)}
    </div>
  );
}
