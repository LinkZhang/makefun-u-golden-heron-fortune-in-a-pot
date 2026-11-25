// Fortune in a Pot — a kind, funny fortune for the houseplant on the windowsill.
// One line, at most 120 characters, fortune cadence: a prediction about the plant's
// own future, warm to plant and keeper, no doom, no withering, no mockery.
// The joke's structure: the prediction is about the sun, not the plant's effort —
// the plant does nothing, yet the keeper will swear it grew overnight.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Soon the sun will linger on your leaves a little longer, and your keeper will swear you grew overnight.";

// Gate self-check (RULES.txt): 1–120 characters, non-whitespace UTF-8, exactly one line.
if (entry.length < 1 || entry.length > 120) {
  throw new Error(`entry is ${entry.length} chars, must be 1–120`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
console.log(`wrote ${outDir}/entry.txt (${entry.length} chars)`);
