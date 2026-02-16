# 🚀 Quick Deployment Guide

## Step-by-Step GitHub Pages Deployment

### Prerequisites
- GitHub account
- Git installed on your computer
- Node.js and npm installed

### 1️⃣ Prepare Your Repository

1. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `sharath-portfolio` (or any name you prefer)
   - Make it public
   - Do NOT initialize with README

2. **Update vite.config.js**:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/sharath-portfolio/'  // ← Change this to your repo name
   })
   ```

### 2️⃣ Local Setup

Open your terminal in the project folder and run:

```bash
# Install all dependencies
npm install

# Test locally
npm run dev
```

Visit `http://localhost:5173` to verify everything works.

### 3️⃣ Deploy to GitHub Pages

**Method 1: Using npm script (Easiest)**

```bash
# Build and deploy in one command
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Push the build to that branch

**Method 2: Manual deployment**

```bash
# Build the project
npm run build

# Initialize git (if not done)
git init

# Add files
git add .
git commit -m "Initial commit"

# Add your GitHub repository
git remote add origin https://github.com/sharathkudachi/sharath-portfolio.git

# Push to main branch
git push -u origin main

# Deploy to gh-pages
npm run deploy
```

### 4️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** in the left sidebar
4. Under **Source**:
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
5. Click **Save**

### 5️⃣ Access Your Site

Your portfolio will be live at:
```
https://sharathkudachi.github.io/sharath-portfolio/
```

⏱️ Note: First deployment might take 2-5 minutes.

## 🔄 Updating Your Portfolio

After making changes:

```bash
# Test changes locally
npm run dev

# Deploy updates
npm run deploy
```

That's it! Your changes will be live in a few minutes.

## ⚠️ Common Issues

### Issue 1: Blank page after deployment
**Solution**: Check that `base` in `vite.config.js` matches your repository name exactly.

### Issue 2: 404 errors on navigation
**Solution**: GitHub Pages doesn't support client-side routing out of the box. This template uses hash-based routing which works perfectly.

### Issue 3: Images not loading
**Solution**: 
- Place images in the `public` folder
- Reference them as `/image-name.jpg` in your code
- After adding images, rebuild: `npm run deploy`

### Issue 4: Deploy script fails
**Solution**: 
```bash
# Install gh-pages
npm install gh-pages --save-dev

# Try again
npm run deploy
```

## 📱 Custom Domain (Optional)

To use a custom domain like `sharathkudachi.com`:

1. Add a file named `CNAME` in the `public` folder
2. Put your domain name in it: `sharathkudachi.com`
3. Configure your domain's DNS settings (A or CNAME records)
4. Redeploy: `npm run deploy`

## 🆘 Need Help?

- Check the main README.md for more details
- GitHub Pages docs: https://pages.github.com/
- Vite docs: https://vitejs.dev/

---

Good luck with your portfolio! 🎉
