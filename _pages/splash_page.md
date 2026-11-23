---
title: "Practice makes perfect"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00
author_profile: true
header:
  overlay_image: /assets/images/caspar-rubin-224229.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "Share and learn more knowledge to go ever further"

intro:
  - show_avatar: true
  - excerpt: "I am Joseph Luccisano, Senior Principal Engineer at Semtech. For 17 years, I have designed distributed systems at the intersection of IoT, telecom and cloud. This site shares my projects, my career and the tutorials I wrote along the way."
feature_row1:
  - image_path: /assets/images/me.jpg
    alt: "Portrait of Joseph Luccisano"
    title: "About"
    excerpt: "Who I am, how I work and what I enjoy building."
    url: /about/
    btn_label: "Read more"
    btn_class: "btn--inverse"
feature_row2:
  - image_path: /assets/images/experience-architecture.svg
    alt: "Diagram of a cloud-native, event-driven data platform"
    title: "Experience"
    excerpt: "My career so far, from IoT integrations to the AirVantage cloud platform."
    url: /experience/
    btn_label: "Read more"
    btn_class: "btn--inverse"
feature_row3:
  - image_path: /assets/images/anthony-rossbach-59486.jpg
    alt: "Raspberry Pi sprinkler system"
    title: "Projects"
    excerpt: "Raspberry Pi automation, bike and wheel building, a drone and a workout planner."
    url: /projects/
    btn_label: "Read more"
    btn_class: "btn--inverse"
feature_row4:
  - image_path: /assets/images/raspberry.jpg
    alt: "Raspberry Pi board"
    title: "Tutorials"
    excerpt: "Step-by-step guides on Raspberry Pi, Linux, Docker and more."
    url: /tutorials/
    btn_label: "Read more"
    btn_class: "btn--inverse"
---
{% include feature_row id="intro" type="center" %}

{% include feature_row id="feature_row1" type="left" %}

{% include feature_row id="feature_row2" type="right" %}

{% include feature_row id="feature_row3" type="left" %}

{% include feature_row id="feature_row4" type="right" %}
