import { existsSync, readFileSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

const esc = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/** Section headings and date words per language. cv.lang selects the set. */
const LABELS = {
  en: {
    summary: "Summary", experience: "Experience", projects: "Selected Projects",
    skills: "Skills", certifications: "Certifications", education: "Education",
    languages: "Languages", stack: "Stack:", present: "Present",
  },
  ru: {
    summary: "Кратко", experience: "Опыт работы", projects: "Проекты",
    skills: "Навыки", certifications: "Сертификаты", education: "Образование",
    languages: "Языки", stack: "Стек:", present: "наст. время",
  },
};

let T = LABELS.en;

/** Dates are shown as years only: "2021-04" -> "2021", "present" -> localised. */
function fmtDate(v) {
  if (!v) return "";
  if (/^present$/i.test(v)) return T.present;
  const m = /^(\d{4})/.exec(v);
  return m ? m[1] : v;
}

/** "2020 – 2021", or just "2020" when a role started and ended inside one year. */
const range = (from, to) => {
  const a = fmtDate(from), b = fmtDate(to);
  if (!a) return b;
  if (!b || a === b) return a;
  return `${a} – ${b}`;
};

const section = (title, body) => (body ? `<section><h2>${esc(title)}</h2>${body}</section>` : "");

const bullets = (items) =>
  items?.length ? `<ul>${items.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : "";

const stackLine = (stack) =>
  stack?.length ? `<p class="stack"><b>${esc(T.stack)}</b> ${esc(stack.join(" · "))}</p>` : "";

const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };

/** Inline the photo as a data URI so dist/cv.html and the PDF are self-contained. */
function photoTag(photo) {
  if (!photo) return "";
  const abs = join(here, "..", photo);
  if (!existsSync(abs)) throw new Error(`basics.photo not found: ${abs}`);
  const ext = extname(abs).toLowerCase();
  const mime = MIME[ext];
  if (!mime) throw new Error(`unsupported photo type: ${ext}`);
  const b64 = readFileSync(abs).toString("base64");
  return `<img class="photo" src="data:${mime};base64,${b64}" alt="">`;
}

/** PT Sans (OFL, assets/fonts) inlined like the photo, so every OS prints the same layout.
 *  The CSS asks for weights 500–700; anything from 550 up maps to the bold face. */
const FONTS = [
  ["PT_Sans-Web-Regular.ttf", "100 549"],
  ["PT_Sans-Web-Bold.ttf", "550 900"],
];

function fontFaces() {
  return FONTS.map(([file, weight]) => {
    const b64 = readFileSync(join(here, "..", "assets", "fonts", file)).toString("base64");
    return `@font-face { font-family: "PT Sans"; font-weight: ${weight}; src: url(data:font/ttf;base64,${b64}) format("truetype"); }`;
  }).join("\n");
}

function header(b) {
  const contact = [
    b.location && `<span>${esc(b.location)}</span>`,
    b.email && `<span><a href="mailto:${esc(b.email)}">${esc(b.email)}</a></span>`,
    b.phone && `<span>${esc(b.phone)}</span>`,
    ...(b.links ?? []).map(
      (l) => `<span><a href="${esc(l.url)}">${esc(l.display ?? l.url.replace(/^https?:\/\/(www\.)?/, ""))}</a></span>`
    ),
  ].filter(Boolean).join("");

  return `<header>
    <div class="head-text">
      <h1>${esc(b.name)}</h1>
      ${b.headline ? `<p class="headline">${esc(b.headline)}</p>` : ""}
      <p class="contact">${contact}</p>
    </div>
    ${photoTag(b.photo)}
  </header>`;
}

function experience(list) {
  return list.map((j) => `<div class="entry">
      <div class="entry-head">
        <div class="entry-title">${esc(j.role)} <span class="at">· ${esc(j.company)}</span></div>
        <div class="entry-meta">${esc(range(j.from, j.to))}${j.location ? ` · ${esc(j.location)}` : ""}</div>
      </div>
      ${j.context ? `<p class="context">${esc(j.context)}</p>` : ""}
      ${bullets(j.bullets)}
      ${stackLine(j.stack)}
    </div>`).join("");
}

function projects(list) {
  return list.map((p) => `<div class="entry">
      <div class="entry-head">
        <div class="entry-title">${esc(p.name)}</div>
        <div class="entry-meta">${p.url ? `<a href="${esc(p.url)}">${esc(p.url.replace(/^https?:\/\/(www\.)?/, ""))}</a>` : ""}</div>
      </div>
      ${p.blurb ? `<p class="context">${esc(p.blurb)}</p>` : ""}
      ${bullets(p.bullets)}
      ${stackLine(p.stack)}
    </div>`).join("");
}

function education(list) {
  return list.map((e) => `<div class="entry">
      <div class="entry-head">
        <div class="entry-title">${esc(e.school)}</div>
        <div class="entry-meta">${esc(range(e.from, e.to))}</div>
      </div>
      ${e.degree ? `<p class="context">${esc(e.degree)}</p>` : ""}
      ${e.note ? `<p class="context">${esc(e.note)}</p>` : ""}
    </div>`).join("");
}

const kv = (rows) =>
  `<div class="kv">${rows.map(([k, v]) =>
    `<div class="kv-row"><div class="kv-key">${esc(k)}</div><div class="kv-val">${esc(v)}</div></div>`
  ).join("")}</div>`;

export function render(cv) {
  const lang = cv.lang ?? "en";
  T = LABELS[lang] ?? LABELS.en;

  const body = [
    header(cv.basics),
    section(T.summary, cv.basics.summary ? `<p class="summary">${esc(cv.basics.summary)}</p>` : ""),
    section(T.experience, cv.experience?.length ? experience(cv.experience) : ""),
    section(T.projects, cv.projects?.length ? projects(cv.projects) : ""),
    section(T.skills, cv.skills?.length ? kv(cv.skills.map((s) => [s.group, s.items.join(" · ")])) : ""),
    section(T.certifications, cv.certifications?.length
      ? kv(cv.certifications.map((c) => [c.year ?? "", c.name])) : ""),
    section(T.education, cv.education?.length ? education(cv.education) : ""),
    section(T.languages, cv.languages?.length
      ? kv(cv.languages.map((l) => [l.name, l.level])) : ""),
  ].join("\n");

  const css = readFileSync(join(here, "style.css"), "utf8");

  return `<!doctype html>
<html lang="${esc(lang)}">
<head>
<meta charset="utf-8">
<title>${esc(cv.basics.name)} — CV</title>
<style>${fontFaces()}
${css}</style>
</head>
<body><div class="page">
${body}
</div></body>
</html>`;
}

/** Collect leftover placeholders so the build can warn instead of shipping "TODO" in a PDF. */
export function findTodos(node, path = "") {
  const out = [];
  if (typeof node === "string") {
    if (/TODO/i.test(node)) out.push(`${path}: ${node.slice(0, 70)}`);
  } else if (Array.isArray(node)) {
    node.forEach((v, i) => out.push(...findTodos(v, `${path}[${i}]`)));
  } else if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) out.push(...findTodos(v, path ? `${path}.${k}` : k));
  }
  return out;
}
