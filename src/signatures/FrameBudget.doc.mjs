/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The frame budget, measured rather than described. Choose how many boxes to animate and which property moves them; press Run and the page really animates them for a couple of seconds while counting the frames it manages.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"frameBudget\",\n  \"anchor\": \"try\",\n  \"railLabel\": \"Try it\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"Try it\",\n  \"title\": \"Spend the budget. Count the frames.\",\n  \"intro\": \"Choose how many boxes to move and what moves them, then press Run. The page really animates them for a couple of seconds and counts the frames it manages. The result is a measurement of this device, right now.\",\n  \"note\": \"A small measurement made in your browser, then discarded. It is not a benchmark: the result depends on your screen, your browser, what else is open and how warm the device is.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"frameBudget\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
