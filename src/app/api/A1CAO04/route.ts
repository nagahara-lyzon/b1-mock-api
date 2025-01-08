import { NextRequest, NextResponse } from 'next/server';
import A1CAO04 from '@/app/mocks/A1CAO04.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const simulateError = searchParams.get('error');

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true'
  };
  if (simulateError === '1') {
		return NextResponse.json({ message: 'Internal Server Error' }, { status: 500, headers });
	}

  return NextResponse.json(A1CAO04, { headers });
}
