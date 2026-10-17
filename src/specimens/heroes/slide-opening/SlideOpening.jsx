import { useState } from 'react';
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 22 */ export function SlideOpening() {
  const [i, setI] = useState(0);
  return <Sc label="Carousel hero" className={c.slides} style={{ '--h': i * 120 }}><h3>{['One tool', 'Two views', 'Three steps'][i]}</h3><div>{[0, 1, 2].map((k) => <button key={k} type="button" aria-label={`Slide ${k + 1}`} aria-current={i === k ? 'true' : undefined} onClick={() => setI(k)} />)}</div></Sc>;
}
