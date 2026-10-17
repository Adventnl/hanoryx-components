import { useScan } from "../../../stage/chartKit";
import c from "../editorial.module.css";

const REFS = ['Writer, A. — Field notes. Quiet Press, 2024.', 'Reader, B. — On belts and platforms. Gate Books, 2022.', 'Editor, C. — A short history of tea. Dock Editions, 2019.'];

export function ReferenceList() {
  const [i, bind] = useScan(REFS.length, { axis: 'y', label: (k) => REFS[k] });
  return (
    <div className={c.fig}>
      <ol {...bind} className={c.refs} aria-label="References; move along the list to pick one">
        {REFS.map((r, k) => <li key={r} data-on={i === k}>{r}</li>)}
      </ol>
    </div>
  );
}
