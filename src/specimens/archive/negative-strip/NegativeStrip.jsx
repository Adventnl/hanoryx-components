import c from "../archive.module.css";

/* 18 */ export function NegativeStrip() {
  return (
    <div className={c.neg} role="img" aria-label="A film negative strip moving past">
      <div>{Array.from({ length: 16 }, (_, k) => <i key={k}><b style={{ '--s': (k * 7) % 5 }} /></i>)}</div>
    </div>
  );
}
