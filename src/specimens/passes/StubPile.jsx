import { pad2 } from '../../stage/hooks';
import { useHot } from '../../stage/chartKit';
import c from './passes.module.css';

/* 33 */
export function StubPile() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={c.pile} data-hot={hot} aria-label="Pile of ticket stubs: hover, tap or press Enter to fan them out" {...bind}>
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i} className={c.pileStub} style={{ '--i': i }}><span className={c.kp}>Stub</span><b>{pad2(i + 1)}</b></span>
      ))}
    </button>
  );
}
