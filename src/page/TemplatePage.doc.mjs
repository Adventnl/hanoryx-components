/* Documentation for TemplatePage. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "TemplatePage",
  "area": "page",
  "family": "template",
  "summary": "A route element for a data-driven page: loads the page by key through the registered `loadPage` source (its own code-split chunk), suspends on the route fallback, and shows the 404 when there is no data.",
  "props": [
    {
      "name": "routeKey",
      "type": "string",
      "required": true,
      "description": "The page key, e.g. `systems/automation`."
    }
  ],
  "related": [
    "PageTemplate",
    "configureSite"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Route path=\"/systems\" element={<TemplatePage routeKey=\"systems\" />} />"
    }
  ]
};
