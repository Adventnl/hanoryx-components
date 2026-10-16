/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Eight things a visitor might do. Call each one fine or not fine; the answer is revealed with the policy's reasoning, and a running tally shows how your reading compares.",
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
      "type": "Array<{ id: string; text: string; fine: boolean; why: string }>",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"fairLine\",\n  \"scene\": \"permission-orbit\",\n  \"tag\": \"End of acceptable use\",\n  \"minHeight\": 560,\n  \"title\": \"Where is the line?\",\n  \"lede\": \"Eight things a visitor might do. Decide for each one, then see how the policy reads it.\",\n  \"cases\": [\n    {\n      \"id\": \"quote\",\n      \"text\": \"Quote two sentences from a case study in a blog post, with a link back.\",\n      \"fine\": true,\n      \"why\": \"Short, credited quotation is ordinary use, and linking back is welcome.\"\n    },\n    {\n      \"id\": \"crawl\",\n      \"text\": \"Run a gentle crawler that identifies itself and respects the robots file.\",\n      \"fine\": true,\n      \"why\": \"Gentle, identified automated access that follows the robots file is fine.\"\n    },\n    {\n      \"id\": \"hammer\",\n      \"text\": \"Fetch every page as fast as the connection allows, from several machines at once.\",\n      \"fine\": false,\n      \"why\": \"That could slow the site for other people. Keep the rate reasonable.\"\n    },\n    {\n      \"id\": \"clone\",\n      \"text\": \"Copy the whole site, swap the name, and publish it as your own.\",\n      \"fine\": false,\n      \"why\": \"Presenting the site’s material as your own is not allowed.\"\n    },\n    {\n      \"id\": \"link\",\n      \"text\": \"Link to the Principles page from a newsletter.\",\n      \"fine\": true,\n      \"why\": \"Linking and sharing are welcome.\"\n    },\n    {\n      \"id\": \"probe\",\n      \"text\": \"Spot a way to read something that isn’t public, and keep reading it to see how far it goes.\",\n      \"fine\": false,\n      \"why\": \"Report it instead of using it. The disclosure page says how.\"\n    },\n    {\n      \"id\": \"print\",\n      \"text\": \"Print the privacy notice to PDF and keep it for your records.\",\n      \"fine\": true,\n      \"why\": \"Printing and saving pages for your own reference is welcome.\"\n    },\n    {\n      \"id\": \"pose\",\n      \"text\": \"Register a lookalike domain and email people as “Hanoryx Systems”.\",\n      \"fine\": false,\n      \"why\": \"Impersonating the company is not allowed, and may be unlawful.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Linking to this site\",\n      \"to\": \"/legal/linking\"\n    },\n    {\n      \"label\": \"Security disclosure\",\n      \"to\": \"/trust/disclosure\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"fairLine\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
