import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './archive.module.css';

/* 17 */ export function Microfiche() {
  const [cell, setCell] = useState([2, 3]);
  const move = (dx, dy) => setCell(([x, y]) => [clamp(x + dx, 0, 5), clamp(y + dy, 0, 3)]);
  return (
    <div className={c.fiche} tabIndex={0} role="group" aria-label="Microfiche: use the arrow keys or the pointer"
      onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setCell([clamp(Math.floor(((e.clientX - r.left) / r.width) * 6), 0, 5), clamp(Math.floor(((e.clientY - r.top) / r.height) * 4), 0, 3)]); }}
      onKeyDown={(e) => { const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key]; if (d) { e.preventDefault(); move(...d); } }}>
      {Array.from({ length: 24 }, (_, i) => <i key={i} data-hot={i % 6 === cell[0] && Math.floor(i / 6) === cell[1]} />)}
      <small>frame {cell[1] + 1}.{cell[0] + 1}</small>
    </div>
  );
}
