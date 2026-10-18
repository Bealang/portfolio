# Local SEO Landing Pages for Small Businesses (Małopolska Hubs)

## Goal
Implement modular, high-converting, and distinct local landing pages for small businesses across 10 strategic hubs in Małopolska with isolated CSS architecture, zero AI-slop, full dynamic theme & color integration with Web2Sell's ThemePicker system, and zero regressions on existing core pages.

## Tasks
- [x] Task 1: Create dedicated styling directory `src/styles/locations/` and base local component styles → Verify: Directory exists and stylesheets are isolated
- [x] Task 2: Build `src/styles/locations/myslenice.css` and `src/pages/strony-internetowe-myslenice.astro` (Local small services, trades, real podologist case) → Verify: Page builds cleanly
- [x] Task 3: Build `src/styles/locations/krakow.css` and `src/pages/strony-internetowe-krakow.astro` (Small businesses, cafés, QR menus, mobile speed vs bloated agencies) → Verify: Page builds cleanly
- [x] Task 4: Build `src/styles/locations/wadowice.css` and `src/pages/strony-internetowe-wadowice.astro` (Local services, trade, Wadowice & Andrychów) → Verify: Page builds cleanly
- [x] Task 5: Build `src/styles/locations/kalwaria.css` and `src/pages/strony-internetowe-kalwaria-zebrzydowska.astro` (Carpentry, furniture, custom estimation) → Verify: Page builds cleanly
- [x] Task 6: Build `src/styles/locations/zakopane.css` and `src/pages/strony-internetowe-zakopane.astro` (Apartments, chalets, direct booking without 18% OTA commission) → Verify: Page builds cleanly
- [x] Task 7: Build `src/styles/locations/skawina.css` and `src/pages/strony-internetowe-skawina.astro` (Suburban industry, B2B, workshops, southern Kraków) → Verify: Page builds cleanly
- [x] Task 8: Build `src/styles/locations/nowy-targ.css` and `src/pages/strony-internetowe-nowy-targ.astro` (Podhale trade, construction, automotive, Orawa) → Verify: Page builds cleanly
- [x] Task 9: Build `src/styles/locations/sucha-beskidzka.css` and `src/pages/strony-internetowe-sucha-beskidzka.astro` (Suski county, Babia Góra region, local craft) → Verify: Page builds cleanly
- [x] Task 10: Build `src/styles/locations/nowy-sacz.css` and `src/pages/strony-internetowe-nowy-sacz.astro` (Sądecka entrepreneurship, manufacturing, trade) → Verify: Page builds cleanly
- [x] Task 11: Build `src/styles/locations/tarnow.css` and `src/pages/strony-internetowe-tarnow.astro` (2nd largest city in Małopolska, SMEs, services) → Verify: Page builds cleanly
- [x] Task 12: Unified Color System Integration across all 10 location stylesheets (eliminated hardcoded rainbow palettes in favor of `--accent-blue`, `--accent-cyan`, `--accent-blue-rgb` responding dynamically to Web2Sell's `data-color-theme` and `data-theme`) → Verify: All 10 pages dynamically inherit active theme palette
- [x] Task 13: Run full project verification (`npm run build`) → Verify: All 36 static pages and CSS bundles generated with 0 errors

## Done When
- [x] All 10 strategic hubs inherit the global ThemePicker color selection dynamically (Blue, Pink, Green, Red, Yellow, Orange).
- [x] Light & Dark mode seamlessly adapts with zero hardcoded color clashes.
- [x] Dedicated styles housed strictly in `src/styles/locations/`.
- [x] Zero changes made to `index.astro` or any existing core subpages.
- [x] `@astrojs/sitemap` automatically updated `sitemap-0.xml`.
- [x] Build passes with 0 errors.

## Notes
- All pages dynamically respond to `data-color-theme` stored in cookies and manipulated by `ThemePicker.astro`.
- Each page features valid JSON-LD `ProfessionalService` structured schema with tailored `areaServed`.
