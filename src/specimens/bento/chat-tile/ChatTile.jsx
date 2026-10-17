import c from "../bento.module.css";
import { Tile } from "../shared";

export function ChatTile() {
  return (
    <div className={c.fig} role="img" aria-label="A short conversation appearing, message by message">
      <Tile k="Chat">
        <div className={c.chat}>
          <p style={{ '--i': 0 }}>Is the belt on?</p>
          <p className={c.me} style={{ '--i': 1 }}>Always.</p>
          <p style={{ '--i': 2 }}><i /><i /><i /></p>
        </div>
      </Tile>
    </div>
  );
}
