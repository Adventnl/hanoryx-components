import { useState } from 'react';
import c from './editorial.module.css';

export function CrossReference() {
  const [n, setN] = useState(0);
  return (
    <div className={c.fig}>
      <p className={c.para}>As argued earlier, <button type="button" className={c.xref} onClick={() => setN((v) => v + 1)}>see page 12 →</button></p>
      <p key={n} className={c.target} data-hit={n > 0}>Page 12 · The belt, once more</p>
    </div>
  );
}
