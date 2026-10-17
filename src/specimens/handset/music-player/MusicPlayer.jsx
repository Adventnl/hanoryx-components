import { useState } from 'react';
import { useTick } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 25 */ export function MusicPlayer() {
  const [on, setOn] = useState(true);
  const n = useTick(500);
  const [t0, setT0] = useState(0);
  const p = on ? ((n - t0) % 40) / 40 : 0;
  return (
    <Phone label="Music player" className={c.center}>
      <span className={c.cover} />
      <b className={c.h}>Slow light</b>
      <span className={c.prog}><i style={{ width: `${p * 100}%` }} /></span>
      <button type="button" className={c.play} aria-pressed={on} aria-label={on ? 'Pause' : 'Play'} onClick={() => { setOn((v) => !v); setT0(n); }}><Ico n={on ? 'pause' : 'play'} /></button>
    </Phone>
  );
}
