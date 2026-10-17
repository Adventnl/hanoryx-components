/* Documentation for SearchField. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "SearchField",
  "area": "kit",
  "family": "inputs",
  "summary": "A search box with a clear button and, when you give it a count, a result count that is read out as it changes.",
  "props": [
    {
      "name": "value",
      "description": "onChange receives the text."
    },
    {
      "name": "defaultValue",
      "description": "onChange receives the text."
    },
    {
      "name": "onChange",
      "description": "onChange receives the text."
    },
    {
      "name": "count",
      "type": "number",
      "description": "Results found; shown and announced."
    },
    {
      "name": "noun",
      "type": "string",
      "default": "\"results\"",
      "description": "What is being counted; the singular is made by dropping a trailing s."
    },
    {
      "name": "placeholder",
      "type": "string",
      "default": "\"Search…\"",
      "description": "A hint inside the box — not a replacement for the label."
    }
  ],
  "keyboard": [
    {
      "key": "Esc",
      "does": "Clears the box and keeps focus in it."
    }
  ],
  "notes": [
    "It does not search anything itself; filter your own list from the text it gives you.",
    "The count is a polite live region."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<SearchField label=\"Find a term\" value={q} onChange={setQ} count={hits.length} noun=\"terms\" />"
    }
  ]
};
