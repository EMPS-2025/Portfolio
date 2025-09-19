import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('pdf');

    if (!file || file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Invalid file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadsDir, { recursive: true });

    const safeName = file.name.replace(/[^a-z0-9\.\-_]/gi, '_');
    const filePath = path.join(uploadsDir, safeName);
    await writeFile(filePath, buffer);

    return NextResponse.json({ success: true, file: `/uploads/${safeName}` });
  } catch (error) {
    console.error('PDF upload failed', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
