import { useScan } from "../../../stage/chartKit";
import c from "../markup.module.css";

const POEM = ['The belt keeps moving,', 'though nobody asked it to.', 'At seven the gates open,', 'and the hall fills with tea.', 'Someone has crossed out the platform.'];

export function ReadingRuler() {
  const [i, bind] = useScan(POEM.length, { axis: 'y', label: (k) => POEM[k] });
  return (
    <div className={c.fig}>
      <div {...bind} className={c.ruler} aria-label="A reading ruler; move over the text to focus a line">
        {POEM.map((l, k) => <p key={k} data-on={i === -1 || i === k} data-f={i === k}>{l}</p>)}
      </div>
    </div>
  );
}
