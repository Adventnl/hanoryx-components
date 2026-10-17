/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "Copy-to-clipboard with a short \"copied\" state for the button label.",
  "origin": "hanoryx-web",
  "returns": "[copied, copy]. copied is the last copied string or false. await copy(text) returns whether copying succeeded.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useCopy } from 'hanoryx-components/core';\nconst [copied, copy] = useCopy();\n<button onClick={() => copy(\"Example\")}>{copied ? \"Copied\" : \"Copy\"}</button>"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
