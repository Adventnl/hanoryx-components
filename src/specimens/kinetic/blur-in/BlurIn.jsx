import c from "../kinetic.module.css";

/* 6 */ export function BlurIn() {
  return (
    <div className={c.fig} role="img" aria-label="Quiet things arrive slowly">
      <p className={c.blur}>{['Quiet', 'things', 'arrive', 'slowly'].map((w, i) => <span key={w} style={{ '--i': i }}>{w}</span>)}</p>
    </div>
  );
}
