---
title: "Useful linux commands"
related: true
header:
  overlay_image: /assets/images/maico-amorim-57141.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  teaser: /assets/images/maico-amorim-57141.jpg
categories:
  - Computer
tags:
  - linux
---

> **Legacy post.** This article was written between 2016 and 2018. Software versions, commands and services mentioned here may be outdated. Check the official documentation before running anything.

### Useful commands

- Get process ID by port

```bash
lsof -i tcp:3690
```
or 

```bash
netstat -nlp | grep 8080
```

- Find the largest 10 files (linux/bash)

```bash
find . -type f -print0 | xargs -0 du | sort -n | tail -10 | cut -f2 | xargs -I{} du -sh {}
```

- Find the largest 10 directories

```bash
find . -type d -print0 | xargs -0 du | sort -n | tail -10 | cut -f2 | xargs -I{} du -sh {}
```
- Allow a port

```bash
sudo iptables -I INPUT -p tcp --dport 5672 -j ACCEPT
```

- Get the machine hardware architecture (not the processor type)

```bash
uname -m
```

- Delete all files older than the given date

```bash
find . ! -newermt 2017-09-06 -exec rm -rf {} \;
```

Find the list of extensions in a tree

find . -type f | perl -ne 'print $1 if m/\.([^.\/]+)$/' | sort -u

Find by extension

find . -type f  -name "*.mp*"
