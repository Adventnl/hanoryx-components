/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "What a conversation about working at North looks like, stage by stage, from either side of the table. Pick a stage on the path; flip between \"you\" and \"us\" to read what each side does. No roles are open, and no timings are given.",
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
      "type": "Array<{ id: string; name: string; line: string; you: Array<string>; us: Array<string>; stops: string }>",
      "description": "Host-supplied stages; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"hiringPath\",\n  \"anchor\": \"path\",\n  \"railLabel\": \"The path\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"The path\",\n  \"title\": \"Five steps, from hello to a decision.\",\n  \"intro\": \"Pick a step. Switch between what you do and what the company does.\",\n  \"stages\": [\n    {\n      \"id\": \"hello\",\n      \"name\": \"Hello\",\n      \"line\": \"A short introduction.\",\n      \"you\": [\n        \"Write a few lines: who you are, what you have made, which area of the work interests you.\",\n        \"Link to something you made, if you have it.\",\n        \"Say how to reach you.\"\n      ],\n      \"us\": [\n        \"Read it, properly, and soon.\",\n        \"Aim to reply, whatever the answer.\"\n      ],\n      \"stops\": \"You hear back, and why if there is a reason worth sharing.\"\n    },\n    {\n      \"id\": \"read\",\n      \"name\": \"Read\",\n      \"line\": \"Someone reads what you sent.\",\n      \"you\": [\n        \"Nothing more. It helps if your message says what you want to work on, not only what you can do.\"\n      ],\n      \"us\": [\n        \"Read your message and the work you linked.\",\n        \"Decide whether a conversation makes sense now, later, or not at all.\"\n      ],\n      \"stops\": \"You are told. A “not now” is not a “never”.\"\n    },\n    {\n      \"id\": \"talk\",\n      \"name\": \"Talk\",\n      \"line\": \"A conversation about the work, not a quiz.\",\n      \"you\": [\n        \"Talk through something you built and why you made the choices you did.\",\n        \"Ask anything. The deck at the bottom of this page is a start.\"\n      ],\n      \"us\": [\n        \"Describe the actual work and the actual constraints.\",\n        \"Listen for how you think about trade-offs.\"\n      ],\n      \"stops\": \"You will have a better picture of the work either way.\"\n    },\n    {\n      \"id\": \"task\",\n      \"name\": \"A small task\",\n      \"line\": \"A realistic problem, small enough to discuss.\",\n      \"you\": [\n        \"Work through a small, realistic problem and explain your thinking.\",\n        \"Say what you would do with more time.\"\n      ],\n      \"us\": [\n        \"Choose a problem that resembles the real work and is fair to attempt.\",\n        \"Discuss it with you rather than only marking it.\"\n      ],\n      \"stops\": \"What you made is yours.\"\n    },\n    {\n      \"id\": \"decide\",\n      \"name\": \"Decide\",\n      \"line\": \"A clear answer, with reasons.\",\n      \"you\": [\n        \"Say what you need in order to decide: questions, a second conversation, time.\"\n      ],\n      \"us\": [\n        \"Make a decision, say what it rests on, and say it plainly.\"\n      ],\n      \"stops\": \"You are told the answer, and the reasoning behind it.\"\n    }\n  ],\n  \"note\": \"A description of how the company intends such conversations to go. No roles are open, and nothing here is a promise about a particular role or a timetable.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"hiringPath\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
