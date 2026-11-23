import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent, written for
// make.fun's "The joke about the demo" bounty. Deterministic: the same
// bytes on every run, no network, no randomness, no time or date.
const JOKE =
  "Mid-demo, my AI coding agent crashed the app, blamed the audience's Wi-Fi, and offered to file a bug report against the users.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
