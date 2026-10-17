/* Documentation for Prose. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Prose",
  "area": "kit",
  "family": "content",
  "summary": "A reading column. Wrap plain HTML — headings, paragraphs, lists, links, code, quotes — and it is typeset for reading: about 68 characters wide, generous leading, serif headings.",
  "props": [
    {
      "name": "as",
      "type": "string",
      "default": "\"div\"",
      "description": "The wrapper element."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "Links are underlined — colour is not the only cue — and the underline turns red on hover.",
    "Lines stay around 68 characters wide on any screen."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Prose><h2>Handing a system over</h2><p>…</p><ul><li>…</li></ul></Prose>"
    }
  ]
};
