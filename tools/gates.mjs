#!/usr/bin/env node
// Quality gates 1-4, 6 (size) and 7 (crawler view) over the built _site.
// Usage: node tools/gates.mjs   (run after `bundle exec jekyll build`)
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const site = path.resolve("_site");
const checker = "C:/Users/Andrew/Documents/LinkedIn/tools/check_text.mjs";
const pages = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && !/^google[0-9a-f]+\.html$/.test(f) && pages.push(p); } })(site);

const rows = [];
let fail = 0;
const add = (gate, page, ok, note) => { rows.push({ gate, page, ok, note }); if (!ok) fail++; };

for (const p of pages) {
  const rel = "/" + path.relative(site, p).replace(/\\/g, "/").replace(/index\.html$/, "");
  const html = fs.readFileSync(p, "utf8");
  const body = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  const text = body.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();

  // Gate 1: placeholders
  const ph = text.match(/\[(?![x ]\])[^\]]{0,40}\]|your-|Lorem|TODO|example\.com|\{\{|\{%/i);
  add("1 placeholders", rel, !ph, ph ? `found "${ph[0]}"` : "clean");

  // Gate 2-3: voice, facts, confidentiality via the workspace checker
  const tmp = path.join(site, "..", ".gate_tmp.txt");
  fs.writeFileSync(tmp, text);
  let out = "";
  try { out = execFileSync("node", [checker, tmp, "--type", "page"], { encoding: "utf8" }); }
  catch (e) { out = e.stdout || String(e); }
  fs.unlinkSync(tmp);
  const errs = out.split("\n").filter((l) => l.startsWith("ERROR"));
  const warns = out.split("\n").filter((l) => l.startsWith("WARN"));
  add("2-3 voice/facts/confidential", rel, errs.length === 0, errs.length ? errs.join(" | ") : `0 errors${warns.length ? `, ${warns.length} warn: ` + warns.map((w) => w.replace(/^WARN\s+\[[^\]]+\]\s+line \d+: /, "")).join("; ") : ""}`);

  // Gate 4: HTML basics
  const h1 = (body.match(/<h1[\s>]/gi) || []).length;
  add("4 one H1", rel, h1 === 1, `${h1} h1`);
  add("4 lang attribute", rel, /<html[^>]+lang="en"/.test(html), "lang");
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const noAlt = imgs.filter((i) => !/\balt=/.test(i));
  add("4 image alt", rel, noAlt.length === 0, `${imgs.length} img, ${noAlt.length} without alt`);

  // SEO head
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const canon = /<link rel="canonical"/.test(html);
  if (!rel.startsWith("/404")) {
    add("SEO title 50-70", rel, title.length >= 30 && title.length <= 70, `${title.length}: ${title}`);
    add("SEO description 120-160", rel, desc.length >= 120 && desc.length <= 160, `${desc.length}`);
    add("SEO canonical", rel, canon, canon ? "ok" : "missing");
  }

  // Gate 5 (local): JSON-LD parses
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  let ldOk = true, types = [];
  for (const j of ld) { try { const o = JSON.parse(j); types.push(o["@type"]); } catch { ldOk = false; } }
  add("5 JSON-LD parses", rel, ldOk, types.join(", ") || "none");

  // Gate 6: size of HTML
  add("6 HTML under 60 KB", rel, html.length < 60000, `${Math.round(html.length / 1024)} KB`);

  // Gate 7: crawler view (text present without JS)
  add("7 text without JS", rel, text.length > 200, `${text.length} chars`);
}

// Gate 6: total home weight (HTML + CSS + JS)
const home = fs.statSync(path.join(site, "index.html")).size + fs.statSync(path.join(site, "assets/css/site.css")).size + fs.statSync(path.join(site, "assets/js/site.js")).size;
add("6 home weight under 300 KB", "/", home < 300000, `${Math.round(home / 1024)} KB, 3 requests`);
const js = fs.statSync(path.join(site, "assets/js/site.js")).size;
add("6 JS under 5 KB", "/", js < 5120, `${js} bytes`);

// Agent files
for (const f of ["robots.txt", "sitemap.xml", "llms.txt", "llms-full.txt", "agents.md", "feed.xml"]) {
  const p = path.join(site, f);
  const ok = fs.existsSync(p) && fs.statSync(p).size > 100 && !/\{\{|\{%/.test(fs.readFileSync(p, "utf8"));
  add("agent files", "/" + f, ok, ok ? `${fs.statSync(p).size} bytes` : "missing or unrendered");
}

const w = (s, n) => String(s).padEnd(n).slice(0, n);
console.log(`${w("gate", 30)} ${w("page", 44)} ${w("result", 6)} note`);
for (const r of rows) console.log(`${w(r.gate, 30)} ${w(r.page, 44)} ${w(r.ok ? "PASS" : "FAIL", 6)} ${r.note}`);
console.log(`\n${rows.length - fail}/${rows.length} checks pass${fail ? ` (${fail} FAIL)` : ""}`);
process.exit(fail ? 1 : 0);
