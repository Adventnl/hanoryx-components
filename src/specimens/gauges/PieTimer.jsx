import c from './gauges.module.css';

/* 27 */ export function PieTimer() {
  return (
    <div className={c.pie} role="img" aria-label="A sixty second pie timer">
      <i />
      <b className={c.num} style={{ '--max': 60 }} />
      <small>sec</small>
    </div>
  );
}
