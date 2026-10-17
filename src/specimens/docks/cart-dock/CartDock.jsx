import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 22 */ export function CartDock() {
  const [n, setN] = useState(2);
  const [bump, setBump] = useState(0);
  return (
    <div className={c.cart}>
      <button type="button" onClick={() => { setN(n + 1); setBump((b) => b + 1); }}>Add item</button>
      <span aria-live="polite" aria-label={`Cart, ${n} items`}><Ico n="cart" /><b key={bump} data-bump={bump > 0}>{n}</b></span>
    </div>
  );
}
