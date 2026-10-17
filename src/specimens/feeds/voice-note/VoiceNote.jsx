import { useState } from 'react';
import { pad2, useTick } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 21 */ export function VoiceNote() {
  const [on, setOn] = useState(true);
  const n = useTick(250);
  const [t0, setT0] = useState(0);
  const p = on ? Math.min(1, ((n - t0) % 48) / 40) : 0.3;
  return (
    <Fd label="Voice note" className={c.chat}>
      <div className={c.voice}>
        <button type="button" aria-pressed={on} aria-label={on ? 'Pause' : 'Play'} onClick={() => { setOn((v) => !v); setT0(n); }}><Ico n={on ? 'pause' : 'play'} /></button>
        <span>{Array.from({ length: 24 }, (_, k) => <i key={k} data-on={k / 24 < p} style={{ height: `${25 + Math.abs(Math.sin(k * 1.3)) * 70}%` }} />)}</span>
        <small>0:{pad2(Math.round(p * 24))}</small>
      </div>
    </Fd>
  );
}
