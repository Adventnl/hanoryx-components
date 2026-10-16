import { useEffect, useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './skeletons.module.css';

/* 27 */ export function RetryState() {
  const [s, setS] = useState('bad');
  useEffect(() => {
    if (s !== 'busy') return undefined;
    const id = setTimeout(() => setS('ok'), 1200);
    return () => clearTimeout(id);
  }, [s]);
  return (
    <div className={c.empty} role="status">
      {s === 'bad' && <><Ico n="close" /><b>Could not load</b><p>Check your connection.</p><button type="button" onClick={() => setS('busy')}>Try again</button></>}
      {s === 'busy' && <><i className={c.spin} /><b>Trying again</b></>}
      {s === 'ok' && <><Ico n="check" /><b>Loaded</b><button type="button" onClick={() => setS('bad')}>Break it</button></>}
    </div>
  );
}
