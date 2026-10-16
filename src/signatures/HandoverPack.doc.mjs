/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "HandoverPack is an extracted page composition.",
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
      "name": "items",
      "type": "Array<{ id: string; label: string; why: string; weight: number; vital: boolean }>",
      "description": "Host-supplied items; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"handoverPack\",\n  \"anchor\": \"try\",\n  \"railLabel\": \"Try it\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 780,\n  \"eyebrow\": \"Try it\",\n  \"title\": \"Pack the handover. See how long a newcomer would need.\",\n  \"intro\": \"Tick what is in the pack. The ring fills, a new teammate’s first safe change is estimated, and the one missing thing that would hurt most is named.\",\n  \"items\": [\n    {\n      \"id\": \"run\",\n      \"label\": \"How to run it on your own machine\",\n      \"why\": \"Without it, nobody can try a change safely.\",\n      \"weight\": 5,\n      \"vital\": true\n    },\n    {\n      \"id\": \"access\",\n      \"label\": \"Accounts, domains and keys held in the owner’s name\",\n      \"why\": \"If they sit in someone’s personal account, the owner cannot reach their own system.\",\n      \"weight\": 5,\n      \"vital\": true\n    },\n    {\n      \"id\": \"deploy\",\n      \"label\": \"How to release, and how to roll back\",\n      \"why\": \"The first change must be reversible, or no one will dare make it.\",\n      \"weight\": 5,\n      \"vital\": true\n    },\n    {\n      \"id\": \"backup\",\n      \"label\": \"Backups, with a restore that has actually been tried\",\n      \"why\": \"A backup nobody has restored is a hope.\",\n      \"weight\": 5,\n      \"vital\": true\n    },\n    {\n      \"id\": \"secrets\",\n      \"label\": \"Where secrets live, and how to change them\",\n      \"why\": \"Staff leave and keys leak. Changing one must be a routine job.\",\n      \"weight\": 4,\n      \"vital\": true\n    },\n    {\n      \"id\": \"arch\",\n      \"label\": \"A one-page picture of how the parts fit\",\n      \"why\": \"The first thing a newcomer asks for and the last thing anyone writes.\",\n      \"weight\": 4\n    },\n    {\n      \"id\": \"decisions\",\n      \"label\": \"Decisions, written down with their reasons\",\n      \"why\": \"Otherwise the next person undoes a choice that was made for a good reason.\",\n      \"weight\": 4\n    },\n    {\n      \"id\": \"tests\",\n      \"label\": \"Tests that run on every change\",\n      \"why\": \"They are how a newcomer learns they have not broken something.\",\n      \"weight\": 4\n    },\n    {\n      \"id\": \"runbooks\",\n      \"label\": \"Runbooks for the problems that actually happen\",\n      \"why\": \"A newcomer should not have to be brave at night.\",\n      \"weight\": 4\n    },\n    {\n      \"id\": \"monitor\",\n      \"label\": \"What is watched, and who is told\",\n      \"why\": \"Otherwise problems are found by customers.\",\n      \"weight\": 3\n    },\n    {\n      \"id\": \"data\",\n      \"label\": \"A guide to the data: what each table holds and who owns it\",\n      \"why\": \"Data outlives code, and its meaning is the hardest thing to rediscover.\",\n      \"weight\": 3\n    },\n    {\n      \"id\": \"deps\",\n      \"label\": \"A list of dependencies, and which are risky\",\n      \"why\": \"It shows where the next upgrade will hurt.\",\n      \"weight\": 2\n    },\n    {\n      \"id\": \"known\",\n      \"label\": \"An honest list of known problems\",\n      \"why\": \"It saves a newcomer from rediscovering them the hard way.\",\n      \"weight\": 2\n    },\n    {\n      \"id\": \"who\",\n      \"label\": \"Who to ask, and about what\",\n      \"why\": \"Some questions only a person can answer.\",\n      \"weight\": 2\n    }\n  ],\n  \"note\": \"The items and weights are a judgement made for the demonstration, not a measurement. A real handover would weigh them for the system in question.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"handoverPack\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
