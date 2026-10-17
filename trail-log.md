---
title: "Trail Log: Hikes, Service Events and SCORE"
description: "Dated notes from Andrew Dell outside work: Outdoorsy Adventure Team hikes and service events, and volunteer small-business mentoring with SCORE."
last_modified_at: 2026-10-17
---
# Trail Log

Notes from outside work: hikes and service events with the Outdoorsy Adventure Team, and volunteer mentoring with SCORE.

<ul class="list-dated">
{% assign entries = site.trail | sort: "date" | reverse %}
{% for e in entries %}<li><time>{{ e.date | date: "%Y-%m-%d" }}</time><div><a href="{{ e.url | relative_url }}">{{ e.title }}</a></div></li>{% endfor %}
</ul>
