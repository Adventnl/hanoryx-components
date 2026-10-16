import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './studio.module.css';

/* 41 */ export function TransportKeys() {
  const [s, setS] = useState('play');
  return (
    <div className={c.transport} role="group" aria-label="Transport">
      {[['prev', 'Rewind'], ['stop', 'Stop'], ['play', 'Play'], ['rec', 'Record']].map(([k, t]) => <button key={k} type="button" aria-pressed={s === k} aria-label={t} data-k={k} onClick={() => setS(s === k ? 'stop' : k)}>{k === 'stop' ? <i /> : k === 'rec' ? <b /> : <Ico n={k === 'prev' ? 'prev' : 'play'} />}</button>)}
    </div>
  );
}
