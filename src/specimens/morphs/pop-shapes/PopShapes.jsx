import { useState } from 'react';
import c from "../morphs.module.css";
import { S, poly } from "../shared";

const POP = ['circle', 'star5', 'heart', 'hex', 'flower5'];

/* 39 */ export function PopShapes() {
  const [i, setI] = useState(0);
  return (
    <div className={c.stage}>
      <button type="button" className={c.popBtn} onClick={() => setI((v) => (v + 1) % POP.length)} aria-label={`Shape ${POP[i]}. Click for the next one`}>
        <i key={i} style={{ clipPath: poly(S[POP[i]]), '--h': i * 70 }} />
      </button>
    </div>
  );
}
