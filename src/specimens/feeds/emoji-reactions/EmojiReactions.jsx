import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 18 */ export function EmojiReactions() {
  const [on, setOn] = useState({ '👍': 2, '🎉': 1 });
  const add = (e) => setOn((a) => ({ ...a, [e]: (a[e] ?? 0) + 1 }));
  return (
    <Fd label="Reactions" className={c.chat}>
      <div><p>Release is live</p></div>
      <div className={c.react}>{Object.entries(on).map(([e, n]) => <button key={e} type="button" aria-label={`${e} ${n}`} onClick={() => add(e)}>{e} {n}</button>)}</div>
      <div className={c.react}>{['👍', '🎉', '🔥', '👀'].map((e) => <button key={e} type="button" aria-label={`React ${e}`} className={c.ghostBtn} onClick={() => add(e)}>{e}</button>)}</div>
    </Fd>
  );
}
