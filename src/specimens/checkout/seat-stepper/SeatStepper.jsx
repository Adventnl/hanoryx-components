import { useState } from 'react';
import c from "../checkout.module.css";
import { $, Co, Step } from "../shared";

/* 03 */ export function SeatStepper() {
  const [n, setN] = useState(5);
  return <Co label="Seats" className={c.center}><span className={c.m}>Seats</span><Step v={n} set={setN} min={1} max={20} label="seats" /><b className={c.big}>{$(n * 8)}<small>/mo</small></b></Co>;
}
