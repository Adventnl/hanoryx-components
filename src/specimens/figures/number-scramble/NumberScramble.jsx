import { useEffect, useState } from 'react';
import { useHot } from "../../../stage/chartKit";
import c from "../figures.module.css";

/* 9 */ const TARGET = '4071928';

export function NumberScramble() {
  const [hot, h] = useHot();
  const [frame, setFrame] = useState(99);
  useEffect(() => {
    if (!hot) return undefined;
    let f = 0;
    const id = window.setInterval(() => { f += 1; setFrame(f); if (f > 30) window.clearInterval(id); }, 45);
    return () => window.clearInterval(id);
  }, [hot]);
  const shown = hot ? frame : 99;
  return (
    <button type="button" className={c.scramble} aria-label="Number scramble, hover to decode the number" {...h}>
      {[...TARGET].map((d, i) => <b key={i} data-done={shown > 6 + i * 3}>{shown > 6 + i * 3 ? d : (shown * 7919 + i * 104729) % 10}</b>)}
    </button>
  );
}
