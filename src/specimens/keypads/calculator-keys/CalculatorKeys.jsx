import { useState } from 'react';
import c from "../keypads.module.css";

/* 7 */ export function CalculatorKeys() {
  const [s, setS] = useState('0');
  const press = (k) => setS((v) => (k === 'C' ? '0' : v === '0' ? k : (v + k).slice(0, 9)));
  return (
    <div className={c.calc}>
      <output>{s}</output>
      <div>{['7', '8', '9', 'C', '4', '5', '6', '0'].map((k) => <button type="button" key={k} aria-label={`Key ${k}`} onClick={() => press(k)}>{k}</button>)}</div>
    </div>
  );
}
