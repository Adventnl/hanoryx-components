import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 35 */ export function StorageBar() {
  const [used, setUsed] = useState(62);
  return (
    <Phone label="Storage bar">
      <b className={c.h}>Storage</b>
      <span className={c.store}><i style={{ width: `${used * 0.5}%`, background: '#60a5fa' }} /><i style={{ width: `${used * 0.3}%`, background: '#ffb84d' }} /><i style={{ width: `${used * 0.2}%`, background: '#ff5a5a' }} /></span>
      <span className={c.p}>{used} GB of 128</span>
      <button type="button" className={c.ghost} onClick={() => setUsed((v) => Math.max(12, v - 15))}>Clear cache</button>
    </Phone>
  );
}
