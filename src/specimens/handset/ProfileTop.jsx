import { useState } from 'react';
import c from './handset.module.css';
import { Av, Phone } from './shared';

/* 31 */ export function ProfileTop() {
  const [f, setF] = useState(false);
  return (
    <Phone label="Profile header" className={c.center}>
      <Av h={20} s="A" />
      <b className={c.h}>Ada</b>
      <span className={c.p}>{f ? 241 : 240} followers</span>
      <button type="button" className={f ? c.ghost : c.btn} aria-pressed={f} onClick={() => setF((v) => !v)}>{f ? 'Following' : 'Follow'}</button>
    </Phone>
  );
}
