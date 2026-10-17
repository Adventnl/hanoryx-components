import { useDrag } from "../../../stage/hooks";
import c from "../glyphs.module.css";
import { Track } from "../shared";

const MONO = [
  <path key="H" d="M0 1V15M10 1V15M0 8H10" />,
  <path key="A" d="M0 15L5 1L10 15M2 10H8" />,
  <path key="N" d="M0 15V1L10 15V1" />,
  <ellipse key="O" cx="5" cy="8" rx="5" ry="7" />,
  <path key="R" d="M0 15V1H6A3.5 3.5 0 0 1 6 8H0M6 8L10 15" />,
  <path key="Y" d="M0 1L5 8L10 1M5 8V15" />,
  <path key="X" d="M0 1L10 15M10 1L0 15" />,
];

export function Monoline() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.3 });
  return (
    <div className={c.fig}>
      <svg className={c.monoSvg} viewBox="-3 -2 88 20" style={{ '--sw': (0.5 + v * 2.6).toFixed(2) }} role="img" aria-label="HANORYX in a single-line letter style">
        {MONO.map((p, i) => <g key={i} transform={`translate(${i * 12} 0)`}>{p}</g>)}
      </svg>
      <Track bind={bind} v={v} label="Line weight" text={`${(0.5 + v * 2.6).toFixed(1)} units`} />
    </div>
  );
}
