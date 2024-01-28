import AnimeList from '@/components/AnimeList';
import Header from '@/components/Header';

export default async function Home() {
	const animeResponse = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`,
	);
	const topAnime = await animeResponse.json();

	const allAnimeResponse = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?limit=8&order_by=popularity&status=airing`,
	);
	const anime = await allAnimeResponse.json();

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
