import c from './steps.module.css';
import { useStep } from './shared';

/* 25 */ export function GuidedTour() {
  const [i, set] = useStep(3, 0);
  return (
    <div className={c.tour}>
      <div className={c.tourStage}>{[0, 1, 2].map((k) => <span key={k} data-on={k === i} />)}</div>
      <aside role="note" style={{ '--i': i }}><b>Step {i + 1} of 3</b><p>{['This is the toolbar.', 'This is the canvas.', 'This is the panel.'][i]}</p><button type="button" onClick={() => set((i + 1) % 3)}>{i === 2 ? 'Restart' : 'Next'}</button></aside>
    </div>
  );
}
