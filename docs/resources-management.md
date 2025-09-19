# Managing the Energyminds document library

The Resources page groups PDFs into three sections: tenders, statutory requirements and daily market updates. The
content is rendered dynamically by reading the files stored in the repository/server—no manual code edits are required
once the PDFs are in place.

## Folder structure

```
public/
└── documents/
    ├── tenders/
    ├── statutory-requirements/
    └── market-updates/
```

Upload or copy each PDF into the matching folder. File names are used as the display titles on the website, so choose
clear, descriptive names (for example, `Power-Exchange-Update-15-Apr-2024.pdf`).

> ℹ️  The application automatically ignores non-PDF files inside these folders.

## Deployment checklist

1. Connect to the server or hosting platform (FTP, SSH, Vercel storage, etc.).
2. Add or replace the PDF files inside the folder corresponding to the section you want to update.
3. Refresh the Resources page—the new documents appear instantly.

You can safely remove outdated files; the page will stop listing them the moment they are deleted.

## Optional CMS integrations

If you prefer a web-based interface for managing documents, integrate a headless CMS that supports media libraries and
REST/GraphQL APIs. Recommended options include:

- **Sanity.io** – real-time content studio with file asset APIs and on-demand revalidation webhooks.
- **Strapi** – open-source Node.js CMS that can run alongside this project and exposes REST endpoints for uploaded media.
- **Storyblok** or **Contentful** – both offer visual editors and role-based permissions.

When using a CMS, update the `/api/pdfs` route to fetch the document metadata from the chosen service instead of reading
from the filesystem. The Resources page consumes a simple JSON payload (see the current implementation for the expected
shape), so swapping the data source is straightforward.
