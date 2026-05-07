import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = 'https://predictpriceai-backend-production.up.railway.app/api/auth/login/';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Corps de requête invalide.' }, { status: 400 });
  }

  let response: Response;
  try {
    response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'curl/7.88.1',
        'Connection': 'keep-alive',
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error('[login proxy] fetch error:', err);
    return NextResponse.json({ success: false, message: 'Impossible de joindre le serveur.' }, { status: 503 });
  }

  const contentType = response.headers.get('content-type') ?? '';
  console.log('[login proxy] status:', response.status, 'content-type:', contentType);

  if (!contentType.includes('application/json')) {
    const text = await response.text();
    console.error('[login proxy] non-JSON response:', text.slice(0, 200));
    return NextResponse.json(
      { success: false, message: `Erreur serveur (${response.status}).` },
      { status: 502 }
    );
  }

  const data = await response.json();

  if (response.ok && data.success) {
    const res = NextResponse.json(data, { status: 200 });
    res.cookies.set('admin_session', 'authenticated', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 8,
      sameSite: 'lax',
    });
    return res;
  }

  return NextResponse.json(data, { status: response.status });
}
