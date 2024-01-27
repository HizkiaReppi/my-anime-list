import prisma from '@/libs/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async request => {
	const { searchParams } = new URL(request.url);

	const page = parseInt(searchParams.get('page') || 1);
	const limit = parseInt(searchParams.get('limit') || 5);

	try {
		const anime = await prisma.anime.findMany({
			take: limit,
			skip: limit * (page - 1),
		});

		return NextResponse.json(
			{
				message: 'Get Data Success',
				status: 200,
				data: anime.map(data => {
					return {
						mal_id: data.id,
						title: data.title,
						images: {
							webp: {
								image_url: data.Image,
							},
						},
					};
				}),
				meta: {
					limit,
					page,
				},
			},
			{ status: 200 },
		);
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ message: 'Internal Server Error', status: 500 },
			{ status: 500 },
		);
	}
};

export const POST = async req => {
	try {
		const request = new NextRequest(req);

		const body = await request.body();

		const data = JSON.parse(body);

		const createAnime = await prisma.anime.create({ data });

		return NextResponse.json(
			{
				message: 'Create Anime Success',
				status: 201,
				data: createAnime,
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error(err);
		return NextResponse.json(
			{ message: 'Invalid Request', status: 400 },
			{ status: 400 },
		);
	}
};
