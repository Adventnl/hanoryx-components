import c from './steps.module.css';
import { useStep } from './shared';

/* 28 */ export function SubSteps() {
  const [i, set] = useStep(3, 1);
  return (
    <ol className={c.sub} aria-label="Stepper with sub-steps">
      {[['Setup', ['Name', 'Region']], ['Connect', ['Source', 'Test']], ['Launch', ['Review']]].map(([t, kids], k) => (
        <li key={t} data-s={k < i ? 'done' : k === i ? 'now' : 'next'}>
          <button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}>{t}</button>
          {k === i && <ul>{kids.map((x) => <li key={x}>{x}</li>)}</ul>}
        </li>
      ))}
    </ol>
  );
}
