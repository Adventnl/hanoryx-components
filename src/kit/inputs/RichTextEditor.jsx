import { useEffect, useId, useRef } from 'react';
import { sanitizeRichText } from '../internal/rich-text';
import styles from './RichTextEditor.module.css';

/** A small rich-text editor. HTML is allowlisted; transport, storage and collaboration belong to the host. */
export default function RichTextEditor({
  label = 'Rich text',
  value,
  defaultValue = '',
  onChange,
  disabled = false,
  hint = 'Select text, then choose bold, italic, underline or code.',
  error,
  rows = 6,
}) {
  const editor = useRef(null);
  const selection = useRef(null);
  const initial = useRef(defaultValue);
  const id = useId();
  useEffect(() => {
    const safe = sanitizeRichText(value ?? initial.current);
    if (editor.current && sanitizeRichText(editor.current.innerHTML) !== safe)
      editor.current.innerHTML = safe;
  }, [value]);
  const publish = () => onChange?.(sanitizeRichText(editor.current.innerHTML));
  function remember() {
    const current = window.getSelection();
    if (
      current?.rangeCount &&
      editor.current.contains(current.anchorNode) &&
      editor.current.contains(current.focusNode)
    )
      selection.current = current.getRangeAt(0).cloneRange();
  }
  function format(tag) {
    const range = selection.current;
    if (!range || range.collapsed || !editor.current.contains(range.commonAncestorContainer)) return;
    // Format text runs individually so selections spanning several paragraphs
    // retain valid block/inline nesting and their existing links.
    const walker = document.createTreeWalker(editor.current, NodeFilter.SHOW_TEXT);
    const targets = [];
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (!range.intersectsNode(node)) continue;
      const start = node === range.startContainer ? range.startOffset : 0;
      const end = node === range.endContainer ? range.endOffset : node.length;
      if (end > start) targets.push({ node, start, end });
    }
    const marks = [];
    for (const { node, start, end } of targets.reverse()) {
      const part = document.createRange();
      part.setStart(node, start); part.setEnd(node, end);
      const mark = document.createElement(tag);
      mark.append(part.extractContents()); part.insertNode(mark);
      marks.unshift(mark);
    }
    if (!marks.length) return;
    const formatted = document.createRange();
    formatted.setStartBefore(marks[0]); formatted.setEndAfter(marks.at(-1));
    const current = window.getSelection();
    current.removeAllRanges();
    current.addRange(formatted);
    editor.current.focus();
    remember();
    publish();
  }
  function insertText(event) {
    event.preventDefault();
    const text = (event.clipboardData ?? event.dataTransfer)?.getData('text/plain') ?? '';
    editor.current.focus();
    const current = window.getSelection();
    if (!current?.rangeCount || !editor.current.contains(current.anchorNode)) return;
    const range = current.getRangeAt(0);
    range.deleteContents();
    const node = document.createTextNode(text);
    range.insertNode(node);
    range.setStartAfter(node);
    range.collapse(true);
    current.removeAllRanges();
    current.addRange(range);
    remember();
    publish();
  }
  return (
    <div className={styles.field}>
      <span id={`${id}-label`}>{label}</span>
      <div className={styles.toolbar} role="group" aria-label="Text formatting">
        {[
          ['strong', 'Bold'],
          ['em', 'Italic'],
          ['u', 'Underline'],
          ['code', 'Code'],
        ].map(([tag, name]) => (
          <button
            key={tag}
            type="button"
            disabled={disabled}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => format(tag)}
          >
            {name}
          </button>
        ))}
      </div>
      <div
        ref={editor}
        className={styles.editor}
        style={{ '--editor-rows': rows }}
        role="textbox"
        aria-multiline="true"
        aria-labelledby={`${id}-label`}
        aria-describedby={`${id}-hint`}
        aria-invalid={Boolean(error)}
        aria-disabled={disabled}
        contentEditable={!disabled}
        suppressContentEditableWarning
        onInput={() => {
          remember();
          publish();
        }}
        onMouseUp={remember}
        onKeyUp={remember}
        onBlur={remember}
        onPaste={insertText}
        onDrop={insertText}
      />
      <p id={`${id}-hint`} className={styles.hint}>
        {error || hint}
      </p>
    </div>
  );
}
