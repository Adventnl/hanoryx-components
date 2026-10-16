/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A payment request whose answer gets lost on the way back. With no idempotency key the client retries and the customer is charged twice; with one, the server recognises the retry and replays its first answer.",
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
      "name": "amount",
      "type": "number",
      "description": "Host-supplied amount; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"idempotencyDemo\",\n  \"anchor\": \"try\",\n  \"railLabel\": \"Try it\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"Try it\",\n  \"title\": \"Press Pay. Lose the answer. Retry.\",\n  \"intro\": \"The first request succeeds, but its answer is lost on the way back, so the client sends it again. Switch the key on and off, and watch what the ledger does.\",\n  \"amount\": 20,\n  \"note\": \"A simulation that runs in your browser. No payment is made, and nothing is sent anywhere.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"idempotencyDemo\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
