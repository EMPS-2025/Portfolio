# Energy Minds Power Solutions Website

This repository hosts the Next.js implementation of the Energy Minds Power Solutions Private Limited website.

## Getting Started

```bash
npm install
npm run dev
```

The site is built with the Next.js App Router and keeps the original visual language while adding renewable-energy inspired motion graphics and dynamic data sections.

## Environment Variables

The contact form uses an SMTP transport that requires the following variables (place them in a `.env.local` file):

```
CONTACT_EMAIL_FROM=notifications@your-domain.com
CONTACT_EMAIL_TO=info@energyminds.in
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=apikey-or-username
SMTP_PASS=secret-password
```

## Updating PDFs and Market Collateral

1. Replace or add PDF files to `public/documents`.
2. Update the metadata in `data/resources.js` to surface new tenders, market updates, or statutory documents.
3. Deploy the site—no further code changes are required.

For a non-technical workflow consider using a headless CMS such as **Sanity**, **Contentful**, or **Strapi**. Each platform can host media assets and expose them through APIs that can be fetched from the Next.js app.

## Available Scripts

- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm run start` – run the production server
- `npm run lint` – run ESLint checks
