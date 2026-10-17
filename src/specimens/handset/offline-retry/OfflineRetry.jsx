import { useState } from 'react';
import { useTick } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 40 */ export function OfflineRetry() {
  const [st, setSt] = useState(0);
  const n = useTick(900);
  const [t0, setT0] = useState(-9);
  const busy = n - t0 < 2 && st === 1;
  const state = busy ? 'busy' : st === 1 ? 'ok' : 'off';
  return (
    <Phone label="Offline retry" className={c.center}>
      <span className={c.art} style={{ background: state === 'ok' ? '#4ade80' : state === 'busy' ? '#60a5fa' : '#ff5a5a' }}><Ico n={state === 'ok' ? 'check' : 'bolt'} /></span>
      <b className={c.h}>{state === 'ok' ? 'Back online' : state === 'busy' ? 'Trying…' : 'No connection'}</b>
      <button type="button" className={c.btn} onClick={() => { setSt(st === 1 ? 0 : 1); setT0(n); }}>{st === 1 ? 'Go offline' : 'Retry'}</button>
    </Phone>
  );
}
