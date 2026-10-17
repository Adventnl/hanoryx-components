import c from "../studio.module.css";

/* 16 */ export function Oscilloscope() {
  return <svg className={c.scope} viewBox="0 0 120 60" role="img" aria-label="Oscilloscope"><path d="M0 30h120M0 10h120M0 50h120M20 0v60M40 0v60M60 0v60M80 0v60M100 0v60" className={c.grid} /><path d="M0 30Q15 -5 30 30T60 30T90 30T120 30" className={c.trace} /><path d="M0 30Q15 -5 30 30T60 30T90 30T120 30" className={`${c.trace} ${c.trace2}`} /></svg>;
}
