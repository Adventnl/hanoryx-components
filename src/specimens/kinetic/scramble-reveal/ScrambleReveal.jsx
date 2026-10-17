import { useEffect, useState } from 'react';
import { useHot } from "../../../stage/chartKit";
import c from "../kinetic.module.css";
import { GLYPHS } from "../shared";

const PHRASE = 'DECODE THE SIGNAL';

export function ScrambleReveal() {
  const [hot, h] = useHot();
  const [frame, setFrame] = useState(99);
  useEffect(() => {
    if (!hot) return undefined;
    let f = 0;
    const id = window.setInterval(() => { f += 1; setFrame(f); if (f > 46) window.clearInterval(id); }, 38);
    return () => window.clearInterval(id);
  }, [hot]);
  const shown = hot ? frame : 99;
  const text = [...PHRASE].map((ch, i) => (ch === ' ' || shown > 5 + i * 2 ? ch : GLYPHS[(shown * 31 + i * 17) % GLYPHS.length])).join('');
  return <div className={c.fig}><button type="button" className={c.scr} aria-label={`${PHRASE}. Hover to decode it`} {...h}>{text}</button></div>;
}
