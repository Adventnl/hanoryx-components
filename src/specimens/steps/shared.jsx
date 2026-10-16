import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './steps.module.css';

export const useStep = (n, init = 0) => {
  const [i, setI] = useState(init);
  return [i, setI, () => setI((v) => clamp(v - 1, 0, n - 1)), () => setI((v) => clamp(v + 1, 0, n - 1))];
};

/* back and next buttons shared by several steppers */
export function Nav({ i, n, set, label = 'Step' }) {
  return (
    <div className={c.nav} role="group" aria-label={`${label} controls`}>
      <button type="button" disabled={i === 0} onClick={() => set(i - 1)}>Back</button>
      <output aria-live="polite">{i + 1} / {n}</output>
      <button type="button" disabled={i === n - 1} onClick={() => set(i + 1)}>Next</button>
    </div>
  );
}
