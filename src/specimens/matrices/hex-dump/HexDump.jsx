import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 22 */ const DUMP = [...'HEX DUMP: EVERY BYTE IS A CELL AND EVERY CELL IS A LETTER. HOVER IT!'.padEnd(72, ' ').slice(0, 72)];

export function HexDump() {
  const [at, bind] = useCell(6, 12);
  const sel = at[0] * 12 + at[1];
  return (
    <div className={c.box}>
      <div className={c.dump}>
        <div className={c.hex} {...bind} aria-label="Hex dump, move over the bytes or use the arrow keys">
          {DUMP.map((ch, i) => <i key={i} data-sel={i === sel} data-row={at[0] >= 0 && Math.floor(i / 12) === at[0]}>{ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')}</i>)}
        </div>
        <div className={c.ascii} aria-hidden="true">
          {DUMP.map((ch, i) => <i key={i} data-sel={i === sel}>{ch === ' ' ? '·' : ch}</i>)}
        </div>
      </div>
      <output className={c.out}>{at[0] < 0 ? 'Move over the bytes' : <>offset <b>0x{sel.toString(16).toUpperCase().padStart(2, '0')}</b> · “{DUMP[sel]}”</>}</output>
    </div>
  );
}
