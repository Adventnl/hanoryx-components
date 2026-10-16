/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "useAudio: {status,isPlaying,start,stop,toggle,bins,getFrequencyData,available}. start() resolves a boolean and must follow a user gesture.",
  "origin": "hanoryx-web",
  "returns": "{status,isPlaying,start,stop,toggle,bins,getFrequencyData,available}. start() resolves a boolean and must follow a user gesture.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useAudio } from 'hanoryx-components/core';\nconst audio = useAudio();\n<button onClick={audio.toggle}>{audio.isPlaying ? \"Stop audio\" : \"Start audio\"}</button>"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
