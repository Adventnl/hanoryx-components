import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { recipes, recipeSource } from '../recipes';
import { Inline } from '../Inline';

const FRAMES = [['Phone', 390], ['Tablet', 768], ['Laptop', 1280], ['Wide', 1920]];

export default function RecipePage() {
  const { slug } = useParams();
  const mod = recipes[slug];
  const [w, setW] = useState(1280);
  const [show, setShow] = useState(false);
  if (!mod) return <p>No recipe called {slug}.</p>;
  const { meta } = mod;
  return (
    <div>
      <header className="sx-head">
        <p className="sx-eyebrow">Recipe</p>
        <h1 className="sx-h1">{meta.title}</h1>
        <p className="sx-lede">{meta.summary}</p>
        <ul className="sx-chips">{meta.uses.map((u) => <li key={u}>{u}</li>)}</ul>
      </header>

      <section className="sx-panel">
        <div className="sx-panel-bar">
          <h2 className="sx-h3">Live, in a real viewport</h2>
          <div role="group" aria-label="Viewport width" className="sx-seg">
            {FRAMES.map(([label, v]) => <button type="button" key={label} aria-pressed={w === v} onClick={() => setW(v)}>{label} {v}</button>)}
          </div>
          <Link className="sx-copy" to={`/frame/${slug}`} target="_blank">Full page ↗</Link>
        </div>
        <div className="sx-frame-wrap">
          <iframe title={`${meta.title} at ${w}px`} src={`#/frame/${slug}`} className="sx-frame" style={{ width: Math.min(w, 1920), height: 720 }} />
        </div>
      </section>

      <section className="sx-section">
        <h2 className="sx-h3">What it teaches</h2>
        <ul className="sx-notes">{meta.notes.map((n) => <li key={n}><Inline text={n} /></li>)}</ul>
      </section>

      <section className="sx-section">
        <h2 className="sx-h3">Source <button type="button" className="sx-copy" onClick={() => setShow((v) => !v)}>{show ? 'Hide' : 'Show'}</button></h2>
        {show && <pre className="sx-code"><code>{recipeSource[slug]}</code></pre>}
        <p className="sx-meta-line">Lives in <code>site/src/recipes/{slug}.jsx</code> — copy it.</p>
      </section>
    </div>
  );
}
