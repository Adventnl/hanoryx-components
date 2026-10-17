/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "\"The life of a request.\" Choose a kind of request and send it: a token glides through four stages, the request card fills in field by field and an append-only record writes a line at each stage.",
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
      "name": "stages",
      "type": "Array<{ id: string; title: string; body: string; glyph: string; field: { k: string; v: string } }>",
      "description": "Host-supplied stages; see the complete working data example below."
    },
    {
      "name": "kinds",
      "type": "Array<{ id: string; label: string; lines: Array<string> }>",
      "description": "Host-supplied kinds; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"opsFlow\",\n  \"anchor\": \"flow\",\n  \"railLabel\": \"Life of a request\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"Life of a request\",\n  \"title\": \"How an operation moves.\",\n  \"intro\": \"Choose a kind of request and send it. Watch the stages light, the request fill in and the record write itself.\",\n  \"stages\": [\n    {\n      \"id\": \"intake\",\n      \"title\": \"Intake\",\n      \"body\": \"The request arrives with its role, context and intent attached.\",\n      \"glyph\": \"node\",\n      \"field\": {\n        \"k\": \"ROLE\",\n        \"v\": \"Attached\"\n      }\n    },\n    {\n      \"id\": \"schedule\",\n      \"title\": \"Schedule\",\n      \"body\": \"Time, resource and dependency constraints are resolved.\",\n      \"glyph\": \"calendar\",\n      \"field\": {\n        \"k\": \"TIME\",\n        \"v\": \"Resolved\"\n      }\n    },\n    {\n      \"id\": \"coordinate\",\n      \"title\": \"Coordinate\",\n      \"body\": \"Everyone affected sees the current state in their own view.\",\n      \"glyph\": \"people\",\n      \"field\": {\n        \"k\": \"SHARED\",\n        \"v\": \"Everyone affected\"\n      }\n    },\n    {\n      \"id\": \"record\",\n      \"title\": \"Record\",\n      \"body\": \"The action is written to the structured record for later control.\",\n      \"glyph\": \"database\",\n      \"field\": {\n        \"k\": \"RECORD\",\n        \"v\": \"Written\"\n      }\n    }\n  ],\n  \"kinds\": [\n    {\n      \"id\": \"time\",\n      \"label\": \"Change a time\",\n      \"lines\": [\n        \"Request received — who is asking, and why, is attached.\",\n        \"Availability checked; the clash is found and a new slot is resolved.\",\n        \"Each person affected is told, in the view that suits their role.\",\n        \"The change is written to the record, with who and when.\"\n      ]\n    },\n    {\n      \"id\": \"question\",\n      \"label\": \"Ask a question\",\n      \"lines\": [\n        \"Question received — it is tied to the thing it is about.\",\n        \"The right person is found from the schedule and the roles.\",\n        \"The answer lives next to the question, visible to those it concerns.\",\n        \"Question and answer are written to the record together.\"\n      ]\n    },\n    {\n      \"id\": \"file\",\n      \"label\": \"Share a file\",\n      \"lines\": [\n        \"File received — its owner and purpose are attached.\",\n        \"It is attached to the right time and place in the plan.\",\n        \"Only the roles that need it can see it.\",\n        \"The share is written to the record, so it can be traced.\"\n      ]\n    }\n  ],\n  \"note\": \"An illustration of a way of working. It is not a recording of any real system.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"opsFlow\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
