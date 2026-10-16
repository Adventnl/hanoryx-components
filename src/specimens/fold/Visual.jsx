import c from './fold.module.css';
import { Pleat } from './shared';

export function Visual() {
  return (
    <div className={c.leaf} aria-hidden="true">
      <div className={c.sheet}><Pleat k={0} /></div>
      <p className={c.leafTag}><i className="sc-led" /> Four panels, three hinges</p>
    </div>
  );
}
