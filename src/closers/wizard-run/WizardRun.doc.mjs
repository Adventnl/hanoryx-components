/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A four-step flow, walked. The Stepper shows where you are; Next is held back until the step is complete and says why;",
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
      "name": "steps",
      "type": "Array<{ title: string; hint: string; intro: string }>",
      "description": "Host-supplied steps; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"anchor\": \"walk\",\n  \"kind\": \"wizardRun\",\n  \"scene\": \"data-interface-wave\",\n  \"tag\": \"End of the navigation components\",\n  \"minHeight\": 820,\n  \"title\": \"Walk a flow, and hear it.\",\n  \"lede\": \"Four steps with a stepper, a Next that waits until the step is complete and says why, and focus that moves to each step’s heading. Beside it, a log writes down what a screen reader would announce.\",\n  \"steps\": [\n    {\n      \"title\": \"Details\",\n      \"hint\": \"Who and what\",\n      \"intro\": \"Give it a name. At least three characters unlocks the next step.\"\n    },\n    {\n      \"title\": \"Review\",\n      \"hint\": \"Check it over\",\n      \"intro\": \"Read back what you entered. Nothing has happened yet.\"\n    },\n    {\n      \"title\": \"Confirm\",\n      \"hint\": \"Make it so\",\n      \"intro\": \"One last check before it would be made.\"\n    },\n    {\n      \"title\": \"Done\",\n      \"hint\": \"Nothing left\",\n      \"intro\": \"That is the whole flow.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Feedback components\",\n      \"to\": \"/north/components/feedback\"\n    },\n    {\n      \"label\": \"Accessible by default\",\n      \"to\": \"/north/accessibility\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"wizardRun\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
