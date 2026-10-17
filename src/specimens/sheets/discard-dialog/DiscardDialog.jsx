import { useState } from 'react';
import c from "../sheets.module.css";
import { Open, Stage } from "../shared";

/* 5 */ export function DiscardDialog() {
  const [on, set] = useState(false);
  const [r, setR] = useState('');
  return <Stage label="Alert dialog" onEscape={() => set(false)}><Open on={on} set={set}>Discard</Open><i className={c.scrim} data-on={on} /><div className={c.modal} data-on={on} role="alertdialog" aria-modal="true" aria-label="Discard changes" inert={!on || undefined}><b>Discard changes?</b><span><button type="button" onClick={() => { setR('kept'); set(false); }}>Keep</button><button type="button" data-bad onClick={() => { setR('dropped'); set(false); }}>Discard</button></span></div>{r && !on && <em className={c.said}>Changes {r}</em>}</Stage>;
}
