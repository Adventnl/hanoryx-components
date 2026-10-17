import { useState } from 'react';
import c from "../figures.module.css";

/* 4 */ export function CountdownRing() {
  const [run, setRun] = useState(0);
  return (
    <button type="button" className={c.cdBtn} aria-label="Ten second countdown, click to start it over" onClick={() => setRun(run + 1)}>
      <span key={run} className={c.cd} data-run={run > 0}>
        <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="44" /><circle className={c.cdRun} cx="50" cy="50" r="44" pathLength="1" /></svg>
        <b className={c.cdn} />
      </span>
      <em>{run ? 'click to restart' : 'click to start'}</em>
    </button>
  );
}
