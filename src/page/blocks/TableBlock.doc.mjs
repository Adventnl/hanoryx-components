/* Documentation for TableBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "TableBlock",
  "area": "page",
  "family": "blocks",
  "summary": "Records in rows and columns, sortable if you ask.",
  "keywords": [
    "table",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'table', … }",
      "required": true,
      "description": "The block's data: caption, head[], rows[[]], sortable. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'table'`), not on its own."
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
      "title": "A real table block",
      "code": "{\n  \"type\": \"table\",\n  \"anchor\": \"catalogue\",\n  \"railLabel\": \"The catalogue\",\n  \"scene\": \"architectural-grid\",\n  \"eyebrow\": \"The catalogue\",\n  \"title\": \"20 kinds of block.\",\n  \"intro\": \"Sort by any column. The last column is the data a block takes; everything a reader sees is in it.\",\n  \"caption\": \"Every kind of page block, what it is and the data it takes\",\n  \"head\": [\n    \"Block\",\n    \"What it is\",\n    \"It takes\"\n  ],\n  \"rows\": [\n    [\n      \"split\",\n      \"A heading and prose on one side, a short list of labelled points on the other\",\n      \"eyebrow, title, body[], points[{ k, v }]\"\n    ],\n    [\n      \"cards\",\n      \"A grid, rail or bento of cards, each with a glyph that redraws, linking to a page\",\n      \"items[{ code, title, body, to, tags, status }], variant\"\n    ],\n    [\n      \"process\",\n      \"Numbered steps on a rail that fills as you scroll\",\n      \"steps[{ step, title, body }]\"\n    ],\n    [\n      \"modules\",\n      \"Columns that lens, or a ledger of rows that decode\",\n      \"groups[{ label, items[] }] or rows[{ k, v }]\"\n    ],\n    [\n      \"stats\",\n      \"Large figures, only of things the site can stand behind\",\n      \"items[{ value, suffix, label }]\"\n    ],\n    [\n      \"manifesto\",\n      \"A statement that lights word by word as you scroll, with a marquee\",\n      \"lines[], marquee[]\"\n    ],\n    [\n      \"signature\",\n      \"A composition that belongs to one page, loaded when it is needed\",\n      \"kind, and whatever that composition takes\"\n    ],\n    [\n      \"closer\",\n      \"The last block of a page: a composition that plays the page out\",\n      \"kind, tag, title, lede, onward[]\"\n    ],\n    [\n      \"callout\",\n      \"One remark set apart from the text: a note, a tip, a warning\",\n      \"tone, heading, body[], list[]\"\n    ],\n    [\n      \"table\",\n      \"Records in rows and columns, sortable if you ask\",\n      \"caption, head[], rows[[]], sortable\"\n    ],\n    [\n      \"timeline\",\n      \"Things in the order they happen, down a line\",\n      \"items[{ when, title, body, done }]\"\n    ],\n    [\n      \"faq\",\n      \"Questions and answers, each a disclosure\",\n      \"items[{ q, a[] }], openFirst\"\n    ],\n    [\n      \"compare\",\n      \"Two or three ways of looking at a choice, side by side\",\n      \"columns[{ label, title, tone, items[] }], verdict\"\n    ],\n    [\n      \"snippet\",\n      \"A piece of code or data with a file name and a copy button\",\n      \"code, language, filename, lines, notes[]\"\n    ],\n    [\n      \"tabs\",\n      \"Several short views of one subject, one at a time\",\n      \"tabs[{ id, label, body[], list[] }]\"\n    ],\n    [\n      \"quote\",\n      \"A pull quote with its source\",\n      \"quote, cite, context\"\n    ],\n    [\n      \"checklist\",\n      \"A list to tick through, held in the page only\",\n      \"items[{ label, hint }], done\"\n    ],\n    [\n      \"facts\",\n      \"A fact sheet: labels and their values\",\n      \"items[{ term, detail }], stacked\"\n    ],\n    [\n      \"links\",\n      \"Where to go next: cards that each hold one link\",\n      \"items[{ title, body, to, label }]\"\n    ],\n    [\n      \"numbers\",\n      \"A row of figures with how they moved, and a line if there is a series\",\n      \"items[{ label, value, unit, change, series[] }], note\"\n    ]\n  ],\n  \"sortable\": true,\n  \"note\": \"The first eight were built for this site and each has a motion identity of its own. The last twelve are made from the interface kit, take only data, and are meant to be used again.\"\n}"
    }
  ]
};
