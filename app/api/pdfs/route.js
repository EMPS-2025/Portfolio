import { NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    let files = [];
    try {
      const entries = await readdir(uploadsDir);
      files = await Promise.all(
        entries
          .filter((entry) => entry.toLowerCase().endsWith('.pdf'))
          .map(async (entry) => {
            const filePath = path.join(uploadsDir, entry);
            const fileStat = await stat(filePath);
            const sizeInKb = Math.max(1, Math.round(fileStat.size / 1024));
            return {
              name: entry,
              url: `/uploads/${entry}`,
              size: `${sizeInKb} KB`
            };
          })
      );
    } catch (error) {
      files = [];
    }

    return NextResponse.json({ files });
  } catch (error) {
    console.error('Failed to list PDFs', error);
    return NextResponse.json({ error: 'Unable to list PDFs' }, { status: 500 });
  }
}
