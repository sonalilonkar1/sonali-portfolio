# Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy to production:**
```bash
vercel --prod
```

### Method 2: GitHub Integration (Easiest)

1. **Push code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch = production deployment
   - Every push to other branches = preview deployment

### Method 3: Drag & Drop

1. Build your project:
```bash
npm run build
```

2. Go to [vercel.com](https://vercel.com)
3. Drag the `dist` folder to Vercel dashboard
4. Deploy!

## Important Notes

- Make sure `SonaliLonkar_Resume.pdf` is in the `public/` folder
- The `vercel.json` is already configured for optimal deployment
- Environment variables can be added in Vercel dashboard if needed
- Custom domain can be added in Vercel project settings

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Verify Node.js version (should be 16+)
- Check build logs in Vercel dashboard

### Resume PDF Not Loading
- Ensure `SonaliLonkar_Resume.pdf` is in `public/` folder
- Check file name matches exactly (case-sensitive)
- Verify file size is reasonable (< 5MB recommended)

### Routing Issues
- The `vercel.json` includes SPA routing configuration
- All routes redirect to `index.html` for client-side routing

## Post-Deployment

After deployment, you'll get a URL like:
`https://your-project-name.vercel.app`

You can:
- Add a custom domain in Vercel settings
- Set up environment variables if needed
- Configure analytics
- Set up preview deployments for pull requests

