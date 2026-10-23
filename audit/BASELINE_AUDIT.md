# Baseline Site Audit & Metrics: Adriel Ventura Engineering Portfolio

**Repository:** `AdrielVent/adriel-portfolio`  
**Base Commit:** `226ae3aee7e4be8daeb4c54726292171e5e500e2` (branch: `main`)  
**Audit Date:** October 23, 2026  
**Auditor:** Antigravity Engineering Review System  

---

## 1. Asset & Page Weight Baseline

| Asset Category | File Path / Resource | Initial Size | Initial Status / Issue |
| :--- | :--- | :--- | :--- |
| **HTML** | `index.html` | 47.36 KB | Lacks explicit image dimensions; missing `loading="lazy"` |
| **CSS** | `assets/css/styles.css` | 19.23 KB | Uses Inter + Orbitron, glowing cyan orbs, scanlines, micro-fonts (<10px) |
| **JavaScript** | `assets/js/main.bundle.js` | 572.70 KB | Monolithic Three.js bundle autoplaying WebGL loop on page load |
| **Images (18 assets)** | `assets/projects/*`, `assets/images/*` | 2,426.79 KB | Uncompressed JPEGs/PNGs up to 466 KB; missing `width`, `height`, and `loading="lazy"` |
| **Legacy Archives** | `assets/docs/old-portfolio-website.zip` | 31,388.10 KB (31.4 MB) | Tracked in git; uploaded to Pages deployment artifact unnecessarily |
| **Total Critical Load** | **HTML + CSS + JS + Images** | **3,066.08 KB (3.07 MB)** | **Exceeds 800 KB performance target by 283%** |

---

## 2. Accessibility (a11y) & Usability Baseline

1. **Visible Keyboard Focus (WCAG 2.4.7 / 2.4.11)**:
   - Failed: Focus states relied on soft glowing cyan box-shadow (`box-shadow: 0 0 26px rgba(0, 229, 255, 0.16)`), lacking distinct solid 2px outline with offset.
2. **Touch Target Size (WCAG 2.5.5 / 2.5.8)**:
   - Failed: Header navigation links (`.nav-links a`) rendered with `padding: 0.32rem 0`, resulting in a height of only ~26px on mobile viewports (minimum requirement: 44px).
3. **Typography & Minimum Font Size**:
   - Failed: Six font-size rules dropped below the 12px threshold (down to `0.58rem` / 9.28px and `0.62rem` / 9.9px).
   - Failed font pair: Declared generic `Inter` and gamer-aesthetic `Orbitron`.
4. **Theme & Contrast (WCAG 1.4.3)**:
   - Failed: Dark mode only (`#05070d`). No light mode stylesheet or toggle existed.
   - Low contrast on cyan accents (`#00e5ff`) against light/intermediate surfaces.
5. **Cumulative Layout Shift (CLS)**:
   - Failed: All 18 `<img>` tags lacked explicit `width` and `height` attributes.
6. **External Link Security**:
   - Failed: 8 external links lacked `target="_blank"` and `rel="noopener"`.

---

## 3. Content Accuracy Baseline

- **Hackathon Project Discrepancy**:
  - Found: Listed mock scenario *"Bakehouse 360 AI / Industrial telemetry / Databricks PySpark"*.
  - Verified Reality: Adriel Ventura's actual winning Simulation Round project for the Rockwell Automation & SHPE AI Hackathon is **CONFIRM: Evidence-backed troubleshooting for industrial support** (Cvent submission July 19, 2026; Simulation Deck August 13, 2026; Finalist notification August 28, 2026).
- **Asset Availability**:
  - `CONFIRM_Final.pdf` was located in the local project vault (`/Users/vnua/Desktop/DATA/01_School/Hofstra_Organizations/SHPE/CONFIRM_Final.pdf`) but missing from the public web repository (`assets/docs/`).

---

## 4. Pull Request #1 Resolution

- **PR #1 (`[ImgBot] Optimize images`)**: Closed via GitHub API on October 23, 2026.
- **Resolution Note**: Automated 11.28% lossless compression superseded by our comprehensive site overhaul featuring custom asset conversion, explicit dimensions, opt-in 3D architecture, and payload reduction strictly under 800 KB.
