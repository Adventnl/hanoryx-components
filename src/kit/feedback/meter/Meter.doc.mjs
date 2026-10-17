/* Documentation for Meter. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Meter",
  "area": "kit",
  "family": "feedback",
  "summary": "A gauge for a quantity inside a known range. The colour changes in the low and high zones and the zone is also written out for anyone who cannot see the colour.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "What is measured."
    },
    {
      "name": "value",
      "description": "The reading and its range."
    },
    {
      "name": "min",
      "description": "The reading and its range."
    },
    {
      "name": "max",
      "description": "The reading and its range."
    },
    {
      "name": "low",
      "description": "Below low or above high changes the zone."
    },
    {
      "name": "high",
      "description": "Below low or above high changes the zone."
    },
    {
      "name": "cells",
      "description": "How many cells to draw; the unit after the number."
    },
    {
      "name": "unit",
      "description": "How many cells to draw; the unit after the number."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "role=\"meter\" with min, max, now and a text value that includes the zone.",
    "A meter is not progress toward a goal — that is a ProgressBar."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Meter label=\"Storage used\" value={62} unit=\"%\" low={10} high={85} />"
    }
  ]
};
