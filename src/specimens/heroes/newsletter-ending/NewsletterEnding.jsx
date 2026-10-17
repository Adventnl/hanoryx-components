import { useState } from 'react';
import c from "../heroes.module.css";
import { Cta, Sc } from "../shared";

/* 35 */ export function NewsletterEnding() {
  const [v, setV] = useState('');
  const [d, setD] = useState(false);
  return <Sc label="Newsletter ending" className={c.cen}><h3>{d ? 'Subscribed' : 'One email a month'}</h3><form className={c.form} onSubmit={(e) => { e.preventDefault(); if (v.includes('@')) setD(true); }}><input value={v} onChange={(e) => { setV(e.target.value); setD(false); }} placeholder="Email" aria-label="Email" /><Cta type="submit">{d ? '✓' : 'Join'}</Cta></form></Sc>;
}
