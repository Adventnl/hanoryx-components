/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "How to write the name: four quick choices, each answered the moment you make it, and a one-line style summary at the end.",
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
      "type": "Array<{ id: string; prompt: string; options: Array<string>; answer: number; why: string }>",
      "description": "Host-supplied questions; see the complete working data example below."
    },
    {
      "name": "summary",
      "type": "string",
      "description": "Host-supplied summary; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"nameStyle\",\n  \"scene\": \"split-prism\",\n  \"tag\": \"End of press & media\",\n  \"minHeight\": 640,\n  \"title\": \"Write it right.\",\n  \"lede\": \"Four quick choices. Each is answered the moment you make it.\",\n  \"questions\": [\n    {\n      \"id\": \"q1\",\n      \"prompt\": \"The company’s name, on first mention, is…\",\n      \"options\": [\n        \"Hanoryx Systems\",\n        \"Hanoryx-Systems\",\n        \"HANORYX SYSTEMS INC.\"\n      ],\n      \"answer\": 0,\n      \"why\": \"Two words, no hyphen. The site sets it in capitals in places, as a typographic choice, but it is written in sentence case.\"\n    },\n    {\n      \"id\": \"q2\",\n      \"prompt\": \"On second mention it is…\",\n      \"options\": [\n        \"HS\",\n        \"Hanoryx\",\n        \"Hanoryx Sys.\"\n      ],\n      \"answer\": 1,\n      \"why\": \"“Hanoryx” stands for the company. Initials and abbreviations are not used.\"\n    },\n    {\n      \"id\": \"q3\",\n      \"prompt\": \"The development team is called…\",\n      \"options\": [\n        \"Hanoryx Dev\",\n        \"The North Division\",\n        \"Hanoryx North\"\n      ],\n      \"answer\": 2,\n      \"why\": \"Hanoryx North. It is a team of the company.\"\n    },\n    {\n      \"id\": \"q4\",\n      \"prompt\": \"YK Engine is described as…\",\n      \"options\": [\n        \"An open-source game engine\",\n        \"A proprietary 2D engine\",\n        \"A web framework\"\n      ],\n      \"answer\": 1,\n      \"why\": \"It is the company’s own 2D engine, with an editor, a player and export tooling. Only its repository is public.\"\n    }\n  ],\n  \"summary\": \"Hanoryx Systems first, Hanoryx after. The team is Hanoryx North. YK Engine is a proprietary 2D engine. No clients, dates or results.\",\n  \"onward\": [\n    {\n      \"label\": \"Brand\",\n      \"to\": \"/company/brand\"\n    },\n    {\n      \"label\": \"Copyright & marks\",\n      \"to\": \"/legal/copyright\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"nameStyle\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
