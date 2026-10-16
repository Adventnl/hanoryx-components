import c from './loaders.module.css';
import { dots, status } from './shared';

/* 14 */ export function TypingDots() { return <span className={c.typing} {...status('Someone is typing')}>{dots(3)}</span>; }
