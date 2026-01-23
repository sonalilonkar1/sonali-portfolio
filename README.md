# Sonali Lonkar - Portfolio Website

A modern, interactive portfolio website built with React, showcasing my projects, skills, and experience as a Software Engineer specializing in Backend & ML/AI.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development and optimized builds
- **Interactive Animations**: Smooth animations and transitions using Framer Motion
- **Dark/Light Theme**: Toggle between themes with persistent preferences
- **Responsive Design**: Fully responsive layout that works on all devices
- **Typewriter Effect**: Dynamic typing animation for role descriptions
- **Project Filtering**: Filter projects by category (Backend, ML/Quant, etc.)
- **Smooth Scrolling**: Enhanced navigation with smooth scroll effects
- **Performance Optimized**: Fast load times and optimized bundle size

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Styling with CSS variables for theming
- **React Hooks** - Custom hooks for theme and typewriter effects

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Vite and configure the build settings
6. Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Drag and drop your project folder
4. Vercel will automatically deploy it

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── SonaliLonkar_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Awards.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── education.js
│   │   └── skills.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useTypewriter.js
│   ├── styles/
│   │   ├── Navigation.css
│   │   ├── Hero.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   ├── Experience.css
│   │   ├── Education.css
│   │   ├── Contact.css
│   │   └── Awards.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `projects.js` - Update your projects
- `experience.js` - Update your work experience
- `education.js` - Update your education
- `skills.js` - Update your skills

### Change Colors/Themes

Edit CSS variables in `src/index.css`:
```css
:root {
  --accent: #38bdf8; /* Change accent color */
  --bg: #020617; /* Change background */
  /* ... */
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Vercel Configuration

The `vercel.json` file is already configured for optimal deployment:
- Framework detection: Vite
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: All routes redirect to `index.html`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sonali Lonkar**
- Email: sonalilonkar0301@gmail.com
- LinkedIn: [linkedin.com/in/sonali-lonkar](https://www.linkedin.com/in/sonali-lonkar)
- GitHub: [github.com/sonalilonkar1](https://github.com/sonalilonkar1)

---

Built with ❤️ using React and deployed on Vercel

