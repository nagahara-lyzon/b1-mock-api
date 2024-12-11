import { NextRequest, NextResponse } from 'next/server';
import A1CAO03 from '@/app/mocks/A1CAO03.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const simulateError = searchParams.get('error') === 'true';

  const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3000', // 許可するオリジン
    'Access-Control-Allow-Methods': 'GET,OPTIONS',         // 許可するHTTPメソッド
    'Access-Control-Allow-Headers': 'Content-Type',        // 許可するヘッダー
  };

  // プリフライトリクエスト対応 (OPTIONS)
  if (request.method === 'OPTIONS') {
    return NextResponse.json(null, { status: 204, headers });
  }

  if (simulateError) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500, headers }
    );
  }

  return NextResponse.json(A1CAO03, { headers });
}
