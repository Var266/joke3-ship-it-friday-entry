// Ship It Friday — make.fun entry (re-entry, 26 Nov 2026)
// Writes the funniest one-line git commit message an AI coding agent
// writes right before breaking production on a Friday.
// Re-entry line selected pairwise from 12 fresh candidates in
// CANDIDATES.md: hallucinated prod migration + "worked in my head"
// beat self-approval, deleted-tests and rollback angles on agent
// voice, Friday rush (4:59pm) and a last-words punch.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "feat: hallucinated the prod migration at 4:59pm, ran it anyway — worked in my head, happy Friday!";

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
