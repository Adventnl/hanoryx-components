import { useState } from 'react';
import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 17 */ const START_BOARD = [...'rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR'];

export function ChessBoard() {
  const [board, setBoard] = useState(START_BOARD);
  const [sel, setSel] = useState(-1);
  const [at, bind] = useCell(8, 8, (r, k) => {
    const i = r * 8 + k;
    if (sel < 0) { if (board[i] !== "../index") setSel(i); } else {
      if (sel !== i) setBoard((b) => b.map((p, j) => (j === i ? b[sel] : j === sel ? "../index" : p)));
      setSel(-1);
    }
  });
  return (
    <div className={c.box}>
      <div className={c.chess} {...bind} aria-label="Chess board, click a piece and then a square to move it">
        {board.map((p, i) => <i key={i} data-dark={(Math.floor(i / 8) + (i % 8)) % 2} data-sel={i === sel} data-at={i === at[0] * 8 + at[1]} data-w={p !== "../index" && p === p.toUpperCase()}>{p === "../index" ? '' : p.toUpperCase()}</i>)}
      </div>
      <output className={c.out}>{sel < 0 ? 'Pick a piece' : 'Pick where it goes'}</output>
    </div>
  );
}
