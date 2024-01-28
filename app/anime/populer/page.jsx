'use client';

import { useEffect, useState } from 'react';
import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';

export default function Populer() {
	const [page, setPage] = useState(1);
	const [topAnime, setTopAnime] = useState([]);

	const fetchData = async () => {
		const animeResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}&limit=20`,
		);
		const data = await animeResponse.json();
		setTopAnime(data);
	};

	useEffect(() => {
		fetchData();
	}, [page]);

	return (
		<>
			<HeaderMenu title={`ANIME TERPOPULER #${page}`} />
			<AnimeList api={topAnime} />
			{topAnime?.pagination?.last_visible_page > 1 && (
				<Pagination
					page={page}
					lastPage={topAnime?.pagination?.last_visible_page}
					setPage={setPage}
				/>
			)}
		</>
	);
}
