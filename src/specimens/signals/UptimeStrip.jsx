import { useState } from 'react';
import { rng } from '../../stage/hooks';
import c from './signals.module.css';

const DAYS = (() => { const r = rng(9); return Array.from({ length: 45 }, () => { const v = r(); return v > 0.94 ? 'bad' : v > 0.85 ? 'warn' : 'ok'; }); })();

/* 7 */ export function UptimeStrip() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.uptime}>
      <div role="img" aria-label="Uptime for 45 days: 4 incidents" onPointerLeave={() => setHot(-1)}>{DAYS.map((t, k) => <i key={k} data-t={t} onPointerEnter={() => setHot(k)} />)}</div>
      <output>{hot < 0 ? '45 days · 99.2%' : `Day ${hot + 1}: ${{ ok: 'no incident', warn: 'slow', bad: 'outage' }[DAYS[hot]]}`}</output>
    </div>
  );
}
