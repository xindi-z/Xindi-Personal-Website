# Technical Standards
Use React, TypeScript, Vite, Tailwind CSS, and lucide-react. This is a static frontend with no backend.
Keep identity, education, skills, experience, projects, and optional URLs in src/data/portfolio.ts.
Use components for reusable UI, sections for page content, and styles for themes and responsive rules.

Use semantic HTML, visible focus indicators, a skip link, reduced-motion support, and Escape handling for the mobile menu.
Serve the unmodified PDF resume from public. Do not add remote fonts or third-party tracking.
Hide empty URLs. Use safe rel attributes for external links. Configure hosting paths through Vite base.
Use npm run build for type checking and bundling, and npm run dev for local preview.
Store only the theme preference in localStorage; unavailable storage must not break the page.

## GitHub Pages
Use the manually triggered pages-manual.yml workflow, Node 22, npm ci, and a production build. Upload only dist. The default branch is main.
Preserve the existing removal of deploy.yml rather than restoring the previous push-triggered workflow.
Keep only intended public assets in public. The old Word resume is backed up in ignored local-only.

## Documentation
Use English prose and filenames. Update links whenever documents are renamed. Documentation-only changes require link and text checks, not an unnecessary application rebuild.
