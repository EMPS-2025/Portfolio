import nodemailer from 'nodemailer';

const requiredEnv = ['CONTACT_EMAIL_FROM', 'CONTACT_EMAIL_TO', 'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];

function ensureEnvironment() {
  const missing = requiredEnv.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response('Invalid request body', { status: 400 });
  }

  const { name, email, company, service, message } = payload;

  if (!name || !email || !company || !service || !message) {
    return new Response('Missing required fields', { status: 400 });
  }

  try {
    ensureEnvironment();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `New enquiry from ${name} - ${company}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService Interest: ${service}\n\nMessage:\n${message}`
    });

    return new Response('Message sent', { status: 200 });
  } catch (error) {
    console.error('Contact form error', error);
    return new Response('Unable to send message', { status: 500 });
  }
}
