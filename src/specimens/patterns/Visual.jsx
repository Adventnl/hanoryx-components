import c from './patterns.module.css';

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visSheet}>
        <i className={c.visDots} />
        <i className={c.visHatch} />
        <b />
      </div>
      <small>2 SURFACES · 1 EDGE</small>
    </div>
  );
}
