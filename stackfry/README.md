# Stackfry — Complete Project

React 19 + React Router + GSAP / ScrollTrigger, with an esbuild static build.
Includes the homepage, Work, Services, About, Blog, Contact, project detail pages, service detail pages and article pages (17 routes total).

## Quick preview (no installation required)

Install Node.js 20 or newer, extract this ZIP, open a terminal in the extracted `stackfry` folder and run:

```sh
node preview.mjs
```

Open http://127.0.0.1:3000 in your browser. This serves the included production build.
Do not open index.html by double-clicking; the routes and assets need an HTTP server.

## Edit and rebuild

```sh
npm ci
npm run build
node preview.mjs
```

After making source changes, run `npm run build` again and refresh your browser.

## Project structure

- src/main.jsx — React pages, routing and animation lifecycle
- src/data.js — project, service and article content; route list
- src/home.html — approved homepage markup used by the Home component
- src/base.css — original homepage styling
- src/pages.css — dedicated page layouts, scrollytelling and ambient backgrounds
- public/ — locally bundled GSAP and ScrollTrigger files, retaining their license notices
- index.html — document template
- build.mjs — bundles the app and creates direct-entry HTML for every route
- dist/ — complete ready-to-host production website
- package.json / package-lock.json — dependencies and reproducible installation
- preview.mjs — local Node preview server

## Deploy elsewhere

Run `npm ci` and `npm run build`, then publish the `dist` directory at the domain root on a static web host. The build creates HTML entrypoints for the known routes. Configure unknown routes to serve `404.html` so React Router can show its not-found page. The site uses absolute asset paths and is not configured for a GitHub Pages repository subdirectory.

## Put the source on GitHub

Create an empty repository in your GitHub account, then run in this folder:

```sh
git init -b main
git add .
git commit -m "Initial Stackfry website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example URL with your actual repository URL and authenticate using GitHub's normal sign-in flow. You can also use GitHub Desktop to publish the folder.

## Prototype content and behavior

- Project brands, metrics, testimonials and editorial content are samples and must be replaced or verified before commercial launch.
- The contact form downloads a project brief locally. It does not send an email or store submissions on a server.
- Motion includes ambient backgrounds, GSAP reveals, sticky scroll chapters, project parallax, hero motion and logo carousels. Reduced-motion preferences and a pause control are supported.
- Google Fonts is loaded over the network; a system font fallback is included.
- This export contains the application source and built output. Installed dependencies, Git history, credentials and environment-specific Sites identity are omitted.
- Original third-party license notices are retained. No new license is granted for third-party dependencies.
