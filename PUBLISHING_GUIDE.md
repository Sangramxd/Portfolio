# How to Publish Your Portfolio Website

This guide provides step-by-step instructions for publishing your portfolio website online.

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com) and sign up (if you don't have an account)

### Step 2: Create a New Repository
1. Click the "+" icon in the top right → "New repository"
2. Name it: `portfolio-website` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. Check "Add a README file"
5. Click "Create repository"

### Step 3: Upload Your Files
1. In your repository, click "uploading an existing file"
2. Drag and drop all your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `profile.jpg`
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to your repository → Click "Settings" tab
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"
6. Your site will be live at: `https://yourusername.github.io/portfolio-website`

### Step 5: Custom Domain (Optional)
- You can add a custom domain in the Pages settings

---

## Option 2: Netlify (Free & Very Easy)

### Method A: Drag and Drop
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag your entire project folder onto the Netlify dashboard
3. Your site is instantly live!
4. You'll get a URL like: `https://random-name-123.netlify.app`

### Method B: Git Integration
1. Connect your GitHub account to Netlify
2. Select your repository
3. Netlify automatically deploys on every push

---

## Option 3: Vercel (Free & Fast)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New Project"
3. Import your GitHub repository (or drag and drop)
4. Click "Deploy"
5. Your site is live instantly!

---

## Option 4: Using Git Commands (Advanced)

If you prefer using command line:

```bash
# Navigate to your project folder
cd "/Users/zeexterxd/RESEARCH/Resume website"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages as described in Option 1.

---

## Quick Checklist Before Publishing

- [ ] Test the website locally (open `index.html` in browser)
- [ ] Make sure `profile.jpg` is in the same folder
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Verify contact form works (if applicable)

---

## Recommended: GitHub Pages

**Why GitHub Pages?**
- ✅ Completely free
- ✅ Easy to update (just push new files)
- ✅ Professional URL option
- ✅ Great for portfolios
- ✅ Free SSL certificate
- ✅ No server management needed

**Your live URL will be:**
`https://yourusername.github.io/portfolio-website`

---

## Need Help?

If you encounter any issues:
1. Make sure all files are in the same folder
2. Check that `profile.jpg` filename matches exactly (case-sensitive)
3. Verify all file paths are correct
4. Clear browser cache if changes don't appear

---

## Updating Your Website

After initial publish, to update:
1. Edit files locally
2. Upload/commit the changes
3. Site updates automatically (may take a few minutes)

