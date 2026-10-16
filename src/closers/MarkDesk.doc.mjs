/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A desk that answers \"may I…?\". Pick a use from the list (arrow keys move between them); a verdict is stamped onto the slip with the one line that explains it and, where there is one, the page to read next.",
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
      "name": "cases",
      "type": "Array<{ id: string; label: string; verdict: string; tone: string; line: string; next: { label: string; to: string } }>",
      "description": "Host-supplied cases; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"markDesk\",\n  \"scene\": \"glyph-field\",\n  \"tag\": \"End of copyright\",\n  \"minHeight\": 560,\n  \"title\": \"May I…?\",\n  \"lede\": \"Pick what you would like to do. The desk answers in one line, and says what to do next.\",\n  \"cases\": [\n    {\n      \"id\": \"link\",\n      \"label\": \"Link to a page\",\n      \"verdict\": \"Yes\",\n      \"tone\": \"yes\",\n      \"line\": \"Linking is welcome. Use the page’s own title as the link text.\",\n      \"next\": {\n        \"label\": \"How to link well\",\n        \"to\": \"/legal/linking\"\n      }\n    },\n    {\n      \"id\": \"quote\",\n      \"label\": \"Quote a paragraph\",\n      \"verdict\": \"Briefly\",\n      \"tone\": \"maybe\",\n      \"line\": \"Short, credited quotation is ordinary. Say where it came from and link back.\",\n      \"next\": null\n    },\n    {\n      \"id\": \"name\",\n      \"label\": \"Name the company in a talk\",\n      \"verdict\": \"Yes\",\n      \"tone\": \"yes\",\n      \"line\": \"Referring to the company by name to describe it accurately is fine. Don’t imply endorsement.\",\n      \"next\": {\n        \"label\": \"Press & media\",\n        \"to\": \"/company/press\"\n      }\n    },\n    {\n      \"id\": \"logo\",\n      \"label\": \"Show the mark on my site\",\n      \"verdict\": \"Ask first\",\n      \"tone\": \"maybe\",\n      \"line\": \"Showing the mark can suggest a connection. Ask first, and say how it will appear.\",\n      \"next\": {\n        \"label\": \"Brand page\",\n        \"to\": \"/company/brand\"\n      }\n    },\n    {\n      \"id\": \"code\",\n      \"label\": \"Reuse the site’s code\",\n      \"verdict\": \"Ask first\",\n      \"tone\": \"maybe\",\n      \"line\": \"The site’s own code belongs to the company. The third-party libraries under it have their own licences.\",\n      \"next\": {\n        \"label\": \"Licences & notices\",\n        \"to\": \"/trust/licences\"\n      }\n    },\n    {\n      \"id\": \"copy\",\n      \"label\": \"Copy the whole site\",\n      \"verdict\": \"No\",\n      \"tone\": \"no\",\n      \"line\": \"Copying the site to publish as your own is not allowed.\",\n      \"next\": null\n    },\n    {\n      \"id\": \"fonts\",\n      \"label\": \"Use the same typefaces\",\n      \"verdict\": \"Yes\",\n      \"tone\": \"yes\",\n      \"line\": \"They are open fonts from their designers. Check each licence; none of it is the company’s to grant.\",\n      \"next\": null\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Acceptable use\",\n      \"to\": \"/legal/acceptable-use\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"markDesk\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
