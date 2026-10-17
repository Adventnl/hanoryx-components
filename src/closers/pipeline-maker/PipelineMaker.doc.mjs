/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Assemble a checks pipeline: choose the checks, put them in order, and a workflow file comes out, with the same sequence as a local script. The commands are placeholders for your project's own.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"pipelineMaker\",\n  \"anchor\": \"pipeline\",\n  \"scene\": \"circuit-trace\",\n  \"tag\": \"End of tooling\",\n  \"minHeight\": 780,\n  \"title\": \"Assemble a pipeline.\",\n  \"lede\": \"Choose the checks, put them in order, and a workflow file comes out, with the same sequence as a local script. The commands are placeholders for your own project’s.\",\n  \"onward\": [\n    {\n      \"label\": \"How we check the work\",\n      \"to\": \"/north/quality\"\n    },\n    {\n      \"label\": \"Site engineering\",\n      \"to\": \"/engineering\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"pipelineMaker\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
