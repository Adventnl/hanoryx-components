import { useState } from 'react';
import c from './fold.module.css';

const FACES = ['One', 'Two', 'Three', 'Four'];

export function FaceRoll() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`A rolling sign showing ${FACES[n % 4]}. Roll to the next`} onClick={() => setN((v) => v + 1)}>
      <span className={c.stage}>
        <span className={c.prism} style={{ transform: `rotateX(${-n * 90}deg)` }}>
          {FACES.map((f, i) => <i key={f} style={{ '--i': i }}><b>{f}</b></i>)}
        </span>
      </span>
    </button>
  );
}
