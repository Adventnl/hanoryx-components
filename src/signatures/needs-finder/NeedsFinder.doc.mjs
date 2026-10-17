/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "\"What are you trying to do?\" — pick a need and the matching system area is lit in the strip below and explained in the panel, with a link. A small playful route through the section, built as a real radio group (↑ ↓ ← → move and choose;",
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
      "name": "needs",
      "type": "Array<{ id: string; label: string; area: string; why: string }>",
      "description": "Host-supplied needs; see the complete working data example below."
    },
    {
      "name": "areas",
      "type": "Array<{ id: string; code: string; title: string; summary: string; tags: Array<string>; glyph: string; to: string }>",
      "description": "Host-supplied areas; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"needsFinder\",\n  \"anchor\": \"start\",\n  \"railLabel\": \"Where to start\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 560,\n  \"eyebrow\": \"Where to start\",\n  \"title\": \"What are you trying to do?\",\n  \"intro\": \"Pick the closest description and the matching area lights up.\",\n  \"needs\": [\n    {\n      \"id\": \"coordinate\",\n      \"label\": \"Coordinate people, time and information\",\n      \"area\": \"cat-01\",\n      \"why\": \"An operating layer brings scheduling, communication and records into one shared picture, with access scoped to each role.\"\n    },\n    {\n      \"id\": \"orders\",\n      \"label\": \"Take orders and payments\",\n      \"area\": \"cat-02\",\n      \"why\": \"Commerce infrastructure treats the catalog, orders and payments as one connected model, so a checkout is the visible edge of a settlement path.\"\n    },\n    {\n      \"id\": \"repeat\",\n      \"label\": \"Remove repeated manual steps\",\n      \"area\": \"cat-03\",\n      \"why\": \"Automation turns a repeated sequence into an explicit rule: a trigger, a guard, an action and a record of the run.\"\n    },\n    {\n      \"id\": \"see\",\n      \"label\": \"See what is happening across an operation\",\n      \"area\": \"cat-04\",\n      \"why\": \"An internal platform joins dashboards, controls and exceptions, so an operator can read the state and act on it.\"\n    },\n    {\n      \"id\": \"records\",\n      \"label\": \"Make complex records easy to read\",\n      \"area\": \"cat-05\",\n      \"why\": \"Data interfaces give complicated records readable, queryable surfaces, each with a named source, an owner and an access rule.\"\n    },\n    {\n      \"id\": \"access\",\n      \"label\": \"Give customers or partners controlled access\",\n      \"area\": \"cat-06\",\n      \"why\": \"A client-facing portal shows each visitor a narrow, role-aware view without exposing the operation behind it.\"\n    },\n    {\n      \"id\": \"explore\",\n      \"label\": \"Explore an interface or motion idea\",\n      \"area\": \"cat-07\",\n      \"why\": \"Research systems are working studies on this very site — canvas, motion and performance — open to inspect.\"\n    }\n  ],\n  \"areas\": [\n    {\n      \"id\": \"cat-01\",\n      \"code\": \"SYS.01\",\n      \"title\": \"Operational management platforms\",\n      \"summary\": \"Structured operating layers for scheduling, communication, records, and multi-role coordination.\",\n      \"tags\": [\n        \"Scheduling\",\n        \"Records\",\n        \"Roles\"\n      ],\n      \"glyph\": \"calendar\",\n      \"to\": \"/systems/operational-management\"\n    },\n    {\n      \"id\": \"cat-02\",\n      \"code\": \"SYS.02\",\n      \"title\": \"Commerce infrastructure\",\n      \"summary\": \"Transaction models, catalog logic, and payment workflow design.\",\n      \"tags\": [\n        \"Payments\",\n        \"Catalog\",\n        \"Workflows\"\n      ],\n      \"glyph\": \"cart\",\n      \"to\": \"/systems/commerce-infrastructure\"\n    },\n    {\n      \"id\": \"cat-03\",\n      \"code\": \"SYS.03\",\n      \"title\": \"Automation systems\",\n      \"summary\": \"Orchestration patterns for reducing manual steps and making state predictable.\",\n      \"tags\": [\n        \"Orchestration\",\n        \"Workflows\"\n      ],\n      \"glyph\": \"loop\",\n      \"to\": \"/systems/automation\"\n    },\n    {\n      \"id\": \"cat-04\",\n      \"code\": \"SYS.04\",\n      \"title\": \"Internal dashboards\",\n      \"summary\": \"Control surfaces that help people read operational data and make decisions.\",\n      \"tags\": [\n        \"Data\",\n        \"Control\"\n      ],\n      \"glyph\": \"terminal\",\n      \"to\": \"/systems/internal-platforms\"\n    },\n    {\n      \"id\": \"cat-05\",\n      \"code\": \"SYS.05\",\n      \"title\": \"Data interfaces\",\n      \"summary\": \"Readable, queryable surfaces over complex records and relationships.\",\n      \"tags\": [\n        \"Records\",\n        \"Query\"\n      ],\n      \"glyph\": \"database\",\n      \"to\": \"/systems/data-interfaces\"\n    },\n    {\n      \"id\": \"cat-06\",\n      \"code\": \"SYS.06\",\n      \"title\": \"Client-facing portals\",\n      \"summary\": \"Scoped, role-aware access points between an operation and the people it serves.\",\n      \"tags\": [\n        \"Access\",\n        \"Roles\"\n      ],\n      \"glyph\": \"gate\",\n      \"to\": \"/systems/client-portals\"\n    },\n    {\n      \"id\": \"cat-07\",\n      \"code\": \"SYS.07\",\n      \"title\": \"Research systems\",\n      \"summary\": \"Visible interface, motion, and Canvas studies in this website.\",\n      \"tags\": [\n        \"Research\",\n        \"Lab\"\n      ],\n      \"glyph\": \"lens\",\n      \"to\": \"/systems/research-systems\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"needsFinder\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
