import c from "../skeletons.module.css";
import { Shell, sk } from "../shared";

/* 38 */ export function ChatPlaceholder() {
  return <Shell className={c.chatSk} label="Loading messages">{[['60%', 'l'], ['72%', 'r'], ['44%', 'l']].map(([w, s], k) => <div key={k} data-s={s}>{sk(w, '1.6rem', '12px')}</div>)}</Shell>;
}
