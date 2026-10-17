/* Documentation for CodeBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "CodeBlock",
  "area": "kit",
  "family": "data",
  "summary": "A block of code with an optional file name, light colouring and a copy button. The colour is a nicety: every token is also plain text, so copying gives exactly what you see.",
  "props": [
    {
      "name": "code",
      "type": "string",
      "description": "The text."
    },
    {
      "name": "language",
      "type": "string",
      "default": "\"js\"",
      "description": "js, jsx, ts, json, css, sh, html or yaml; anything else is shown plain."
    },
    {
      "name": "filename",
      "type": "string",
      "description": "Shown in the header; also names the region."
    },
    {
      "name": "lines",
      "type": "boolean",
      "default": "false",
      "description": "Number the lines (the numbers are not copied)."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "To the copy button, then into the code, so a long line can be scrolled with the arrow keys."
    }
  ],
  "notes": [
    "The colouring is deliberately small — a tokenizer of about eighty lines, no dependency.",
    "Copying uses the clipboard API, with a fallback for browsers that do not offer it."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<CodeBlock filename=\"retry.js\" lines code={source} />"
    }
  ]
};
