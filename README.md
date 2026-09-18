# Prime Auto Service | AI BUILDER course project

A deliberately fictional and self-contained auto-service website built with semantic HTML, custom CSS, JavaScript and original SVG artwork. This is an **educational demonstration, not a real business**. It does not accept bookings or collect personal information.

## Preview locally

Open `index.html` in a modern browser. Optional local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

```text
index.html
css/style.css
css/responsive.css
js/main.js
assets/images/hero-garage.svg
assets/images/precision-detail.svg
assets/icons/favicon.svg
netlify.toml
robots.txt
.gitignore
README.md
```

## Features

- Responsive, editorial-style visual design with original vector graphics, no external tracking and no third-party image dependencies.
- Semantic sections, skip link, keyboard-operable controls, FAQ disclosures, reduced-motion CSS and visible focus indicators.
- Service categories update the visible list and accessible count.
- Native `dialog` previews a request without collecting contact data, storing data or sending any requests.
- All business claims are openly fictional. There are no invented testimonials or contact details.
- `noindex` metadata, robots.txt and response headers keep the project out of search indexes while it is a demo.

## Customize for a real client

Before publishing any real-business version: obtain the client's written approval of all services and claims; replace the fictional identity, art and copy as instructed by the client; insert verified contact details; create and test a genuine booking channel if wanted; update privacy information, SEO metadata and indexing controls; check ownership/licensing of any replacement photos. **Never remove the demo disclaimer while leaving simulated interactions in place.**

## Deploy

The site is static. Netlify publish directory: `.` (the project root). There is no build command. Upload the folder or connect its repository. The default demo is intentionally noindexed. Do not attach an actual business domain until the fictional content is replaced and the booking path tested.

## Quality checks

1. Navigation operates with mouse and keyboard; Escape closes mobile navigation.
2. Service filters show counts 06, 02, 02, 02.
3. Any service's 'Explore request' opens the dialog with that service preselected.
4. 'Not sure' is initially selected in the generic dialog; note is optional and capped at 240 characters.
5. Preview displays the chosen service and optional note but sends no data.
6. Escape, the close button and the dialog backdrop close the dialog, and focus returns to the invoking control.
7. Check 320px, 390px, 768px and desktop viewports, zoom at 200%, reduced motion, link destinations and console errors.

## Credits

Original project artwork is authored for this sample. No stock photographs, fake reviews or paid assets are included.
