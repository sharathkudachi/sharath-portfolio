# Sharath Y Kudachi — Engineering Portfolio

An editorial, engineering-focused developer portfolio built with **React**, **Vite**, and **Framer Motion**, showcasing AI software platforms, ocean data intelligence, maritime telemetry, and autonomous UAV systems research.

🌐 **Live Portfolio Website:** [https://sharathkudachi.github.io/sharath-portfolio/](https://sharathkudachi.github.io/sharath-portfolio/)

---

## 🌟 Overview

This repository powers the official engineering portfolio of **Sharath Y Kudachi**, a Computer Science and Engineering student at BMS Institute of Technology and Management (BMSIT), Bengaluru.

The design utilizes a **Theme 3 — Aurora Glass** aesthetic with deep navy (`#0B1020`), vibrant electric blue (`#3B82F6`), violet (`#8B5CF6`), and teal (`#14B8A6`) accents, typography driven by *Outfit* and *Plus Jakarta Sans*, and interactive technical detail modals.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (Custom Design Tokens & CSS Variables)
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 📁 Repository Structure

```text
sharath-portfolio/
├── public/
│   ├── certificates/          # Verified professional certifications & event photographs
│   ├── projects/              # Production project screenshots (WebP format)
│   ├── picture.png            # Sharath Y Kudachi profile portrait
│   ├── Sharath-Resume.pdf     # Engineering resume download asset
│   └── favicon.svg            # Custom SK monogram SVG favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Sticky navigation bar & mobile drawer with active section tracking
│   │   ├── Hero.jsx           # Hero introduction & circular profile portrait
│   │   ├── About.jsx          # Background, philosophy & Astra Club leadership
│   │   ├── Skills.jsx         # Categorized tech inventory (Languages, AI, Backend, Spatial)
│   │   ├── Projects.jsx       # Featured projects & interactive technical detail modal
│   │   ├── Education.jsx      # Academic history timeline (BMSIT B.E. CSE)
│   │   ├── Achievements.jsx   # Honors, awards, Astra leadership & InCSEption 3-photo carousel
│   │   ├── Certifications.jsx # Verified credentials & full lightbox certificate viewer
│   │   └── Contact.jsx        # Contact channels & dynamic copyright footer
│   ├── data/
│   │   └── projects.js        # Centralized projects metadata & technical architecture specs
│   ├── App.jsx                # Core application layout orchestration
│   ├── App.css                # Layout wrapper styles
│   ├── index.css              # Global design system tokens & typography
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell with Open Graph SEO metadata
├── vite.config.js             # Vite bundler configuration with GitHub Pages base path
├── package.json               # Node.js dependencies and build scripts
└── README.md                  # Project documentation
```

---

## 🚀 Projects Highlighted

1. **Argo FloatChat AI** — AI ocean intelligence & RAG platform (`Argo-Floatchat`)
2. **ORVMS** — Maritime risk & vessel monitoring system with XAI (`OCEAN-RISK-VESSEL-MONITORING-SYSTEM-ORVMS-`)
3. **UAV Simulation (AURA-X)** — Autonomous flight dynamics & fault injection testing (`UAV-Simulation`)
4. **Lifeline AI** — Emergency response dispatch & OpenStreetMap hospital router (`Lifeline-Ai`)
5. **SmartSpend AI** — MERN stack financial copilot & cash flow forecasting (`SmartSpend-AI`)
6. **Astra Defence Tech Expo** — Defence technology exhibition platform (`astra-defence-tech-expo`)
7. **Indian Military Operations Timeline** — Interactive military history timeline (`indian-military-operations-timeline`)
8. **Healthcare AI** — AI symptom analysis & healthcare management platform (`healthcare`)

---

## 💻 Local Development & Execution

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

### 1. Clone & Install
```bash
git clone https://github.com/sharathkudachi/sharath-portfolio.git
cd sharath-portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open **`http://localhost:5173/sharath-portfolio/`** in your browser.

---

## 📦 Production Build & Deployment

### Build for Production
```bash
npm run build
```
The compiled static production bundle will be generated in the `dist/` directory.

### Deploy to GitHub Pages
```bash
npm run deploy
```
This executes `npm run build` and publishes the output directly to the `gh-pages` branch.

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE).

© Sharath Y Kudachi.
