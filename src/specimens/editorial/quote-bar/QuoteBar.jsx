import c from "../editorial.module.css";

export function QuoteBar() {
  return (
    <figure className={c.fig}>
      <blockquote className={c.qbar}><p>A line is only as straight as the person who drew it, and nobody drew this one.</p></blockquote>
      <figcaption className={c.cite}>Margin note</figcaption>
    </figure>
  );
}
