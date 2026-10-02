# Software Engineer CV

Two language versions from one template. Content lives in `data/`, layout in `src/style.css`.
Edit the JSON, run the build, get PDFs.

```
npm run build            # data/*.json -> dist/*.html -> dist/*.pdf  (cv + cv.ru)
node scripts/build.mjs cv.ru   # just one version
npm run pages            # fail if any PDF grew past 2 pages
```

| file             | version                                  |
| ---------------- | ---------------------------------------- |
| `data/cv.json`   | English                                  |
| `data/cv.ru.json`| Russian                                  |

Both are full documents, not translations of each other at build time — wording is edited per
language. Section headings, month names and the "Stack:" label come from the `LABELS` table in
`src/render.mjs`, keyed by the `lang` field.

## How it works

- `src/render.mjs` turns the JSON into a single-column HTML document and inlines the photo as a
  data URI, so each `dist/*.html` and PDF is a self-contained file you can email as-is.
- `scripts/build.mjs` prints that HTML with headless Chrome (or Edge). The `@page` rule and the
  print CSS are the only source of layout truth — no PDF library to disagree with the browser.
  Override the browser with `CHROME_PATH=...` if neither is in the default location.
- The build exits non-zero and lists every remaining `TODO` string in the data, so a placeholder
  can never end up in a PDF you send to someone.

## Layout choices

- Single text column, real text, no layout tables — survives automated CV parsers (ATS).
- Photo in the header: conventional for CIS and DACH applications. Drop `basics.photo` for markets
  where it is not (UK, US, Ireland, Netherlands).
- Entries are `break-inside: avoid`, so a job never splits across the page boundary.

## Sources

`Profile.pdf` (LinkedIn export) and the hh.ru resume (no longer kept in the repo) are the raw
inputs the content was reconciled from. Where the two disagreed, the hh.ru version was used — it is more
detailed and more recently updated. The exception is education, see the memory notes.
