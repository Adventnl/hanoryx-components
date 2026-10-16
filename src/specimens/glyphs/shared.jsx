import c from './glyphs.module.css';

export const code = (ch) => `U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`;

/* ---------- building blocks ---------- */

export function Track({ bind, v, label, text }) {
  return (
    <div {...bind} className={c.track} aria-label={label} aria-valuetext={text} style={{ ...bind.style, '--v': v }}>
      <i />
    </div>
  );
}
