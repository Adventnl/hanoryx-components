import { useTick } from '../../stage/hooks';
import c from './archive.module.css';

/* 29 */ export function BatesStamp() {
  const n = useTick(900);
  return (
    <div className={c.bates} role="img" aria-label="A page being numbered">
      <i /><i /><i />
      <b key={n}>HX-{String(1000 + n).padStart(6, '0')}</b>
    </div>
  );
}
