import c from './editorial.module.css';

export function Cutline() {
  return (
    <figure className={c.fig}>
      <div className={c.cut}>
        <span className={`${c.photo} ${c.art2}`} />
        <span className={c.credit}>Photo: A. Writer</span>
      </div>
      <figcaption className={c.caption}>The 18:02, leaving on time for the first time anyone can remember.</figcaption>
    </figure>
  );
}
