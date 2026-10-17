import { useCell } from "../../../stage/chartKit";
import c from "../glyphs.module.css";
import { code } from "../shared";

const GRID = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ&@#$%?'];

export function GlyphGrid() {
  const [at, bind] = useCell(4, 8, null);
  const ch = at[0] >= 0 ? GRID[at[0] * 8 + at[1]] : null;
  return (
    <div className={c.fig}>
      <div {...bind} className={c.gridBox} aria-label="A grid of glyphs; move over it to inspect one">
        {GRID.map((g, i) => <i key={g} data-on={at[0] === Math.floor(i / 8) && at[1] === i % 8}>{g}</i>)}
      </div>
      <p className={c.note}>{ch ? `${ch}  ·  ${code(ch)}  ·  ${ch.codePointAt(0)}` : 'point at a glyph'}</p>
    </div>
  );
}
