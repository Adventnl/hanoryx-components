import { useToggle } from '../../stage/hooks';
import c from './fields.module.css';

/* 34 */ export function VoiceField() {
  const [on, flip] = useToggle();
  return (
    <div className={c.voice} data-on={on}>
      <button type="button" aria-pressed={on} aria-label={on ? 'Stop listening' : 'Start listening'} onClick={flip}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg></button>
      <p aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</p>
      <output>{on ? 'LISTENING' : 'TAP TO SPEAK'}</output>
    </div>
  );
}
