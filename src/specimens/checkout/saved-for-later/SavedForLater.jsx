import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 20 */ export function SavedForLater() {
  const [cart, setCart] = useState(['Tent pegs', 'Stove']);
  const [saved, setSaved] = useState(['Lantern']);
  const mv = (set, setTo, t) => { set((a) => a.filter((x) => x !== t)); setTo((a) => [...a, t]); };
  return (
    <Co label="Saved for later" className={c.list}>
      <small className={c.m}>In cart ({cart.length})</small>
      {cart.map((t) => <button key={t} type="button" className={c.line} onClick={() => mv(setCart, setSaved, t)}><span>{t}</span><em>Save</em></button>)}
      <small className={c.m}>Saved ({saved.length})</small>
      {saved.map((t) => <button key={t} type="button" className={c.line} onClick={() => mv(setSaved, setCart, t)}><span>{t}</span><em>Move to cart</em></button>)}
    </Co>
  );
}
