import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 01 */ export function WelcomeSplash() {
  const [done, setDone] = useState(false);
  return (
    <Phone label="Welcome screen" className={c.center}>
      <span className={c.logo}>H</span>
      <b className={c.h}>{done ? 'You are in' : 'Welcome'}</b>
      <span className={c.p}>{done ? 'Taking you home' : 'A calmer way to run work.'}</span>
      <button type="button" className={c.btn} onClick={() => setDone((v) => !v)}>{done ? 'Back' : 'Get started'}</button>
    </Phone>
  );
}
