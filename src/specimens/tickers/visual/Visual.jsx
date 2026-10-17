import c from "../tickers.module.css";

/* ---------- the still side ---------- */

const BOARD = ['ARRIVAL', 'SIGNAL ', 'GATE 07', 'ON TIME', 'BOARDED', 'SYSTEMS'];

/** One flap's numbers: which counter style, where it ends up, when it starts
 *  to move and how fast it runs, so that all of them land together. */
const flapOf = (ch, r, col) => {
  if (ch === ' ') return null;
  const num = ch >= '0' && ch <= '9';
  const m = num ? 10 : 26;
  const end = (num ? +ch : ch.charCodeAt(0) - 65) + m;
  const start = +(0.03 + col * 0.034 + r * 0.021).toFixed(3);
  return { num, m, end, start, rate: +(end / (0.93 - start)).toFixed(2) };
};

const FLAPS = BOARD.map((word, r) => [...word].map((ch, col) => flapOf(ch, r, col)));

const TAPE = 'FLAPS · BOARDS · MARQUEES · TICKERS · ';

export function Visual() {
  return (
    <div className={c.board} aria-hidden="true">
      <p className={c.boardHead}><span><i className="sc-led" /> Flap board</span><span>6 × 7</span></p>
      <div className={c.flaps}>
        {FLAPS.map((row, r) => row.map((f, col) => (f ? (
          <i key={`${r}-${col}`} className={`${c.vf} ${f.num ? c.nu : c.al}`} style={{ '--m': f.m, '--e': f.end, '--s': f.start, '--rt': f.rate }}>
            <b className={`${c.h} ${c.up}`} />
            <b className={`${c.h} ${c.dn}`} />
            <b className={`${c.h} ${c.up} ${c.sfu}`} />
            <b className={`${c.h} ${c.dn} ${c.sfd}`} />
          </i>
        ) : <i key={`${r}-${col}`} className={c.vblank} />)))}
        <span className={c.scan} />
      </div>
      <div className={c.tapeV}><span>{TAPE.repeat(4)}</span></div>
    </div>
  );
}
