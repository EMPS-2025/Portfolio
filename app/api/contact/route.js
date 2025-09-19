import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'no-reply@energyminds.in',
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM || 'info@energyminds.in',
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service || 'Not specified'}\n\nMessage:\n${message}`
    };

    if (process.env.EMAIL_SERVER_HOST) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Contact form submission (email transport not configured):', mailOptions);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
