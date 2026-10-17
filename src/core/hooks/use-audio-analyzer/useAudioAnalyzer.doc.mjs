/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "Drives a small canvas visualizer from real frequency data. Only runs the shared rAF loop while audio is playing; draws a single static frame when paused (no perpetual loop). DPR-capped, cleaned up on unmount.",
  "origin": "hanoryx-web",
  "returns": "No return value. Paints the attached canvas using the AudioProvider analyser.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useAudioAnalyzer } from 'hanoryx-components/core';\nconst ref = useRef(null);\nuseAudioAnalyzer(ref, { bars: 16 });\n<canvas ref={ref} aria-label=\"Audio spectrum\" />"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
