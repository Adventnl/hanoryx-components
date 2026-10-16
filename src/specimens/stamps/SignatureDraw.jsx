import c from './stamps.module.css';

/* 39 */ export function SignatureDraw() {
  return (
    <div className={c.sig} role="img" aria-label="A signature being written">
      <svg viewBox="0 0 120 50"><path pathLength="100" d="M6 34c8-22 16-26 14-8s-10 20-4 18 14-22 22-22c-6 12-2 18 6 8s6-10 10-6c-4 8 2 8 8 0s8-10 4-4 4 6 10 0 12-8 14-2 8-6 10-10" /><path pathLength="100" className={c.under} d="M10 44c30-4 60-4 100-8" /></svg>
    </div>
  );
}
