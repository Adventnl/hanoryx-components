/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The guides, as a library: filter by area, search, sort by length, and see at a glance which ones have something to play with. Titles, summaries and reading times are read from the guides themselves.",
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
      "name": "articles",
      "type": "Array<{ key: string; area: string; art: string }>",
      "description": "Host-supplied articles; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"insightLibrary\",\n  \"anchor\": \"library\",\n  \"railLabel\": \"The guides\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"The library\",\n  \"title\": \"Pick a problem.\",\n  \"intro\": \"Filter by area, search the titles, or order by how long each takes to read. A mark shows which guides have an interactive piece to try first.\",\n  \"articles\": [\n    {\n      \"key\": \"insights/idempotency\",\n      \"area\": \"Reliability\",\n      \"art\": \"retry\"\n    },\n    {\n      \"key\": \"insights/triggers\",\n      \"area\": \"Reliability\",\n      \"art\": \"lanes\"\n    },\n    {\n      \"key\": \"insights/runbooks\",\n      \"area\": \"Operations\",\n      \"art\": \"runbook\"\n    },\n    {\n      \"key\": \"insights/handover\",\n      \"area\": \"Operations\",\n      \"art\": \"handover\"\n    },\n    {\n      \"key\": \"insights/audit-trails\",\n      \"area\": \"Security\",\n      \"art\": \"trail\"\n    },\n    {\n      \"key\": \"insights/permissions\",\n      \"area\": \"Security\",\n      \"art\": \"matrix\"\n    },\n    {\n      \"key\": \"insights/api-contracts\",\n      \"area\": \"Interfaces\",\n      \"art\": \"contract\"\n    },\n    {\n      \"key\": \"insights/animation-budgets\",\n      \"area\": \"Interfaces\",\n      \"art\": \"budget\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"insightLibrary\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
