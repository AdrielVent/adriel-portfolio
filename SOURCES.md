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
| Unity: Socket_Impeller / Socket_Cover, layer mask, Android build, Jan 13 2026 | In repo: [`unity-xr-assembly-verification.jpg`](assets/projects/unity-xr-assembly-verification.jpg) (all visible in the editor screenshot) |
| Six-part clamp in Siemens NX, two interferences fixed, printed water-pump parts | Off repo: earlier resume |

## Stellant Systems co-op (off repo, company work)

| Claim on site | Evidence |
|---|---|
| Co-op since June 2026, Melville, NY | Adriel, Oct 26 2026: accepted/onboarded in May, started working in June. LinkedIn export says June 2026 |
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
| Wrote MCR Section 1.1 (Mission Statement), scored 24/25, no RFAs | L'SPACE MCR scoresheet (Google Drive), §1.1 criteria 5, 4, 5, 5, 5, "No RFAs or ADVs Needed" |
| Team descope: radioisotope heater replaced by electric heaters, accepted | L'SPACE descope response email, Oct 2026 |
| Selected for the academy | L'SPACE "Mission Concept Academy Acceptance Notice", Aug 28 2026 |
| Requirements skill badge, Sep 2026 | L'SPACE "Requirements Skills Badge" email, Sep 27 2026 |

## Hackathon (off repo)

| Claim on site | Evidence |
|---|---|
| One of 27 participants advancing to the live round | Rockwell email, Oct 1 2026 ("one of the 27 participants advancing"); SHPE email Oct 8 2026, subject "Your Career Fair Access as an AI Hackathon Finalist" |
| CONFIRM: one hypothesis at a time; 90% / 60–90% / under 60% gates | Round 1 submission deck + architecture summary |
| 24–30% repeat-contact rate | Same deck (problem statement, not a result) |

## Press and writing

