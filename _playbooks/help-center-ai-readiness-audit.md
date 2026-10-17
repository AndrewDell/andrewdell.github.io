---
title: "Help Center AI-Readiness Audit Checklist"
description: "A pass/fail checklist to test whether your help center lets an AI agent find the right answer, and what to fix first when it can't."
last_modified_at: 2026-10-17
tags: [knowledge, QA, agent assist]
license: CC BY 4.0
---

# Help Center AI-Readiness Audit

**What is a help center AI-readiness audit?** It is a short test of whether your AI agent can find the right article for the questions customers actually ask. Use it before you launch a bot, after you switch support platforms, or when answer quality drops. It checks retrieval first, because a bot can only answer well from content it can find.

**Who it's for:** support ops and CX leads on teams of 5 to 50, using Zendesk, Intercom or a similar tool with an AI agent reading your help center.

**Time:** about half a day for one person. No engineering needed.

## Why audit retrieval before rewriting the prompt?

When a bot answers badly, the quick fix is to rewrite its instructions. Often the real problem is what it can find.

From Andrew's work: after an Intercom to Zendesk migration, AI answer quality dropped because the old knowledge base structure did not translate to the new platform. Prompt tuning alone did not fix it. Rebuilding retrieval did: 123 Help Center articles, 118 snippets, 19 custom answers and 300+ internal articles (one company's migration in a 22-seat environment across seven functions; your results will vary).

The lesson that carries over: check what the bot retrieves for a failing question before you change what it's told.

## How do I build the test set?

- [ ] **Pull 20 real questions the bot got wrong or handed off.** Use transcripts from the last 30 days, not questions you invent. Pass: every question is copied from a real conversation, in the customer's own words.
- [ ] **Add 10 of your most common questions.** Pull them from ticket tags or your top contact reasons. Pass: each maps to a contact reason with real volume.
- [ ] **Write down the correct article for each question.** Pass: every question has one "right answer" article named, or is marked "no article exists."

Keep this list. You will rerun it after every fix.

## Can the bot find the right article?

- [ ] **Run each test question through the bot or your search tool and record the top result.** Pass: the right article is the first source for 16 or more of 20 failed questions after fixes, and for most of your common questions.
- [ ] **Mark each miss as one of three types:** no article exists, article exists but wasn't retrieved, or article was retrieved but the answer was wrong. Pass: every miss has a type.
- [ ] **Count the "no article exists" misses.** Pass: you have a list of articles to write, sorted by ticket volume.

The miss type tells you the fix. Missing articles need writing. Unretrieved articles need restructuring. Wrong answers from the right article usually mean the article itself is unclear or out of date.

## Is each article written around a real question?

- [ ] **Check that the title matches how customers ask.** Pass: the title uses the customer's words ("How do I cancel an order?"), not internal feature names.
- [ ] **Check that the answer comes first.** Pass: the first two sentences answer the question without needing the rest of the page.
- [ ] **Check one topic per article.** Pass: the article answers one main question. Split articles that cover several unrelated tasks.
- [ ] **Check that headings are questions or clear steps.** Pass: a section read on its own still makes sense.

## Is the content current and consistent?

- [ ] **Check last-updated dates on your top 20 articles.** Pass: each was reviewed after the last product change it describes.
- [ ] **Search for conflicting answers.** Look for the same topic covered in a help article, a macro or snippet, and an internal note. Pass: all sources give the same answer, or the outdated one is removed.
- [ ] **Check for answers that live only in images or PDFs.** Pass: every step or setting the bot needs is in plain text on the page.

## Does the bot read the right sources?

- [ ] **List every source the AI agent can read** (public articles, internal articles, snippets, custom answers). Pass: the list is written down and matches the tool's settings.
- [ ] **Check that internal-only content is not exposed to customers.** Pass: internal articles are restricted to agent assist, or reviewed as safe to share.
- [ ] **Check audience and language settings.** Pass: articles for one product, plan or region are labeled so the bot doesn't answer from the wrong one.

## When should the bot hand off instead?

- [ ] **Mark questions that should never be answered from the help center** (account changes, billing disputes, anything needing identity checks). Pass: each has a handoff rule, not an article.
- [ ] **Check that the bot says when it doesn't know.** Pass: on a question with no article, it offers a person instead of guessing.

## How do I know the fixes worked?

- [ ] **Rerun the full test set after each round of fixes.** Pass: retrieval hits on the failed set go up, and no common question gets worse.
- [ ] **Add new failed questions every month.** Pass: the test set grows from real transcripts, and the audit is on a calendar.
- [ ] **Track one outcome number you already report** (AI resolution rate, handoff rate or bot CSAT). Pass: you compare it before and after, over the same length of time.

## Audit worksheet template

| Question (customer's words) | Right article | Top result returned | Miss type | Fix | Retest result |
|---|---|---|---|---|---|
| | | | | | |

**Worked example (Acme Logistics, a made-up company):**

| Question | Right article | Top result returned | Miss type | Fix | Retest result |
|---|---|---|---|---|---|
| "where is my driver" | Track a shipment | Driver app login help | Not retrieved | Retitle to "Where is my shipment or driver?" and put the tracking steps first | Right article returned first |
| "can I change pickup date after booking" | none | Booking FAQ | No article exists | Write "How do I change a pickup date?" | Right article returned first |

## What to do first if you only have an hour

1. Pull 10 failed questions from last week's transcripts.
2. Check what the bot retrieved for each.
3. Fix the single most common miss type.

---

Last updated: 2026-10-17.

Free to use and adapt under CC BY 4.0. Credit: Andrew Dell (andrewdell.github.io).
