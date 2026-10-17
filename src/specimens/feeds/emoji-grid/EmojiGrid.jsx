import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 27 */ export function EmojiGrid() {
  const [s, setS] = useState('🙂');
  const E = ['🙂', '😄', '😍', '🤔', '😮', '😢', '🙏', '👏', '🔥', '🎉', '💡', '✅'];
  return (
    <Fd label="Emoji grid" className={c.center}>
      <div className={c.emoji}>{E.map((e) => <button key={e} type="button" aria-label={e} aria-pressed={s === e} onClick={() => setS(e)}>{e}</button>)}</div>
      <small className={c.m}>Picked {s}</small>
    </Fd>
  );
}
