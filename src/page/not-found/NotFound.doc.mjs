/* Documentation for NotFound. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "NotFound",
  "area": "page",
  "family": "template",
  "summary": "\"Signal lost\": the 404 echoes the address that was asked for and lists the real pages nearest to it, ranked by spelling from the navigation directory.",
  "sizing": {
    "rules": [
      "Full-viewport page section."
    ]
  },
  "related": [
    "TemplatePage"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Route path=\"*\" element={<NotFound />} />"
    }
  ]
};
