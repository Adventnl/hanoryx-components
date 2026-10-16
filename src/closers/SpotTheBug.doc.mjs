/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A review exercise. Read a short piece of code the way a reviewer would, mark the lines you would stop, and press Check. Each real problem comes back with why it matters; lines flagged without cause are named too.",
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
      "name": "lang",
      "type": "string",
      "description": "Host-supplied lang; see the complete working data example below."
    },
    {
      "name": "lines",
      "type": "Array<{ text: string }>",
      "description": "Host-supplied lines; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"spotTheBug\",\n  \"anchor\": \"review\",\n  \"scene\": \"tooling-console\",\n  \"tag\": \"End of engineering\",\n  \"minHeight\": 640,\n  \"title\": \"Review this change.\",\n  \"lede\": \"Twelve lines that charge a customer. Read them the way a reviewer would and mark the ones you would not let through. There are four real problems and eight lines that are fine.\",\n  \"lang\": \"javascript\",\n  \"lines\": [\n    {\n      \"text\": \"async function chargeCustomer(order) {\"\n    },\n    {\n      \"text\": \"  const res = await fetch('https://pay.example.test/charge', {\",\n      \"flaw\": {\n        \"title\": \"No timeout\",\n        \"why\": \"If the provider never answers, this waits for ever, and so does the customer. Every outbound call needs a limit and a decision about what happens when it is reached.\"\n      }\n    },\n    {\n      \"text\": \"    method: 'POST',\"\n    },\n    {\n      \"text\": \"    headers: { Authorization: 'Bearer sk_live_51Hx9exampleonly' },\",\n      \"flaw\": {\n        \"title\": \"A secret in the code\",\n        \"why\": \"Anything in the repository is readable by everyone who can read it, for as long as history is kept. Secrets belong in the environment and can be changed without a release.\"\n      }\n    },\n    {\n      \"text\": \"    body: JSON.stringify({ amount: order.total }),\",\n      \"flaw\": {\n        \"title\": \"No idempotency key\",\n        \"why\": \"A retry after a lost answer will charge twice. Send a key derived from the order so the provider can recognise a repeat.\"\n      }\n    },\n    {\n      \"text\": \"  });\"\n    },\n    {\n      \"text\": \"  const body = await res.json();\",\n      \"flaw\": {\n        \"title\": \"Success assumed\",\n        \"why\": \"Nothing checks res.ok. A declined card or a server error comes back as data, and the next line treats it as success.\"\n      }\n    },\n    {\n      \"text\": \"  await db.orders.update(order.id, { status: 'paid' });\"\n    },\n    {\n      \"text\": \"  return body;\"\n    },\n    {\n      \"text\": \"}\"\n    },\n    {\n      \"text\": \"\"\n    },\n    {\n      \"text\": \"export { chargeCustomer };\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Idempotency in order systems\",\n      \"to\": \"/insights/idempotency\"\n    },\n    {\n      \"label\": \"Engineering handbook\",\n      \"to\": \"/north/handbook\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"spotTheBug\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
