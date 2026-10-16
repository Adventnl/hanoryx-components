import { usePoint } from '../../stage/chartKit';
import c from './tilt.module.css';
import { lean } from './shared';

export function DepthText() {
  const [p, bind] = usePoint();
  const { x, y } = lean(p);
  const at = (d) => ({ transform: `translate(${(x * d).toFixed(1)}px, ${(y * d * 0.6).toFixed(1)}px)` });
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.stage} ${c.depthStage}`} aria-label="Three lines of type at three depths">
        <p className={c.depth}>
          <span style={at(-12)}>DEEP</span>
          <span style={at(0)}>FIELD</span>
          <span style={at(14)}>TYPE</span>
        </p>
      </div>
    </div>
  );
}
