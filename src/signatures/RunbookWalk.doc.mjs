/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The same incident, two runbooks. One explains the system; the other starts from the symptom.",
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
      "name": "incident",
      "type": "string",
      "description": "Host-supplied incident; see the complete working data example below."
    },
    {
      "name": "versions",
      "type": "Array<{ id: string; label: string; blocks: Array<object> }>",
      "description": "Host-supplied versions; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"runbookWalk\",\n  \"anchor\": \"try\",\n  \"railLabel\": \"Try it\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"Try it\",\n  \"title\": \"One incident. Two runbooks.\",\n  \"intro\": \"The pager goes off. Read each runbook one block at a time, and watch the clock that counts the time it takes to read, until you reach the first thing that actually does something.\",\n  \"incident\": \"Alert: checkout error rate is above its threshold. Customers report that paying fails with a generic error.\",\n  \"versions\": [\n    {\n      \"id\": \"explains\",\n      \"label\": \"Explains the system\",\n      \"blocks\": [\n        {\n          \"id\": \"a1\",\n          \"kind\": \"context\",\n          \"text\": \"Checkout is the service that sits between the storefront and the payment provider. It was built in two phases: the first handled card payments, the second added wallet payments. It uses a queue to hand finished orders on to fulfilment, and a cache that holds each visitor’s basket and session for fifteen minutes.\"\n        },\n        {\n          \"id\": \"a2\",\n          \"kind\": \"context\",\n          \"text\": \"The service has three dependencies: the payment provider’s interface, the session cache and the orders database. Each has its own timeout, set in the settings file and described in the architecture document, which also explains why the timeouts differ.\"\n        },\n        {\n          \"id\": \"a3\",\n          \"kind\": \"context\",\n          \"text\": \"Historically, outages of this kind have come from one of three places: the payment provider having a bad period, the cache running out of memory after a busy sale, or a release that changed one of the settings without anyone noticing it would affect checkout.\"\n        },\n        {\n          \"id\": \"a4\",\n          \"kind\": \"decision\",\n          \"text\": \"Work out which of the three is failing before you change anything.\"\n        },\n        {\n          \"id\": \"a5\",\n          \"kind\": \"action\",\n          \"text\": \"Open the Checkout dependencies dashboard and compare the three error lines.\"\n        },\n        {\n          \"id\": \"a6\",\n          \"kind\": \"decision\",\n          \"text\": \"If the payment line is the highest, go to the section on provider outages. If the cache line is, go to the section on the cache. If neither, look at recent releases.\"\n        },\n        {\n          \"id\": \"a7\",\n          \"kind\": \"action\",\n          \"text\": \"Open the provider’s status page and read the latest message.\"\n        }\n      ]\n    },\n    {\n      \"id\": \"symptom\",\n      \"label\": \"Starts from the symptom\",\n      \"blocks\": [\n        {\n          \"id\": \"b1\",\n          \"kind\": \"action\",\n          \"text\": \"Open the Checkout dependencies dashboard. Look at the three error lines.\"\n        },\n        {\n          \"id\": \"b2\",\n          \"kind\": \"decision\",\n          \"text\": \"Which line is highest? Payment → step 3. Cache → step 5. Neither → step 7.\"\n        },\n        {\n          \"id\": \"b3\",\n          \"kind\": \"action\",\n          \"text\": \"Open the payment provider’s status page. Is it reporting a problem?\"\n        },\n        {\n          \"id\": \"b4\",\n          \"kind\": \"action\",\n          \"text\": \"If yes: switch the storefront banner on (“Payments are slow; please try again shortly”), post in the incident channel, and stop. Nothing on our side will fix it.\"\n        },\n        {\n          \"id\": \"b5\",\n          \"kind\": \"action\",\n          \"text\": \"Cache: check its memory graph. Above 90%? Run the “clear sessions” command (below) once. Expect the error line to fall within two minutes.\"\n        },\n        {\n          \"id\": \"b6\",\n          \"kind\": \"action\",\n          \"text\": \"Not recovered after two minutes: page the second contact (see Escalation).\"\n        },\n        {\n          \"id\": \"b7\",\n          \"kind\": \"action\",\n          \"text\": \"Neither: open the release list. Was anything released in the last two hours? If yes, roll it back using the rollback card.\"\n        }\n      ]\n    }\n  ],\n  \"note\": \"The two runbooks are invented for the demonstration. Reading time is counted from their actual words at about 220 words a minute; a person woken at night reads more slowly.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"runbookWalk\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
