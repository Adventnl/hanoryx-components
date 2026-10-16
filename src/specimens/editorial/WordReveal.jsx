import c from './editorial.module.css';

const REVEAL = 'Say the thing once, then let the white space say the rest.'.split(' ');

export function WordReveal() {
  return (
    <div className={c.fig} role="img" aria-label="Say the thing once, then let the white space say the rest.">
      <p className={c.wr} aria-hidden="true">{REVEAL.map((w, i) => <span key={i} style={{ '--i': i }}>{w}</span>)}</p>
    </div>
  );
}
