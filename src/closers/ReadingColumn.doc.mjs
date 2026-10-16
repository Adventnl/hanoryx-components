/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Set a reading column. Slide the measure (characters per line), the line height and the size, and change the face;",
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
      "name": "heading",
      "type": "string",
      "description": "Host-supplied heading; see the complete working data example below."
    },
    {
      "name": "paragraphs",
      "type": "Array<string>",
      "description": "Host-supplied paragraphs; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"anchor\": \"column\",\n  \"kind\": \"readingColumn\",\n  \"scene\": \"split-prism\",\n  \"tag\": \"End of the content and layout components\",\n  \"minHeight\": 800,\n  \"title\": \"Set a reading column.\",\n  \"lede\": \"Slide the measure, the line height and the size, and change the face. The text reflows as you go, and the page says whether each setting is short, comfortable or long: the rules of thumb behind the Prose component.\",\n  \"heading\": \"Handing a system over\",\n  \"paragraphs\": [\n    \"A handover is judged by the first change a stranger can make safely. Everything else — the diagrams, the wiki, the recorded walkthrough — is in service of that one moment, and it is worth designing for it from the first week rather than the last.\",\n    \"The people who built a system carry a great deal in their heads: why a table is shaped as it is, which job must never run twice, what the odd configuration value is for. None of it is secret, and almost none of it is written down. The work of a handover is the unglamorous work of writing it down while it is still fresh.\",\n    \"Write how it is run, not only how it is built. List what can go wrong, in the order it usually does. Say what you would do differently. A newcomer reading that has a head start of months.\"\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Designing for handover\",\n      \"to\": \"/insights/handover\"\n    },\n    {\n      \"label\": \"Design tokens\",\n      \"to\": \"/north/design-tokens\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"readingColumn\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
