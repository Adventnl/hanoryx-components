import { useState } from 'react';
import c from "../steps.module.css";
import { useStep } from "../shared";

/* 24 */ export function Onboarding() {
  const [i, set] = useStep(4, 0);
  const [gone, setGone] = useState(false);
  return gone ? <button type="button" className={c.again} onClick={() => { setGone(false); set(0); }}>Restart tour</button> : (
    <div className={c.onb}>
      <p>{['Welcome.', 'Find things fast.', 'Share with ease.', 'You are set.'][i]}</p>
      <ol aria-hidden="true">{[0, 1, 2, 3].map((k) => <li key={k} data-on={k === i} />)}</ol>
      <div><button type="button" onClick={() => setGone(true)}>Skip</button><button type="button" onClick={() => (i === 3 ? setGone(true) : set(i + 1))}>{i === 3 ? 'Done' : 'Next'}</button></div>
    </div>
  );
}
