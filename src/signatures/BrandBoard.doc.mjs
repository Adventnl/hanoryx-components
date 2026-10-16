/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The brand as the site actually uses it, in five panels: the mark and the room it needs, the colours (click to copy;",
  "props": [
    {
      "name": "eyebrow",
      "type": "string",
      "description": "Host-supplied eyebrow; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "intro",
      "type": "string",
      "description": "Host-supplied intro; see the complete working data example below."
    },
    {
      "name": "mark",
      "type": "{ rule: string; sizes: Array<{ px: number; where: string }> }",
      "description": "Host-supplied mark; see the complete working data example below."
    },
    {
      "name": "colours",
      "type": "Array<{ name: string; hex: string; token: string; use: string }>",
      "description": "Host-supplied colours; see the complete working data example below."
    },
    {
      "name": "faces",
      "type": "Array<{ name: string; role: string; stack: string; weight: number; sample: string; weights: string; use: string }>",
      "description": "Host-supplied faces; see the complete working data example below."
    },
    {
      "name": "curves",
      "type": "Array<{ name: string; token: string; bezier: Array<number>; use: string }>",
      "description": "Host-supplied curves; see the complete working data example below."
    },
    {
      "name": "voice",
      "type": "Array<{ say: string; not: string; why: string }>",
      "description": "Host-supplied voice; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"brandBoard\",\n  \"anchor\": \"board\",\n  \"railLabel\": \"The board\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 820,\n  \"eyebrow\": \"The board\",\n  \"title\": \"Five parts of one identity.\",\n  \"intro\": \"Click a colour to copy it. Slide the clear space. Press play on a curve. Every number on the board is calculated from the site’s own design tokens.\",\n  \"mark\": {\n    \"rule\": \"Keep the mark square and unaltered, on a near-black ground, with clear space around it of at least a quarter of its width. Do not recolour it, outline it, shade it, stretch it or crowd it.\",\n    \"sizes\": [\n      {\n        \"px\": 30,\n        \"where\": \"Navigation bar\"\n      },\n      {\n        \"px\": 34,\n        \"where\": \"Footer\"\n      },\n      {\n        \"px\": 48,\n        \"where\": \"Large icon\"\n      },\n      {\n        \"px\": 96,\n        \"where\": \"Press kit\"\n      }\n    ]\n  },\n  \"colours\": [\n    {\n      \"name\": \"Void\",\n      \"hex\": \"#020203\",\n      \"token\": \"--c-void\",\n      \"use\": \"The deepest background, under everything.\"\n    },\n    {\n      \"name\": \"Black\",\n      \"hex\": \"#050505\",\n      \"token\": \"--c-black\",\n      \"use\": \"The primary page background.\"\n    },\n    {\n      \"name\": \"Black 2\",\n      \"hex\": \"#08090b\",\n      \"token\": \"--c-black-2\",\n      \"use\": \"Raised surfaces: the search panel, the footer.\"\n    },\n    {\n      \"name\": \"Panel\",\n      \"hex\": \"#0a0b0d\",\n      \"token\": \"--c-panel\",\n      \"use\": \"The fill behind cards and panels.\"\n    },\n    {\n      \"name\": \"White\",\n      \"hex\": \"#ffffff\",\n      \"token\": \"--c-white\",\n      \"use\": \"Headings and key text.\"\n    },\n    {\n      \"name\": \"White 65\",\n      \"hex\": \"#ffffff\",\n      \"alpha\": 0.65,\n      \"token\": \"--c-white-65\",\n      \"use\": \"Body text.\"\n    },\n    {\n      \"name\": \"White 50\",\n      \"hex\": \"#ffffff\",\n      \"alpha\": 0.5,\n      \"token\": \"--c-white-50\",\n      \"use\": \"Secondary text and labels.\"\n    },\n    {\n      \"name\": \"Red\",\n      \"hex\": \"#ff3333\",\n      \"token\": \"--c-red\",\n      \"use\": \"The single accent. Used sparingly, at the threshold of attention.\"\n    },\n    {\n      \"name\": \"Red bright\",\n      \"hex\": \"#ff4d4d\",\n      \"token\": \"--c-red-bright\",\n      \"use\": \"The accent on hover and on small text.\"\n    }\n  ],\n  \"faces\": [\n    {\n      \"name\": \"Cormorant Garamond\",\n      \"role\": \"Display and headings\",\n      \"stack\": \"'Cormorant Garamond', 'Times New Roman', serif\",\n      \"weight\": 300,\n      \"sample\": \"Online systems, built with care.\",\n      \"weights\": \"300 · 400 · 500 · 600\",\n      \"use\": \"Headlines and large numerals, set light and a little tight.\"\n    },\n    {\n      \"name\": \"Inter\",\n      \"role\": \"Body\",\n      \"stack\": \"'Inter', system-ui, sans-serif\",\n      \"weight\": 300,\n      \"sample\": \"A surface should resolve intent in a single read.\",\n      \"weights\": \"300 · 400 · 500 · 600\",\n      \"use\": \"Running text, set light, at a generous line height.\"\n    },\n    {\n      \"name\": \"JetBrains Mono\",\n      \"role\": \"Labels and telemetry\",\n      \"stack\": \"'JetBrains Mono', ui-monospace, monospace\",\n      \"weight\": 400,\n      \"tracking\": \"0.2em\",\n      \"upper\": true,\n      \"sample\": \"System status // live\",\n      \"weights\": \"300 · 400 · 500\",\n      \"use\": \"Small uppercase labels, codes and counters, widely spaced.\"\n    }\n  ],\n  \"curves\": [\n    {\n      \"name\": \"Out\",\n      \"token\": \"--ease-out\",\n      \"bezier\": [\n        0.16,\n        1,\n        0.3,\n        1\n      ],\n      \"use\": \"The signature deceleration: entrances, reveals and hovers.\"\n    },\n    {\n      \"name\": \"Glide\",\n      \"token\": \"--ease-glide\",\n      \"bezier\": [\n        0.22,\n        1,\n        0.36,\n        1\n      ],\n      \"use\": \"Soft state changes that carry something from one position to another.\"\n    },\n    {\n      \"name\": \"In-out\",\n      \"token\": \"--ease-in-out\",\n      \"bezier\": [\n        0.65,\n        0,\n        0.35,\n        1\n      ],\n      \"use\": \"Moves that begin and end at rest.\"\n    },\n    {\n      \"name\": \"Linear\",\n      \"token\": \"--ease-linear\",\n      \"bezier\": [\n        0,\n        0,\n        1,\n        1\n      ],\n      \"use\": \"Only for continuous loops, such as a marquee.\"\n    }\n  ],\n  \"voice\": [\n    {\n      \"say\": \"Online systems, built with care.\",\n      \"not\": \"Cutting-edge, game-changing solutions.\",\n      \"why\": \"Say what it is. Leave out the superlatives.\"\n    },\n    {\n      \"say\": \"Descriptions are not promises.\",\n      \"not\": \"Guaranteed results.\",\n      \"why\": \"Never state an outcome the company cannot back up.\"\n    },\n    {\n      \"say\": \"This diagram is an illustration.\",\n      \"not\": \"Our platform in action.\",\n      \"why\": \"Mark an invention as an invention.\"\n    },\n    {\n      \"say\": \"No roles are listed right now.\",\n      \"not\": \"We are always hiring!\",\n      \"why\": \"Say what is true today.\"\n    },\n    {\n      \"say\": \"Use the contact page and say which part you mean.\",\n      \"not\": \"Don’t hesitate to reach out!\",\n      \"why\": \"A plain instruction, with no exclamation marks.\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"brandBoard\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
