import { useTick } from '../../stage/hooks';
import c from './editorial.module.css';

const CAPTION_TEXT = 'The belt, photographed from the gate, in the last light of the day.';

export function CaptionTyping() {
  const t = useTick(60);
  const n = t % (CAPTION_TEXT.length + 40);
  return (
    <figure className={c.fig} aria-label={CAPTION_TEXT}>
      <span className={`${c.frame} ${c.art2}`} />
      <figcaption className={c.caption} aria-hidden="true">Fig. 3 — {CAPTION_TEXT.slice(0, Math.min(n, CAPTION_TEXT.length))}<i className={c.caret} /></figcaption>
    </figure>
  );
}
