import { EmailTemplate } from '@/src/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND);

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });
  }

  const body = await request.json();
  const { content, senderName, senderEmail } = body;

  if (!content || !senderName || !senderEmail) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'magnusgiverin@icloud.com',
      subject: 'Contact from ' + senderName,
      react: await EmailTemplate({ senderEmail, senderName, content }),
    });

    if (error) {
      return new Response(JSON.stringify(error), { status: 400 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
