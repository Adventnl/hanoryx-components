/* Documentation for Heading. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Heading",
  "area": "kit",
  "family": "content",
  "origin": "new",
  "summary": "A heading in the serif voice. `level` is the HTML element (for the outline); `size` is how it looks, from the type scale — display, hero, h1–h4. New in this library.",
  "keywords": [
    "title",
    "h1",
    "type",
    "serif"
  ],
  "props": [
    {
      "name": "level",
      "type": "1–6",
      "default": "2",
      "description": "Which `<h1>`–`<h6>` to render."
    },
    {
      "name": "size",
      "type": "'display' | 'hero' | 'h1' | 'h2' | 'h3' | 'h4'",
      "description": "The look. Defaults from `level`."
    },
    {
      "name": "as",
      "description": "Override the element."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "One `level={1}` per page; keep levels in order."
      },
      {
        "do": false,
        "text": "Set a font size, weight or colour on it."
      }
    ]
  },
  "sizing": {
    "rules": [
      "Block-level; fluid type (`--fs-*`). Wraps balanced; cap very long titles with a Container or `Center`."
    ]
  },
  "related": [
    "Text",
    "SectionHeader"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Heading level={1} size=\"hero\">Operational platforms.</Heading>"
    }
  ]
};
