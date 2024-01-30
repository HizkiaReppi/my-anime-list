'use client';

import { useEffect, useState } from 'react';
import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import { getData } from '@/libs/api';

export default function Anime() {
	const [page, setPage] = useState(1);
	const [anime, setAnime] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getData('/anime', {
				params: {
					page,
					limit: 20,
					order_by: 'popularity',
					status: 'airing',
				},
			});
			setAnime(data);
		};

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
