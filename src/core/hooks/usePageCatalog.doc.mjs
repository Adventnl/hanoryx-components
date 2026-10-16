/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "Loads shared page metadata only while a catalog-backed control is mounted.",
  "origin": "hanoryx-web",
  "returns": "{catalog, error, retry}. catalog starts null; configureSite must register loadPageCatalog.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { usePageCatalog } from 'hanoryx-components/core';\nconst { catalog, error, retry } = usePageCatalog();\n// Show loading while catalog is null, and a retry button when error is true."
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
