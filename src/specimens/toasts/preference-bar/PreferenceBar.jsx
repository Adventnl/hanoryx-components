import { useState } from 'react';
import c from "../toasts.module.css";
import { Fire } from "../shared";

/* 11 */ export function PreferenceBar() {
  const [on, setOn] = useState(true);
  return (
    <div className={c.stage}>
      {on ? <div role="region" aria-label="Preferences" className={c.consent}><p>Pick how this site behaves for you.</p><div><button type="button" onClick={() => setOn(false)}>Keep defaults</button><button type="button" onClick={() => setOn(false)}>Choose</button></div></div> : <Fire onClick={() => setOn(true)}>Ask again</Fire>}
    </div>
  );
}
