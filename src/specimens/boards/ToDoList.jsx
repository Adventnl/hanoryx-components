import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 35 */ export function ToDoList() {
  const [items, setItems] = useState([['Book flights', true], ['Pack', false]]);
  const [v, setV] = useState('');
  const add = (e) => { e.preventDefault(); if (v.trim()) { setItems((a) => [...a.slice(-3), [v.trim(), false]]); setV(''); } };
  return (
    <Bd label="To-do list" className={c.one}>
      {items.map(([t, d], k) => <button key={`${k}${t}`} type="button" role="checkbox" aria-checked={d} className={c.todo} onClick={() => setItems((a) => a.map((x, i) => (i === k ? [x[0], !x[1]] : x)))}><i>{d ? '✓' : ''}</i><span>{t}</span></button>)}
      <form onSubmit={add}><input className={c.in} value={v} onChange={(e) => setV(e.target.value)} placeholder="Add…" aria-label="New to-do" /></form>
    </Bd>
  );
}
