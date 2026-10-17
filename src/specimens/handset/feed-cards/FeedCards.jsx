import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 11 */ export function FeedCards() {
  const [lk, setLk] = useState([1]);
  const flip = (k) => setLk((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]));
  return (
    <Phone label="Feed">
      {[0, 1, 2].map((k) => (
        <div key={k} className={c.post}><span className={c.thumb} style={{ '--h': k * 90 }} /><u className={c.line} /><button type="button" className={c.heart} aria-pressed={lk.includes(k)} aria-label={`Like post ${k + 1}`} onClick={() => flip(k)}><Ico n="heart" /></button></div>
      ))}
    </Phone>
  );
}
