import { useState } from 'react';
import c from "../archive.module.css";

/* 24 */ export function LetterBundle() {
  const [loose, setLoose] = useState(false);
  return (
    <button type="button" className={c.bundle} aria-pressed={loose} onClick={() => setLoose((v) => !v)} aria-label="Bundle of letters. Click to untie it">
      {[0, 1, 2].map((k) => <i key={k} data-loose={loose} style={{ '--k': k - 1 }} />)}
      <span className={c.twine} data-loose={loose} />
    </button>
  );
}
