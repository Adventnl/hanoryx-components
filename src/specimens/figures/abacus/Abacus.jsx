import { useState } from 'react';
import c from "../figures.module.css";

/* 13 */ export function Abacus() {
  const [rods, setRods] = useState([0, 2, 6, 4, 1]);
  const set = (i, v) => setRods((r) => r.map((x, j) => (j === i ? v : x)));
  return (
    <div className={c.fig}>
      <div className={c.abacus}>
        {rods.map((v, i) => (
          <span key={i}>
            <button type="button" className={`${c.bead} ${c.heaven}`} data-on={v >= 5} style={{ '--t': v >= 5 ? 1 : 0 }} aria-label={`Rod ${i + 1}, five bead`} onClick={() => set(i, v >= 5 ? v - 5 : v + 5)} />
            {[1, 2, 3, 4].map((k) => (
              <button key={k} type="button" className={`${c.bead} ${c.earth}`} data-on={v % 5 >= k} style={{ '--t': k - 1 + (v % 5 >= k ? 0 : 1.143) }} aria-label={`Rod ${i + 1}, bead ${k}`} onClick={() => set(i, (v >= 5 ? 5 : 0) + (v % 5 === k ? k - 1 : k))} />
            ))}
          </span>
        ))}
      </div>
      <output className={c.fOut}>{rods.join('')}</output>
    </div>
  );
}
