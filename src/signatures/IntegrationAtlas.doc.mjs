/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Six ways to connect two systems, and two of them at a time. Choose any two and every row compares them. The entries are general reference, written for this site, not a statement about any particular integration.",
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
      "name": "patterns",
      "type": "Array<{ id: string; name: string; how: string; speed: string; coupling: string; fails: string; effort: string; use: string; avoid: string }>",
      "description": "Host-supplied patterns; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"integrationAtlas\",\n  \"anchor\": \"atlas\",\n  \"railLabel\": \"The atlas\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 800,\n  \"eyebrow\": \"The atlas\",\n  \"title\": \"Six patterns, two at a time.\",\n  \"intro\": \"Choose any two. Every row compares them: how they work, how soon the other side knows, how tightly they tie the systems together, and what each does when the other end is down.\",\n  \"patterns\": [\n    {\n      \"id\": \"api\",\n      \"name\": \"Request and reply\",\n      \"how\": \"One system asks the other directly and waits for the answer.\",\n      \"speed\": \"Immediately, if both are up.\",\n      \"coupling\": \"Tight: the caller needs the other side to be up and to keep its promises.\",\n      \"fails\": \"The call fails. The caller must decide whether to retry, queue it or show an error.\",\n      \"effort\": \"Moderate: a contract, authentication, timeouts and retries.\",\n      \"use\": \"The answer is needed now, to carry on.\",\n      \"avoid\": \"The other side is slow or unreliable, and the answer is not needed straight away.\"\n    },\n    {\n      \"id\": \"webhook\",\n      \"name\": \"Webhooks\",\n      \"how\": \"The system where something happened sends a message to an address the other side provides.\",\n      \"speed\": \"Seconds.\",\n      \"coupling\": \"Looser: the sender does not wait. The receiver must accept messages and reply quickly.\",\n      \"fails\": \"The sender retries for a while and then gives up. Messages may arrive twice, late or out of order.\",\n      \"effort\": \"Moderate: signatures, repeat-safe handling and a way to replay what was missed.\",\n      \"use\": \"The other side needs to react soon after something happens.\",\n      \"avoid\": \"You cannot receive requests from outside, or you need guaranteed order.\"\n    },\n    {\n      \"id\": \"poll\",\n      \"name\": \"Polling\",\n      \"how\": \"One side asks again and again whether anything has changed.\",\n      \"speed\": \"As soon as the next poll. Frequent polling has a cost.\",\n      \"coupling\": \"Loose: the other side needs to offer nothing special.\",\n      \"fails\": \"A missed poll is caught by the next one. Easy to reason about.\",\n      \"effort\": \"Low, but you must define exactly what “changed since” means.\",\n      \"use\": \"The other side offers no push, and a delay of minutes is fine.\",\n      \"avoid\": \"Freshness matters, or there are very many things to check.\"\n    },\n    {\n      \"id\": \"file\",\n      \"name\": \"Files on a schedule\",\n      \"how\": \"One side writes a file, such as a spreadsheet or a CSV, and the other collects and loads it at set times.\",\n      \"speed\": \"Hours, usually: whenever the batch runs.\",\n      \"coupling\": \"Loose in time, tight in format: both must agree exactly on the file.\",\n      \"fails\": \"A bad or missing file stops the batch, and is often found late.\",\n      \"effort\": \"Low to build, higher to make dependable: validation, naming and reruns.\",\n      \"use\": \"The other system only speaks files, or volumes are large and a delay is acceptable.\",\n      \"avoid\": \"People are waiting on the result, or the format changes often.\"\n    },\n    {\n      \"id\": \"queue\",\n      \"name\": \"Queue or message bus\",\n      \"how\": \"Messages go to a broker that holds them until a consumer is ready for them.\",\n      \"speed\": \"Seconds, even when the other side is busy.\",\n      \"coupling\": \"Loose: producer and consumer never need to be up at the same time.\",\n      \"fails\": \"Messages wait. Bad messages need handling. Consumers must cope with repeats.\",\n      \"effort\": \"Higher: run a broker, design the messages, watch the backlog.\",\n      \"use\": \"Bursts, many consumers, or a receiver that must never be overwhelmed.\",\n      \"avoid\": \"A single simple call would do. The broker is another system to run.\"\n    },\n    {\n      \"id\": \"db\",\n      \"name\": \"A shared database\",\n      \"how\": \"Both systems read and write the same tables.\",\n      \"speed\": \"Immediately.\",\n      \"coupling\": \"The tightest of all: every change to the tables is felt by both.\",\n      \"fails\": \"One system’s bad write damages the other. Every change has to be coordinated.\",\n      \"effort\": \"Low at first and high ever after.\",\n      \"use\": \"Rarely. Perhaps a read-only copy kept just for reporting.\",\n      \"avoid\": \"Almost always. It looks easy, and it is how many systems become impossible to change.\"\n    }\n  ],\n  \"note\": \"General reference written for this site. It is not a recommendation for any particular system, and every real case has details that tip the balance.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"integrationAtlas\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
