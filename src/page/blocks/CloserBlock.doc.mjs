/* Documentation for CloserBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "CloserBlock",
  "area": "page",
  "family": "blocks",
  "summary": "The last block of a page: a composition that plays the page out.",
  "keywords": [
    "closer",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'closer', … }",
      "required": true,
      "description": "The block's data: kind, tag, title, lede, onward[]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'closer'`), not on its own."
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
