/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Flashcards from the glossary. Read the term, say what it means, turn the card, and mark whether you had it. At the end, the ones still to learn are listed with a way to read more. Nothing is saved.",
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
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"flashDeck\",\n  \"anchor\": \"cards\",\n  \"scene\": \"glyph-field\",\n  \"tag\": \"End of the glossary\",\n  \"minHeight\": 560,\n  \"title\": \"Test yourself.\",\n  \"lede\": \"Ten flashcards, dealt from the glossary. Read the term, say what it means, turn the card, and mark whether you had it.\",\n  \"onward\": [\n    {\n      \"label\": \"Insights\",\n      \"to\": \"/insights\"\n    },\n    {\n      \"label\": \"Download the glossary\",\n      \"to\": \"/resources/downloads\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"flashDeck\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
