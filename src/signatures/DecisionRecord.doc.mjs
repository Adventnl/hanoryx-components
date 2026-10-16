/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A decision record builder. Fill in what was decided and why; the Markdown appears beside it, ready to commit next to the code. It starts with an invented example so you can see the shape — clear it and write your own.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"decisionRecord\",\n  \"anchor\": \"tool\",\n  \"railLabel\": \"The builder\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 900,\n  \"eyebrow\": \"The builder\",\n  \"title\": \"Fill in the form. Read the record.\",\n  \"intro\": \"It starts with an invented example so you can see the shape. Clear it and write your own. The Markdown on the right updates as you type.\",\n  \"note\": \"The example is made up for illustration. Nothing you write is stored or sent; download it or copy it before you leave the page.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"decisionRecord\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
