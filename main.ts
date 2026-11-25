// worst superpower: one line, at most 140 characters
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "The power to know exactly which pocket your keys are in — and to forget it the moment you reach for them.";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", line + "\n", "utf8");
