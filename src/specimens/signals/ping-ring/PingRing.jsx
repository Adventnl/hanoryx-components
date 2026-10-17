import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../signals.module.css";

/* 33 */ export function PingRing() {
  const [n, setN] = useState(0);
  return <button type="button" className={c.pingRing} aria-label="Send a ping" onClick={() => setN(n + 1)}><i key={n} data-fire={n > 0} /><Ico n="bell" /></button>;
}
