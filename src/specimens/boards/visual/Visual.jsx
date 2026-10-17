import c from "../boards.module.css";

const CARDS = [['Draft brief', 0, 0, 1], ['Wire form', 0, 1, 2], ['Review', 1, 1, 2], ['Ship', 1, 2, 2], ['QA pass', 0, 1, 2], ['Notes', 1, 2, 2]];

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visBoard}>
        {['To do', 'Doing', 'Done'].map((t) => <span key={t}><b>{t}</b></span>)}
        {CARDS.map(([t, row, from, to], k) => <i key={t} style={{ '--from': from, '--to': to, '--row': row, '--k': k }}>{t}</i>)}
      </div>
      <small>6 CARDS · 3 LANES</small>
    </div>
  );
}
