/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "IntersectionObserver wrapper for cheap \"is this on screen\" reveals.",
  "origin": "hanoryx-web",
  "returns": "[ref, inView]. once defaults to true; with once:false visibility keeps toggling.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useElementInView } from 'hanoryx-components/core';\nconst [ref, inView] = useElementInView({ once: true });\n<div ref={ref} data-visible={inView}>Content</div>"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
