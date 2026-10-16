/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "new",
  "summary": "A compact editor for bold, italic, underline and code, with sanitized HTML values and plain-text paste.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "Visible or accessible name. Keep it meaningful in the page context."
    },
    {
      "name": "value",
      "type": "string",
      "description": "Controlled HTML. Only allowlisted text formatting and http(s)/mailto links survive sanitization."
    },
    {
      "name": "defaultValue",
      "type": "see notes",
      "description": "Initial value for uncontrolled usage. Subsequent changes to defaultValue do not reset state."
    },
    {
      "name": "onChange",
      "type": "(html: string) => void",
      "description": "Receives sanitized HTML after each edit."
    },
    {
      "name": "disabled",
      "type": "boolean",
      "description": "Disables editing and activation."
    },
    {
      "name": "hint"
    },
    {
      "name": "error"
    },
    {
      "name": "rows",
      "type": "number",
      "description": "Minimum editor height in line units; default 6."
    }
  ],
  "notes": [
    "Paste and drop insert plain text. HTML from value is parsed and allowlisted; scripts, embedded media, event handlers and unsafe link schemes are removed.",
    "Persist only the emitted sanitized HTML. Server-rendered user content still needs server-side sanitization appropriate to its rendering context.",
    "Formatting applies to the current text selection. This editor does not provide collaboration, attachments, images or Markdown conversion."
  ],
  "sizing": {
    "rules": [
      "Fills its parent. rows reserves a minimum editable height; longer content grows naturally."
    ]
  },
  "keyboard": [
    {
      "key": "Tab / Shift+Tab",
      "does": "Move through formatting buttons and the editable textbox."
    },
    {
      "key": "Shift+Arrow keys",
      "does": "Select text; activate a formatting button to apply its mark."
    }
  ],
  "examples": [
    {
      "title": "Working composition",
      "code": "const [html, setHtml] = useState('<p>Write <strong>clearly</strong>.</p>');\n<RichTextEditor label=\"Description\" value={html} onChange={setHtml} />"
    }
  ],
  "subcomponents": {}
};
