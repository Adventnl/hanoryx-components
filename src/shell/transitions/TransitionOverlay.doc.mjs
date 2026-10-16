/* Documentation for TransitionOverlay. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "TransitionOverlay",
  "area": "shell",
  "family": "transitions",
  "summary": "The route \"current\": navigating does not cover the screen — a thin red line travels the viewport with the destination written at its end. Skipped under reduced motion.",
  "sizing": {
    "rules": [
      "Fixed, pointer-events none, `--z-route-transition`. No layout."
    ]
  },
  "related": [
    "PageTransition"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<TransitionOverlay />"
    }
  ]
};
