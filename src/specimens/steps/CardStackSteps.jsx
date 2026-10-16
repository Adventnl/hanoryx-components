import c from './steps.module.css';
import { useStep } from './shared';

/* 36 */ export function CardStackSteps() {
  const [i, set] = useStep(4, 0);
  return (
    <div className={c.stackSteps}>
      {[0, 1, 2, 3].map((k) => <section key={k} style={{ '--d': k - i }} aria-hidden={k !== i}><b>0{k + 1}</b><span>{['Gather', 'Sort', 'Shape', 'Send'][k]}</span></section>)}
      <button type="button" onClick={() => set((i + 1) % 4)}>Next card</button>
    </div>
  );
}
