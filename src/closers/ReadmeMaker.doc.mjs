/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A README that the next person can use. Choose the sections; the skeleton is assembled beside you, with a prompt under every heading saying what belongs there.",
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
      "name": "sections",
      "type": "Array<{ id: string; name: string; prompt: string; default: boolean }>",
      "description": "Host-supplied sections; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"readmeMaker\",\n  \"anchor\": \"readme\",\n  \"scene\": \"isometric-module\",\n  \"tag\": \"End of handover\",\n  \"minHeight\": 700,\n  \"title\": \"Start the README.\",\n  \"lede\": \"Choose the sections that apply. The skeleton is assembled beside you, with a prompt under every heading saying what belongs there. Download it and begin on day one.\",\n  \"sections\": [\n    {\n      \"id\": \"what\",\n      \"name\": \"What it is\",\n      \"prompt\": \"One paragraph: what it does, and who it is for.\",\n      \"default\": true\n    },\n    {\n      \"id\": \"run\",\n      \"name\": \"Run it locally\",\n      \"prompt\": \"The exact commands, from a clean machine to a working copy.\",\n      \"default\": true\n    },\n    {\n      \"id\": \"config\",\n      \"name\": \"Configuration and secrets\",\n      \"prompt\": \"Every setting, what it does, and where its value lives. Never the value itself.\",\n      \"default\": true\n    },\n    {\n      \"id\": \"arch\",\n      \"name\": \"How it fits together\",\n      \"prompt\": \"A picture, and a paragraph: the parts, and where they meet.\",\n      \"default\": true\n    },\n    {\n      \"id\": \"deploy\",\n      \"name\": \"Release and rollback\",\n      \"prompt\": \"How a change reaches production, and how to undo it.\",\n      \"default\": true\n    },\n    {\n      \"id\": \"tests\",\n      \"name\": \"Tests\",\n      \"prompt\": \"What runs, how to run it, and what a failure means.\",\n      \"default\": false\n    },\n    {\n      \"id\": \"ops\",\n      \"name\": \"Running it\",\n      \"prompt\": \"What is monitored, what the alerts mean, and links to the runbooks.\",\n      \"default\": false\n    },\n    {\n      \"id\": \"data\",\n      \"name\": \"The data\",\n      \"prompt\": \"What each table holds, which are authoritative, and who owns what.\",\n      \"default\": false\n    },\n    {\n      \"id\": \"decisions\",\n      \"name\": \"Decisions\",\n      \"prompt\": \"Links to the decision records, newest first.\",\n      \"default\": false\n    },\n    {\n      \"id\": \"known\",\n      \"name\": \"Known problems\",\n      \"prompt\": \"What is fragile or wrong, and how to tell when it bites.\",\n      \"default\": false\n    },\n    {\n      \"id\": \"who\",\n      \"name\": \"Who to ask\",\n      \"prompt\": \"Roles and names, and what each can answer.\",\n      \"default\": false\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Runbooks people actually use\",\n      \"to\": \"/insights/runbooks\"\n    },\n    {\n      \"label\": \"How we work\",\n      \"to\": \"/company/how-we-work\"\n    },\n    {\n      \"label\": \"All insights\",\n      \"to\": \"/insights\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"readmeMaker\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
