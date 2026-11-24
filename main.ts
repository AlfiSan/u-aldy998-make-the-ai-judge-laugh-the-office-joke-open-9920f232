// Office Joke Open — one-line office comedy for the make.fun judge.
//
// The joke: an office AI asked to summarise a two-hour meeting, and its
// one-sentence verdict is the most honest meeting summary ever written.
// The laugh lands on the last three words — everyone left feeling heard
// while nothing was actually decided.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked the office AI to summarise our two-hour meeting and it replied with one sentence: 'Nothing was decided, but everyone felt heard.'";

// The gate only accepts a single line of 1–200 characters, non-whitespace.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${chars}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

// Read back and confirm the file holds exactly the joke, byte for byte.
import { readFileSync } from "node:fs";
if (readFileSync(outPath, "utf8") !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
