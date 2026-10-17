import { useState } from 'react';
import c from "../boards.module.css";
import { Bd, cx } from "../shared";

/* 06 */ export function CardPeek() {
  const [o, setO] = useState(false);
  return (
    <Bd label="Card detail" className={c.one}>
      <button type="button" className={cx(c.cd, c.peek)} aria-expanded={o} onClick={() => setO((v) => !v)}>
        <b>Fix login</b>
        {o && <><small>Users on Safari are bounced back to the form.</small><span className={c.avs}><i style={{ '--h': 10 }}>A</i><i style={{ '--h': 200 }}>K</i></span></>}
      </button>
      <span className={c.cd}>Update copy</span>
    </Bd>
  );
}
