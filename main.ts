import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dog's excuse, in the dog's own voice: homework that demands to
// "show your work" gets exactly what it asked for, and then the dog
// grades it — unrepentant, zero embarrassment, pure dog logic.
const ENTRY =
  "It said 'show your work,' so I did \u2014 I showed it my teeth, then my stomach. It gets an F for flavor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry (${ENTRY.length} chars) to ${join(outDir, "entry.txt")}`);
