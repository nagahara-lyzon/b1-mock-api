import { NextRequest, NextResponse } from 'next/server';
import A1CAO03 from '@/app/mocks/A1CAO03.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const simulateError = searchParams.get('error') === 'true';

  if (simulateError) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }

  return NextResponse.json(A1CAO03);
}
