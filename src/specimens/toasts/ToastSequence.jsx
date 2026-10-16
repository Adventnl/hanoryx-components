import { useEffect, useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './toasts.module.css';
import { Fire } from './shared';

/* 26 */ export function ToastSequence() {
  const [k, setK] = useState(0);
  const msgs = ['Connecting…', 'Syncing 3 files…', 'All up to date'];
  useEffect(() => {
    if (k === 0 || k > 3) return undefined;
    const id = setTimeout(() => setK((v) => v + 1), 1100);
    return () => clearTimeout(id);
  }, [k]);
  return (
    <div className={c.stage}>
      <Fire onClick={() => setK(1)}>Sync</Fire>
      {k >= 1 && k <= 3 && <div role="status" className={c.toast} key={k}>{k === 3 ? <Ico n="check" /> : <i className={c.spin} aria-hidden="true" />}{msgs[k - 1]}</div>}
    </div>
  );
}
