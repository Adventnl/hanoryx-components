/* Documentation for SnippetBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "SnippetBlock",
  "area": "page",
  "family": "blocks",
  "summary": "A piece of code or data with a file name and a copy button.",
  "keywords": [
    "snippet",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'snippet', … }",
      "required": true,
      "description": "The block's data: code, language, filename, lines, notes[]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'snippet'`), not on its own."
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
      "title": "A real snippet block",
      "code": "{\n  \"type\": \"snippet\",\n  \"anchor\": \"snippet\",\n  \"railLabel\": \"Snippet\",\n  \"scene\": \"topographic-lines\",\n  \"eyebrow\": \"Block · snippet\",\n  \"title\": \"A block is a few lines of data.\",\n  \"intro\": \"This is the callout above, as it is written in the page’s data file.\",\n  \"filename\": \"north-blocks.js\",\n  \"language\": \"js\",\n  \"code\": \"{\\n  type: 'callout',\\n  anchor: 'callout',\\n  scene: 'topographic-lines',\\n  eyebrow: 'Block · callout',\\n  title: 'A callout is for one thing.',\\n  tone: 'note',\\n  heading: 'Use it sparingly',\\n  body: ['Use a callout for the single remark a reader must not miss.'],\\n}\",\n  \"notes\": [\n    \"Every key is plain data. There is no markup in it.\",\n    \"Change the text and the page changes. Change the type and the same text is laid out differently.\"\n  ]\n}"
    }
  ]
};
