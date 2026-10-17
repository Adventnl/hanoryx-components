/* Documentation for ProcessBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ProcessBlock",
  "area": "page",
  "family": "blocks",
  "summary": "Numbered steps on a rail that fills as you scroll.",
  "keywords": [
    "process",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'process', … }",
      "required": true,
      "description": "The block's data: steps[{ step, title, body }]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'process'`), not on its own."
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
      "title": "A real process block",
      "code": "{\n  \"type\": \"process\",\n  \"anchor\": \"concerns\",\n  \"railLabel\": \"Four concerns\",\n  \"scene\": \"dependency-graph\",\n  \"eyebrow\": \"What the design has to answer\",\n  \"title\": \"Four concerns of a very large set.\",\n  \"intro\": \"Design concerns, stated as questions. They are not measured results.\",\n  \"steps\": [\n    {\n      \"step\": \"01\",\n      \"title\": \"Find\",\n      \"body\": \"How does a person reach one record among millions?\"\n    },\n    {\n      \"step\": \"02\",\n      \"title\": \"Orient\",\n      \"body\": \"How do they stay oriented while moving through the set?\"\n    },\n    {\n      \"step\": \"03\",\n      \"title\": \"Act\",\n      \"body\": \"How do they act on many records without losing the thread?\"\n    },\n    {\n      \"step\": \"04\",\n      \"title\": \"Trust\",\n      \"body\": \"How does the interface show what is current and what is not?\"\n    }\n  ]\n}"
    }
  ]
};
