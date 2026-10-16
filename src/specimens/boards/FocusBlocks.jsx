import { pad2, useTick } from '../../stage/hooks';
import c from './boards.module.css';
import { Bd } from './shared';

/* 36 */ export function FocusBlocks() {
  const n = useTick(600);
  const step = n % 30;
  return (
    <Bd label="Focus blocks" className={c.center} role="timer">
      <div className={c.blocks}>{Array.from({ length: 10 }, (_, k) => <i key={k} data-brk={k % 5 === 4} data-on={k * 3 <= step} />)}</div>
      <small className={c.m}>{step < 15 ? 'Focus' : 'Break soon'} · {pad2(Math.floor(step / 2))}:{pad2((step % 2) * 30)}</small>
    </Bd>
  );
}
