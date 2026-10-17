import { useState } from 'react';
import c from "../handset.module.css";
import { Phone, Sw } from "../shared";

/* 30 */ export function SettingsList() {
  const [s, setS] = useState([true, false, true]);
  const set = (k) => (v) => setS((a) => a.map((x, i) => (i === k ? v : x)));
  return (
    <Phone label="Settings list">
      <b className={c.h}>Settings</b>
      {['Wi-Fi', 'Airplane', 'Alerts'].map((t, k) => <div key={t} className={c.row}><span>{t}</span><Sw on={s[k]} set={set(k)} label={t} /></div>)}
    </Phone>
  );
}
