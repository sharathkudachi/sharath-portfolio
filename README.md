# Sharath Y Kudachi - Developer Portfolio

A modern, animated developer portfolio built with React, Vite, and Framer Motion. Features a cyber-futuristic design with neon blue accents, glassmorphism effects, and smooth animations.

[Visit My Portfolio](https://sharathkudachi.github.io/sharath-portfolio/)

## ✨ Features

- **Modern Design**: Black background with neon blue accents and subtle grid animations
- **Glassmorphism Sidebar**: Slide-in navigation panel with smooth animations
- **Animated Sections**: 
  - Hero with typing effect and animated grid background
  - Skills with glow-on-hover cards
  - Education with animated timeline
  - Projects with modern cards and live/GitHub links
  - Certifications with slider and modal image viewer
  - Achievements and Contact sections
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for professional transitions

## 🚀 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **CSS3** - Styling with custom properties

## 📁 Project Structure

```
sharath-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Achievements.jsx
│   │   ├── Achievements.css
│   │   ├── Certifications.jsx
│   │   ├── Certifications.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Education.jsx
│   │   ├── Education.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.css
│   │   ├── Skills.jsx
│   │   └── Skills.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation

1. **Clone or download** this project

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:5173
   ```

## 📦 Build for Production

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` folder.

Preview the production build:
```bash
npm run preview
```

## 🌐 GitHub Pages Deployment

### Option 1: Automated Deployment (Recommended)

1. **Update `vite.config.js`** with your repository name:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'  // Replace with your actual repo name
   })
   ```

2. **Install gh-pages** (if not already installed):
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "gh-pages" branch
   - Save and wait for deployment

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

### Option 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Create a new GitHub repository** or use an existing one

3. **Initialize git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Add your repository**:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```

5. **Deploy the dist folder**:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

## 🎨 Customization

### Update Personal Information

Edit the following files with your own information:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Education**: `src/components/Education.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Certifications**: `src/components/Certifications.jsx`
- **Contact**: `src/components/Contact.jsx`

### Change Colors

All colors are defined in `src/index.css` using CSS variables:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --neon-blue: #00d4ff;
  --neon-cyan: #00ffff;
  /* ... more colors */
}
```

### Add Certificate Images

Replace the image placeholders in `src/components/Certifications.jsx` with actual images:

```jsx
// Replace placeholder divs with:
<img src="/path-to-your-certificate.jpg" alt="Certificate" />
```

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

**Sharath Y Kudachi**
- Email: sharathkudachi30@gmail.com
- GitHub: [sharathkudachi](https://github.com/sharathkudachi/)
- LinkedIn: [Sharath Y Kudachi](https://www.linkedin.com/in/sharath-y-kudachi-37438b314/)

---

Built with ❤️ using React & Framer Motion
