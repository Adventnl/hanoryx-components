import { useEffect, useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './loaders.module.css';

/* the specimens below are the ones you can press */

/* 41 */ export function ButtonLoader() {
  const [s, setS] = useState('idle');
  useEffect(() => {
    if (s !== 'busy') return undefined;
    const id = setTimeout(() => setS('done'), 1800);
    return () => clearTimeout(id);
  }, [s]);
  return (
    <button type="button" className={c.btn} data-s={s} aria-busy={s === 'busy'} onClick={() => setS('busy')} disabled={s === 'busy'}>
      {s === 'idle' && 'Send'}
      {s === 'busy' && <><i aria-hidden="true" />Sending</>}
      {s === 'done' && <><Ico n="check" />Sent</>}
    </button>
  );
}
