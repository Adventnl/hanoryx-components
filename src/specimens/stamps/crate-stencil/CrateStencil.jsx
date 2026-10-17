import c from "../stamps.module.css";

/* 33 */ export function CrateStencil() {
  return (
    <button type="button" className={c.stencil} aria-label="Stencilled crate number">
      {'CRATE 07'.split('').map((ch, i) => <span key={i}>{ch}</span>)}
    </button>
  );
}
