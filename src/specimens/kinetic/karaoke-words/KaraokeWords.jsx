import c from "../kinetic.module.css";

/* 42 */ export function KaraokeWords() {
  return (
    <div className={c.fig} role="img" aria-label="Follow the words as they light up">
      <p className={c.karaoke}>{['Follow', 'the', 'words', 'as', 'they', 'light', 'up'].map((w, i) => <span key={w} style={{ '--i': i }}>{w} </span>)}</p>
    </div>
  );
}
