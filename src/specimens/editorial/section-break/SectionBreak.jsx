import c from "../editorial.module.css";

export function SectionBreak() {
  return (
    <div className={c.fig} role="img" aria-label="A section break made of three stars">
      <p className={c.brk}><i /><span>{[0, 1, 2].map((i) => <b key={i} style={{ '--i': i }} />)}</span><i /></p>
    </div>
  );
}
