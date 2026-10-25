# Arpit Jayshwal — React Portfolio

A responsive personal developer portfolio built with React, Vite, JavaScript, CSS, Lucide React, and Framer Motion. The portfolio content is centralized in `src/data/portfolioData.js`.

## Run locally

Requirements: a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Add your profile photo

1. Copy your preferred portrait into `public/images/` and name it `profile.jpg`.
2. Open `src/data/portfolioData.js`.
3. Set `photo: ''` to `photo: '/images/profile.jpg'`.

A designed initials placeholder appears until a photo is configured. A square or vertical image works best.

## Add GitHub and LinkedIn

Open `src/data/portfolioData.js` and set the profile URLs:

```js
github: 'https://github.com/your-username',
linkedin: 'https://www.linkedin.com/in/your-profile/',
```

The GitHub field is prefilled with `https://github.com/yoarpit`. LinkedIn is left blank because the resume supplied for this site did not include a profile URL. When a social URL is blank, the UI shows a non-clickable icon/notice rather than inventing a destination.

## Add your resume

Copy the resume PDF you want to publish to `public/resume.pdf`. The hero's **Download resume** button links to this file. Review your resume first and remove personal details you do not want publicly available before deploying it.

## Customize portfolio content

Edit `src/data/portfolioData.js` to update your headline, introduction, social links, skills, projects, education, and achievements. Project details are based on the uploaded resume. The Discord project is explicitly identified as documentation-only. No live demo or repository links have been invented.

## Contact section

The email button opens the visitor's email app, and the copy-email button copies your email address. A form service/backend is not required for these actions.

## Deploy

Push the project to a Git repository and import it into Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory. Add `public/resume.pdf` and your photo before deploying if you want those assets included.
