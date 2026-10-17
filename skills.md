---
title: "Claude Skills for Support Operations Teams | Andrew Dell"
description: "Claude skills Andrew Dell is preparing to share with support teams: what each does for a support team, how to install it, and what it never does."
last_modified_at: 2026-10-17
---
# Claude Skills

I build Claude skills for daily support work, with versioned memory and human approval before anything changes. Public versions are being prepared now, starting with a skill that teaches building with an AI agent in the browser.

Each skill will be published here with what it does for a support team, how to install it, and what it never does, under the MIT license.

{% for s in site.skills %}
- [{{ s.title }}]({{ s.url | relative_url }}): {{ s.description }}
{% endfor %}
