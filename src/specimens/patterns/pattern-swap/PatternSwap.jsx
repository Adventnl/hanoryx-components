import { useState } from 'react';
import c from "../patterns.module.css";
import { TABLE } from "../shared";

const SWAP = [0, 5, 9, 10, 15];

/* 35 */ export function PatternSwap() {
  const [i, setI] = useState(0);
  const [name, style] = TABLE[SWAP[i]];
  return <button type="button" className={c.sw} style={style} onClick={() => setI((v) => (v + 1) % SWAP.length)} aria-label={`${name}. Click for the next pattern`}><small className={c.tag}>{name}</small></button>;
}
