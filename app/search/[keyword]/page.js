import AnimeList from '@/components/AnimeList';
import Header from '@/components/Header';

export default async function Search({ params }) {
	const { keyword } = params;
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`,
	);
	// const response = await fetch(
	// 	`http://localhost:3000/api/anime/search?q=${keyword}`,
	// 	{
	// 		method: 'GET',
	// 	},
	// );
	const anime = await response.json();

	return (
		<>
			<section>
				<Header title={`Pencarian: ${keyword}`} />
				<AnimeList api={anime} />
			</section>
		</>
	);
}
