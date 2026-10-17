/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "An audit trail is judged by the questions it can answer. Choose which fields a log records; the questions people actually ask light up as answerable — or go dark, with the missing field named.",
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
      "name": "fields",
      "type": "Array<{ id: string; label: string; sample: Array<string> }>",
      "description": "Host-supplied fields; see the complete working data example below."
    },
    {
      "name": "questions",
      "type": "Array<{ id: string; text: string; needs: Array<string> }>",
      "description": "Host-supplied questions; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"auditLog\",\n  \"anchor\": \"try\",\n  \"railLabel\": \"Try it\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"Try it\",\n  \"title\": \"Choose what the log records. See what it can answer.\",\n  \"intro\": \"Switch fields on and off. The questions people really ask light up when the log can answer them, and go dark — with the missing field named — when it cannot.\",\n  \"fields\": [\n    {\n      \"id\": \"when\",\n      \"label\": \"When\",\n      \"sample\": [\n        \"09:14:07\",\n        \"09:14:09\",\n        \"11:40:31\"\n      ]\n    },\n    {\n      \"id\": \"what\",\n      \"label\": \"What was done\",\n      \"sample\": [\n        \"order.refund\",\n        \"order.note_add\",\n        \"stock.adjust\"\n      ]\n    },\n    {\n      \"id\": \"target\",\n      \"label\": \"To which record\",\n      \"sample\": [\n        \"order_30211\",\n        \"order_30211\",\n        \"sku_5509\"\n      ]\n    },\n    {\n      \"id\": \"who\",\n      \"label\": \"By whom\",\n      \"sample\": [\n        \"agent_4417\",\n        \"agent_4417\",\n        \"system:nightly-sync\"\n      ]\n    },\n    {\n      \"id\": \"change\",\n      \"label\": \"Before → after\",\n      \"sample\": [\n        \"paid → refunded\",\n        \"— → “item damaged”\",\n        \"14 → 12\"\n      ]\n    },\n    {\n      \"id\": \"why\",\n      \"label\": \"Why\",\n      \"sample\": [\n        \"Ticket 8812: arrived damaged\",\n        \"Customer asked by phone\",\n        \"Cycle-count correction\"\n      ]\n    },\n    {\n      \"id\": \"where\",\n      \"label\": \"From where\",\n      \"sample\": [\n        \"support console\",\n        \"support console\",\n        \"scheduled job\"\n      ]\n    },\n    {\n      \"id\": \"request\",\n      \"label\": \"Request id\",\n      \"sample\": [\n        \"req_9f3a2c\",\n        \"req_9f3a2c\",\n        \"job_0417\"\n      ]\n    },\n    {\n      \"id\": \"outcome\",\n      \"label\": \"Outcome\",\n      \"sample\": [\n        \"success\",\n        \"success\",\n        \"failed: record locked\"\n      ]\n    }\n  ],\n  \"questions\": [\n    {\n      \"id\": \"q1\",\n      \"text\": \"What happened to order 30211?\",\n      \"needs\": [\n        \"when\",\n        \"what\",\n        \"target\"\n      ]\n    },\n    {\n      \"id\": \"q2\",\n      \"text\": \"Who issued this refund?\",\n      \"needs\": [\n        \"who\",\n        \"what\",\n        \"target\"\n      ]\n    },\n    {\n      \"id\": \"q3\",\n      \"text\": \"What was the value before it was changed?\",\n      \"needs\": [\n        \"change\"\n      ]\n    },\n    {\n      \"id\": \"q4\",\n      \"text\": \"Why was it done?\",\n      \"needs\": [\n        \"why\"\n      ]\n    },\n    {\n      \"id\": \"q5\",\n      \"text\": \"Was it a person or an automated job?\",\n      \"needs\": [\n        \"who\",\n        \"where\"\n      ]\n    },\n    {\n      \"id\": \"q6\",\n      \"text\": \"Did the action succeed?\",\n      \"needs\": [\n        \"outcome\"\n      ]\n    },\n    {\n      \"id\": \"q7\",\n      \"text\": \"What else happened in the same request?\",\n      \"needs\": [\n        \"request\"\n      ]\n    },\n    {\n      \"id\": \"q8\",\n      \"text\": \"Can we show the full history of one record, in order?\",\n      \"needs\": [\n        \"when\",\n        \"what\",\n        \"target\",\n        \"who\",\n        \"change\"\n      ]\n    }\n  ],\n  \"note\": \"The nine fields are a common starting set, not a standard. Whatever a particular system must record is decided by what it is for, and by the rules that apply to it.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"auditLog\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
