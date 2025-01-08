import { NextRequest, NextResponse } from 'next/server';
import A1CAO05 from '@/app/mocks/A1CAO05.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const simulateError = searchParams.get('error') === 'true';

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true'
  };

  if (simulateError) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500, headers }
    );
  }

  return NextResponse.json(A1CAO05, { headers });
}
