/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "TensionDials is an extracted page composition.",
  "props": [
    {
      "name": "dials",
      "type": "Array<{ id: string; left: string; right: string; start: number; states: { low: string; mid: string; high: string } }>",
      "description": "Host-supplied dials; see the complete working data example below."
    },
    {
      "name": "caption",
      "type": "string",
      "description": "Host-supplied caption; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through hero.aside",
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"compass-vector\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Company / Principles\",\n  \"title\": \"Six rules the work is held to.\",\n  \"intro\": \"Short enough to remember and strict enough to say no. Each one settles a tension that keeps coming back — and each comes with what it changes in practice.\",\n  \"code\": \"CMP.01\",\n  \"status\": \"DOCTRINE\",\n  \"actions\": [\n    {\n      \"label\": \"Security approach\",\n      \"to\": \"/company/security\"\n    },\n    {\n      \"label\": \"Selected work\",\n      \"to\": \"/work\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"tensionDials\",\n    \"dials\": [\n      {\n        \"id\": \"depth\",\n        \"left\": \"Depth\",\n        \"right\": \"Clarity\",\n        \"start\": 18,\n        \"states\": {\n          \"low\": \"All depth, no surface. Powerful, and hard to read.\",\n          \"mid\": \"Depth held underneath, clarity on top.\",\n          \"high\": \"All surface, no depth. Easy to read, and shallow.\"\n        }\n      },\n      {\n        \"id\": \"speed\",\n        \"left\": \"Speed\",\n        \"right\": \"Durability\",\n        \"start\": 82,\n        \"states\": {\n          \"low\": \"Fast to ship, and has to be done twice.\",\n          \"mid\": \"Quick iteration on foundations that last.\",\n          \"high\": \"Built to last, but too slow to learn from.\"\n        }\n      },\n      {\n        \"id\": \"scope\",\n        \"left\": \"Scoped\",\n        \"right\": \"Open\",\n        \"start\": 30,\n        \"states\": {\n          \"low\": \"Everything scoped. Safe, and nobody can do their work.\",\n          \"mid\": \"Each role sees what concerns it.\",\n          \"high\": \"Everything open. Convenient, and everyone sees everything.\"\n        }\n      }\n    ],\n    \"caption\": \"Each principle below settles one of these tensions. Nothing here is measured or stored.\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"tensionDials\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
