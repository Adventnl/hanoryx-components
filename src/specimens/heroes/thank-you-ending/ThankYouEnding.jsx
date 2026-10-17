import { useState } from 'react';
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 37 */ export function ThankYouEnding() {
  const [n, setN] = useState(1);
  return <Sc label="Thank you" className={c.cen}><button type="button" className={c.okring} aria-label="Replay" onClick={() => setN((v) => v + 1)}><svg key={n} viewBox="0 0 52 52"><circle cx="26" cy="26" r="22" pathLength="1" /><path d="M15 27l8 8 14-16" pathLength="1" /></svg></button><h3>Thank you</h3><small>We will be in touch</small></Sc>;
}
