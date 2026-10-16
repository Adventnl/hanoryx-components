/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "ContractDiff is an extracted page composition.",
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
      "name": "consumers",
      "type": "Array<{ id: string; name: string; how: string; needs: Array<object> }>",
      "description": "Host-supplied consumers; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"contractDiff\",\n  \"anchor\": \"try\",\n  \"railLabel\": \"Try it\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 780,\n  \"eyebrow\": \"Try it\",\n  \"title\": \"Change the response. See who breaks.\",\n  \"intro\": \"Three consumers read the same response in three different ways. Tick a change and see which of them it breaks — including the one that surprises you.\",\n  \"consumers\": [\n    {\n      \"id\": \"app\",\n      \"name\": \"The mobile app\",\n      \"how\": \"Shows the total and a list of item numbers and prices. It ignores everything else in the response.\",\n      \"needs\": [\n        {\n          \"path\": \"total\",\n          \"type\": \"number\"\n        },\n        {\n          \"path\": \"items[].sku\",\n          \"type\": \"string\"\n        },\n        {\n          \"path\": \"items[].price\",\n          \"type\": \"number\"\n        }\n      ]\n    },\n    {\n      \"id\": \"ledger\",\n      \"name\": \"The accounting export\",\n      \"how\": \"Reads each item’s price and status, and writes one line to the ledger. It was written against a fixed list of statuses.\",\n      \"strictEnum\": true,\n      \"needs\": [\n        {\n          \"path\": \"items[].price\",\n          \"type\": \"number\"\n        },\n        {\n          \"path\": \"items[].status\",\n          \"type\": \"enum:paid|shipped\"\n        }\n      ]\n    },\n    {\n      \"id\": \"partner\",\n      \"name\": \"A partner’s integration\",\n      \"how\": \"Checks every response against a strict description, and rejects anything with a field it was not told about.\",\n      \"strict\": true,\n      \"needs\": [\n        {\n          \"path\": \"total\",\n          \"type\": \"number\"\n        },\n        {\n          \"path\": \"items[].sku\",\n          \"type\": \"string\"\n        }\n      ]\n    }\n  ],\n  \"note\": \"The response and the three consumers are invented for the demonstration. They stand for the kinds of reader any interface ends up with.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"contractDiff\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
