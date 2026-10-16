import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 28 */ export function ToastPile() {
  const [t, setT] = useState(['Saved', 'Synced']);
  return (
    <Fd label="Toast pile" className={c.center}>
      <div className={c.toasts}>{t.map((x, k) => <button key={`${k}${x}`} type="button" aria-label={`Dismiss ${x}`} onClick={() => setT((a) => a.filter((_, i) => i !== k))}><Ico n="check" />{x}<s>×</s></button>)}</div>
      <button type="button" className={c.more} onClick={() => setT((a) => [...a.slice(-2), ['Uploaded', 'Copied', 'Sent'][a.length % 3]])}>Notify</button>
    </Fd>
  );
}
