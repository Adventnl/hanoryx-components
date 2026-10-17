import { useState } from 'react';
import c from "../kinetic.module.css";

/* 28 */ const ANAGRAM = [2, 1, 0, 5, 3, 4];

export function AnagramShuffle() {
  const [on, setOn] = useState(false);
  return (
    <div className={c.fig}>
      <button type="button" className={c.anagram} aria-label={`Anagram shuffle, showing ${on ? 'SILENT' : 'LISTEN'}. Click to rearrange`} onClick={() => setOn(!on)}>
        {[...'LISTEN'].map((ch, i) => <span key={ch} style={{ '--x': on ? ANAGRAM[i] : i }}>{ch}</span>)}
      </button>
    </div>
  );
}
