/* Documentation for SignatureBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "SignatureBlock",
  "area": "page",
  "family": "blocks",
  "summary": "A composition that belongs to one page, loaded when it is needed.",
  "keywords": [
    "signature",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'signature', … }",
      "required": true,
      "description": "The block's data: kind, and whatever that composition takes. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
    },
    {
      "name": "accent",
      "description": "The page accent colour (`#ff3333`)."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "Use it as a block in a page's `blocks[]` (`type: 'signature'`), not on its own."
      },
      {
        "do": false,
        "text": "Nest one block inside another."
      }
    ]
  },
  "sizing": {
    "rules": [
      "Page-width section: `section.section > .container`. Never set a width or padding; the block brings its own."
    ]
  },
  "related": [
    "PageTemplate",
    "PageBlock"
  ],
  "examples": []
};
