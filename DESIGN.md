# Design system

The rules this site follows. Any change, by me or by a coding assistant, should use these tokens instead of inventing new ones. The values live in `:root` in `assets/css/styles.css`.

Format after [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

## Direction

An editorial engineering portfolio: it should read like a well-set technical report, not a product landing page. Warm paper, near-black text, one muted ink-blue accent. Hierarchy comes from type size, spacing and thin rules. Real CAD renders, plots and drawings provide the visual identity; there is no decorative graphics layer.

One light theme only. The only dark surface is the `--plate` behind the transparent CAD render, so the light-grey part stays visible.

## Color

| Token | Value | Use |
|---|---|---|
| `--paper` | `#f7f4ee` | Page background |
| `--paper-2` | `#efebe3` | Selected table row, equation blocks |
| `--plate` | `#2b2a27` | Backdrop for the transparent heat sink render and 3D viewer only |
| `--ink` | `#1c1b19` | Headings, strong text, section rules |
| `--ink-2` | `#45423c` | Body text |
| `--muted` | `#625e55` | Captions, metadata, dates |
| `--rule` | `#d8d2c6` | Hairlines between rows |
| `--rule-strong` | `#b9b2a4` | Boxes around notes, path steps, files list |
| `--accent` | `#2d4a6b` | Links, "assumed" values |
| `--accent-hover` | `#1b3350` | Link hover |

All text pairs pass WCAG AA (4.5:1) on `--paper`; checked with an automated contrast scan at four widths (Oct 2026).

## Type

| Role | Family | Notes |
|---|---|---|
| Major headings (h1, h2, feature title) | Source Serif 4, 600 | `--serif` |
| Body and interface | Source Sans 3, 400 / 600, italic 400 | `--sans` |
| Notation only (equations) | system monospace stack | `--mono` |
| Buttons and action links | Courier Prime 400 | `--type`. Typed-label look: `[Angled]`, `[x] Section cut`, `Read the case study →`. Brackets and arrow are CSS, hidden from screen readers |

- Body `--text`: 1.125rem (18px); 1.0625rem (17px) under 600px.
- Small text `--small`: 1rem (16px). Nothing on the site is set smaller than 16px.
- Prose measure `--measure`: 40rem. Page width `--wide`: 70rem.
- Fonts load from Google Fonts with `display=swap`; all three families are SIL Open Font License.

## Layout patterns

Each kind of content has its own shape. There are no repeated rounded cards.

| Content | Pattern |
|---|---|
| Header | Name (home link) left, four text links right. Wraps to two short lines on phones; 44px tap targets |
| Intro | h1 name, one plain paragraph, three links. No hero image |
| Featured project | Two columns: render on the plate (7fr) and a definition list of objective / contribution / result (5fr) |
| Other projects | Ruled rows: title and context on the left (15rem), problem / contribution / status on the right |
| Experience | Ordered list of ruled rows: dates and location in a left column (13rem), role, organization and bullets on the right |
| Tools | Ruled table linking each tool to the place it was used. On phones each tool becomes a stacked block |
| Contact | Short About paragraph next to a labelled list of links |
| Case study | Title and lede, render plus a facts box, an in-page contents list, then numbered chapters in a fixed order (problem, role, approach, decisions, analysis, simulation/testing, results/limitations, next) |
| Tables | Rules only, tabular numbers, the chosen option shaded with `--paper-2` |
| Figures | Numbered captions that say what the figure shows and where its numbers come from |

Breakpoints: 860px (two columns collapse to one; the render is capped at 26rem tall) and 600px (smaller body text, stacked tools table).

## Interaction

- The site works without JavaScript. `main.js` only adds keyboard stops to tables that scroll sideways and loads the 3D viewer on request.
- The 3D viewer (three.js r164, about 0.7 MB with the STL) loads only after the "Rotate the 3D model" button is pressed. That button is hidden until JavaScript runs, so it never appears as a dead control. After loading, focus moves to the model; arrow keys rotate, R resets.
- Smooth scrolling only under `prefers-reduced-motion: no-preference`. No other animation.
- Focus: 2px outline in `--accent` on every link, button and focusable region (white on the dark 3D canvas).

## Not used

Boxed or filled buttons, blueprint grids, crosshairs, HUD graphics, neon, gradients, glows, glassmorphism, giant hero sections, skill percentages, counters, badge walls, typewriter text, scroll hijacking, custom cursors, decorative animation (including typewriter typing effects; the typewriter feel is type only), stock or AI imagery, a dark-mode toggle.

## References

Looked at before the October 2026 editorial redesign. They were inputs, not templates: no code or assets were copied. Source was read from a local clone; the live demo sites could not be opened from the environment used for the redesign.

| Reference | License | What this site takes from it |
|---|---|---|
| [pacocoursey/paco](https://github.com/pacocoursey/paco) (commit e011620) | `package.json` declares MIT; the repo has no LICENSE file | The restraint: the name as the page title and one plain paragraph with inline links as the whole introduction |
| [TimWitzdam/astro-minimal-portfolio-template](https://github.com/TimWitzdam/astro-minimal-portfolio-template) (commit ff91800) | MIT | Compact text header, and experience entries that keep title, organization and dates as separate fields |
| [moeyua/astro-theme-typography](https://github.com/moeyua/astro-theme-typography) (commit 162ca9c) | MIT | Serif headings over a Source Sans interface face, and a single dark-blue accent (its default `primary` is `#2e405b`; this site uses `#2d4a6b`) |
| [lowinertia/free-to-engineer-portfolio-template](https://github.com/lowinertia/free-to-engineer-portfolio-template) (commit 2329b96) | CC0 1.0 | One page per project in a fixed section order, separating what was asked, what I did and what came out |

Earlier references (bchiang7/v4, MIT MechE Communication Lab guide, BU ENG portfolio guide, three-cad-viewer) are listed in `SOURCES.md`.
