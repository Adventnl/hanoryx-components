import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 28 */ export function WalletStack() {
  const [front, setFront] = useState(0);
  return (
    <Phone label="Wallet cards">
      <div className={c.wallet}>
        {[0, 1, 2].map((k) => { const d = (k - front + 3) % 3; return <button key={k} type="button" aria-label={`Card ${k + 1}`} onClick={() => setFront(k)} style={{ '--d': d, '--h': k * 110 }}><small>•••• {4200 + k * 17}</small></button>; })}
      </div>
    </Phone>
  );
}
