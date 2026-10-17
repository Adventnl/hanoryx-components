/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A request walks the gates one at a time and stops at the first that says no. Pick a scenario, send it, and watch where it is turned back — and which question it failed. The gates are the page's own four review areas.",
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
      "name": "gates",
      "type": "Array<{ id: string; label: string; ask: string }>",
      "description": "Host-supplied gates; see the complete working data example below."
    },
    {
      "name": "scenarios",
      "type": "Array<{ id: string; label: string; passes: Array<boolean>; note: string }>",
      "description": "Host-supplied scenarios; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"gateRun\",\n  \"scene\": \"concentric-gate\",\n  \"tag\": \"End of the security approach\",\n  \"minHeight\": 600,\n  \"title\": \"Send a request through the gates.\",\n  \"lede\": \"The four review areas are four questions. Pick a request and watch where, if anywhere, it is turned back.\",\n  \"gates\": [\n    {\n      \"id\": \"identity\",\n      \"label\": \"Identity\",\n      \"ask\": \"Who is making the request?\"\n    },\n    {\n      \"id\": \"scope\",\n      \"label\": \"Scope\",\n      \"ask\": \"What may this identity reach?\"\n    },\n    {\n      \"id\": \"ownership\",\n      \"label\": \"Ownership\",\n      \"ask\": \"Whose record is it?\"\n    },\n    {\n      \"id\": \"change\",\n      \"label\": \"Change\",\n      \"ask\": \"Is the action traceable?\"\n    }\n  ],\n  \"scenarios\": [\n    {\n      \"id\": \"own\",\n      \"label\": \"A customer reads their own order\",\n      \"passes\": [\n        true,\n        true,\n        true,\n        true\n      ],\n      \"note\": \"A signed-in customer asks for an order they placed.\"\n    },\n    {\n      \"id\": \"other\",\n      \"label\": \"A customer reads someone else’s order\",\n      \"passes\": [\n        true,\n        true,\n        false,\n        true\n      ],\n      \"note\": \"A signed-in customer asks for an order number that is not theirs.\",\n      \"why\": \"The record belongs to someone else, so the read is refused at the service, before any data leaves it.\"\n    },\n    {\n      \"id\": \"admin\",\n      \"label\": \"A signed-out visitor opens the admin screen\",\n      \"passes\": [\n        false,\n        true,\n        true,\n        true\n      ],\n      \"note\": \"Nobody has signed in.\",\n      \"why\": \"No identity was presented, so nothing else is even asked.\"\n    },\n    {\n      \"id\": \"export\",\n      \"label\": \"A service account exports every record\",\n      \"passes\": [\n        true,\n        false,\n        true,\n        true\n      ],\n      \"note\": \"A background service asks for everything.\",\n      \"why\": \"Its role covers reading one table, not exporting all of them.\"\n    },\n    {\n      \"id\": \"edit\",\n      \"label\": \"An edit that leaves no trace\",\n      \"passes\": [\n        true,\n        true,\n        true,\n        false\n      ],\n      \"note\": \"A permitted edit, made through a path that records nothing.\",\n      \"why\": \"An action that cannot be traced to an actor and a time is not allowed to complete.\"\n    },\n    {\n      \"id\": \"refund\",\n      \"label\": \"A support agent refunds an order\",\n      \"passes\": [\n        true,\n        true,\n        true,\n        true\n      ],\n      \"note\": \"An agent with the refund role acts on a customer’s order.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Trust centre\",\n      \"to\": \"/trust\"\n    },\n    {\n      \"label\": \"Security disclosure\",\n      \"to\": \"/trust/disclosure\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"gateRun\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
