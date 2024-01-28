import AnimeList from '@/components/AnimeList';
import Header from '@/components/Header';
import { getData } from '@/libs/api';

export default async function Home() {
	const topAnime = await getData('/top/anime', {
		params: {
			limit: 8,
		},
	});

	const anime = await getData('/anime', {
		params: {
			limit: 8,
			order_by: 'popularity',
			status: 'airing',
		},
	});

	return (
		<>
			<section>
				<Header
					title='Anime Paling Populer'
					linkHref='/anime/populer'
					linkTitle='Lihat Semua'
				/>
				{topAnime.data.length !== 0 ? (
					<AnimeList api={topAnime} />
				) : (
					<p className='text-center font-semibold text-lg'>Tidak ada data</p>
				)}
			</section>
			<section>
				<Header
					title='Anime Sedang Berlangsung'
					linkHref='/anime'
					linkTitle='Lihat Semua'
				/>
				{anime.data.length !== 0 ? (
					<AnimeList api={anime} />
				) : (
					<p className='text-center font-semibold text-lg'>Tidak ada data</p>
				)}
			</section>
		</>
	);
}
