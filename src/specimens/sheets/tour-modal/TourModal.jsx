import { useState } from 'react';
import c from "../sheets.module.css";
import { Open, Stage } from "../shared";

/* 17 */ export function TourModal() {
  const [i, setI] = useState(-1);
  const steps = [['Welcome', 'A short tour.'], ['Pick a theme', 'Dark, of course.'], ['All set', 'Off you go.']];
  return <Stage label="Onboarding modal" onEscape={() => setI(-1)}><Open on={i >= 0} set={(v) => setI(v ? 0 : -1)}>Start</Open><i className={c.scrim} data-on={i >= 0} /><div className={c.modal} data-on={i >= 0} role="dialog" aria-modal="true" aria-label="Onboarding" inert={i < 0 || undefined}><b>{steps[Math.max(i, 0)][0]}</b><p>{steps[Math.max(i, 0)][1]}</p><button type="button" onClick={() => setI(i >= 2 ? -1 : i + 1)}>{i >= 2 ? 'Done' : 'Next'}</button></div></Stage>;
}
