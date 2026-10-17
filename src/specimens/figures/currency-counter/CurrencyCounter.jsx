import { useTick } from "../../../stage/hooks";
import c from "../figures.module.css";

/* 14 */ const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export function CurrencyCounter() {
  const n = useTick(150);
  return (
    <div className={c.fig} role="img" aria-label="A running currency total">
      <b className={c.money}>{money.format(12345.67 + n * 3.21)}</b>
      <p className={c.sub}>+ 3.21 every tick</p>
    </div>
  );
}