| Claim on site | Evidence |
|---|---|
| Hofstra News, "Engineering His Path to the Future", Sep 18 2026 | Public: [news.hofstra.edu link](https://news.hofstra.edu/2026/09/18/engineering-his-path-to-the-future/). Email from Lindsey Angioletti (Director, Public Relations), Sep 18 2026, sending this link; Engineering dept. email the same day |
| Interview and filming limited to lobby and conference room | Emails with Hofstra PR, Jul 20–27 2026 (supervisor approved those two areas) |
| Instagram reel "From the classroom to the lab" | Public: [instagram.com/reel/DexRr5noZua](https://www.instagram.com/reel/DexRr5noZua/), posted by @hofstrau with @hofstraseas. PR email Jul 17 2026 says the story would run on Hofstra News, Facebook and Instagram |
| Hofstra Chronicle: 3 news stories, "Special to the Chronicle" | Public: [staff page](https://thehofstrachronicle.com/staff_name/adriel-ventura/) lists all three with dates |

## Leadership and honors (off repo)

| Claim on site | Evidence |
|---|---|
| SHPE President; rebuilding as a new student organization; constitution draft; GetInvolvedHU; Meet the Board Oct 7 2026 | LinkedIn + resumes + Oct 13 2026 email listing the board; Hofstra dean's office email, Sep 8 2026 ("currently an interest group", new-org path) |
| SHPE's Got Talent winner, $300 | SHPE National email, Oct 20 2026 |
| Up to $1,350 Hofstra travel funding (reimbursement) | Hofstra dean's office email, Oct 20 2026: "bringing your total award to up to $1350 for reimbursement of eligible expenses" |
| Aviation Week 20 Twenties nominee, Class of 2027 | Email from Aviation Week program staff, Oct 15 2026, "Aviation Week's 20 Twenties – You've been Nominated!", sent to Adriel's personal Gmail with a Hofstra faculty advisor cc'd. Says nominees are "recognized by your university" and winners are announced early Jan 2027 |
| ASME Co-President (with Dara Khaimov) and Social Media Chair, 2026–27; steam-turbine and catapult builds; SLW Philadelphia, Oct 2026 | Executive-board email, Jul 13 2026; earliest Co-President email, Aug 24 2026 (title "Social Media Chair" in ASME mail); LinkedIn export + resumes for the builds; "SLW Update" email thread with faculty advisor, Oct 20 2026 |
| Night Shift Engineering Mixer with SWE and the Commuter Student Association, 30 attendees | ASME after-activity report confirmation, Oct 22 2026 (lists collaborators and 30 participants) |
| AIAA Co-President and Reactivation Lead | LinkedIn profile export (Oct 2026) + resumes |
| Drafted two AIAA Classroom Grant proposals for an Earth and Space Science teacher, who submitted both | Email thread with the teacher, Sep 21 to Oct 2 2026 (his signature: "Earth and Space Science Teacher"); his Oct 2 2026 email to K-12STEM@aiaa.org attaching both proposals |
| Aerospace Concentration | LinkedIn profile export, Education section |
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
| Hofstra Spotlight card | Was removed while no link existed. The Hofstra News story is now published and is back under Press |
| "Chapter inactive since 2007" | Only Adriel's own LinkedIn. The Dean's email calls SHPE an interest group on the new-org path, which is what the site now says |
| ASME "Recruitment Chair" (May 2025 to Apr 2026); "two networking events connecting 20+ students with industry mentors" | No email or sign-in sheet found. Can return with a record |
| L'SPACE requirement SYS-10, −133 °C to +121 °C; "compared MLI, coatings, and thermal straps" | Only in my own resumes and dossier, not in any academy document |
| SHPE "held" the first Meet the Board event | Room booking is on record, attendance isn't. Now "organized" |
| ASME "Apr 2026" start and "Social Media Manager" | Earliest Co-President email is Aug 24 2026; ASME mail says "Social Media Chair" |
| CSTEP "5-person board serving 50+" | No roster or count found |
| Chronicle "Contributing writer" | Bylines are on record, a staff title isn't |
| ASME Great Neck facility tour | Not completed |
| "Onsite AI Hackathon finals" | "Finals" overstates the live round. Site says "one of 27 participants advancing to the live round" |
| Full-stack software development; hometown | Not shown by any project. Hometown differs between resume versions |
| Siemens credential ID; "Connecticut" and "TDP reviews" on the Black Hawk card | Not printed on the certificate |
| Simulink, NumPy/SciPy, C#, "Predictive Telemetry", "Systems Engineering / PDR" | No project uses them |
| Heat sink inputs "V = 1.8 m/s", "laminar", "adiabatic fin tip", "identical boundary conditions" (PR #2 draft) | Not in the report |

## Design references

Portfolios and templates I looked at during the October 2026 redesigns. No code was copied from any of them. The four references behind the current editorial design (pacocoursey/paco, TimWitzdam/astro-minimal-portfolio-template, moeyua/astro-theme-typography, lowinertia/free-to-engineer-portfolio-template), with licenses and what each contributed, are in [`DESIGN.md`](DESIGN.md#references). The table below is from the earlier round.

| Reference | What I took from it |
|---|---|
| [bchiang7/v4](https://github.com/bchiang7/v4) (Brittany Chiang) | Two tiers of projects: a few featured with full detail, the rest as a compact list |
| [smaranjitghose/awesome-portfolio-websites](https://github.com/smaranjitghose/awesome-portfolio-websites) (MIT) | Core sections only: experience, projects, education. Optional pages left out |
| [lowinertia/free-to-engineer-portfolio-template](https://github.com/lowinertia/free-to-engineer-portfolio-template) (CC0) | One page per project with a fixed section order; a portfolio should show problem solving that a resume can't |
| MIT MechE Communication Lab portfolio guide | 3 to 4 main projects, 2 to 6 visuals each, say what I was responsible for, compare the result to the objective |
| [nasa/openmct](https://github.com/nasa/openmct) (NASA Ames, Apache-2.0) | Dense, ruled data tables with mono values; no cards around numbers. Its mission-ops look was rejected for this site because I have no live telemetry to show |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | Keeping the design rules in a `DESIGN.md` file so every change uses the same tokens |
| [bernhard-42/three-cad-viewer](https://github.com/bernhard-42/three-cad-viewer) (MIT), README and Design.md | Drawn edges on the mesh, a section (clipping) plane, preset views, and rendering only when something changes. No code copied; it needs tessellated CAD input, not STL |
| Boston University ENG, ["Key Factors of Engineering Portfolios"](https://www.bu.edu/eng/files/2022/07/Key-Factors-of-Engineering-Portfolios.pdf) | Most important project first, "I" over "we", show the full process and what's still uncertain |
| My own earlier version of this site (`main` before Oct 2026) | The rotatable STL heat sink, now loaded on request on the heat sink page instead of in a homepage hero |
| [Claude frontend-aesthetics cookbook](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics) | List of generic AI-design tells (Inter/Roboto, purple gradients, predictable layouts, scattered animation) to check this site against |

## Heat sink design review page (`heat-sink.html`)

Every number on that page comes from my ENGG 114 report, [`heat-sink-thermal-design-report.pdf`](assets/docs/heat-sink-thermal-design-report.pdf):

| Claim on the page | Report location |
|---|---|
| Requirements, R_max 0.600 / 0.450 °C/W | §II, Table 1, Eqs. 1–3 |
| Concepts A, B, C and decisions | §III, Table 3 |
| Resistance path, T_chip = 69.85 °C, margins 15.15 / 0.15 °C | §IV.C, Eqs. 4–8 |
| Fin geometry, m, η_f, η_o, R values, 54.6 g | §IV.B Table 4, §V Table 5 |
| h = 65 W/m²K is assumed | §V, Eq. 9 |
| Contact-resistance table | §V.B, Table 6 |
| 15 vs 17 fins: gap, R, MATLAB and Fusion temps, mass | §V.C Table 7, §VI Table 8 |
| 0.0031 °C/W is the high end of the PTM7950 ideal range | Legend of the TIM sensitivity plot, [`heat-sink-derated-sensitivity.png`](assets/projects/heat-sink-derated-sensitivity.png) |
| ~46 W/m²K crossing of 85 °C | Read off [`heat-sink-contact-sensitivity.png`](assets/projects/heat-sink-contact-sensitivity.png), not stated in the report |
| Assembly drawing, 38 mm plate | Report Fig. 8 (page 14), cropped to [`heat-sink-drawing-15fin.png`](assets/projects/heat-sink-drawing-15fin.png) |
| 3D-printed demonstration models, not thermal validation | §I.D |
| Test plan and $376.92 test equipment | §VIII.B Table 10, §IX |
| Individual work | Declaration of Original Work, page 1 |
