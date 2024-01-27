import AnimeList from '@/components/AnimeList';
import Header from '@/components/Header';

export default async function Home() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`,
	);
	// const response = await fetch(`http://localhost:3000/api/anime?limit=8`, {
	// 	method: 'GET',
	// });
	const topAnime = await response.json();

	return (
		<>
			<section>
				<Header
					title='Paling Populer'
					linkHref='/populer'
					linkTitle='Lihat Semua'
				/>
				<AnimeList api={topAnime} />
			</section>
			<section>
				<Header
					title='Anime Terbaru'
					linkHref='/terbaru'
					linkTitle='Lihat Semua'
				/>
				<AnimeList api={topAnime} />
			</section>
		</>
	);
}
