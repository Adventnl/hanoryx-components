import { useState } from 'react';
import c from './archive.module.css';

/* 22 */ export function PhotoShuffle() {
  const [order, setOrder] = useState([0, 1, 2, 3]);
  return (
    <button type="button" className={c.shuf} onClick={() => setOrder((a) => [...a.slice(1), a[0]])} aria-label="Photographs. Click to send the top one to the back">
      {order.map((id, z) => <i key={id} style={{ '--z': order.length - z, '--r': `${(id * 29) % 17 - 8}deg`, '--h': id * 70 }}><b /></i>)}
    </button>
  );
}
