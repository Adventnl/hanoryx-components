import { useState } from 'react';
import c from './fields.module.css';

/* 4 */ export function PhoneMask() {
  const [v, setV] = useState('');
  const fmt = (raw) => {
    const d = raw.replace(/\D/g, '').slice(0, 10);
    return d.length > 6 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d.length > 3 ? `(${d.slice(0, 3)}) ${d.slice(3)}` : d ? `(${d}` : '';
  };
  return <label className={c.mask}><span>PHONE</span><input value={v} inputMode="tel" placeholder="(000) 000-0000" onChange={(e) => setV(fmt(e.target.value))} /></label>;
}
