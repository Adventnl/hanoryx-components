import { useHot } from '../../stage/chartKit';
import c from './bento.module.css';
import { Tile } from './shared';

export function AvatarsTile() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Team avatars that spread out" {...bind}>
      <Tile k="Team">
        <span className={c.faces}>{['AW', 'BR', 'CE', 'DM', '+3'].map((f, i) => <i key={f} style={{ '--i': i }}>{f}</i>)}</span>
        <b className={c.v}>8 people</b>
      </Tile>
    </button>
  );
}
