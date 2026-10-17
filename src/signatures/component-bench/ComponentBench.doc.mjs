/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A bench for the site's own small components. Pick a specimen, change its props, and see the real component respond — then hover it, tab to it, press it.",
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
      "name": "specimens",
      "type": "Array<{ id: string; label: string; purpose: string }>",
      "description": "Host-supplied specimens; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"componentBench\",\n  \"anchor\": \"bench\",\n  \"railLabel\": \"The bench\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 620,\n  \"eyebrow\": \"The bench\",\n  \"title\": \"Change a prop. See the part respond.\",\n  \"intro\": \"These are the site’s real components. Pick one, change what it can do, then hover it, tab to it and press it.\",\n  \"specimens\": [\n    {\n      \"id\": \"button\",\n      \"label\": \"Button\",\n      \"purpose\": \"The site’s primary control. It can be a link, an anchor or a button, and it pulls a little toward the pointer.\"\n    },\n    {\n      \"id\": \"pill\",\n      \"label\": \"Pill\",\n      \"purpose\": \"A small mono tag for status and metadata, with an optional live dot.\"\n    },\n    {\n      \"id\": \"key\",\n      \"label\": \"Keycap\",\n      \"purpose\": \"A visible key, used wherever a shortcut is mentioned.\"\n    },\n    {\n      \"id\": \"switch\",\n      \"label\": \"Switch\",\n      \"purpose\": \"An on/off control with a visible state and a real focus ring.\"\n    }\n  ],\n  \"note\": \"The generated line is a sketch of the call, not a spec.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"componentBench\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
