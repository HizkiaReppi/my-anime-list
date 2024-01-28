import AnimeList from '@/components/AnimeList';
import Header from '@/components/Header';

export default async function Search({ params }) {
	const { keyword } = params;
	const decodedKeyword = decodeURI(keyword);
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`,
	);

	const anime = await response.json();

	return (
		<>
			<section>
				<Header title={`Pencarian: ${decodedKeyword}`} />
				<AnimeList api={anime} />
			</section>
		</>
	);
}
