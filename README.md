# Xindi Zheng — Personal Portfolio
An English-language portfolio for software engineering, AI, backend, and related technical opportunities. Built from the supplied resume and project brief. No backend, tracking, paid services, or automatic deployment.

## Tech stack
React 19, TypeScript, Vite, Tailwind CSS 4, Lucide React. Custom responsive styling, local system fonts, and lightweight native browser interactions.

## Local setup
Use Node.js 22. In this folder run:
~~~powershell
npm install
npm run dev
~~~
Open the local address printed in the terminal. Stop the server with Ctrl+C. The development server is bound to this computer only.

## Production build
~~~powershell
npm run build
npm run preview
~~~
The build performs TypeScript validation and writes static files to dist. Upload only dist when publishing a built site. For repeatable clean installations, use npm ci.

## Editing content
- src/data/portfolio.ts: identity, email, location, GitHub, LinkedIn, resume filename, experience, projects, skills, education, highlights, and interests.
- Set profile.linkedin to your real LinkedIn URL to show its links.
- Add each project's github and demo URLs to enable those buttons. Blank values intentionally hide links.
- Replace public/Xindi_Zheng_SWE_Resume.pdf to update the download, or change profile.resume to a different filename. The format label is derived from the filename.
- src/sections: page sections and editorial headings.
- src/styles/global.css: colors, spacing, typography, and responsive rules.
- index.html: SEO and Open Graph title/description.
- public/favicon.svg: monogram favicon.

The project visuals are technical flow diagrams, not screenshots of the original projects. Interests are editable selections from the supplied brief. No skill percentages or unsupported seniority claims are used.

## Features
Sticky navigation with active section tracking; keyboard-accessible responsive menu with Escape behavior; anchor navigation; category filtering; resume download; copy-email feedback and failure fallback; back-to-top link; reduced-motion support; skip link; semantic headings and sections.

## Deployment — manual only
Nothing has been deployed. These are instructions for when you choose to publish.

### Vercel
Import your Git repository as a Vite project. Use npm run build and dist as the output directory. Deploy when ready.
[Official guide](https://vercel.com/docs/frameworks/frontend/vite)

### Netlify
Import the repository, choose npm run build as the build command and dist as the publish directory. Alternatively, build locally and upload dist with Netlify's manual deployment.
[Official guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/)

### GitHub Pages
1. Push this source to your chosen GitHub repository.
2. In Settings > Pages, select GitHub Actions as the deployment source.
3. Add the Vite guide's static-site workflow: checkout, set up Node 22, npm ci, npm run build, configure Pages, upload dist using upload-pages-artifact, and deploy-pages. Allow Pages write and id-token write permissions.
4. Run the workflow and open the resulting Pages URL.

The relative Vite base ('./') supports this single-page site under a repository path. There are no client-side routes beyond section anchors.
[Official workflow and instructions](https://vite.dev/guide/static-deploy.html#github-pages)

Once you choose a public domain, add the verified canonical URL and og:url to index.html. No social preview image is generated or claimed.

## Project standards
Read AGENTS.md, then docs/04-执行流程与阶段计划.md before changes. Keep requirements, technical choices, and design standards in docs. Record completed work, checks, open questions, and next steps in 开发日志.

## Validation scope
See 开发日志/2026-09-10.md for build and browser checks. Basic accessibility review is not a formal WCAG certification. Email delivery and external-account availability are outside the local application's control.

