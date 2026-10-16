/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "“Where did this number come from?” Press the figure and follow it down, hop by hop, to the system that produced it, seeing what must be recorded at each hop for the trail to be walkable. An invented figure, to show the idea.",
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
      "name": "figure",
      "type": "{ label: string; value: string }",
      "description": "Host-supplied figure; see the complete working data example below."
    },
    {
      "name": "hops",
      "type": "Array<{ id: string; layer: string; name: string; says: string; record: string }>",
      "description": "Host-supplied hops; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"lineage\",\n  \"anchor\": \"trace\",\n  \"scene\": \"orbital-command\",\n  \"tag\": \"End of internal platforms\",\n  \"minHeight\": 720,\n  \"title\": \"Where did that number come from?\",\n  \"lede\": \"Press the figure and follow it down, hop by hop, to the system that produced it, seeing what must be recorded at each hop for the trail to be walkable. The figure is invented, to show the idea.\",\n  \"figure\": {\n    \"label\": \"Refund rate\",\n    \"value\": \"4.2%\"\n  },\n  \"hops\": [\n    {\n      \"id\": \"screen\",\n      \"layer\": \"The dashboard\",\n      \"name\": \"A figure on a screen\",\n      \"says\": \"The number someone is about to act on.\",\n      \"record\": \"Which query produced it, which version of that query, and when it last ran.\"\n    },\n    {\n      \"id\": \"query\",\n      \"layer\": \"The report\",\n      \"name\": \"A query over cleaned records\",\n      \"says\": \"Counts refunds against orders for the period, leaving out test orders.\",\n      \"record\": \"The exact definition: what counts as a refund, what counts as an order, which dates.\"\n    },\n    {\n      \"id\": \"clean\",\n      \"layer\": \"The records\",\n      \"name\": \"Tidied, de-duplicated rows\",\n      \"says\": \"Orders and refunds after the rules that tidy them: repeats removed, currencies converted.\",\n      \"record\": \"Every rule applied, with a count of the rows each one changed or dropped.\"\n    },\n    {\n      \"id\": \"events\",\n      \"layer\": \"The event log\",\n      \"name\": \"What happened, in order\",\n      \"says\": \"Each refund as it was requested, approved and paid.\",\n      \"record\": \"Who did it, when, and a reason or a ticket reference.\"\n    },\n    {\n      \"id\": \"source\",\n      \"layer\": \"The source\",\n      \"name\": \"The system where it really happened\",\n      \"says\": \"The payment provider’s record and the shop’s own database, where the money and the order actually changed.\",\n      \"record\": \"The provider’s own reference, so that a person can open the original.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Audit trails that answer questions\",\n      \"to\": \"/insights/audit-trails\"\n    },\n    {\n      \"label\": \"Internal CRM\",\n      \"to\": \"/work/internal-crm\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"lineage\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
