import prisma from '@/libs/prisma/prisma';
import { NextResponse } from 'next/server';

export const GET = async request => {
	const { searchParams } = new URL(request.url);

	const query = searchParams.get('q');

	try {
		const anime = await prisma.anime.findMany({
			where: {
				title: {
					contains: query,
				},
			},
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
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error(err);
		return NextResponse.json(
			{ message: 'Internal Server Error', status: 500 },
			{ status: 500 },
		);
	}
};
