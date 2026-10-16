import c from './bento.module.css';
import { Tile } from './shared';

export function CodeTile() {
  return (
    <div className={c.fig} role="img" aria-label="A few lines of code appearing one after another">
      <Tile k="belt.js">
        <pre className={c.code}>
          <span style={{ '--i': 0 }}>const belt = start();</span>
          <span style={{ '--i': 1 }}>belt.speed(5);</span>
          <span style={{ '--i': 2 }}>await belt.ready;</span>
        </pre>
      </Tile>
    </div>
  );
}
