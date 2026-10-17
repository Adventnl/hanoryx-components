import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 33 */ export function LanguageList() {
  const [l, setL] = useState(0);
  return (
    <Phone label="Language list">
      <b className={c.h}>Language</b>
      <div className={c.radios} role="radiogroup" aria-label="Language">{['English', 'Español', '日本語', 'Norsk'].map((x, k) => <button key={x} type="button" role="radio" aria-checked={l === k} onClick={() => setL(k)}>{x}{l === k ? <Ico n="check" /> : null}</button>)}</div>
    </Phone>
  );
}
