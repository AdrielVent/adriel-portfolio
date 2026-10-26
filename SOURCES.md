# Sources

Every claim on the site, and where it comes from. If a claim isn't in this file, it shouldn't be on the site.

- **In repo**: the file is public in this repository. Click it.
- **Off repo**: the record exists but can't be public (company work, team files, email). It's named so I can show it if asked.

## Heat sink (all in repo)

| Claim on site | Evidence |
|---|---|
| 100 W load, 25 °C ambient, 85 °C limit, 70 °C target | [`assets/docs/heat-sink-thermal-design-report.pdf`](assets/docs/heat-sink-thermal-design-report.pdf) |
| MATLAB: 0.4485 °C/W, 69.85 °C chip temp, zero contact resistance | same report; chart [`heat-sink-matlab-resistance-mass.png`](assets/projects/heat-sink-matlab-resistance-mass.png) |
| Assumed h = 65 W/m²K; 70.16 °C with +0.0031 °C/W contact resistance | report §V eq. 9; Table 6 |
| Three concepts compared; solo work | report abstract; Declaration of Original Work |
| Fusion 360: 69.775 °C (15 fin) vs 61.487 °C (17 fin) | report; [`heat-sink-fusion-15fin-result.png`](assets/projects/heat-sink-fusion-15fin-result.png), [`heat-sink-fusion-17fin-result.png`](assets/projects/heat-sink-fusion-17fin-result.png) (cropped from the original screenshots, whose file names had the fin counts swapped) |
| 2.557 mm fin gap, 54.6 g, 50.8 × 50.8 mm | report (design tables) |
| Mass down 27.5% (75.3 g → 54.6 g) | report; (75.3 − 54.6) / 75.3 = 0.275 |
| Geometry | [`assets/models/dfma-heatsink-3d-model.stl`](assets/models/dfma-heatsink-3d-model.stl) |
| Not yet tested on hardware | report says results are simulation only |

## Other projects

| Claim on site | Evidence |
|---|---|
| Drawings: shaft collar, L-bracket, C-frame | In repo: [`gdt-shaft-collar-drawing.jpg`](assets/projects/gdt-shaft-collar-drawing.jpg), [`gdt-l-bracket-drawing.jpg`](assets/projects/gdt-l-bracket-drawing.jpg), [`gdt-c-frame-drawing.jpg`](assets/projects/gdt-c-frame-drawing.jpg) |
| Table study, 0.014 mm max displacement | In repo: [`fea-c-frame-displacement.jpg`](assets/projects/fea-c-frame-displacement.jpg) (legend max 1.406e-02 mm; the file name says C-frame but the plot is the table study) |
| C-frame: 45,000 N, FoS 1.41, −15% volume | Off repo: course report. Only one source, so be ready to explain it. |
| SYS-10 is the rover's allowed operating range | Adriel, Oct 26 2026 |
| Unity: Socket_Impeller / Socket_Cover, layer mask, Android build, Jan 13 2026 | In repo: [`unity-xr-assembly-verification.jpg`](assets/projects/unity-xr-assembly-verification.jpg) (all visible in the editor screenshot) |
| Six-part clamp in Siemens NX, two interferences fixed, printed water-pump parts | Off repo: earlier resume |

## Stellant Systems co-op (off repo, company work)

| Claim on site | Evidence |
|---|---|
| Co-op since May 2026, Melville, NY | Internship voice log, May 27 2026 |
| ANSYS steady-state thermal: clean-up, meshing, boundary conditions | 4 resume versions + LinkedIn |
| Revised thermal-pad contact conductance to remove an artificial gradient | 4 resume versions |
| O-ring cutting fixture, 4 iterations, technician feedback, blade deflection | 4 resume versions; public description approved by manager (per Adriel, Oct 26 2026) |
| BOMs, ECNs routed through SharePoint | Resumes + internship voice log |
| Inventor-to-Excel macro | Resumes + internship voice log |
| AutoCAD-to-Inventor task, 1 day vs 3-day estimate | 3 resume versions |

## NASA L'SPACE (off repo, team documents)

