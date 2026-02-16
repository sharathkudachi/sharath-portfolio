# ⚡ Quick Start Guide

## Get Your Portfolio Running in 5 Minutes

### 1. Open Terminal in Project Folder
Navigate to the `portfolio-project` folder.

### 2. Install Dependencies
```bash
npm install
```
This will download all required packages (~2 minutes).

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open Browser
Visit: `http://localhost:5173`

**That's it! Your portfolio is now running locally.** 🎉

---

## Quick Commands Reference

| Command | What it does |
|---------|-------------|
| `npm install` | Install all dependencies (first time only) |
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

---

## First-Time Customization Checklist

Before deploying, update these files with your information:

- [ ] **Hero.jsx** - Name, tagline, description, social links
- [ ] **About.jsx** - Professional summary
- [ ] **Skills.jsx** - Your skills and technologies
- [ ] **Education.jsx** - Your educational background
- [ ] **Projects.jsx** - Your project details and links
- [ ] **Certifications.jsx** - Your certificates and achievements
- [ ] **Contact.jsx** - Your contact information
- [ ] **vite.config.js** - Change base URL to your repo name

---

## Deploy to GitHub Pages

### One-Time Setup
1. Create a GitHub repository
2. Update `base` in `vite.config.js` to match your repo name
3. Run: `npm run deploy`

### Update Later
```bash
npm run deploy
```

**Done!** Your site will be live at:
`https://yourusername.github.io/your-repo-name/`

---

## Need More Details?

- **Full Documentation**: See `README.md`
- **Deployment Help**: See `DEPLOYMENT.md`
- **Project Overview**: See `PROJECT_OVERVIEW.md`

---

**Have questions?** Feel free to reach out!

Happy coding! 🚀
