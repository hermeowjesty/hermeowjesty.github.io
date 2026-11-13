# Katja Milosevic — Portfolio

A lightweight static portfolio for GitHub Pages, built with HTML, CSS, and JavaScript. No build step or dependencies.

## Preview

Run `python3 -m http.server 8000` in this folder, then visit http://localhost:8000.

## Pages

- `index.html`: introductory home page.
- `work.html`: three app showcases and project detail popups.
- `human.html`: personal stories and photos.
- `resume.html`: professional experience and print / save as PDF.

## Personalize

- Update the three app cards in `work.html` and their detail text in `script.js`.
- Replace the About Me placeholder stories and tags in `human.html` with your own.
- Add photos in an `assets/` directory and replace each `.photo-placeholder` with an image and descriptive alt text. Use `width:100%; height:275px; object-fit:cover` for the larger photo.
- Update `resume.html` with your current roles. Current content is based on the 2024 résumé; the original PDF is not published.
- The footer uses the email in the supplied résumé. Add GitHub and LinkedIn links when ready.

## GitHub Pages

In repository Settings → Pages, select **Deploy from a branch**, your default branch, and **/(root)**. The site can then be published by pushing these files. This version has not been committed or pushed by the assistant.

Fonts load from Google Fonts, with local sans-serif fallbacks. Motion respects the system's reduced-motion setting.
