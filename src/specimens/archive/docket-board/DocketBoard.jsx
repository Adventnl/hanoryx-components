import { useState } from 'react';
import c from "../archive.module.css";

const ST = [['open', '#4ade80'], ['review', '#febc2e'], ['closed', '#8b8d97']];

/* 32 */ export function DocketBoard() {
  const [s, setS] = useState([0, 1, 2, 1]);
  const bump = (i) => setS((a) => a.map((v, k) => (k === i ? (v + 1) % 3 : v)));
  return (
    <div className={c.docket}>
      {['Hale v. Rowe', 'Re: Estate 22', 'Parcel 9', 'Wren Ltd'].map((t, i) => <button key={t} type="button" onClick={() => bump(i)} aria-label={`${t}: ${ST[s[i]][0]}. Click to change`}><span>{t}</span><em style={{ '--st': ST[s[i]][1] }}>{ST[s[i]][0]}</em></button>)}
    </div>
  );
}
