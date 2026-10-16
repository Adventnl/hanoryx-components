/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The few things worth keeping, as a deck you page through. The top card lifts away to the back; arrow keys work on the deck.",
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
      "name": "cards",
      "type": "Array<{ title: string; body: string }>",
      "description": "Host-supplied cards; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"takeawayDeck\",\n  \"anchor\": \"keep\",\n  \"scene\": \"transaction-wave\",\n  \"tag\": \"End of idempotency\",\n  \"minHeight\": 560,\n  \"title\": \"Five cards worth keeping.\",\n  \"lede\": \"The guide, folded down. Page through them with the arrows, or the arrow keys.\",\n  \"cards\": [\n    {\n      \"title\": \"Retries are normal\",\n      \"body\": \"Every layer between the person and the database may send a request again. Design for the second copy, not against it.\"\n    },\n    {\n      \"title\": \"Key the intent\",\n      \"body\": \"The client makes one key per intent, and sends it with every attempt. A new key per attempt recognises nothing.\"\n    },\n    {\n      \"title\": \"One transaction\",\n      \"body\": \"Keep the key in the same transaction as the effect, with a unique constraint. If they can disagree, they will.\"\n    },\n    {\n      \"title\": \"Fingerprint it\",\n      \"body\": \"A key is a promise about one request. If it comes back attached to a different one, say so loudly.\"\n    },\n    {\n      \"title\": \"Test the gap\",\n      \"body\": \"Drop the answer after the commit. Send fifty at once. Kill the process halfway. The bugs live between the steps.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Audit trails that answer questions\",\n      \"to\": \"/insights/audit-trails\"\n    },\n    {\n      \"label\": \"Cron, queues and events\",\n      \"to\": \"/insights/triggers\"\n    },\n    {\n      \"label\": \"All insights\",\n      \"to\": \"/insights\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"takeawayDeck\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
