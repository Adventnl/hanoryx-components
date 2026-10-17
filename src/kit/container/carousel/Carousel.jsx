import { Children, useId } from 'react';
import { useControllable } from '../../internal/useControllable';
import styles from './Carousel.module.css';

/** Manual carousel. Slides never advance automatically. */
export function Carousel({ children, label = 'Slides', value, defaultValue = 0, onChange }) {
  const slides = Children.toArray(children);
  const [index, setIndex] = useControllable({ value, defaultValue, onChange });
  const active = Math.max(0, Math.min(index, slides.length - 1));
  const id = useId();
  return <section className={styles.root} aria-roledescription="carousel" aria-label={label}>
    <div id={id}>{slides.map((slide, i) => <div key={slide.key ?? i} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`} hidden={i !== active}>{slide}</div>)}</div>
    <div className={styles.controls}><button type="button" aria-controls={id} disabled={active <= 0} onClick={() => setIndex(active - 1)}>Previous slide</button><span role="status">{slides.length ? active + 1 : 0} / {slides.length}</span><button type="button" aria-controls={id} disabled={active >= slides.length - 1} onClick={() => setIndex(active + 1)}>Next slide</button></div>
  </section>;
}
