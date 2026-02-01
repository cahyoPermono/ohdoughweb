# Deployment Guide 🚀

This project is configured for **Static Export** (`output: 'export'`) to be hosted seamlessly on **GitHub Pages** with a custom domain.

## Prerequisites

1.  **GitHub Repository**: ensuring the code is pushed to a repo.
2.  **Domain Name**: Purchased from a provider (e.g., Hostinger).
3.  **Clean State**: Ensure `git status` represents a clean working directory.

## Configuration Checklist

Before deploying, ensure these files are set correctly:

1.  **`next.config.ts`**:
    Must have `output: 'export'` and `basePath` set to empty string `''` (since we are using a custom root domain).
    ```typescript
    const nextConfig = {
      output: 'export',
      basePath: '', 
      images: { unoptimized: true },
    };
    ```

2.  **`public/CNAME`**:
    Must contain **only** your domain name (no http:// or www).
    ```
    ohdoughbakery.com
    ```

## Step-by-Step Deployment

### 1. Build and Push
Since this is a manual static deployment setup via GitHub Actions (or simple branch hosting), the easiest standard flow is:

```bash
# 1. Add all changes
git add .

# 2. Commit with a descriptive message
git commit -m "Deploy latest updates"

# 3. Push to GitHub
git push origin main
```

### 2. GitHub Pages Settings (One Time Setup)
1.  Go to your Repository on GitHub.
2.  Navigate to **Settings** > **Pages**.
3.  **Source**: Select `GitHub Actions` (if using a workflow) OR `Deploy from a branch` (classic method).
    *   *If using Classic Branch*: Ensure the build folder (usually `out` or `docs`) is what's being served, OR use a standard Action to build Next.js.
4.  **Custom Domain**: Enter `ohdoughbakery.com`.
5.  **Enforce HTTPS**: Check this box.
6.  **DNS Check**: Ensure the green checkmark appears (DNS valid).

### 3. DNS Configuration (Hostinger/Provider)
Ensure your DNS records point to GitHub:

*   **A Records (@)**:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153
*   **CNAME Record (www)**:
    - Target: `yourusername.github.io`

## Troubleshooting

-   **404 on Assets/Images**:
    -   Check if `basePath` in `next.config.ts` is accidentally turned on. For custom domains, it should be empty.
    -   Ensure images are in `public/` and referenced with a leading slash `/`.

-   **Changes Not Appearing**:
    -   Clear your browser cache or try Incognito mode. DNS propagation can take up to 24 hours (though usually fast).
    -   Check the "Actions" tab in GitHub to see if the deployment workflow failed.
