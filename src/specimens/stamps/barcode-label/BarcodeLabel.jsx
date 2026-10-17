import { rng } from "../../../stage/hooks";
import c from "../stamps.module.css";

const BARS = Array.from({ length: 34 }, (_, i) => 1 + Math.floor(rng(i + 4)() * 3));

/* 19 */ export function BarcodeLabel() {
  return (
    <button type="button" className={c.bar} aria-label="Barcode label, scans when focused or hovered">
      <span>{BARS.map((w, i) => <i key={i} style={{ '--w': w }} />)}</span>
      <small>4 901234 567894</small>
      <b className={c.scan} />
    </button>
  );
}
