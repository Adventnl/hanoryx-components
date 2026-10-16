/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "useLenis: {scrollTo,stop,start,getLenis}. The instance is owned and cleaned up by LenisProvider.",
  "origin": "hanoryx-web",
  "returns": "{scrollTo,stop,start,getLenis}. The instance is owned and cleaned up by LenisProvider.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useLenis } from 'hanoryx-components/core';\nconst scroll = useLenis();\n<button onClick={() => scroll.scrollTo(0)}>Back to top</button>"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
