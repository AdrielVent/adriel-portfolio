# Design system

The rules this site follows. Any change, by me or by a coding assistant, should use these tokens instead of inventing new ones. The values live in `assets/css/styles.css` (`:root` and `[data-theme="dark"]`).

Format after [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

## Direction

A design review, not a product landing page. The homepage reads like a drawing sheet: a title block filled with real data, then numbered rows of work. Each main project gets its own page in a fixed order: problem, requirements, my contribution, alternatives, analysis, simulation and test, results, limitations, lessons. Dark by default, like a CAD viewport. Numbers carry the page; decoration doesn't.

## Color

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `--bg-canvas` | `#0b0f17` | `#f8fafc` | Page |
| `--bg-surface` | `#131923` | `#ffffff` | Tables, figures, cards |
| `--bg-subtle` | `#1c2433` | `#f1f5f9` | Table headers |
| `--text-primary` | `#f8fafc` | `#0f172a` | Headings, values |
| `--text-secondary` | `#cbd5e1` | `#475569` | Body |
| `--text-muted` | `#94a3b8` | `#64748b` | Captions, labels |
| `--border-subtle` | `#243042` | `#e2e8f0` | Table rules, dividers |
| `--border-strong` | `#3b4d66` | `#cbd5e1` | Outer frames |
| `--rule` | `#3b4d66` | `#94a3b8` | Title-block lines, top rule of a list |
| `--accent` | `#4cc9f0` | `#1a5fb4` | Links, primary button, "Assumed" source, row numbers |
| `--on-accent` | `#0b0f17` | `#ffffff` | Text on an accent background (button, skip link) |
| `--grid-line` | `rgba(76,201,240,.045)` | none | 40 px drafting grid behind the page |

One accent only. It never fills a large area.

## Type

| Role | Font | Size |
|---|---|---|
| Body | IBM Plex Sans 400 | 1rem / 1.6 |
| Headings | IBM Plex Sans 600–700 | h1 clamp(2.5rem…), h2 ~2rem, h3 1–1.125rem |
| Values, units, labels, captions | IBM Plex Mono | 0.75–0.9375rem |
| Eyebrows, table headers | IBM Plex Mono, uppercase, 0.06–0.08em tracking | 0.75rem |

## Shape and spacing

- Radius 4 / 6 / 8 px. No pills.
- 1 px borders. No drop shadows on cards.
- Corner ticks (14 px, 1 px accent) on hero figures in dark mode, like a viewport frame.
- Touch targets at least 44 px.

## Components

| Component | Rule |
|---|---|
| Title block (`.title-block`) | Drawing-sheet box. Only real data: part, material, load, result, status. Status always says whether it was tested |
| Data-sheet table (`.spec-table`) | Every value gets a Source column: Given, Requirement, Assumed, MATLAB, Fusion 360. Assumed values use the accent color. Selected option row is shaded |
| Work rows (`.work-rows`) | Numbered 01, 02 in order of importance. Title, mono meta line, 2–4 lines of text, key numbers on the right. Not cards |
| Experience rows (`.exp-rows`) | Date column, then role and one paragraph. Ruled, no boxes |
| Design notes (`.design-notes`) | Numbered 01, 02, 03 with rules between |
| Figures (`.figure`) | Numbered in the case study (Fig. 1, 2…). Caption says what it shows and whose it is |
| 3D viewer (`.viewer`) | Static render first. three.js and the STL load only on "Open 3D model". Drawn edges, Iso/Front/Top, a section plane. Renders only on input, no idle loop, no wheel capture, arrow keys work |
| Buttons | One primary action per section. Secondary actions are underlined text links |

## Any 3D or HUD feature must answer

1. What engineering fact does it show that a picture doesn't?
2. Does the page work without it?
3. What does it cost in bytes and CPU, and is that paid only by people who ask for it?
4. Can a keyboard or reduced-motion user get the same information?

## Banned

- Gradients, glow, neon, scanlines, animated HUD overlays, status lights, crosshairs, fake telemetry
- Auto-rotating or auto-loading 3D in the first screen
- "Verified", "validated" or "proven" badges without a test record
- Skill bars, percentages, or tool walls without a project behind each tool
- Three identical feature cards in a row
- Emoji in headings
- Marketing verbs ("revolutionized", "spearheaded") where a number would do
