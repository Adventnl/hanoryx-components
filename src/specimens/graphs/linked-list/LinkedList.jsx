import { useRef, useState } from 'react';
import c from "../graphs.module.css";

/* 18 */ export function LinkedList() {
  const [items, setItems] = useState([7, 3, 9]);
  const [rev, setRev] = useState(false);
  const next = useRef(12);
  const list = rev ? [...items].reverse() : items;
  return (
    <div className={c.fig}>
      <div className={c.list} data-rev={rev}>
        <em>head</em>
        {list.map((v) => <span key={v}><b>{v}</b><i /></span>)}
        <u>null</u>
      </div>
      <div className={c.pair}>
        <button type="button" onClick={() => { setItems((a) => [next.current, ...a].slice(0, 6)); next.current += 5; }}>Push</button>
        <button type="button" onClick={() => setItems((a) => a.slice(1))}>Pop</button>
        <button type="button" onClick={() => setRev(!rev)}>Reverse</button>
      </div>
    </div>
  );
}
