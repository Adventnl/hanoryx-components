import { useScan } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 19 */ const TAPE_TEXT = 'MATRICES AND GRIDS';

export function PaperTape() {
  const [i, bind] = useScan(TAPE_TEXT.length, { label: (k) => `${TAPE_TEXT[k]}, code ${TAPE_TEXT.charCodeAt(k)}` });
  return (
    <div className={c.box}>
      <div className={c.tape} {...bind} aria-label="Paper tape, move along it to read the characters">
        {[...TAPE_TEXT].map((ch, k) => (
          <span key={k} data-hot={k === i}>
            {[7, 6, 5, 4].map((b) => <i key={b} data-on={(ch.charCodeAt(0) >> b) & 1} />)}
            <u />
            {[3, 2, 1, 0].map((b) => <i key={b} data-on={(ch.charCodeAt(0) >> b) & 1} />)}
          </span>
        ))}
      </div>
      <output className={c.out}>{i < 0 ? 'Move along the tape' : <>“{TAPE_TEXT[i] === ' ' ? '␣' : TAPE_TEXT[i]}” · <b>{TAPE_TEXT.charCodeAt(i).toString(2).padStart(8, '0')}</b></>}</output>
    </div>
  );
}
