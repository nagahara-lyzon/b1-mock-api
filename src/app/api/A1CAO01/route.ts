import { NextRequest, NextResponse } from 'next/server';
import A1CAO01_202110 from '@/app/mocks/A1CAO01_202110.json';
import A1CAO01_202111 from '@/app/mocks/A1CAO01_202111.json';
import A1CAO01_202112 from '@/app/mocks/A1CAO01_202112.json';

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const simulateError = searchParams.get('error') === 'true';
	const month = searchParams.get('month');

	if (simulateError) {
		return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
	}
	let response = A1CAO01_202111;

	if (month === '202110') {
		response = A1CAO01_202110;
	} else if (month === '202112') {
		response = A1CAO01_202112;
	}

	return NextResponse.json(response);
}
