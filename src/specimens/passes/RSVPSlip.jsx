import { useState } from 'react';
import c from './passes.module.css';

/* 34 */
const RSVP = ['Yes', 'Maybe', 'No'];

const RSVP_OUT = ['See you there', 'We will hold a seat', 'Noted, with thanks'];

export function RSVPSlip() {
  const [pick, setPick] = useState(-1);
  return (
    <div className={c.rs}>
      <span className={c.rsTear}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l13 14M5 19 18 5" /><circle cx="4" cy="5" r="2.2" /><circle cx="4" cy="19" r="2.2" /></svg><i /></span>
      <span className={c.kp}>Reply by 28 Oct</span>
      <b>Will you come?</b>
      <span className={c.rsOpts} role="group" aria-label="Your reply">
        {RSVP.map((t, i) => (
          <button key={t} type="button" aria-pressed={pick === i} onClick={() => setPick(i)}>
            <i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13l5 5L20 6" pathLength="1" /></svg></i>{t}
          </button>
        ))}
      </span>
      <span className={c.rsOut}>{pick < 0 ? 'No reply yet' : RSVP_OUT[pick]}</span>
    </div>
  );
}
