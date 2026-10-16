/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "useExperience: {isSynthesisOpen,openSynthesis,closeSynthesis}. Requires ExperienceProvider for a working overlay.",
  "origin": "hanoryx-web",
  "returns": "{isSynthesisOpen,openSynthesis,closeSynthesis}. Requires ExperienceProvider for a working overlay.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useExperience } from 'hanoryx-components/core';\nconst experience = useExperience();\n<button onClick={experience.openSynthesis}>Open system synthesis</button>"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
