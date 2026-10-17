/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Questions a candidate is welcome to ask, on cards. Turn one to see why it is a good question to ask — and what a good answer would sound like.",
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
      "name": "cards",
      "type": "Array<{ q: string; why: string; listen: string }>",
      "description": "Host-supplied cards; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"askDeck\",\n  \"scene\": \"orbital-node\",\n  \"tag\": \"End of the hiring process\",\n  \"minHeight\": 620,\n  \"title\": \"Questions you’re welcome to ask.\",\n  \"lede\": \"Eight, on cards. Turn one over to see why it is worth asking, and what a good answer sounds like.\",\n  \"cards\": [\n    {\n      \"q\": \"What would a good first six months look like?\",\n      \"why\": \"It shows what the company thinks the job is, rather than what the title says.\",\n      \"listen\": \"Specific work and specific outcomes, not adjectives.\"\n    },\n    {\n      \"q\": \"How are decisions made, and written down?\",\n      \"why\": \"Decisions that are not recorded get made again.\",\n      \"listen\": \"A place where decisions live, and an example of one being reversed.\"\n    },\n    {\n      \"q\": \"What did the team get wrong recently, and what changed?\",\n      \"why\": \"Teams that can name a recent mistake can learn from one.\",\n      \"listen\": \"A real, recent, specific example, told without blame.\"\n    },\n    {\n      \"q\": \"Who reviews my work, and how?\",\n      \"why\": \"Review is where you learn the standard.\",\n      \"listen\": \"Named practices, not “we trust each other”.\"\n    },\n    {\n      \"q\": \"What does support look like at three in the morning?\",\n      \"why\": \"It shows how much thought has gone into running things, not only building them.\",\n      \"listen\": \"Runbooks, ownership, and a view on who should be woken.\"\n    },\n    {\n      \"q\": \"How do you decide what not to build?\",\n      \"why\": \"Saying no is most of the craft.\",\n      \"listen\": \"Criteria, and a story about something left out.\"\n    },\n    {\n      \"q\": \"What do you wish candidates asked?\",\n      \"why\": \"It invites the thing they care about most.\",\n      \"listen\": \"Enthusiasm, and honest limits.\"\n    },\n    {\n      \"q\": \"What would make this a bad fit for me?\",\n      \"why\": \"It saves everyone time.\",\n      \"listen\": \"Candour about the downsides.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Careers\",\n      \"to\": \"/company/careers\"\n    },\n    {\n      \"label\": \"How we work\",\n      \"to\": \"/company/how-we-work\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"askDeck\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
