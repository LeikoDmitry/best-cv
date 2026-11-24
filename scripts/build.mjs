/**
 * data/*.json -> dist/<name>.html -> dist/<name>.pdf
 * PDFs are printed by headless Chrome, so @page + print CSS is the single source of layout truth.
 * Build everything with `npm run build`, or one language with `node scripts/build.mjs cv.ru`.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { release } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { render, findTodos } from "../src/render.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const dataDir = join(root, "data");

// Under WSL the Windows browser is reachable via /mnt/c, but it only understands Windows paths.
const isWsl = process.platform === "linux" && /microsoft/i.test(release());

const CHROME_CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];
if (isWsl) CHROME_CANDIDATES.push(...CHROME_CANDIDATES.filter((p) => p.startsWith("C:/")).map((p) => "/mnt/c" + p.slice(2)));

function findBrowser() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const hit = CHROME_CANDIDATES.find(existsSync);
  if (!hit) throw new Error("No Chrome/Edge found. Set CHROME_PATH to a Chromium binary.");
  return hit;
}

/** Paths and file URLs as the browser binary sees them (Windows .exe under WSL needs Windows paths). */
function browserPaths(browser) {
  if (!(isWsl && browser.endsWith(".exe"))) return { path: (p) => p, url: (p) => pathToFileURL(p).href };
  const wslpath = (flag, p) => execFileSync("wslpath", [flag, p], { encoding: "utf8" }).trim();
  return { path: (p) => wslpath("-w", p), url: (p) => "file:///" + encodeURI(wslpath("-m", p)) };
}

const only = process.argv[2]?.replace(/\.json$/, "");
const targets = readdirSync(dataDir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => basename(f, ".json"))
  .filter((name) => !only || name === only);

if (!targets.length) throw new Error(`no data file matched "${only}" in data/`);

mkdirSync(dist, { recursive: true });
const browser = findBrowser();
const forBrowser = browserPaths(browser);
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
    `--print-to-pdf=${forBrowser.path(pdfPath)}`,
    forBrowser.url(htmlPath),
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
