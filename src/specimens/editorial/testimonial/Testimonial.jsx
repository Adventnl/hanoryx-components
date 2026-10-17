import { useState } from 'react';
import c from "../editorial.module.css";

export function Testimonial() {
  const [open, setOpen] = useState(false);
  return (
    <div className={c.fig}>
      <figure className={c.testi}>
        <span className={c.avatar} aria-hidden="true">AR</span>
        <blockquote><p>The belt keeps moving.{open ? ' It was moving when I arrived and it was moving when I left, and in between nobody asked it to do anything at all.' : ''}</p></blockquote>
        <figcaption>A. Reader <button type="button" className={c.more} aria-expanded={open} onClick={() => setOpen((o) => !o)}>{open ? 'less' : 'more'}</button></figcaption>
      </figure>
    </div>
  );
}
