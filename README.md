# Zeroday Defense — Research Demo

Public interactive demo for **profiling-based zero-day malware detection** research by [Chiho Kim](https://github.com/) at Texas A&M University–Commerce, in collaboration with University of Colorado Colorado Springs and ETRI (Korea).

The demo walks through autoencoder profiling architectures, the threshold-free AE + one-class classification (AEOCC) hybrid, recorded experiment figures, publications, and the research team.

## Quick start

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

**Live demo:** [https://rcxd.github.io/zeroday-defense-demo/](https://rcxd.github.io/zeroday-defense-demo/) (GitHub Pages, deploys from `main` via GitHub Actions)

To produce a production build:

```bash
cd frontend
npm run build
```

## What this repo contains

| Path | Description |
|------|-------------|
| `frontend/` | Vite + React + TypeScript + Tailwind interactive demo |
| `frontend/src/diagrams/` | Original illustrative charts (SVG / Recharts) — not paper figure copies |
| `assets/papers/` | Local copies of papers and thesis for **private use only** — not redistributed by the demo |

## Publications (DOI links only)

IEEE articles are linked via DOI in the demo. **PDFs are not embedded or redistributed** in this public site.

- **IEEE BigData 2021** — *Zero-day Malware Detection using Threshold-free Autoencoding Architecture* — [doi:10.1109/BigData52589.2021.9671355](https://doi.org/10.1109/BigData52589.2021.9671355)
- **IEEE TNSM 2023** — *Automated, Reliable Zero-Day Malware Detection Based on Autoencoding Architecture* — [doi:10.1109/TNSM.2023.3251282](https://doi.org/10.1109/TNSM.2023.3251282)
- **MS Thesis 2022** — *Automated Profiling-Based Zero-Day Malware Detection* (Chiho Kim, Texas A&M University–Commerce) — no DOI; see `assets/papers/` for local copy

## Datasets

Experiments reference public Android malware datasets: **Meraz'18**, **Drebin**, and **EMBER** (from the research archive).

## License & attribution

Result figures are reproduced from recorded experiment outputs. Use citation links above when referencing the underlying research.
