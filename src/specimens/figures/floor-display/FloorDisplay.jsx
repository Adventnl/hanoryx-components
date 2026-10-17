import { useEffect, useState } from 'react';
import c from "../figures.module.css";

/* 26 */ const FLOORS = [7, 2, 9, 4, 1, 6];

export function FloorDisplay() {
  const [floor, setFloor] = useState(3);
  const [goal, setGoal] = useState(3);
  const [k, setK] = useState(0);
  useEffect(() => {
    if (floor === goal) return undefined;
    const id = window.setTimeout(() => setFloor((f) => f + Math.sign(goal - f)), 520);
    return () => window.clearTimeout(id);
  }, [floor, goal]);
  const dir = Math.sign(goal - floor);
  return (
    <button type="button" className={c.floor} aria-label={`Elevator at floor ${floor}. Click to call it to another floor`} onClick={() => { setGoal(FLOORS[k % FLOORS.length]); setK(k + 1); }}>
      <i data-dir={dir}>{dir > 0 ? '▲' : dir < 0 ? '▼' : '■'}</i>
      <b key={floor} data-dir={dir}>{floor}</b>
      <em>{dir ? `going to ${goal}` : 'click to call'}</em>
    </button>
  );
}
