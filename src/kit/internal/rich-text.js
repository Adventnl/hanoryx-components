const TAGS = new Set([
  'P',
  'DIV',
  'BR',
  'STRONG',
  'B',
  'EM',
  'I',
  'U',
  'UL',
  'OL',
  'LI',
  'BLOCKQUOTE',
  'CODE',
  'PRE',
  'A',
]);
const OMIT = new Set(['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'SVG', 'MATH', 'TEMPLATE']);

/** Restrict editor content to text and a small formatting vocabulary. Browser-only. */
export function sanitizeRichText(html) {
  const document = new DOMParser().parseFromString(String(html), 'text/html');
  function clean(parent) {
    for (const node of [...parent.childNodes]) {
      if (node.nodeType === 8) {
        node.remove();
        continue;
      }
      if (node.nodeType !== 1) continue;
      if (OMIT.has(node.tagName)) {
        node.remove();
        continue;
      }
      clean(node);
      if (!TAGS.has(node.tagName)) {
        node.replaceWith(...node.childNodes);
        continue;
      }
      const href = node.tagName === 'A' ? node.getAttribute('href') : null;
      for (const attribute of [...node.attributes]) node.removeAttribute(attribute.name);
      if (href && /^(https?:\/\/|mailto:)/i.test(href.trim())) {
        node.setAttribute('href', href.trim());
        node.setAttribute('rel', 'noopener noreferrer');
      } else if (node.tagName === 'A') node.replaceWith(...node.childNodes);
    }
  }
  clean(document.body);
  return document.body.innerHTML;
}
