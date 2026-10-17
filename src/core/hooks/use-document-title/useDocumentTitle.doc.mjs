/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "Sets the document title for a page (external sync — not React state). Pass the page label; the base brand is appended automatically.",
  "origin": "hanoryx-web",
  "returns": "No return value. Updates the document title and optional description when arguments change.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useDocumentTitle } from 'hanoryx-components/core';\nuseDocumentTitle(\"Systems\", \"Operational software systems.\");"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
