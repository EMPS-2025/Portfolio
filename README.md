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

1. Upload the latest tender, statutory, or market update PDFs into `public/documents`.
2. Register each file in `data/resources.js` (title, description, date, and public path).
3. Commit and deploy—the site will surface the new files automatically.

### CMS Recommendations

If you prefer updating files without touching the codebase, connect a headless CMS or storage service that exposes a CDN URL:

- **Sanity** or **Contentful** – store PDFs as media assets and query them via GROQ/GraphQL. Fetch the asset list in `data/resources.js` using `fetch()` during build time.
- **Strapi** – self-hosted option with role-based access. Create a collection type for tenders/updates and use the REST or GraphQL API to populate the Resources section.
- **Cloud Storage + JSON (e.g., AWS S3 + DynamoDB/Firebase)** – host PDFs on S3 and keep metadata in a small JSON/NoSQL store; the Next.js route can fetch and map the entries without redeploying.

The existing `resourceLibrary` structure is API-ready, so swapping the static array for a CMS `fetch` call will populate both the homepage library and the statutory requirements viewer automatically.

## Available Scripts

- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm run start` – run the production server
- `npm run lint` – run ESLint checks
