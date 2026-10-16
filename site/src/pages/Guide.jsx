import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';

const docs = import.meta.glob('../../../docs/*.md', { query: '?raw', import: 'default' });

marked.use({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const id = text.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `<h${depth} id="${id}">${text}</h${depth}>\n`;
    },
    table({ header, rows }) {
      const cell = (c, tag) => `<${tag}${c.align ? ` style="text-align:${c.align}"` : ''}>${this.parser.parseInline(c.tokens)}</${tag}>`;
      return `<div class="sx-table"><table><thead><tr>${header.map((c) => cell(c, 'th')).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => cell(c, 'td')).join('')}</tr>`).join('')}</tbody></table></div>`;
    },
  },
});

export default function Guide() {
  const { slug } = useParams();
  const [doc, setDoc] = useState({ slug: null, html: null });
  useEffect(() => {
    let live = true;
    const load = docs[`../../../docs/${slug}.md`];
    const text = load ? load() : Promise.resolve(null);
    text.then((md) => { if (live) setDoc({ slug, html: md == null ? '<p>That guide does not exist.</p>' : marked.parse(md) }); });
    document.title = `${slug.replace(/-/g, ' ')} — Hanoryx Components`;
    return () => { live = false; };
  }, [slug]);
  const html = doc.slug === slug ? doc.html : '<p>Loading…</p>';
  return <article className="sx-prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
