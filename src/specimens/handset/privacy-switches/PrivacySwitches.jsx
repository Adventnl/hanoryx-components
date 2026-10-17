import { useState } from 'react';
import c from "../handset.module.css";
import { Phone, Sw } from "../shared";

/* 34 */ export function PrivacySwitches() {
  const [s, setS] = useState([true, true, false]);
  const set = (k) => (v) => setS((a) => a.map((x, i) => (i === k ? v : x)));
  const T = [['Location', 'While open'], ['Contacts', 'Never shared'], ['Ads', 'Personalised']];
  return (
    <Phone label="Privacy switches">
      {T.map(([t, d], k) => <div key={t} className={c.row}><span><em>{t}</em><small>{d}</small></span><Sw on={s[k]} set={set(k)} label={t} /></div>)}
    </Phone>
  );
}
