# Xindi Zheng — AI-Assisted Personal Website

Xindi Zheng's personal portfolio website, designed and developed with AI assistance. It presents education, technical skills, research experience, and software projects for software engineering, AI engineering, and related opportunities.

The website is a static portfolio. AI was used during development; the site does not run an AI service or require an API key.

## Features
- Responsive English-language portfolio with subtle pixel details
- Light/dark theme switching with a saved local preference
- Education, Skill Set, About, Experience, Projects, Interests, and Contact
- Project category filters and optional source/demo links
- PDF resume download and copy-email button
- Sticky navigation, mobile menu, active-section highlighting, and back-to-top navigation
- Semantic sections, keyboard focus styles, and reduced-motion support

## Tech stack
React 19, TypeScript, Vite, Tailwind CSS 4, and Lucide React. Uses local system fonts and custom responsive styling, with no backend, analytics, or tracking SDK.

## Local setup
Use Node.js 22.
~~~sh
npm install
npm run dev
~~~
Open the address printed in the terminal. Stop the server with Ctrl+C. For a repeatable installation from the lockfile, use npm ci.

## Production build
~~~sh
npm run build
npm run preview
~~~
The build checks TypeScript and writes static output to dist. Only dist is needed for website hosting.

## Editing content
- src/data/portfolio.ts: personal information, experience, projects, skills, education, and interests.
- profile.linkedin: add the real LinkedIn URL to show its links.
- Project github and demo fields: add real URLs to enable those buttons; empty links are hidden.
- public/Xindi_Zheng_SWE_Resume.pdf: replace to update the resume, or change profile.resume. The button label follows the file extension.
- src/sections: page structure and editorial headings.
- src/styles/global.css: colors, spacing, themes, and responsive rules.
- index.html: SEO and Open Graph text.
- src/components/PixelLogo.tsx and public/favicon.svg: branding.

Project visuals are technical diagrams, not screenshots of the original applications. Personal claims are based on the supplied resume and brief.

## Deployment
The prepared GitHub Pages workflow, .github/workflows/pages-manual.yml, runs manually. Read the [publishing guide](docs/05-github-pages-guide.md) for repository-specific steps and public-file considerations.

For Vercel or Netlify, use npm run build and dist as the output directory:
- [Vercel Vite guide](https://vercel.com/docs/frameworks/frontend/vite)
- [Netlify Vite guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/)

The relative Vite base supports this single-page site under a repository subpath. Add canonical and og:url only after confirming the final published address.

## Documentation
- [Collaboration guide](AGENTS.md)
- [Requirements](docs/01-project-requirements.md)
- [Technical standards](docs/02-technical-standards.md)
- [Design standards](docs/03-design-standards.md)
- [Execution plan](docs/04-execution-plan.md)
- [Development log](development-log/2026-09-10.md)

All project documentation is maintained in English. The development log records the scope and timing of checks; basic accessibility review is not a formal WCAG certification.
