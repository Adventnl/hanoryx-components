/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Every term the site uses, in plain language: search, filter by area, jump by letter, copy a link to one term. The same list explains the words that are underlined in the guides.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"glossaryBrowser\",\n  \"anchor\": \"terms\",\n  \"railLabel\": \"The terms\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 900,\n  \"eyebrow\": \"The terms\",\n  \"title\": \"Look a word up.\",\n  \"intro\": \"Search the terms or their meanings, filter by area, jump by letter. Each term has a link of its own, and most point to where the idea is worked through.\",\n  \"note\": \"Definitions are deliberately short. They say what a thing is, not everything about it.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"glossaryBrowser\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
