import { useToggle } from '../../stage/hooks';
import c from './markup.module.css';

export function Paperclip() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Two sheets held by a clip. Take the clip off" onClick={flip}>
      <span className={c.sheets} data-on={on}>
        <i className={c.sh1}><b /><b /><b /></i>
        <i className={c.sh2}><b /><b /><b /></i>
        <svg className={c.clip} viewBox="0 0 20 44" aria-hidden="true"><path d="M5 34V9a5 5 0 0 1 10 0v25a3.5 3.5 0 0 1-7 0V12" /></svg>
      </span>
    </button>
  );
}
