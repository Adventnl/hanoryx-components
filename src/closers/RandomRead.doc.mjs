/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Can't choose? A reel of the guide titles spins and lands on one. It is a dice with manners: it never lands on the same one twice in a row.",
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
      "name": "keys",
      "type": "Array<string>",
      "description": "Host-supplied keys; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"randomRead\",\n  \"anchor\": \"spin\",\n  \"scene\": \"network-constellation\",\n  \"tag\": \"End of insights\",\n  \"minHeight\": 520,\n  \"title\": \"Can’t choose? Spin for one.\",\n  \"lede\": \"A reel of the guide titles turns and lands on one. It never lands on the same one twice in a row.\",\n  \"keys\": [\n    \"insights/idempotency\",\n    \"insights/audit-trails\",\n    \"insights/permissions\",\n    \"insights/runbooks\",\n    \"insights/triggers\",\n    \"insights/api-contracts\",\n    \"insights/handover\",\n    \"insights/animation-budgets\"\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Glossary\",\n      \"to\": \"/resources/glossary\"\n    },\n    {\n      \"label\": \"Tools\",\n      \"to\": \"/resources/tools\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"randomRead\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
