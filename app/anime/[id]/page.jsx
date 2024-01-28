import Image from 'next/image';
import Rating from '@/components/Rating';
import Detail from '@/components/DetailAnime';
import Popular from '@/components/Utilities/Popular';
import Ranking from '@/components/Utilities/Ranking';
import MembersAnime from '@/components/Utilities/MembersAnime';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import { getData } from '@/libs/api';

export default async function DetailAnime({ params: { id } }) {
	const anime = await getData(`/anime/${id}`);

	const details = [
		{
			label: 'Genres',
			value: anime.data?.genres?.map(genre => genre.name).join(', '),
		},
		{
			label: 'Type',
			value: anime.data?.type,
		},
		{
			label: 'Source',
			value: anime.data?.source,
		},
		{
			label: 'Status',
			value: anime.data?.status,
		},
		{
			label: 'Duration',
			value: anime.data?.duration,
		},
		{
			label: 'Rating',
			value: anime.data?.rating,
		},
		{
			label: 'Season',
			value: anime.data?.season,
		},
		{
			label: 'Airing Start',
			value: anime.data?.aired?.string,
		},
		{
			label: 'Producers',
			value: anime.data?.producers?.map(producer => producer.name).join(', '),
		},
		{
			label: 'Licensors',
			value: anime.data?.licensors?.map(licensor => licensor.name).join(', '),
		},
		{
			label: 'Studios',
			value: anime.data?.studios?.map(studio => studio.name).join(', '),
		},
		{
			label: 'Broadcast',
			value: anime.data?.broadcast?.string,
		},
	];

	return (
		<>
			{anime.data?.trailer?.youtube_id && (
				<>
					<div className='px-4 py-2 h-full w-full'>
						<VideoPlayer youtubeId={anime.data?.trailer?.youtube_id} />
					</div>
				</>
			)}
			<div className='px-4 py-2'>
				<h2 className='text-2xl font-semibold'>
					{`${anime.data?.title} ${
						anime.data?.aired?.prop?.from?.year
							? `(${anime.data?.aired?.prop?.from?.year})`
							: ''
					}`}
				</h2>
			</div>
			<div className='px-4 flex items-center gap-3 text-2xl overflow-x-auto'>
				<Ranking ranking={anime.data?.rank} />
				<span className='font-medium text-sm'>|</span>
				<Popular popularity={anime.data?.popularity} />
				<span className='font-medium text-sm'>|</span>
				<Rating
					score={anime.data?.score}
					scoredBy={anime.data?.scored_by}
				/>
				<span className='font-medium text-sm'>|</span>
				<MembersAnime members={anime.data?.members} />
				<span className='font-medium text-sm'>|</span>
				<p className='font-semibold text-xs md:text-sm text-center'>
					{anime.data?.episodes} Episode
				</p>
			</div>
			<div className='px-4 py-5 flex justify-center items-center md:items-start flex-col md:flex-row gap-4'>
				<Image
					src={anime.data?.images?.webp?.image_url}
					alt={anime.data?.title}
					width={250}
					height={250}
					className='max-w-96 md:max-w-72 max-h-96 md:max-h-80 md:w-1/3 lg:w-1/5 rounded object-cover'
				/>
				<Detail details={details} />
			</div>
			<div className='px-4 py-5 flex flex-col gap-4'>
				<h3 className='font-semibold text-2xl'>Sinopsis</h3>
				<hr className='border-2 border-slate-900 dark:border-slate-700 mb-2' />
				<p className='text-base md:text-lg text-justify leading-relaxed'>
					{anime.data?.synopsis}
				</p>
			</div>
			{anime.data?.background && (
				<div className='px-4 py-5 flex flex-col gap-4'>
					<h3 className='font-semibold text-2xl'>Background</h3>
					<hr className='border-2 border-slate-900 dark:border-slate-700 mb-2' />
					<p className='text-base md:text-lg text-justify leading-relaxed'>
						{anime.data?.background}
					</p>
				</div>
			)}
		</>
	);
}
