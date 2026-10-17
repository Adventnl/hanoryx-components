/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A storyboard of the shopping and transaction experience, from first look to confirmation. Five abstract frames, each with one small interaction; a scrubber and ← → move through them, and Play walks the whole journey.",
  "props": [
    {
      "name": "eyebrow",
      "type": "string",
      "description": "Host-supplied eyebrow; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "intro",
      "type": "string",
      "description": "Host-supplied intro; see the complete working data example below."
    },
    {
      "name": "stages",
      "type": "Array<{ id: string; label: string; glyph: string; title: string; body: string }>",
      "description": "Host-supplied stages; see the complete working data example below."
    },
    {
      "name": "caption",
      "type": "string",
      "description": "Host-supplied caption; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"experienceStoryboard\",\n  \"anchor\": \"journey\",\n  \"railLabel\": \"The journey\",\n  \"scene\": \"transaction-wave\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"The journey\",\n  \"title\": \"Five frames, one path.\",\n  \"intro\": \"A storyboard of the experience, from first look to confirmation. Each frame describes an intent; each has one small thing to try.\",\n  \"caption\": \"Abstract wireframes — shapes, not screenshots. Not the product, and no real catalogue, prices or payment details.\",\n  \"stages\": [\n    {\n      \"id\": \"discover\",\n      \"label\": \"Discover\",\n      \"glyph\": \"lens\",\n      \"title\": \"Find your way in\",\n      \"body\": \"The first look sets the tone: what is here, and how to start looking.\"\n    },\n    {\n      \"id\": \"choose\",\n      \"label\": \"Choose\",\n      \"glyph\": \"cube\",\n      \"title\": \"Make a choice easy\",\n      \"body\": \"Options are comparable at a glance, and a choice is one clear tap.\"\n    },\n    {\n      \"id\": \"basket\",\n      \"label\": \"Basket\",\n      \"glyph\": \"cart\",\n      \"title\": \"Keep it in view\",\n      \"body\": \"What has been picked stays visible and easy to change.\"\n    },\n    {\n      \"id\": \"pay\",\n      \"label\": \"Pay\",\n      \"glyph\": \"key\",\n      \"title\": \"Make the commitment calm\",\n      \"body\": \"The step where it counts is quiet and orderly: clear progress, no surprises.\"\n    },\n    {\n      \"id\": \"confirm\",\n      \"label\": \"Confirm\",\n      \"glyph\": \"shield\",\n      \"title\": \"Close the loop\",\n      \"body\": \"A clear confirmation that it worked, and what happens next.\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"experienceStoryboard\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
