export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body || {};
    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), { status: 400 });
    }
    // In production, send via email service (Resend, SES, etc.)
    console.log('New contact inquiry:', { name, email, service, message, ts: new Date().toISOString() });
    return Response.json({ ok: true });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }
}
