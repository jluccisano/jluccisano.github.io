# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Branches

- `develop` holds the Jekyll sources. Make all source changes here, through pull requests.
- `master` holds the generated site that GitHub Pages serves. It is written only by the deploy job; never edit it by hand.

## Commands

```bash
bundle install                 # Ruby gems (github-pages, jekyll-include-cache)
bundle exec jekyll serve       # local preview on http://localhost:4000
bundle exec jekyll build       # build into _site/ (same as CI)
```

JavaScript bundle (theme scripts only, requires Node):

```bash
npm install
npm run build:js               # assets/js/*.js -> assets/js/main.min.js, with banner
```

There is no automated test suite. Verification is a successful `jekyll build`; CI runs it on every pull request.

## Architecture

- The theme is pulled at build time through `remote_theme` in `_config.yml` (Minimal Mistakes 4.28.1). The local `package.json` and `minimal-mistakes-jekyll.gemspec` are leftovers from the theme and only matter for the JS bundle.
- Portfolio pages live in `_pages/`: `splash_page.md` (home), `about.md` / `about_fr.md`, `experience.md`, `projects.md`. Navigation is defined in `_data/navigation.yml`.
- Articles are in `_posts/`. The French version of a post ends with `_fr.md` and links to its English counterpart at the top.
- Deploy: `.github/workflows/build-deploy.yml` builds on every pull request, and on push to `develop` publishes `_site/` to `master` using `GITHUB_TOKEN`.
- Comments use Disqus (`comments.provider` in `_config.yml`).

## Content rules

- Articles dated 2016 to 2018 start with a legacy notice; keep it when editing them.
- Do not put personal data (email, public IP, Wi-Fi credentials, usernames) in posts.
- Do not change heading text casually: headings define anchors used by internal links.
