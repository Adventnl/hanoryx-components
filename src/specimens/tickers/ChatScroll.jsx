import { useTick } from '../../stage/hooks';
import c from './tickers.module.css';

const CHAT = [['ops', 'ping'], ['gate', 'ready?'], ['ops', 'ack'], ['dock', 'tea is on'], ['gate', 'copy that'], ['ops', 'belt is moving'], ['dock', 'mind the gap'], ['gate', 'all clear']];

export function ChatScroll() {
  const t = useTick(1500);
  const newest = t + 4;
  const rows = [0, 1, 2, 3, 4].map((j) => t + j);
  return (
    <div className={c.fig} role="img" aria-label="A chat log gaining a new message every moment">
      <ol className={c.chat}>
        {rows.map((n) => {
          const [who, said] = CHAT[n % CHAT.length];
          return <li key={n} data-new={n === newest}><b>{who}</b>{said}</li>;
        })}
      </ol>
    </div>
  );
}
