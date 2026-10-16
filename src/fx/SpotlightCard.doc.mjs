/* Documentation for SpotlightCard. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "SpotlightCard",
  "area": "fx",
  "summary": "A card whose 1 px border and surface are lit by the pointer: a radial light travels the border while a faint glow pools under the cursor. Becomes a link with `to` or `href`.",
  "props": [
    {
      "name": "tone",
      "description": "`red` (default) or `white`."
    },
    {
      "name": "to"
    },
    {
      "name": "href"
    },
    {
      "name": "innerClassName",
      "description": "Class for the padded inner element."
    }
  ],
  "sizing": {
    "rules": [
      "Fills its cell; the padding is yours (`innerClassName`, or a child with `padding: var(--space-5)`). Put cards in `Grid min=\"16rem\"`."
    ]
  },
  "related": [
    "Card",
    "DataPanel"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<SpotlightCard><div style={{ padding: \"var(--space-5)\" }}>…</div></SpotlightCard>"
    }
  ]
};
