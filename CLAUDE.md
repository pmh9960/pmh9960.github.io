# pmh9960.github.io

Personal homepage served by GitHub Pages from `master`.

## CV

- Source: Overleaf project https://www.overleaf.com/project/63118f49ac74c9608bfa1310 (git bridge `https://git.overleaf.com/63118f49ac74c9608bfa1310`).
- `assets/cv_minhopark.pdf` is the compiled PDF of that project; the homepage's "CV" link points to it.
- When adding or changing experience, publications, or news on the homepage, ask whether the CV should be updated too.
- To edit the CV, clone it with the `overleaf` skill, edit and push, then replace `assets/cv_minhopark.pdf` with the newly compiled PDF.
- Local clone: `C:\Users\MinhoPark\overleaf\overleaf-cv`. Overleaf compiles it with TeX Live 2021 / moderncv 2.3.1. Local TeX Live 2025 ships moderncv 2.4.1, which drops the blue name and section titles, so build locally against the saved 2.3.1 copy: `TEXINPUTS="C:\Users\MinhoPark\overleaf\tex-deps\moderncv-2.3.1//;" latexmk -pdf main.tex`.
- The preamble wraps `\cventry` and `\cvitem` so an entry never splits across pages. Check page breaks after every change anyway.
- Don't confuse it with the PhD thesis project (`69b3b8c5d9044e76a16b2e04`).
- Never commit Overleaf git tokens or link-sharing URLs (`/read/...`, `/edit/...`); this repo is public.
