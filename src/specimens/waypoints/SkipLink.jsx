import { useState } from 'react';
import c from './waypoints.module.css';

/* 20 */ export function SkipLink() {
  const [shown, setShown] = useState(false);
  return (
    <div className={c.skip}>
      <a href="#skip" data-shown={shown} onFocus={() => setShown(true)} onBlur={() => setShown(false)} onClick={(e) => e.preventDefault()}>Skip to content</a>
      <p>Press Tab to bring the link in.</p>
      <button type="button" onClick={() => setShown(!shown)} aria-pressed={shown}>Preview</button>
    </div>
  );
}
