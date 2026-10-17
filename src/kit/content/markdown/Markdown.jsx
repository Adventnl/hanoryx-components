import { lexer } from 'marked';
import { Link } from '../../action/link/Link';
import CodeBlock from '../code-block/CodeBlock';
import Prose from '../prose/Prose';
import { safeHref } from './internal/markdown-model';

function tokensToNodes(tokens = [], prefix = '') {
  return tokens.map((token, index) => {
    const key = `${prefix}-${index}`;
    const body = () => tokensToNodes(token.tokens, key);
    switch (token.type) {
      case 'space': return null;
      case 'heading': { const Tag = `h${token.depth}`; return <Tag key={key}>{body()}</Tag>; }
      case 'paragraph': return <p key={key}>{body()}</p>;
      case 'strong': return <strong key={key}>{body()}</strong>;
      case 'em': return <em key={key}>{body()}</em>;
      case 'del': return <del key={key}>{body()}</del>;
      case 'codespan': return <code key={key}>{token.text}</code>;
      case 'code': return <CodeBlock key={key} code={token.text} language={token.lang} />;
      case 'br': return <br key={key} />;
      case 'hr': return <hr key={key} />;
      case 'blockquote': return <blockquote key={key}>{body()}</blockquote>;
      case 'list': { const Tag = token.ordered ? 'ol' : 'ul'; return <Tag key={key} start={token.ordered ? token.start : undefined}>{token.items.map((item, i) => <li key={i}>{tokensToNodes(item.tokens, `${key}-${i}`)}</li>)}</Tag>; }
      case 'link': { const href = safeHref(token.href); return href ? <Link key={key} to={href.startsWith('/') && !href.startsWith('//') ? href : undefined} href={href}>{body()}</Link> : <span key={key}>{body()}</span>; }
      case 'image': return <span key={key}>{token.text}</span>;
      case 'table': return <table key={key}><thead><tr>{token.header.map((cell, i) => <th key={i} scope="col">{tokensToNodes(cell.tokens, `${key}-h${i}`)}</th>)}</tr></thead><tbody>{token.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{tokensToNodes(cell.tokens, `${key}-${i}-${j}`)}</td>)}</tr>)}</tbody></table>;
      default: return token.tokens ? <span key={key}>{body()}</span> : <span key={key}>{token.text ?? token.raw}</span>;
    }
  });
}
/** Markdown renders React nodes; HTML is shown as text and unsafe link schemes are rejected. */
export function Markdown({ children = '', source }) { return <Prose>{tokensToNodes(lexer(String(source ?? children)))}</Prose>; }
