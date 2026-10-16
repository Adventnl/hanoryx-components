/* Documentation for Pagination. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Pagination",
  "area": "kit",
  "family": "navigation",
  "summary": "Page buttons with the first, the last and the neighbours of the current one, “…” for what is skipped, and previous and next that stop at the ends.",
  "props": [
    {
      "name": "page",
      "description": "onChange receives the new page number."
    },
    {
      "name": "defaultPage",
      "description": "onChange receives the new page number."
    },
    {
      "name": "onChange",
      "description": "onChange receives the new page number."
    },
    {
      "name": "pages",
      "type": "number",
      "default": "1",
      "description": "The total."
    },
    {
      "name": "siblings",
      "type": "number",
      "default": "1",
      "description": "How many neighbours to show each side of the current page."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "Through the buttons; Enter or Space presses one."
    }
  ],
  "notes": [
    "The current page is aria-current and each button says “Page 6”, not just “6”.",
    "A gap that stands for a single page is shown as that page instead of “…”."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Pagination page={page} pages={20} onChange={setPage} />"
    }
  ]
};
