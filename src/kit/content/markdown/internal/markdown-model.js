/** Reject protocol-relative, control-character and executable URLs before rendering links. */
export function safeHref(value) {
  const href = String(value ?? '').trim();
  if (!href || [...href].some(char => char.charCodeAt(0) <= 32 || char.charCodeAt(0) === 127 || char === '\\') || href.startsWith('//')) return null;
  return /^(https?:|mailto:|tel:|\/|#|\?|\.\.?\/)/i.test(href) ? href : null;
}
