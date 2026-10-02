/**
 * data/*.json -> dist/<name>.html -> dist/<name>.pdf
 * PDFs are printed by headless Chrome, so @page + print CSS is the single source of layout truth.
 * Build everything with `npm run build`, or one language with `node scripts/build.mjs cv.ru`.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { render, findTodos } from "../src/render.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const dataDir = join(root, "data");

const CHROME_CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
];

function findBrowser() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const hit = CHROME_CANDIDATES.find(existsSync);
  if (!hit) throw new Error("No Chrome/Edge found. Set CHROME_PATH to a Chromium binary.");
  return hit;
}

const only = process.argv[2]?.replace(/\.json$/, "");
const targets = readdirSync(dataDir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => basename(f, ".json"))
  .filter((name) => !only || name === only);

if (!targets.length) throw new Error(`no data file matched "${only}" in data/`);

mkdirSync(dist, { recursive: true });
const browser = findBrowser();
let todoTotal = 0;

for (const name of targets) {
  const cv = JSON.parse(readFileSync(join(dataDir, `${name}.json`), "utf8"));
  const htmlPath = join(dist, `${name}.html`);
  const pdfPath = join(dist, `${name}.pdf`);

  writeFileSync(htmlPath, render(cv), "utf8");

  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: ["ignore", "ignore", "pipe"] });

  console.log(`${name.padEnd(8)} [${cv.lang}] -> dist/${name}.pdf  (${(statSync(pdfPath).size / 1024).toFixed(1)} KB)`);

  const todos = findTodos(cv);
  todoTotal += todos.length;
  for (const t of todos) console.warn(`   !! ${name}.json ${t}`);
}

if (todoTotal) {
  console.warn(`\n${todoTotal} placeholder(s) left — fix before sending.`);
  process.exitCode = 1;
}
