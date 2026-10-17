import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";

export function CardWallet() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A wallet; slide the card out" onClick={flip}>
      <span className={c.wallet} data-on={on}>
        <i className={c.wcard}><b>Card</b></i>
        <i className={c.wfront}><b>Wallet</b></i>
      </span>
    </button>
  );
}
