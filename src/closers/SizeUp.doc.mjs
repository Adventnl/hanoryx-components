/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "How big is it, really? Five questions about a system, each a judgement, and the page says what shape of work that adds up to: a focused tool, a platform or a programme, with what changes at each size.",
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
      "name": "questions",
      "type": "Array<{ id: string; text: string; options: Array<object> }>",
      "description": "Host-supplied questions; see the complete working data example below."
    },
    {
      "name": "bands",
      "type": "Array<{ min: number; name: string; summary: string; changes: Array<string>; first: Array<string> }>",
      "description": "Host-supplied bands; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"sizeUp\",\n  \"anchor\": \"size\",\n  \"scene\": \"orbital-node\",\n  \"tag\": \"End of capabilities\",\n  \"minHeight\": 740,\n  \"title\": \"How big is yours?\",\n  \"lede\": \"Five questions about a system, each a judgement. The answer is a shape, not a price and not a duration: what kind of work this adds up to, what changes at that size and what to decide first.\",\n  \"questions\": [\n    {\n      \"id\": \"users\",\n      \"text\": \"How many kinds of people use it?\",\n      \"options\": [\n        {\n          \"label\": \"One\",\n          \"points\": 0\n        },\n        {\n          \"label\": \"Two or three\",\n          \"points\": 1\n        },\n        {\n          \"label\": \"Four or more\",\n          \"points\": 2\n        }\n      ]\n    },\n    {\n      \"id\": \"links\",\n      \"text\": \"How many other systems does it talk to?\",\n      \"options\": [\n        {\n          \"label\": \"None\",\n          \"points\": 0\n        },\n        {\n          \"label\": \"One or two\",\n          \"points\": 1\n        },\n        {\n          \"label\": \"Three or more\",\n          \"points\": 2\n        }\n      ]\n    },\n    {\n      \"id\": \"data\",\n      \"text\": \"What does it hold?\",\n      \"options\": [\n        {\n          \"label\": \"Little that matters\",\n          \"points\": 0\n        },\n        {\n          \"label\": \"Ordinary business records\",\n          \"points\": 1\n        },\n        {\n          \"label\": \"Personal, financial or regulated data\",\n          \"points\": 2\n        }\n      ]\n    },\n    {\n      \"id\": \"down\",\n      \"text\": \"What happens if it is down for a day?\",\n      \"options\": [\n        {\n          \"label\": \"People wait, mildly\",\n          \"points\": 0\n        },\n        {\n          \"label\": \"Work stops\",\n          \"points\": 1\n        },\n        {\n          \"label\": \"Money or safety is at risk\",\n          \"points\": 2\n        }\n      ]\n    },\n    {\n      \"id\": \"start\",\n      \"text\": \"Where does its data come from?\",\n      \"options\": [\n        {\n          \"label\": \"It starts empty\",\n          \"points\": 0\n        },\n        {\n          \"label\": \"We import a spreadsheet\",\n          \"points\": 1\n        },\n        {\n          \"label\": \"We migrate from systems still in use\",\n          \"points\": 2\n        }\n      ]\n    }\n  ],\n  \"bands\": [\n    {\n      \"min\": 0,\n      \"name\": \"A focused tool\",\n      \"summary\": \"One job, a few people, little around it. It can be small, quick and simple, and should stay that way.\",\n      \"changes\": [\n        \"One person can hold the whole thing in their head.\",\n        \"A single release path is enough.\",\n        \"A good README is the documentation.\"\n      ],\n      \"first\": [\n        \"The one job it must do well.\",\n        \"What “done” means.\",\n        \"Who will look after it.\"\n      ]\n    },\n    {\n      \"min\": 4,\n      \"name\": \"A platform\",\n      \"summary\": \"Several roles and several neighbours. The seams between the parts now matter as much as the parts.\",\n      \"changes\": [\n        \"Boundaries and contracts between parts become the design.\",\n        \"Access rules need to be written down and tested.\",\n        \"Operation (watching, alerting, recovering) is part of the build.\"\n      ],\n      \"first\": [\n        \"Who may see and do what.\",\n        \"What the source of truth is for each record.\",\n        \"How you will know when it is unwell.\"\n      ]\n    },\n    {\n      \"min\": 7,\n      \"name\": \"A programme\",\n      \"summary\": \"Many roles, sensitive data and real consequences if it stops. A long piece of work with several parts moving together, which has to be managed as one.\",\n      \"changes\": [\n        \"Work is staged, with a working slice early.\",\n        \"Security, audit and recovery are designed first, not added.\",\n        \"Several people must be able to run it, so handover starts in week one.\",\n        \"Migration and running in parallel are projects of their own.\"\n      ],\n      \"first\": [\n        \"The riskiest assumption, and how to test it first.\",\n        \"What must never be lost, and how it is protected.\",\n        \"How you will cut over, and how you will go back.\"\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Integration patterns\",\n      \"to\": \"/systems/integrations\"\n    },\n    {\n      \"label\": \"System lifecycle\",\n      \"to\": \"/systems/lifecycle\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"sizeUp\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
