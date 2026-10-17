import { useState } from 'react';
import c from "../glyphs.module.css";

export function DropCap() {
  const [n, setN] = useState(3);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Drop cap, ${n} lines deep. Change the depth`} onClick={() => setN((x) => (x % 4) + 2)}>
      <span className={c.drop} style={{ '--n': n }}>The belt keeps moving, though nobody asked it to, and the first letter of a paragraph can sink into the lines below it like a stone into water.</span>
    </button>
  );
}
