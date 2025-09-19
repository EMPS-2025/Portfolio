import { NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { DOCUMENT_CATEGORIES } from '@/lib/documentCategories';

export async function GET() {
  try {
    const documentsRoot = path.join(process.cwd(), 'public', 'documents');

    const categories = await Promise.all(
      DOCUMENT_CATEGORIES.map(async (category) => {
        const directory = path.join(documentsRoot, category.folder);
        let documents = [];

        try {
          const entries = await readdir(directory);
          const pdfEntries = entries.filter((entry) => entry.toLowerCase().endsWith('.pdf'));

          documents = await Promise.all(
            pdfEntries.map(async (entry) => {
              const filePath = path.join(directory, entry);
              const fileStat = await stat(filePath);
              const sizeInKb = Math.max(1, Math.round(fileStat.size / 1024));

              return {
                name: entry,
                url: `/documents/${category.folder}/${entry}`,
                size: `${sizeInKb} KB`,
                modified: fileStat.mtime.toISOString()
              };
            })
          );

          documents.sort((a, b) => new Date(b.modified) - new Date(a.modified));
        } catch (error) {
          if (error.code !== 'ENOENT') {
            console.error(`Failed to read documents for ${category.id}`, error);
          }
        }

        return {
          id: category.id,
          title: category.title,
          description: category.description,
          documents
        };
      })
    );

    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Failed to list PDFs', error);
    return NextResponse.json({ error: 'Unable to list PDFs' }, { status: 500 });
  }
}
