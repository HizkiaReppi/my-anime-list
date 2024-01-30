import { NextRequest, NextResponse } from 'next/server';
import { signup } from '@/libs/prisma/services';

export const POST = async req => {
	try {
		const request = new NextRequest(req);
		const body = await request.json();

		const data = await signup(body);

		return NextResponse.json(
			{
				message: 'Register Success',
				code: 201,
				data,
			},
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message,
				code: 400,
			},
			{ status: 400 },
		);
	}
};
