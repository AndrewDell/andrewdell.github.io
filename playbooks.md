---
title: "Free Playbooks for Support Operations Teams | Andrew Dell"
description: "Free, ungated checklists and templates for support ops and CX teams running AI agents, from Andrew Dell. Free to use and adapt under CC BY 4.0."
last_modified_at: 2026-10-17
---
# Playbooks

Practical checklists from real support operations work. Free to use and adapt under CC BY 4.0.

<div class="cards">
{% for pb in site.playbooks %}
<article class="card">
  <p class="eyebrow">Playbook · Updated {{ pb.last_modified_at | date: "%b %-d, %Y" }}</p>
  <h3><a href="{{ pb.url | relative_url }}">{{ pb.title }}</a></h3>
  <p>{{ pb.description }}</p>
  <ul class="tags">{% for t in pb.tags %}<li>{{ t }}</li>{% endfor %}</ul>
</article>
{% endfor %}
</div>

More are in progress: a human handoff rules template and an AI agent go-live checklist.
