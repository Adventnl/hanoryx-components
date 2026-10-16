import { useTick } from '../../stage/hooks';
import c from './checkout.module.css';
import { $, Co, LINES } from './shared';

/* 34 */ export function ReceiptPrinting() {
  const n = useTick(700);
  const k = (n % 7) + 1;
  return (
    <Co label="Receipt printing" className={c.receipt} role="img">
      {LINES.slice(0, Math.min(5, k)).map(([t, p]) => <p key={t}><span>{t}</span><span>{p ? $(p) : 'free'}</span></p>)}
      {k >= 6 && <p className={c.rTot}><span>TOTAL</span><span>$166</span></p>}
    </Co>
  );
}
