/* Documentation for CalloutBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "CalloutBlock",
  "area": "page",
  "family": "blocks",
  "summary": "One remark set apart from the text: a note, a tip, a warning.",
  "keywords": [
    "callout",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'callout', … }",
      "required": true,
      "description": "The block's data: tone, heading, body[], list[]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'callout'`), not on its own."
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
  "examples": [
    {
      "title": "A real callout block",
      "code": "{\n  \"type\": \"callout\",\n  \"anchor\": \"callout\",\n  \"railLabel\": \"Callout\",\n  \"scene\": \"topographic-lines\",\n  \"eyebrow\": \"Block · callout\",\n  \"title\": \"A callout is for one thing.\",\n  \"tone\": \"note\",\n  \"heading\": \"Use it sparingly\",\n  \"body\": [\n    \"Use a callout for the single remark a reader must not miss: an honest limit, an open question, a warning. If every paragraph is a callout, none of them is read.\",\n    \"The kind of remark is written out as a word as well as shown by colour and icon, so it never depends on colour alone.\"\n  ]\n}"
    }
  ]
};
