// Ship It Friday — make.fun entry
// Writes the funniest one-line git commit message an AI coding agent
// writes right before breaking production on a Friday.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: removed the rollback button, it was making everyone nervous — shipping to prod, happy Friday!";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-159
// characters, a single line, not only whitespace. Fail loudly here
// instead of shipping an entry the gate would refuse.
if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`entry is ${ENTRY.length} chars, gate allows 1-159`);
}
if (ENTRY.trim().length === 0 || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
