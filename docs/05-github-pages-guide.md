# GitHub Pages Publishing Guide

## Preparation findings
- Static React website; no backend, database, API key, or paid service is required.
- No advertising, analytics, tracking SDKs, remote fonts, or AI API integration was added. AI assistance refers to development, not a runtime AI service.
- localStorage stores only portfolio-theme. Email copying accesses the clipboard on click.
- Contact links use mailto; the website does not send email through a backend.
- GitHub links navigate externally. Missing LinkedIn and project links are hidden.
- The website displays the owner's name, email, city, education, projects, and experience. The PDF resume is publicly downloadable.
- The old DOCX is backed up in ignored local-only; only the PDF is included in the current build.
- A public repository also exposes committed source, documentation, logs, and history. Ignore rules do not remove previously committed Word files from history.
- npm audit reported no known vulnerabilities during the preparation check. This is not a comprehensive security certification.

## Repository and intended address
Repository: https://github.com/xindi-z/Xindi-Personal-Website
Default branch: main
Expected address after successful publishing: https://xindi-z.github.io/Xindi-Personal-Website/
The relative Vite base supports this single-page repository path. Resume and asset references use relative paths.
The preparation work did not push code or deploy the site. Verify the actual remote settings and deployment status in GitHub.

## Publishing
1. Review changes, commit, and push main. Exclude node_modules, dist, local-only, and .env.
2. Under repository Settings > Pages > Build and deployment, select GitHub Actions as the source.
3. Open Actions, select Publish portfolio to GitHub Pages, and run the workflow on main.
4. Wait for build and deploy to succeed. Use the URL returned by the deployment.
5. Check the homepage, themes, mobile navigation, project filters, PDF download, and contact links.
6. For later changes, push the update and run the workflow manually. Pushing alone does not trigger this workflow.

Keep the deletion of the old deploy.yml when committing, so its push-triggered workflow is not retained remotely.
No personal access token or additional repository secret is required for this workflow; it uses GitHub's workflow identity.

## Remaining content and checks
- Supply LinkedIn and real project source/demo URLs.
- Review the selected interests and public resume.
- Add canonical and og:url metadata after confirming the published address.
- About remains after Education and Skill Set; moving it earlier was discussed but not implemented.
- The preparation pass checked the production build and public assets, not a full new browser regression.

## References
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Vite static deployment](https://vite.dev/guide/static-deploy.html)
