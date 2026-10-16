import { useCycle } from '../../stage/hooks';
import c from './toasts.module.css';

/* 42 */ export function LiveStatusLine() {
  const k = useCycle(4, 2200);
  const lines = ['Build 214 started', 'Tests passing: 312', 'Deploying to preview', 'Preview is live'];
  return <p role="status" className={c.live} key={k}><i aria-hidden="true" />{lines[k]}</p>;
}
