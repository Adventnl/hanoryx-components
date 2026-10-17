import { useState } from 'react';
import c from "../graphs.module.css";
import { Box } from "../shared";

/* 25 */ const STATES = [['idle', 14, 20], ['loading', 50, 20], ['ready', 86, 20], ['error', 50, 62]];

const TRANS = { idle: { fetch: 'loading' }, loading: { resolve: 'ready', reject: 'error' }, ready: { reset: 'idle' }, error: { retry: 'loading', reset: 'idle' } };

export function StateMachine() {
  const [cur, setCur] = useState('idle');
  const [last, setLast] = useState('');
  return (
    <div className={c.col}>
      <svg className={c.svg} viewBox="0 0 100 80" aria-hidden="true">
        <defs><marker id="stArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L6 3L0 6z" className={c.arrow} /></marker></defs>
        {['M25 20H38', 'M61 20H74', 'M47 24V57', 'M53 57V24', 'M86 16C86 0 14 0 14 15', 'M39 62C14 62 14 42 14 25'].map((d, i) => <path key={i} className={c.edge} markerEnd="url(#stArrow)" d={d} />)}
        {STATES.map(([n, x, y]) => <Box key={n} x={x} y={y} w={22} h={8} label={n} hot={cur === n} />)}
      </svg>
      <div className={c.pair}>
        {Object.keys(TRANS[cur]).map((ev) => <button key={ev} type="button" onClick={() => { setCur(TRANS[cur][ev]); setLast(ev); }}>{ev}</button>)}
      </div>
      <p className={c.sub}>{last ? <>{last} → <b>{cur}</b></> : <>state <b>{cur}</b></>}</p>
    </div>
  );
}
