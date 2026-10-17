import { useState } from 'react';
import c from "../checkout.module.css";
import { $, Co, Step } from "../shared";

/* 40 */ export function BillShare() {
  const [n, setN] = useState(3);
  return <Co label="Split the bill" className={c.center}><span className={c.m}>Split between</span><Step v={n} set={setN} min={1} max={8} label="people" /><b className={c.big}>{$(96 / n)}</b><small className={c.m}>each</small></Co>;
}
