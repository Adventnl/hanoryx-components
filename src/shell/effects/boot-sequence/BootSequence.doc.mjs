/* Documentation for BootSequence. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "BootSequence",
  "area": "shell",
  "family": "effects",
  "summary": "The cinematic intro: brand and a START control, a HUD calibration with terminal lines, then the lift. Starts the ambient track inside the click when one is configured.",
  "props": [
    {
      "name": "onComplete",
      "type": "function",
      "required": true
    },
    {
      "name": "onExited",
      "type": "function",
      "required": true,
      "description": "Called when the overlay has fully faded and can unmount."
    }
  ],
  "sizing": {
    "rules": [
      "Fixed full-viewport (`--z-boot`); the page cannot scroll while it is mounted."
    ]
  },
  "related": [
    "SiteShell"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<BootSequence onComplete={reveal} onExited={() => setMounted(false)} />"
    }
  ]
};
