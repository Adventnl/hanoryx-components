/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "SystemMap is an extracted page composition.",
  "props": [
    {
      "name": "nodes",
      "type": "Array<{ id: string; code: string; title: string; summary: string; tags: Array<string>; glyph: string; to: string; short: string }>",
      "description": "Host-supplied nodes; see the complete working data example below."
    },
    {
      "name": "links",
      "type": "Array<Array<string>>",
      "description": "Host-supplied links; see the complete working data example below."
    },
    {
      "name": "core",
      "type": "{ title: string; line: string }",
      "description": "Host-supplied core; see the complete working data example below."
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
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"hex-lattice\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Systems / Overview\",\n  \"title\": \"Seven areas where we build.\",\n  \"intro\": \"Management layers, commerce infrastructure, automation, dashboards, data interfaces, client-facing portals and research — described as design areas, not as a count of deployed products.\",\n  \"code\": \"SYS.00\",\n  \"status\": \"DESIGN AREAS\",\n  \"actions\": [\n    {\n      \"label\": \"Selected work\",\n      \"to\": \"/work\"\n    },\n    {\n      \"label\": \"Development team\",\n      \"to\": \"/north\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"systemMap\",\n    \"nodes\": [\n      {\n        \"id\": \"cat-01\",\n        \"code\": \"SYS.01\",\n        \"title\": \"Operational management platforms\",\n        \"summary\": \"Structured operating layers for scheduling, communication, records, and multi-role coordination.\",\n        \"tags\": [\n          \"Scheduling\",\n          \"Records\",\n          \"Roles\"\n        ],\n        \"glyph\": \"calendar\",\n        \"to\": \"/systems/operational-management\",\n        \"short\": \"Ops\"\n      },\n      {\n        \"id\": \"cat-02\",\n        \"code\": \"SYS.02\",\n        \"title\": \"Commerce infrastructure\",\n        \"summary\": \"Transaction models, catalog logic, and payment workflow design.\",\n        \"tags\": [\n          \"Payments\",\n          \"Catalog\",\n          \"Workflows\"\n        ],\n        \"glyph\": \"cart\",\n        \"to\": \"/systems/commerce-infrastructure\",\n        \"short\": \"Orders\"\n      },\n      {\n        \"id\": \"cat-03\",\n        \"code\": \"SYS.03\",\n        \"title\": \"Automation systems\",\n        \"summary\": \"Orchestration patterns for reducing manual steps and making state predictable.\",\n        \"tags\": [\n          \"Orchestration\",\n          \"Workflows\"\n        ],\n        \"glyph\": \"loop\",\n        \"to\": \"/systems/automation\",\n        \"short\": \"Auto\"\n      },\n      {\n        \"id\": \"cat-04\",\n        \"code\": \"SYS.04\",\n        \"title\": \"Internal dashboards\",\n        \"summary\": \"Control surfaces that help people read operational data and make decisions.\",\n        \"tags\": [\n          \"Data\",\n          \"Control\"\n        ],\n        \"glyph\": \"terminal\",\n        \"to\": \"/systems/internal-platforms\",\n        \"short\": \"Console\"\n      },\n      {\n        \"id\": \"cat-05\",\n        \"code\": \"SYS.05\",\n        \"title\": \"Data interfaces\",\n        \"summary\": \"Readable, queryable surfaces over complex records and relationships.\",\n        \"tags\": [\n          \"Records\",\n          \"Query\"\n        ],\n        \"glyph\": \"database\",\n        \"to\": \"/systems/data-interfaces\",\n        \"short\": \"Data\"\n      },\n      {\n        \"id\": \"cat-06\",\n        \"code\": \"SYS.06\",\n        \"title\": \"Client-facing portals\",\n        \"summary\": \"Scoped, role-aware access points between an operation and the people it serves.\",\n        \"tags\": [\n          \"Access\",\n          \"Roles\"\n        ],\n        \"glyph\": \"gate\",\n        \"to\": \"/systems/client-portals\",\n        \"short\": \"Portals\"\n      },\n      {\n        \"id\": \"cat-07\",\n        \"code\": \"SYS.07\",\n        \"title\": \"Research systems\",\n        \"summary\": \"Visible interface, motion, and Canvas studies in this website.\",\n        \"tags\": [\n          \"Research\",\n          \"Lab\"\n        ],\n        \"glyph\": \"lens\",\n        \"to\": \"/systems/research-systems\",\n        \"short\": \"Lab\"\n      }\n    ],\n    \"links\": [\n      [\n        \"cat-01\",\n        \"cat-06\"\n      ],\n      [\n        \"cat-01\",\n        \"cat-03\"\n      ],\n      [\n        \"cat-01\",\n        \"cat-02\"\n      ],\n      [\n        \"cat-01\",\n        \"cat-04\"\n      ],\n      [\n        \"cat-04\",\n        \"cat-05\"\n      ],\n      [\n        \"cat-03\",\n        \"cat-05\"\n      ],\n      [\n        \"cat-02\",\n        \"cat-05\"\n      ],\n      [\n        \"cat-06\",\n        \"cat-05\"\n      ],\n      [\n        \"cat-07\",\n        \"cat-04\"\n      ]\n    ],\n    \"core\": {\n      \"title\": \"Shared core\",\n      \"line\": \"Records · Roles\"\n    },\n    \"caption\": \"Which areas lean on which — a design model, not a diagram of deployed software.\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"systemMap\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
