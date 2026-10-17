import { useState } from 'react';
import c from "../figures.module.css";

/* 18 */ export function TearOffDay() {
  const [day, setDay] = useState(14);
  return (
    <button type="button" className={c.tear} aria-label={`Tear-off calendar showing the ${day}th. Click to tear off the sheet`} onClick={() => setDay((d) => (d % 31) + 1)}>
      <span className={c.sheet}><em>Oct</em><b>{day}</b><i>day {day} of 31</i></span>
      <span key={day} className={`${c.sheet} ${c.torn}`}><em>Oct</em><b>{day - 1 || 31}</b><i>day {day - 1 || 31} of 31</i></span>
    </button>
  );
}
