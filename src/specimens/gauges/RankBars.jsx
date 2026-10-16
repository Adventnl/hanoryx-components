import { useState } from 'react';
import c from './gauges.module.css';

/* 32 */ const TEAMS = ['Atlas', 'Bravo', 'Cedar', 'Delta', 'Ember'];

const ROUNDS = [[62, 48, 71, 35, 54], [41, 77, 58, 66, 29], [83, 52, 44, 69, 61], [57, 63, 90, 38, 72]];

export function RankBars() {
  const [k, setK] = useState(0);
  const s = ROUNDS[k];
  const rank = s.map((x) => s.filter((y) => y > x).length);
  return (
    <button type="button" className={c.rank} aria-label={`Rank bars, round ${k + 1}. Click for the next round`} onClick={() => setK((k + 1) % ROUNDS.length)}>
      {TEAMS.map((t, i) => (
        <span key={t} data-top={rank[i] === 0} style={{ '--r': rank[i], '--w': s[i] / 100 }}>
          <em>{t}</em><i><b /></i><u>{s[i]}</u>
        </span>
      ))}
    </button>
  );
}
