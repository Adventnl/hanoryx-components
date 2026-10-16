/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A typographic index of the system areas: large rows, a red rule that follows the pointer from row to row, and a floating preview card that trails the cursor (fine pointers only — on touch every row simply shows its own detail).",
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
      "name": "items",
      "type": "Array<{ id: string; code: string; title: string; summary: string; tags: Array<string>; glyph: string; to: string }>",
      "description": "Host-supplied items; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"systemIndex\",\n  \"anchor\": \"areas\",\n  \"railLabel\": \"The seven areas\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"The seven areas\",\n  \"title\": \"Where the work sits.\",\n  \"intro\": \"Move across the rows — a preview follows the cursor. On a touch screen every row shows its own summary.\",\n  \"items\": [\n    {\n      \"id\": \"cat-01\",\n      \"code\": \"SYS.01\",\n      \"title\": \"Operational management platforms\",\n      \"summary\": \"Structured operating layers for scheduling, communication, records, and multi-role coordination.\",\n      \"tags\": [\n        \"Scheduling\",\n        \"Records\",\n        \"Roles\"\n      ],\n      \"glyph\": \"calendar\",\n      \"to\": \"/systems/operational-management\"\n    },\n    {\n      \"id\": \"cat-02\",\n      \"code\": \"SYS.02\",\n      \"title\": \"Commerce infrastructure\",\n      \"summary\": \"Transaction models, catalog logic, and payment workflow design.\",\n      \"tags\": [\n        \"Payments\",\n        \"Catalog\",\n        \"Workflows\"\n      ],\n      \"glyph\": \"cart\",\n      \"to\": \"/systems/commerce-infrastructure\"\n    },\n    {\n      \"id\": \"cat-03\",\n      \"code\": \"SYS.03\",\n      \"title\": \"Automation systems\",\n      \"summary\": \"Orchestration patterns for reducing manual steps and making state predictable.\",\n      \"tags\": [\n        \"Orchestration\",\n        \"Workflows\"\n      ],\n      \"glyph\": \"loop\",\n      \"to\": \"/systems/automation\"\n    },\n    {\n      \"id\": \"cat-04\",\n      \"code\": \"SYS.04\",\n      \"title\": \"Internal dashboards\",\n      \"summary\": \"Control surfaces that help people read operational data and make decisions.\",\n      \"tags\": [\n        \"Data\",\n        \"Control\"\n      ],\n      \"glyph\": \"terminal\",\n      \"to\": \"/systems/internal-platforms\"\n    },\n    {\n      \"id\": \"cat-05\",\n      \"code\": \"SYS.05\",\n      \"title\": \"Data interfaces\",\n      \"summary\": \"Readable, queryable surfaces over complex records and relationships.\",\n      \"tags\": [\n        \"Records\",\n        \"Query\"\n      ],\n      \"glyph\": \"database\",\n      \"to\": \"/systems/data-interfaces\"\n    },\n    {\n      \"id\": \"cat-06\",\n      \"code\": \"SYS.06\",\n      \"title\": \"Client-facing portals\",\n      \"summary\": \"Scoped, role-aware access points between an operation and the people it serves.\",\n      \"tags\": [\n        \"Access\",\n        \"Roles\"\n      ],\n      \"glyph\": \"gate\",\n      \"to\": \"/systems/client-portals\"\n    },\n    {\n      \"id\": \"cat-07\",\n      \"code\": \"SYS.07\",\n      \"title\": \"Research systems\",\n      \"summary\": \"Visible interface, motion, and Canvas studies in this website.\",\n      \"tags\": [\n        \"Research\",\n        \"Lab\"\n      ],\n      \"glyph\": \"lens\",\n      \"to\": \"/systems/research-systems\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"systemIndex\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
