import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 05 */ export function FilmOpening() {
  const [on, setOn] = useState(false);
  return (
    <Sc label="Video hero" className={c.video}>
      <span className={c.photo} data-on={on} />
      <button type="button" className={c.play} aria-pressed={on} aria-label={on ? 'Pause the film' : 'Play the film'} onClick={() => setOn((v) => !v)}><Ico n={on ? 'pause' : 'play'} /></button>
      <span className={c.scrub}><i data-on={on} /></span>
    </Sc>
  );
}
