---
title: "Talks, Podcasts and Mentions | Andrew Dell, Support Ops"
description: "Webinars, podcasts, customer stories and volunteer work featuring Andrew Dell, Support Operations Architect, on AI in customer support operations."
last_modified_at: 2026-10-17
---
# Talks and mentions

<ul class="list-dated">
{% for m in site.data.mentions %}
<li><time>{{ m.date }}</time><div>{% if m.url != "" %}<a href="{{ m.url }}">{{ m.title }}</a>{% else %}<strong>{{ m.title }}</strong>{% endif %} · {{ m.host }}<br><span class="eyebrow">{{ m.kind }} · {{ m.detail }}</span></div></li>
{% endfor %}
</ul>
