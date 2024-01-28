'use client';

import { useEffect, useState } from 'react';
import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';

export default function Anime() {
	const [page, setPage] = useState(1);
	const [anime, setAnime] = useState([]);

	const fetchData = async () => {
		const animeResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?page=${page}&limit=20&order_by=popularity&status=airing`,
		);
		const data = await animeResponse.json();
		setAnime(data);
	};

	useEffect(() => {
		fetchData();
	}, [page]);

	return (
		<>
			<HeaderMenu title={`ANIME SEDANG BERLANGSUNG #${page}`} />
			<AnimeList api={anime} />
			{anime?.pagination?.last_visible_page > 1 && (
				<Pagination
					page={page}
					lastPage={anime?.pagination?.last_visible_page}
					setPage={setPage}
				/>
			)}
		</>
	);
}
