import c from "../markup.module.css";

/* ---------- the still side ---------- */

const NOTES = [
  ['The belt ', ['keeps moving', 'hl'], ', though ', ['nobody asked it to', 'st'], '. At ', ['seven', 'ci'], ' the gates open and the hall fills with ', ['tea and timetables', 'ul'], "../index"],
  ['Someone has crossed out ', ['the wrong platform', 'st'], '. Someone else has underlined the right one ', ['twice', 'du'], "../index"],
  ['The list below was ', ['removed before printing', 'hl'], ': ', ['the east gate', 'rd'], ', ', ['platform nine', 'rd'], ' and ', ['the night shift', 'rd'], "../index"],
  ['The last line was ', ['never finished', 'rd'], "../index"],
];

let order = 0;

const PAGE = NOTES.map((p) => p.map((tok) => (typeof tok === 'string' ? { t: tok } : { t: tok[0], m: tok[1], i: order++ })));

const MARKS = order;

export function Visual() {
  return (
    <div className={c.doc} style={{ '--n': MARKS + 1 }} aria-hidden="true">
      <p className={c.docHead}><span><i className="sc-led" /> Field notes</span><span>Page 1 of 1</span></p>
      <h3 className={c.docTitle}>Notes on a quiet machine</h3>
      {PAGE.map((p, n) => (
        <p key={n} className={c.docP}>
          {p.map((tok, k) => (tok.m
            ? <span key={k} className={`${c.mk} ${c[tok.m]}`} style={{ '--i': tok.i }}>{tok.t}</span>
            : <span key={k}>{tok.t}</span>))}
        </p>
      ))}
      <p className={c.docKey}><b>Highlight</b><b>Strike</b><b>Redact</b><b>Circle</b></p>
      <span className={c.docRule}><i /></span>
    </div>
  );
}
