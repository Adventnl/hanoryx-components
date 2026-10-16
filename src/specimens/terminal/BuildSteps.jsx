import { useLive, useTick } from '../../stage/hooks';
import { usePrefersReducedMotion } from '../../core/hooks/usePrefersReducedMotion';
import c from './terminal.module.css';
import { BRAILLE } from './shared';

const STEPS = [['clean', 40], ['compile', 310], ['bundle', 180], ['minify', 95], ['upload', 420]];

/* 41 */ export function BuildSteps() {
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const n = useTick(700);
  const k = reduced || !live ? STEPS.length : n % (STEPS.length + 2);
  return (
    <div className={c.win} role="img" aria-label="Build steps finishing one by one">
      {STEPS.map(([t, ms], i) => <p key={t} className={c.ln}>{i < k ? <b className={c.ok}>✓</b> : i === k ? <b className={c.cyan}>{BRAILLE[n % 10]}</b> : <span className={c.dim}>·</span>} {t} <span className={c.dim}>{i < k ? `${ms}ms` : ''}</span></p>)}
    </div>
  );
}
