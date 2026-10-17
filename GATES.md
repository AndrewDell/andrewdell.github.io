# Quality gate report: launch (2026-10-17)
Live at https://andrewdell.github.io (pushed and Pages enabled 2026-10-17).
Built with Jekyll 3.10 (github-pages gem, Ruby 3.3) and served locally. Not pushed to GitHub.

| Gate | Result | Notes |
|---|---|---|
| 1 Placeholders | PASS | No [placeholders], your-, Lorem, TODO, example.com or unrendered Liquid in built HTML |
| 2 Facts and never-claim | PASS | 0 errors on every page. Warnings only for the error code "404" and the playbook's audience line "teams of 5 to 50" (not claims) |
| 3 Confidentiality | PASS | Checker clean; manual read found no colleague, customer or unreleased product names |
| 4 HTML and accessibility | PASS | One H1 per page, lang="en", no images yet, skip link, visible keyboard focus, no sideways scroll at 360px on all 9 pages, no console errors |
| 5 Structured data | PARTIAL | Live pages: ProfilePage + WebSite on home and about, Article + BlogPosting on the playbook, canonicals correct. Google Rich Results Test and schema.org validator still to run in a browser |
| 6 Performance | PASS (local) | Home is 3 requests (HTML, CSS, JS) and well under 300 KB; JS under 5 KB. Lighthouse not run yet |
| 7 Crawler view | PASS (live) | Fetched as OAI-SearchBot: every page 200 with full text; agent files served with correct types (agents.md as text/markdown); missing pages return a real 404 |
| 8 Agent readiness | DONE (live) | is-agentic.com 78/100 (was 77 before adding contact, privacy and OG image). isitagentready.com 20/100, Level 1. Remaining gaps need server headers (Markdown negotiation, Markdown 404, Link headers) or DNS records, which GitHub Pages can't provide; API/OAuth/MCP/commerce checks don't apply |
| 9 Impeccable | NOT RUN | Not installed yet |

Automated checks: `node tools/gates.mjs` → 115/115 pass.

Open items before push:
- Mention links for the CX Network webinar, Botpress customer story and podcast need exact URLs (they render as text until then).
- Playbook PDF not generated yet (no download link shown).
- Andrew to confirm: the playbook's migration story wording, and all page copy.
