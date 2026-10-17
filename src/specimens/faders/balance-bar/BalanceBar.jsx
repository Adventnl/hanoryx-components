import c from "../faders.module.css";
import { Track } from "../shared";

/* 9 */ export function BalanceBar() {
  return <Track cls={c.balance} label="Balance" init={0.62} steps={40}>{(v) => <><u /><i /><span>{v === 0.5 ? 'CENTRE' : v < 0.5 ? `L ${Math.round((0.5 - v) * 200)}` : `R ${Math.round((v - 0.5) * 200)}`}</span></>}</Track>;
}
