/** Page count straight from each generated PDF — a CV that silently grows to 3 pages is a bug. */
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");

for (const f of readdirSync(dist).filter((f) => f.endsWith(".pdf"))) {
  const s = readFileSync(join(dist, f)).toString("latin1");
  const counts = [...s.matchAll(/\/Count\s+(\d+)/g)].map((m) => Number(m[1]));
  const pages = counts.length ? Math.max(...counts) : [...s.matchAll(/\/Type\s*\/Page[^s]/g)].length;
  console.log(`${f.padEnd(12)} pages: ${pages}`);
  if (pages > 2) {
    console.warn(`   !! ${f} is over 2 pages — trim content or tighten spacing`);
    process.exitCode = 1;
  }
}
