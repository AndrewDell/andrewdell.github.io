# Quality gate report: first local build (2026-10-17)
Built with Jekyll 3.10 (github-pages gem, Ruby 3.3) and served locally. Not pushed to GitHub.

| Gate | Result | Notes |
|---|---|---|
| 1 Placeholders | PASS | No [placeholders], your-, Lorem, TODO, example.com or unrendered Liquid in built HTML |
| 2 Facts and never-claim | PASS | 0 errors on every page. Warnings only for the error code "404" and the playbook's audience line "teams of 5 to 50" (not claims) |
| 3 Confidentiality | PASS | Checker clean; manual read found no colleague, customer or unreleased product names |
| 4 HTML and accessibility | PASS | One H1 per page, lang="en", no images yet, skip link, visible keyboard focus, no sideways scroll at 360px on all 9 pages, no console errors |
| 5 Structured data | PARTIAL | ProfilePage/Person and Article JSON-LD parse locally. Google Rich Results Test and the schema.org validator need the live URL |
| 6 Performance | PASS (local) | Home is 3 requests (HTML, CSS, JS) and well under 300 KB; JS under 5 KB. Lighthouse not run yet |
| 7 Crawler view | PASS | Full text present in HTML on every page without JavaScript |
| 8 Agent readiness | AFTER DEPLOY | is-agentic.com and isitagentready.com need the live URL. robots.txt, sitemap.xml, llms.txt, llms-full.txt, agents.md and feed.xml all build |
| 9 Impeccable | NOT RUN | Not installed yet |

Automated checks: `node tools/gates.mjs` → 115/115 pass.

Open items before push:
- No social preview image yet (1200x627); pages currently have none instead of a broken one.
- Mention links for the CX Network webinar, Botpress customer story and podcast need exact URLs (they render as text until then).
- Playbook PDF not generated yet (no download link shown).
- Andrew to confirm: the playbook's migration story wording, and all page copy.
