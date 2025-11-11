# How to Receive Contact Form Messages

Currently, the contact form shows a success message but doesn't actually send emails. Here are **3 easy ways** to receive messages:

---

## Option 1: Formspree (Recommended - Free & Easy)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for free (50 submissions/month free)
3. Click "New Form"
4. Copy your **Form ID** (looks like: `xrgkqjpn`)

### Step 2: Update Your Code
1. Open `script.js`
2. Find this line: `'https://formspree.io/f/YOUR_FORMSPREE_ID'`
3. Replace `YOUR_FORMSPREE_ID` with your actual Form ID
4. Save the file

### Step 3: Set Your Email
1. In Formspree dashboard, go to your form settings
2. Add your email: `sangrams@andrew.cmu.edu`
3. Enable email notifications

**Done!** Messages will be sent to your email inbox.

---

## Option 2: EmailJS (Free - 200 emails/month)

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for free
3. Create a service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your **Public Key** and **Service ID**

### Step 2: Update Your Code
Replace the contact form function in `script.js` with EmailJS integration.

**Pros:** More control, can customize email templates
**Cons:** Requires more setup

---

## Option 3: Netlify Forms (If using Netlify)

If you publish on Netlify:
1. Add `netlify` attribute to your form tag
2. Messages appear in Netlify dashboard
3. You can set up email notifications

**Update your form tag:**
```html
<form class="contact-form-minimal" id="contactForm" netlify>
```

---

## Option 4: Simple Mailto (Current Fallback)

The current code has a fallback that opens the user's email client. This works but requires the visitor to have email configured.

---

## Quick Setup: Formspree (5 minutes)

1. **Sign up:** https://formspree.io/accounts/signup/
2. **Create form:** Click "New Form"
3. **Get Form ID:** Copy the ID (e.g., `xrgkqjpn`)
4. **Update script.js:** Replace `YOUR_FORMSPREE_ID` with your ID
5. **Add email:** In Formspree settings, add `sangrams@andrew.cmu.edu`
6. **Test:** Submit the form on your website

**You'll receive emails at:** `sangrams@andrew.cmu.edu`

---

## Current Status

Right now, the form:
- ✅ Shows success message
- ✅ Validates input
- ❌ Doesn't send emails (needs setup)

After setting up Formspree, you'll:
- ✅ Receive emails in your inbox
- ✅ Get notifications for each submission
- ✅ See form submissions in Formspree dashboard

---

## Need Help?

If you need help setting up Formspree or another service, let me know!

