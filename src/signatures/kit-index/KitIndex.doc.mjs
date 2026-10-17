/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The front door of the interface kit: every component, found by name or by what it is for. With nothing typed it shows the six families (each with its count and a few of its components);",
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
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"kitIndex\",\n  \"anchor\": \"find\",\n  \"railLabel\": \"Find a component\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"The kit\",\n  \"title\": \"Six families. Search them, or open one.\",\n  \"intro\": \"Type a name, or what you need to do — “sort”, “focus”, “date” — and the matching components appear, each linking to its live example.\",\n  \"note\": \"Sixty-odd components is a lot to hold in your head; the search and the picker at the foot of the page are there so you do not have to.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"kitIndex\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
