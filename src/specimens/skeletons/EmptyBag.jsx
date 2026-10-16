import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './skeletons.module.css';

/* 19 */ export function EmptyBag() {
  const [n, setN] = useState(0);
  return (
    <div className={c.empty}>
      <Ico n="cart" /><b>{n ? `${n} in your bag` : 'Your bag is empty'}</b><p>{n ? 'Nice choice.' : 'Add something you like.'}</p>
      <button type="button" onClick={() => setN(n ? 0 : 1)}>{n ? 'Empty it' : 'Browse'}</button>
    </div>
  );
}
