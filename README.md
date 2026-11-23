# jluccisano.github.io

Personal portfolio and tutorials, built with Jekyll and the
[Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme (pinned in `_config.yml` via `remote_theme`).

Published at https://jluccisano.github.io.

## Run locally

Requires Ruby 3.x and Bundler.

```bash
bundle install
bundle exec jekyll serve      # http://localhost:4000
bundle exec jekyll build      # output in _site/
```

Restart `jekyll serve` after editing `_config.yml`.

## Structure

- `_pages/` : portfolio pages (home, About, Experience, Projects) and the tutorial index pages.
- `_posts/` : articles. English posts are `YYYY-MM-DD-slug.md`; French versions end with `_fr.md`.
- `_data/navigation.yml` : header menu.
- `_config.yml` : site, author and theme settings.
- `assets/` : images, styles and scripts.

## Publishing

1. Open a pull request. The workflow in `.github/workflows/build-deploy.yml` builds the site to catch errors.
2. Merge into `develop`. The same workflow builds the site and publishes the output to `master`, which GitHub Pages serves.

Do not edit the generated output on `master` by hand; it is overwritten on every deploy.

## Notes

- Posts dated 2016 to 2018 carry a legacy notice: their software versions and commands may be outdated.
- Comments use Disqus.
