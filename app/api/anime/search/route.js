import prisma from '@/libs/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async request => {
	const { searchParams } = new URL(request.url);

	const query = searchParams.get('q');

	const anime = await prisma.anime.findMany({
		where: {
			title: {
				contains: query,
			},
		},
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
		}),
	);
};
