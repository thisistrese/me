# thisistrese.me - Personal Portfolio

Personal portfolio website for Theresa Renee built with React, featuring a sleek Uber-like design with Mystique/Innovation color palette.

## 🌐 Custom Domain Setup

Your GitHub Pages site is configured to use the custom domain: **thisistrese.me**

### DNS Configuration Required

To point your domain to GitHub Pages, add the following DNS records in your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare):

#### Option 1: Using A Records (Recommended)

Add these **A records** for the apex domain (@):

```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

#### Option 2: Using CNAME (if you prefer www)

```
Type: CNAME
Host: www
Value: thisistrese.github.io
```

### GitHub Pages Settings

1. Go to your repository: https://github.com/thisistrese/me
2. Click **Settings** → **Pages**
3. Under **Source**, select: `Deploy from a branch`
4. Select branch: `gh-pages` (will be created automatically after first deployment)
5. Under **Custom domain**, enter: `thisistrese.me`
6. Check **Enforce HTTPS** (recommended)

### Verification

After updating DNS records (may take 24-48 hours to propagate):
- Visit: https://thisistrese.me
- GitHub will automatically provision an SSL certificate

### Deployment Status

The site auto-deploys via GitHub Actions on every push to `main` branch.
Check deployment status: https://github.com/thisistrese/me/actions

## 🚀 Local Development

```bash
cd frontend
yarn install
yarn start
```

## 📦 Build

```bash
cd frontend
yarn build
```

## 🎨 Design Features

- **Mystique/Innovation Color Palette**: Deep navy, royal purple, rose gold
- **5 Partnership Tiers**: Public, Thought Partnership, Strategic Advisory, Founding Partner Circle, Private Contract
- **Fully Responsive**: Mobile-optimized with hamburger menu
- **Uber-like Aesthetic**: Clean, modern, professional

## 📧 Contact

- Email: theresa@onesynergee.org
- Substack: https://thisistrese.substack.com