| Claim on site | Evidence |
|---|---|
| Team 6 (Artemis), thermal engineer, Aug 2026 to present | Resumes |
| SYS-10: −133 °C to +121 °C | CXEnergy resume + engineering dossier |
| MLI, coatings, thermal straps; TFAWS 2024 dust research | 4 resume versions |
| Wrote Section 1.1 of the Mission Concept Review | 2 resume versions |

## Hackathon (off repo)

| Claim on site | Evidence |
|---|---|
| 1 of 27 participants advancing to the onsite finals | Rockwell email, Oct 1 2026 ("one of the 27 participants advancing"); SHPE email Oct 8 2026, subject "Your Career Fair Access as an AI Hackathon Finalist" |
| CONFIRM: one hypothesis at a time; 90% / 60–90% / under 60% gates | Round 1 submission deck + architecture summary |
| 24–30% repeat-contact rate | Same deck (problem statement, not a result) |

## Leadership and honors (off repo)

| Claim on site | Evidence |
|---|---|
| SHPE President; chapter inactive since 2007; constitution; GetInvolvedHU; Meet the Board Oct 7 2026 | LinkedIn + resumes + Oct 13 2026 email listing the board |
| SHPE's Got Talent winner, $300 | SHPE National email, Oct 20 2026 |
| $1,350 Hofstra travel awards | Hofstra email, Oct 20 2026 |
| ASME Co-President since Apr 2026, Recruitment Chair before; 20+ students at networking events; SLW Philadelphia | LinkedIn + resumes |
| AIAA Co-President and Reactivation Lead; two Classroom Grant proposals | LinkedIn + resumes |
| CSTEP board: 5 people, 50+ students, about 40% attendance growth | LinkedIn + resumes |

## Certificates

| Claim on site | Evidence |
|---|---|
| Black Hawk job simulation, Jan 26 2026, code n8CFCcjuh9rKpfiHr | In repo: [`1109th-tasmg-black-hawk-certificate.pdf`](assets/certificates/1109th-tasmg-black-hawk-certificate.pdf) |
| Lean Six Sigma White Belt, Nov 16 2025 | In repo: [`lean-six-sigma-white-belt.jpeg`](assets/certificates/lean-six-sigma-white-belt.jpeg) |
| ASME Ethics for Engineers, Jan 8 2026, 3.0 PDH | In repo: [`asme-ethics-for-engineers.jpeg`](assets/certificates/asme-ethics-for-engineers.jpeg) |
| Siemens Mobility job simulation; PMI Kickoff | Off repo: LinkedIn |

## Removed in October 2026 (no source found)

These were on the site or the old resume PDF. I couldn't find a record for any of them, so I took them out. They can come back once there's a source.

| Removed claim | Why |
|---|---|
| FEA "matched to thermocouple test data" | No test record or log mentions it |
| ECNs "approved on first submission" | Records show an ECN sent for approval, not the outcome |
| "Selected from 54 teams" / "won" Round 1 | No email says 54. 27 advanced, which is advancing, not winning |
| "National Finalist" | Implies the Friday per-track final. Site now says "onsite AI Hackathon finals (1 of 27 participants)" |
| Hackathon card about "Bakehouse 360" predictive maintenance with PySpark streaming | Not what I submitted. The Round 1 entry was CONFIRM |
| "Fully funded travel sponsorship and stage slot" | Travel money came from Hofstra awards. No stage slot on record |
| Vibration analysis; heat pipes up to 270 °C (old resume PDF) | No project or log shows either |
| "Founding President"; "6-person delegation"; SGA chartering; 70+ members; Brookhaven and Cradle of Aviation visits | Chapter existed before 2007. Delegation, funding, member count, and trips have no record (Brookhaven trip was planned, not done) |
| L'SPACE: PDR complete, 14-day lunar night, MG-2, pyrolytic graphite straps | Only in one summary file. Resumes say MCR and "thermal straps" |
| Hofstra Spotlight card | Interview happened, no published link yet |
| Siemens credential ID; "Connecticut" and "TDP reviews" on the Black Hawk card | Not printed on the certificate |
| Simulink, NumPy/SciPy, C#, "Predictive Telemetry", "Systems Engineering / PDR" | No project uses them |
| Heat sink inputs "V = 1.8 m/s", "laminar", "adiabatic fin tip", "identical boundary conditions" (PR #2 draft) | Not in the report |
