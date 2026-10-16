import { useState } from 'react';
import c from './handset.module.css';
import { Phone } from './shared';

/* 26 */ export function CameraShutter() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  return (
    <Phone label="Camera" className={c.between}>
      <span className={c.view}><i key={n} className={c.flash} data-go={n > 0} /></span>
      <div className={c.modes} role="group" aria-label="Mode">{['Photo', 'Video', 'Pano'].map((x, k) => <button key={x} type="button" aria-pressed={m === k} onClick={() => setM(k)}>{x}</button>)}</div>
      <button type="button" className={c.shutter} aria-label="Take a picture" onClick={() => setN((v) => v + 1)} />
    </Phone>
  );
}
