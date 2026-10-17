import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 41 */ export function LampGrid() {
  const [at, bind] = useCell(6, 10);
  return (
    <div className={c.box}>
      <div className={c.lamps} {...bind} aria-label="Lamp grid, move over it and the nearby lamps light" data-idle={at[0] < 0} style={at[0] < 0 ? bind.style : { ...bind.style, '--hy': at[0], '--hx': at[1] }}>
        {Array.from({ length: 60 }, (_, i) => <i key={i} style={{ '--cx': i % 10, '--cy': Math.floor(i / 10) }} />)}
      </div>
    </div>
  );
}
