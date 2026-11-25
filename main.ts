// How Many Tabs Do You Have Open? — one number in digits, nothing else.
// The program writes the number to /output/entry.txt (UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "823";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
