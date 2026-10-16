import { useState } from 'react';
import c from './fields.module.css';

const ADDRESSES = ['12 Example Street', '48 Sample Road', '7 Placeholder Lane', '301 Test Avenue'];

/* 30 */ export function AddressCard() {
  const [q, setQ] = useState('');
  const [pick, setPick] = useState(null);
  const hits = q && !pick ? ADDRESSES.filter((a) => a.toLowerCase().includes(q.toLowerCase())) : [];
  return (
    <div className={c.address}>
      <input value={pick || q} aria-label="Address search" placeholder="Search sample addresses" onChange={(e) => { setPick(null); setQ(e.target.value); }} />
      {hits.length > 0 && <ul>{hits.map((a) => <li key={a}><button type="button" onClick={() => setPick(a)}>{a}</button></li>)}</ul>}
      {pick && <p><i /><span>{pick}<small>SAMPLE ADDRESS</small></span></p>}
    </div>
  );
}
