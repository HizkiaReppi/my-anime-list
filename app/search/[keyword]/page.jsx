import AnimeList from '@/components/AnimeList';
import Header from '@/components/Header';
import { getData } from '@/libs/api';

export default async function Search({ params }) {
	const { keyword } = params;
	const decodedKeyword = decodeURIComponent(keyword).replace(/-/g, ' ');

	const anime = await getData('/anime', {
		params: {
			q: decodedKeyword,
		},
	});

	return (
		<>
			<section>
				<Header title={`Pencarian: ${decodedKeyword}`} />
				<AnimeList api={anime} />
			</section>
		</>
	);
}
