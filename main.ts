// Everyday Wonder, Two Days to Find the Line — one sentence of everyday wonder.
//
// The whole entry is a single sentence of UTF-8 text: 1-200 characters, one
// line, no trailing newline. Node stdlib only; no network, no reads outside
// this file. The program writes the sentence to /output/entry.txt.
//
// FINAL pick — V3, winner of the local pairwise duel 4-0 (see log):
// beat V1 (fridge hum), V2 (warm bus seat), V4 (supermarket door) and
// V5 (lost sock). The shadow arriving a step late is the freshest angle:
// a concrete, specific moment (wet pavement) with one perception shift
// that lands in a single read, and no worn phrase in it.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "My shadow arrives a step late on wet pavement, as if it stopped to look at something I missed.";

function main(): void {
  // Fail loudly rather than ever writing an entry the gate would refuse:
  // one sentence, 1-200 characters, no newline inside the text.
  const chars = [...SENTENCE].length;
  if (chars < 1 || chars > 200 || SENTENCE.includes("\n")) {
    throw new Error(`entry fails gate: ${chars} characters`);
  }
  const outDir = process.env.MAKEFUN_OUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, SENTENCE, "utf8");
}

main();
