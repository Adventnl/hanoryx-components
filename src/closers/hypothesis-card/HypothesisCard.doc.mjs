/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A small card for a small experiment. A good hypothesis can be wrong, says what would show it, and says when to stop. Fill the five lines; the page flags the usual weaknesses, and the card can be taken away.",
  "props": [
    {
      "name": "tag",
      "type": "string",
      "description": "Host-supplied tag; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "lede",
      "type": "string",
      "description": "Host-supplied lede; see the complete working data example below."
    },
    {
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"hypothesisCard\",\n  \"anchor\": \"card\",\n  \"scene\": \"blackout-silhouette\",\n  \"tag\": \"End of research systems\",\n  \"minHeight\": 700,\n  \"title\": \"Write the hypothesis down.\",\n  \"lede\": \"A small card for a small experiment. A good hypothesis can be wrong, says what would show it, and says when to stop. Fill the five lines; the page flags the usual weaknesses, and the card can be taken away.\",\n  \"onward\": [\n    {\n      \"label\": \"Visual lab\",\n      \"to\": \"/lab\"\n    },\n    {\n      \"label\": \"Decision records\",\n      \"to\": \"/resources/tools/decision-record\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"hypothesisCard\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
