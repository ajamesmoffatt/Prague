# Prague, from James
A shareable, interactive Prague guide: map on the right, suggestions on the left.

## Put it online (GitHub Pages)
1. Create a new GitHub repo and upload everything in this folder (keep the `data` folder).
2. Repo **Settings → Pages → Deploy from a branch → `main` / root → Save**.
3. After a minute your link is `https://<username>.github.io/<repo>/`.
Each place also has its own link, e.g. `.../#fred-ginger`.

## Editing
- All places live in `data/places.js`. Add or fill in `details`, `cost`, `website` and `wiki` for any entry.
- To add a place, copy an entry, give it a unique `id`, and set `lat`/`lng` (right-click in Google Maps to copy coordinates).
- Tips and food-to-try are in `tips.html`.
- Test locally by opening `index.html` in a browser.
- Map tiles are © OpenStreetMap contributors.
