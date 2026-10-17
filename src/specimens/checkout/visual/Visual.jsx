import c from "../checkout.module.css";
import { LINES } from "../shared";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visTicket}>
        <b>HANORYX SHOP</b>
        <small>ORDER 0417 · 14 OCT</small>
        {LINES.map(([t, p], k) => <p key={t} style={{ '--k': k }}><span>{t}</span><span>{p ? `$${p}.00` : 'free'}</span></p>)}
        <p className={c.visTotal}><span>TOTAL</span><span>$166.00</span></p>
        <i />
      </div>
      <small>6 LINES · 1 TOTAL</small>
    </div>
  );
}
