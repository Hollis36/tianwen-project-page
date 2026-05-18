# TianWen — Project Page

Source for the academic project page of **TianWen 天问 — A Universal Training Framework for Detection-VLM Fusion**.

Live: https://hollis36.github.io/tianwen-project-page/

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Static site, deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/tianwen-project-page/
npm run build    # output → dist/
npm run preview  # serve the built site
```

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

## License

Apache 2.0 — same as the underlying [TianWen](https://github.com/Hollis36/TianWen) framework.
