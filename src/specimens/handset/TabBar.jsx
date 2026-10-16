import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './handset.module.css';
import { Phone } from './shared';

/* 14 */ export function TabBar() {
  const [t, setT] = useState(0);
  const T = [['home', 'Home'], ['search', 'Find'], ['bell', 'Alerts'], ['user', 'Me']];
  return (
    <Phone label="Tab bar" className={c.between}>
      <b className={c.h}>{T[t][1]}</b>
      <u className={c.line} /><u className={c.line} style={{ width: '55%' }} />
      <nav className={c.tabs} aria-label="Tabs">{T.map(([n, l], k) => <button key={n} type="button" aria-label={l} aria-current={t === k ? 'page' : undefined} onClick={() => setT(k)}><Ico n={n} /></button>)}</nav>
    </Phone>
  );
}
