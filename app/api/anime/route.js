import prisma from '@/libs/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async request => {
	const { searchParams } = new URL(request.url);

	const page = parseInt(searchParams.get('page') || 1);
	const limit = parseInt(searchParams.get('limit') || 5);

	const anime = await prisma.anime.findMany({
		take: limit,
		skip: limit * (page - 1),
	});

	return new NextResponse(
		JSON.stringify({
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
		}),
	);
};

export const POST = async request => {
	const data = await request.json();

	const createAnime = await prisma.anime.create({ data });
	if (!createAnime) {
		return new NextResponse(
			JSON.stringify({ message: "Something Wen't Wrong", status: 500 }),
		);
	} else {
		return new NextResponse(
			JSON.stringify({
				message: 'Create Anime Success',
				status: 201,
				data: createAnime,
			}),
		);
	}
};
