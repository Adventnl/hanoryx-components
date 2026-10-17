/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A one-page runbook template, laid out as a card. Read it here, copy it, or download it as Markdown and fill it in for a real service.",
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
      "type": "Array<{ name: string; hint: string; lines: Array<string> }>",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"pagerCard\",\n  \"anchor\": \"card\",\n  \"scene\": \"command-terminal\",\n  \"tag\": \"End of runbooks\",\n  \"minHeight\": 700,\n  \"title\": \"The one-page template.\",\n  \"lede\": \"The shape most good runbooks share, on a single card. Read it here, copy it as Markdown, or download it and fill it in for a real service.\",\n  \"sections\": [\n    {\n      \"name\": \"What you are seeing\",\n      \"hint\": \"The symptom, in the words of the person who reports it.\",\n      \"lines\": [\n        \"The alert text, exactly as it appears\",\n        \"What a customer or colleague would say\",\n        \"Which dashboard shows it\"\n      ]\n    },\n    {\n      \"name\": \"Is it really this?\",\n      \"hint\": \"Two quick checks: one that rules it in, one that rules it out.\",\n      \"lines\": [\n        \"A check that confirms the problem\",\n        \"A check that points to a different runbook\"\n      ]\n    },\n    {\n      \"name\": \"Do this first\",\n      \"hint\": \"Safe whatever the cause. It buys time and costs little.\",\n      \"lines\": [\n        \"The first action\",\n        \"What to expect afterwards\"\n      ]\n    },\n    {\n      \"name\": \"Then\",\n      \"hint\": \"Decisions as questions that can be answered by looking.\",\n      \"lines\": [\n        \"A question. Yes → step 2. No → step 4.\",\n        \"The dramatic steps, held until the cause is known\"\n      ]\n    },\n    {\n      \"name\": \"How you will know\",\n      \"hint\": \"The graph, the number, the time.\",\n      \"lines\": [\n        \"What should fall, and by when\",\n        \"When to stop because nothing here can help\"\n      ]\n    },\n    {\n      \"name\": \"If it did not work\",\n      \"hint\": \"Whom to ask, when, and what to say.\",\n      \"lines\": [\n        \"Who, by role and name, and how to reach them\",\n        \"After how many minutes\",\n        \"The symptom, what was tried, what was seen\"\n      ]\n    },\n    {\n      \"name\": \"Afterwards\",\n      \"hint\": \"So the next person has an easier night.\",\n      \"lines\": [\n        \"What to write down, and where\",\n        \"Whether this page was right\"\n      ]\n    },\n    {\n      \"name\": \"Owner and review\",\n      \"hint\": \"A wrong runbook is worse than none.\",\n      \"lines\": [\n        \"Owner\",\n        \"Last reviewed\",\n        \"Next review\"\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Designing for handover\",\n      \"to\": \"/insights/handover\"\n    },\n    {\n      \"label\": \"Live status\",\n      \"to\": \"/trust/status\"\n    },\n    {\n      \"label\": \"All insights\",\n      \"to\": \"/insights\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"pagerCard\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
