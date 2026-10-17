import { useState } from 'react';
import c from "../editorial.module.css";

const EPIGRAPHS = [['The map is not the territory, and neither is the timetable.', 'Anonymous'], ['It was never the gate that was late.', 'A platform sign'], ['Quiet is a kind of loud.', 'Field notes']];

export function Epigraph() {
  const [k, setK] = useState(0);
  const [text, who] = EPIGRAPHS[k];
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label="Epigraph. Show another" onClick={() => setK((x) => (x + 1) % EPIGRAPHS.length)}>
      <span key={k} className={c.epi}><span>{text}</span><span className={c.cite}>{who}</span></span>
    </button>
  );
}
