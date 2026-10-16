import c from './skeletons.module.css';
import { Shell, sk } from './shared';

/* 4 */ export function TableRows() {
  return (
    <Shell className={c.table} label="Loading table">
      {[0, 1, 2, 3].map((r) => <div key={r}>{sk('18%')}{sk('36%')}{sk('14%')}{sk('12%')}</div>)}
    </Shell>
  );
}
