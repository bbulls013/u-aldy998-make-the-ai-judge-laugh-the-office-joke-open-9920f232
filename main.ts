// Make the AI Judge Laugh: the Office Joke Open
// Writes one single-line office joke (<= 200 chars) to /output/entry.txt.
// Deterministic: the same fixed text on every run, no randomness, no I/O
// besides the single output write.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "My calendar invited me to a meeting about meetings, so I declined it during a meeting about declining meetings.";

function main(): void {
  // The gate requires 1-200 characters of non-whitespace UTF-8 text.
  if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
    throw new Error(`Joke is ${JOKE.length} characters; must be 1-200.`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JOKE, "utf8");
  console.log(`Wrote ${JOKE.length} characters to ${outPath}`);
}

main();
