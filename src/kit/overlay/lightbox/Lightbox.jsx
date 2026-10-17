import { useControllable } from '../../internal/useControllable';
import Dialog from '../dialog/Dialog';
import styles from './Lightbox.module.css';

/** Assets come from the host. Alt text is required for each informative image. */
export function Lightbox({ images = [], value, defaultValue = 0, onChange, open, onClose, title = 'Image viewer' }) {
  const [index, setIndex] = useControllable({ value, defaultValue, onChange });
  const at = Math.max(0, Math.min(index, images.length - 1));
  const image = images[at];
  return <Dialog open={open} onClose={onClose} title={title} footer={<div className={styles.controls}><button type="button" disabled={at <= 0} onClick={() => setIndex(at - 1)}>Previous image</button><span role="status">{image ? at + 1 : 0} / {images.length}</span><button type="button" disabled={at >= images.length - 1} onClick={() => setIndex(at + 1)}>Next image</button></div>}>
    {image ? <figure className={styles.figure}><img src={image.src} alt={image.alt} />{image.caption && <figcaption>{image.caption}</figcaption>}</figure> : <p>No images.</p>}
  </Dialog>;
}
