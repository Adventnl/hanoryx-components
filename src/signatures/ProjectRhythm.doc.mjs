/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "How a piece of work moves, as a stepper you can walk (or let walk itself). Each phase says what it produces, what gets decided in it, who is in the room, and the one question that has to be answered before moving on.",
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
      "name": "phases",
      "type": "Array<{ id: string; name: string; purpose: string; produces: Array<string>; decides: Array<string>; who: string; gate: string }>",
      "description": "Host-supplied phases; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"projectRhythm\",\n  \"anchor\": \"phases\",\n  \"railLabel\": \"The five phases\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"The five phases\",\n  \"title\": \"Frame, shape, build, hand over, run.\",\n  \"intro\": \"Choose a phase, use the arrow keys, or let it walk you through. Each panel ends with the question that gates the next.\",\n  \"phases\": [\n    {\n      \"id\": \"frame\",\n      \"name\": \"Frame\",\n      \"purpose\": \"Say what the problem is, in words that everyone can check.\",\n      \"produces\": [\n        \"A one-page statement of the problem\",\n        \"A list of who is affected, and how\",\n        \"What “done” would look like\"\n      ],\n      \"decides\": [\n        \"What is in, and what is deliberately out\",\n        \"Who has the final say on trade-offs\"\n      ],\n      \"who\": \"both\",\n      \"gate\": \"Could someone who was not in the room explain the problem back to us?\"\n    },\n    {\n      \"id\": \"shape\",\n      \"name\": \"Shape\",\n      \"purpose\": \"Draw the system before building it: its parts, its boundaries, and who and what may cross them.\",\n      \"produces\": [\n        \"A diagram of the parts and where they meet\",\n        \"A data model, in plain words first\",\n        \"A short list of decisions, each with its reasons\"\n      ],\n      \"decides\": [\n        \"Where each record lives, and who owns it\",\n        \"What is built, and what is reused or bought\"\n      ],\n      \"who\": \"north\",\n      \"gate\": \"Can we say what would have to change for this design to be wrong?\"\n    },\n    {\n      \"id\": \"build\",\n      \"name\": \"Build\",\n      \"purpose\": \"Make it real in small pieces that run, in an order that tests the riskiest idea first.\",\n      \"produces\": [\n        \"Working software, early and often\",\n        \"Checks that run on every change\",\n        \"Notes on what was learned, written as it is learned\"\n      ],\n      \"decides\": [\n        \"What to cut when something is harder than it looked\",\n        \"When a piece is good enough to depend on\"\n      ],\n      \"who\": \"north\",\n      \"gate\": \"Does the riskiest part work in the real setting, not only in a demonstration?\"\n    },\n    {\n      \"id\": \"handover\",\n      \"name\": \"Hand over\",\n      \"purpose\": \"Make sure the people who will run it can: that they know how it works, how it fails and how to change it.\",\n      \"produces\": [\n        \"A runbook for the situations that will actually happen\",\n        \"Documentation written for the next person, not the last one\",\n        \"Access and ownership, written down\"\n      ],\n      \"decides\": [\n        \"Who is responsible for what, from now on\",\n        \"What “supported” means\"\n      ],\n      \"who\": \"both\",\n      \"gate\": \"Could someone new make a safe change on their first day?\"\n    },\n    {\n      \"id\": \"run\",\n      \"name\": \"Run\",\n      \"purpose\": \"Watch it work. Fix what real use reveals. Decide, calmly, whether it is finished, to be extended, or to be retired.\",\n      \"produces\": [\n        \"A short list of what real use has shown\",\n        \"Changes small enough to be understood\",\n        \"An honest answer to “is this still the right thing?”\"\n      ],\n      \"decides\": [\n        \"What to improve next, and what to leave alone\",\n        \"When to stop\"\n      ],\n      \"who\": \"both\",\n      \"gate\": \"Is it still doing the job it was made for?\"\n    }\n  ],\n  \"note\": \"This is how the company approaches the work. It is not a promise about how long any phase takes, and it is not a contract.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"projectRhythm\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
