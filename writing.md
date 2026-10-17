---
title: "Writing on AI in Customer Support | Andrew Dell"
description: "Posts and newsletter issues from Andrew Dell on AI agents, knowledge bases, escalations and support operations, with real examples and numbers."
last_modified_at: 2026-10-17
---
# Writing

I write about AI in customer support, knowledge bases, escalations and support tooling. New posts go out on [LinkedIn](https://www.linkedin.com/in/andrew-p-dell) a few times a week.

{% if site.posts.size > 0 %}
<ul class="list-dated">
{% for post in site.posts %}<li><time>{{ post.date | date: "%Y-%m-%d" }}</time><div><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div></li>{% endfor %}
</ul>
{% endif %}
