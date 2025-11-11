# Quick Publish Guide

## Fastest Way: GitHub Pages

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio-website` (or your preferred name)
3. Make it **Public**
4. **Don't** initialize with README
5. Click "Create repository"

### Step 2: Push Your Code
Run these commands in your terminal:

```bash
cd "/Users/zeexterxd/RESEARCH/Resume website"

# Commit your files
git add .
git commit -m "Initial portfolio website"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source": Select **main** branch and **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes, then visit: `https://YOUR_USERNAME.github.io/portfolio-website`

---

## Alternative: Netlify (Even Faster!)

1. Go to https://app.netlify.com/drop
2. Drag your entire project folder onto the page
3. Done! Your site is live instantly
4. You'll get a URL like: `https://random-name-123.netlify.app`

---

## Your Site Will Be Live At:
- GitHub Pages: `https://YOUR_USERNAME.github.io/portfolio-website`
- Netlify: `https://YOUR_SITE_NAME.netlify.app`

Both are completely free!

