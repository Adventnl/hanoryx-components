import { useTick } from '../../stage/hooks';
import c from './kinetic.module.css';
import { GLYPHS } from './shared';

/* 33 */ export function CipherCycle() {
  const t = useTick(55) % 90;
  const word = 'CIPHER';
  return (
    <div className={c.fig} role="img" aria-label="Cipher, letters cycling until they settle">
      <p className={c.cipher}>{[...word].map((ch, i) => <span key={i} data-done={t > 14 + i * 7 || t > 60}>{t > 14 + i * 7 || t > 60 ? ch : GLYPHS[(t * 5 + i * 11) % 26]}</span>)}</p>
    </div>
  );
}
