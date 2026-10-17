import c from "../kinetic.module.css";

/* 23 */ export function FlipWords() {
  return (
    <div className={c.fig} role="img" aria-label="Flip, then flop">
      <p className={c.flip}><span><b>FLIP</b><b>FLOP</b></span></p>
    </div>
  );
}
