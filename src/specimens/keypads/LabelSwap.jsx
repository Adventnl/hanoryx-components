import c from './keypads.module.css';

/* 28 */ export function LabelSwap() {
  return <button type="button" className={c.swap}><span><b>Send</b><b>Sent →</b></span></button>;
}
