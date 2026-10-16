import { useCycle } from '../../stage/hooks';
import c from './tabs.module.css';

/* 19 */ export function AutoAdvance() {
  const n = useCycle(4, 2400);
  return (
    <div className={c.auto} role="tablist" aria-label="Auto-advancing tabs" data-n={n}>
      {['Plan', 'Build', 'Check', 'Ship'].map((t, k) => <button key={t} type="button" role="tab" aria-selected={k === n} tabIndex={-1} data-on={k === n}><span>{t}</span><i /></button>)}
    </div>
  );
}
