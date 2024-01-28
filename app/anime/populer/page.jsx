'use client';

import { useEffect, useState } from 'react';
import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import { getData } from '@/libs/api';

export default function Populer() {
	const [page, setPage] = useState(1);
	const [topAnime, setTopAnime] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getData('/top/anime', {
				params: {
					page,
					limit: 20,
				},
			});
			setTopAnime(data);
		};

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
