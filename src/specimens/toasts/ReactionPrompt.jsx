import { useState } from 'react';
import c from './toasts.module.css';

/* 37 */ export function ReactionPrompt() {
  const [pick, setPick] = useState('');
  return (
    <div className={c.reactT} role="group" aria-label="How was that?">
      <p>{pick ? `You said ${pick}` : 'How was that?'}</p>
      <div>{['☹', '☻', '★'].map((f) => <button key={f} type="button" aria-pressed={pick === f} aria-label={`React ${f}`} onClick={() => setPick(f)}>{f}</button>)}</div>
    </div>
  );
}
