import { useState } from 'react';
import c from "../graphs.module.css";

/* 13 */ const TEAMS = ['Ash', 'Birch', 'Cedar', 'Dune', 'Elm', 'Fir', 'Gum', 'Holly'];

export function TournamentBracket() {
  const [w, setW] = useState([[null, null, null, null], [null, null], [null]]);
  const rounds = [TEAMS, w[0].map((x) => x), w[1].map((x) => x)];
  const pick = (r, m, team) => setW((cur) => cur.map((row, ri) => {
    if (ri < r) return row;
    return row.map((x, mi) => {
      if (ri === r && mi === m) return team;
      if (ri > r && mi === Math.floor(m / 2 ** (ri - r))) return null;
      return x;
    });
  }));
  return (
    <div className={c.bracket}>
      {[0, 1, 2].map((r) => (
        <div key={r} data-r={r}>
          {Array.from({ length: 4 / 2 ** r }, (_, m) => (
            <p key={m}>
              {[0, 1].map((s) => { const t = rounds[r][m * 2 + s]; return <button key={s} type="button" disabled={!t} data-win={t && w[r][m] === t} onClick={() => pick(r, m, t)}>{t || '—'}</button>; })}
            </p>
          ))}
        </div>
      ))}
      <div data-r="3"><p><b>{w[2][0] || '?'}</b></p></div>
    </div>
  );
}
