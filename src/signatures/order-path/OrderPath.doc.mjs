/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "An order as a state machine. Pick a scenario and run it: a token walks the path through the states (it can double back, or stop at a terminal state), each state explains itself, and a small ledger says whether anything settled.",
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
      "name": "nodes",
      "type": "Array<{ id: string; title: string; x: number; y: number; note: string }>",
      "description": "Host-supplied nodes; see the complete working data example below."
    },
    {
      "name": "edges",
      "type": "Array<Array<string>>",
      "description": "Host-supplied edges; see the complete working data example below."
    },
    {
      "name": "scenarios",
      "type": "Array<{ id: string; label: string; summary: string; path: Array<string>; ledger: string }>",
      "description": "Host-supplied scenarios; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"orderPath\",\n  \"anchor\": \"path\",\n  \"railLabel\": \"Order path\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"Order path\",\n  \"title\": \"How an order moves.\",\n  \"intro\": \"A small state machine. Pick a scenario and run it: the token walks the path, and the ledger says whether anything settled.\",\n  \"nodes\": [\n    {\n      \"id\": \"intake\",\n      \"title\": \"Intake\",\n      \"x\": 10,\n      \"y\": 30,\n      \"note\": \"The order arrives with its cart, customer context and a price snapshot fixed at the moment of submission.\"\n    },\n    {\n      \"id\": \"validate\",\n      \"title\": \"Validate\",\n      \"x\": 30,\n      \"y\": 30,\n      \"note\": \"Stock, pricing rules and payment authorisation are checked before the order may go further.\"\n    },\n    {\n      \"id\": \"fulfil\",\n      \"title\": \"Fulfil\",\n      \"x\": 50,\n      \"y\": 30,\n      \"note\": \"Stock is committed and fulfilment advances; downstream systems hear about it through controlled events.\"\n    },\n    {\n      \"id\": \"settle\",\n      \"title\": \"Settle\",\n      \"x\": 70,\n      \"y\": 30,\n      \"note\": \"Payment calculations resolve and the transaction is written to the ledger.\"\n    },\n    {\n      \"id\": \"closed\",\n      \"title\": \"Closed\",\n      \"x\": 90,\n      \"y\": 30,\n      \"terminal\": true,\n      \"note\": \"The order closes against a reconciled record.\"\n    },\n    {\n      \"id\": \"held\",\n      \"title\": \"Held\",\n      \"x\": 42,\n      \"y\": 74,\n      \"terminal\": true,\n      \"note\": \"An item is not available. The order waits in a known state instead of failing silently, and returns to validation when stock does.\"\n    },\n    {\n      \"id\": \"declined\",\n      \"title\": \"Declined\",\n      \"x\": 18,\n      \"y\": 74,\n      \"terminal\": true,\n      \"note\": \"Payment was not authorised. The order stops here, in the open, and nothing is settled.\"\n    }\n  ],\n  \"edges\": [\n    [\n      \"intake\",\n      \"validate\"\n    ],\n    [\n      \"validate\",\n      \"fulfil\"\n    ],\n    [\n      \"fulfil\",\n      \"settle\"\n    ],\n    [\n      \"settle\",\n      \"closed\"\n    ],\n    [\n      \"validate\",\n      \"held\"\n    ],\n    [\n      \"validate\",\n      \"declined\"\n    ]\n  ],\n  \"scenarios\": [\n    {\n      \"id\": \"happy\",\n      \"label\": \"Everything goes through\",\n      \"summary\": \"The straight path: validate, fulfil, settle, close.\",\n      \"path\": [\n        \"intake\",\n        \"validate\",\n        \"fulfil\",\n        \"settle\",\n        \"closed\"\n      ],\n      \"ledger\": \"+1 reconciled order\"\n    },\n    {\n      \"id\": \"stock\",\n      \"label\": \"An item is out of stock\",\n      \"summary\": \"The order waits in a known state, then carries on when stock returns.\",\n      \"path\": [\n        \"intake\",\n        \"validate\",\n        \"held\",\n        \"validate\",\n        \"fulfil\",\n        \"settle\",\n        \"closed\"\n      ],\n      \"ledger\": \"+1 reconciled order\"\n    },\n    {\n      \"id\": \"declined\",\n      \"label\": \"Payment is declined\",\n      \"summary\": \"The order stops cleanly. Nothing is fulfilled and nothing is settled.\",\n      \"path\": [\n        \"intake\",\n        \"validate\",\n        \"declined\"\n      ],\n      \"ledger\": \"No entry — nothing settled\"\n    }\n  ],\n  \"note\": \"An illustrative state model for a workflow design. It does not describe a live system.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"orderPath\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
