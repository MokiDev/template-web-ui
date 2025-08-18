# Bay Area Tutoring Web UI

This repository is a Next.js 14 template for the Bay Area Tutoring marketing site. It uses React, TypeScript and Tailwind CSS and relies on the App Router.

## Project Overview
- Home page composed from section components such as hero, about, services, locations, results, pricing, FAQ and contact call-to-action.
- All marketing copy lives in [`src/data/siteContent.ts`](src/data/siteContent.ts) for easy customization.

## Development
Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Additional scripts:

```bash
npm run lint   # run ESLint
npm run build  # create production build
```

## Testing
A Jest configuration exists but no `test` script or dependencies are defined yet. Running `npm test` will print "Missing script: test" until tests are added.

## Deployment
Build output can be deployed to any platform that supports Next.js, such as Vercel.
