import { useState } from 'react';
import c from './handset.module.css';
import { Phone, cx } from './shared';

/* 05 */ export function SetupSteps() {
  const [s, setS] = useState(1);
  return (
    <Phone label="Setup steps">
      <span className={c.p}>Step {s} of 4</span>
      <span className={c.prog}><i style={{ width: `${s * 25}%` }} /></span>
      <b className={c.h}>{['Name', 'Team', 'Plan', 'Invite'][s - 1]}</b>
      <u className={c.line} /><u className={c.line} style={{ width: '60%' }} />
      <button type="button" className={cx(c.btn, c.low)} onClick={() => setS((v) => (v % 4) + 1)}>{s === 4 ? 'Finish' : 'Next'}</button>
    </Phone>
  );
}
