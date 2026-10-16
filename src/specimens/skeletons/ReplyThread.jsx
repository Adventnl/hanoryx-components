import c from './skeletons.module.css';
import { Shell, sk } from './shared';

/* 10 */ export function ReplyThread() {
  return (
    <Shell className={c.thread} label="Loading comments">
      {[0, 1].map((k) => <div key={k} style={{ marginLeft: k ? '1.8rem' : 0 }}>{sk('1.8rem', '1.8rem', '50%')}<span>{sk('4rem', '0.55rem')}{sk('100%')}{sk('70%')}</span></div>)}
    </Shell>
  );
}
